import { m, animationProps } from "../../utils/animation";
import MealLogForm from "../../components/UI/MealLogForm/MealLogForm";
import "./Diary.css"

export default function Diary() {
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
          <MealLogForm />
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
