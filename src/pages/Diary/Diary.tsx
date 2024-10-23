import { m, animationProps } from "../../utils/animation";
import MealLogForm from "../../components/UI/MealLogForm/MealLogForm";
import FoodLogs from "../../components/UI/FoodLogs/FoodLogs"
import { getFoodLogs } from "../../utils/CRUD";
import { useState, useEffect } from 'react'
import "./Diary.css"


export default function Diary() {
  const [foodLogs, setFoodLogs] = useState([])

  // useEffect(() => {
  //   const logs = getFoodLogs().then((data) => data).catch((err) => {throw err})
  //   return logs;
  // } , [])
  
   useEffect(() => {
     let isMounted = true;

     const fetchFoodLogs = async () => {
       try {
         const logs = await getFoodLogs();
         if (isMounted) {
           setFoodLogs(logs);
         }
       } catch (error) {
         if (isMounted) {
           console.error("Failed to fetch food logs:", error);
           // Handle the error appropriately (e.g., show an error message to the user)
         }
       }
     };

     fetchFoodLogs();

     return () => {
       isMounted = false;
     };
   }, []);

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
          <div className="hidden">
            <MealLogForm />

          </div>
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
