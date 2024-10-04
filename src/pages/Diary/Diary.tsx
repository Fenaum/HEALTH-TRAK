import { m, animationProps } from "../../utils/animation";
import MealLogForm from "../../components/UI/MealLogForm/MealLogForm";
import FoodLogs from "../../components/UI/FoodLogs/foodLogs"
import { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Import your Firebase config
import "./Diary.css"

const getFoodLogs = async () => {
  try {
    const foodLogsCollectionRef = collection(db, "foodLogs");
    const querySnapshot = await getDocs(foodLogsCollectionRef);

    const foodLogs = [];
    querySnapshot.forEach((doc) => {
      foodLogs.push({
        id: doc.id, // Include the document ID
        ...doc.data(), // Spread the document data
      });
    });

    return foodLogs;
  } catch (error) {
    console.error("Error getting food logs: ", error);
    // Handle the error appropriately (e.g., show an error message)
  }
};

// Example usage:
getFoodLogs().then((logs) => {
  console.log("Food logs:", logs);
  // Now you have the foodLogs array to use in your component
});

export default function Diary() {
  const [foodLogs, setFoodLogs] = useState('')

  return (
    <m.main
      className="flex flex-col items-center justify-center"
      {...animationProps.diary}
    >
      <div>
        <button>
          <span>&lt;</span>
        </button>
        <button>Today</button>
        <button>
          <span>&gt;</span>
        </button>
      </div>
      <div>
        <section>
          <h2>Remaining Calories</h2>
          <h3></h3>
        </section>
        <section>
          <h2>Today's Progress</h2>
          <h3></h3>
        </section>
        <section>
          <h2>Today's Notes</h2>
        </section>
      </div>
      <div className="foodLog">
        <section className="">
          <h2>Breakfast</h2>
          <FoodLogs />
          {/* <MealLogForm /> */}
        </section>
        <section>
          <h2>Lunch</h2>
        </section>
        <section>
          <h2>Dinner</h2>
        </section>
        <section>
          <h2>Snacks</h2>
        </section>
        <section>
          <h2>Water</h2>
        </section>
      </div>
    </m.main>
  );
}
