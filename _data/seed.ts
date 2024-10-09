const seedData = {
  users: [
    {
      email: "john@example.com",
      password: "password123",
      name: "John Doe",
      age: 30,
      gender: "male",
      height: 175,
      weight: 70,
      goal: "lose_weight",
    },
    {
      email: "jane@example.com",
      password: "password456",
      name: "Jane Smith",
      age: 25,
      gender: "female",
      height: 162,
      weight: 55,
      goal: "gain_muscle",
    },
    {
      email: "bob@example.com",
      password: "password789",
      name: "Bob Johnson",
      age: 40,
      gender: "male",
      height: 180,
      weight: 90,
      goal: "maintain_weight",
    },
  ],
  meals: [
    {
      name: "Grilled Chicken Breast",
      calories: 350,
      protein: 40,
      carbs: 10,
      fat: 10,
    },
    {
      name: "Salmon with Roasted Vegetables",
      calories: 500,
      protein: 35,
      carbs: 40,
      fat: 25,
    },
    {
      name: "Greek Yogurt with Berries",
      calories: 250,
      protein: 20,
      carbs: 30,
      fat: 5,
    },
    {
      name: "Protein Smoothie",
      calories: 300,
      protein: 30,
      carbs: 40,
      fat: 10,
    },
  ],
  mealLogs: [
    {
      date: "2023-03-01",
      notes: "First day of tracking!",
      totalCalories: 2000,
      meals: ["meal456", "meal456"],
    },
    {
      date: "2023-03-02",
      notes: "Feeling good!",
      totalCalories: 1800,
      meals: ["meal456", "meal457", "meal458"],
    },
    {
      date: "2023-03-03",
      notes: "Cheat day!",
      totalCalories: 2500,
      meals: ["meal456", "meal459", "meal459"],
    },
  ],
  goalCollection: [
    {
      goalType: "weight_loss",
      targetWeight: 160,
      startDate: "2023-03-01",
      endDate: "2023-06-30",
      progress: {
        currentWeight: 170,
        weightLoss: 10,
      },
    },
    {
      goalType: "gain_muscle",
      targetWeight: 60,
      startDate: "2023-03-05",
      endDate: "2023-06-04",
      progress: {
        currentWeight: 56,
        weightLoss: -2,
      },
    },
  ],
  nutrients: [
    {
      date: "2023-03-02",
      calories: 2000,
      protein: 120,
      carbs: 250,
      fat: 70,
      fiber: 30,
    },
    {
      date: "2023-03-03",
      calories: 2200,
      protein: 130,
      carbs: 280,
      fat: 80,
      fiber: 35,
    },
  ],
  waterIntake: [
    {
      date: "2023-03-02",
      totalOunces: 64,
      goalOunces: 80,
    },
    {
      date: "2023-03-03",
      totalOunces: 90,
      goalOunces: 80,
    },
  ],
  foodRecipe: [
    {
      name: "Healthy Stir Fry",
      ingredients: ["chicken", "vegetables", "rice"],
      instructions: [
        "Cook rice according to package directions.",
        "Heat oil in pan and sauté vegetables.",
        "Add chicken and stir fry until cooked.",
      ],
      servingSize: 4,
      prepTime: 20,
      cookTime: 25,
      calories: 350,
      protein: 40,
      carbs: 10,
      fat: 10,
    },
    {
      name: "Overnight Oats",
      ingredients: ["oats", "milk", "yogurt", "chia seeds", "berries"],
      instructions: [
        "Combine oats, milk, yogurt, and chia seeds in a jar.",
        "Mix well and refrigerate overnight.",
        "Top with berries before serving.",
      ],
      servingSize: 1,
      prepTime: 5,
      cookTime: 0,
      calories: 300,
      protein: 15,
      carbs: 50,
      fat: 5,
    },
  ],
};

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from '../src/firebase/firebaseConfig'

async function seedDatabase() {
  try {
    for (const user of seedData.users) {
      // Check if user already exists
      const userQuery = query(
        collection(db, "users"),
        where("email", "==", user.email)
      );
      const userSnapshot = await getDocs(userQuery);

      let userId;
      if (userSnapshot.empty) {
        // User doesn't exist, create it
        const userRef = await addDoc(collection(db, "users"), user);
        userId = userRef.id;
      } else {
        // User exists, get the ID
        userId = userSnapshot.docs[0].id;
      }

      // Seed meals and get their IDs
      const mealPromises = seedData.meals.map((meal) =>
        addDoc(collection(db, "meals"), meal)
      );
      const mealRefs = await Promise.all(mealPromises);
      const mealIds = mealRefs.map((ref) => ref.id);

      // Seed food recipes
      await Promise.all(
        seedData.foodRecipe.map((recipe) =>
          addDoc(collection(db, "foodRecipe"), recipe)
        )
      );

      // Seed dependent data for each user
      for (const mealLogData of seedData.mealLogs) {
        const mealLog = {
          ...mealLogData,
          userId: userId,
          meals: [mealIds[0], mealIds[1]], // Use actual meal IDs
        };
        await addDoc(collection(db, "mealLogs"), mealLog);
      }

      const goal = { ...seedData.goalCollection[0], userId: userId };
      await addDoc(collection(db, "goalCollection"), goal);

      const nutrientEntry = { ...seedData.nutrients[0], userId: userId };
      await addDoc(collection(db, "nutrients"), nutrientEntry);

      const waterEntry = { ...seedData.waterIntake[0], userId: userId };
      await addDoc(collection(db, "waterIntake"), waterEntry);
    }

    console.log("Seed data added successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

seedDatabase();