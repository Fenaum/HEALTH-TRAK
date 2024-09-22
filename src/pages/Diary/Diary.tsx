import { m, animationProps } from "../../utils/animation";

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
          <h2>Breakfast</h2>
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
      <div>
        <section>
          <h2>Today's Progress</h2>
        </section>
        <section>
          <h2>Today's Notes</h2>
        </section>
      </div>
    </m.main>
  );
}
