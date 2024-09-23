const seedData = {
  users: [
    {
      id: "user123",
      email: "john@example.com",
      password: "password123",
      name: "John Doe",
      age: 30,
      gender: "male",
      height: 175,
      weight: 70,
      goal: "lose_weight",
    },
    // Add more users...
  ],
  meals: [
    {
      id: "meal456",
      name: "Grilled Chicken Breast",
      calories: 350,
      protein: 40,
      carbs: 10,
      fat: 10,
    },
    // Add more meals...
  ],
  mealLogs: [
    {
      id: "log789",
      userId: "user123",
      date: "2023-03-01",
      notes: "First day of tracking!",
      totalCalories: 2000,
      meals: ["meal456", "meal456"],
    },
    // Add more logs...
  ],
  goalCollection: [
    {
      id: "goal123",
      userId: "user123",
      goalType: "weight_loss",
      targetWeight: 160,
      startDate: "2023-03-01",
      endDate: "2023-06-30",
      progress: {
        currentWeight: 170,
        weightLoss: 10,
      },
    },
    // Add more goals...
  ],
  nutrients: [
    {
      id: "nutrient456",
      userId: "user123",
      date: "2023-03-02",
      calories: 2000,
      protein: 120,
      carbs: 250,
      fat: 70,
      fiber: 30,
    },
    // Add more nutrient entries...
  ],
  waterIntake: [
    {
      id: "water789",
      userId: "user123",
      date: "2023-03-02",
      totalOunces: 64,
      goalOunces: 80,
    },
    // Add more water intake entries...
  ],
  foodRecipe: [
    {
      id: "recipe101112",
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
    // Add more recipes...
  ],
};
