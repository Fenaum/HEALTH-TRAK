import { m, animationProps } from "../../utils/animation";

export default function Dashboard() {
    return (
    <m.main
      className="flex flex-col items-center justify-center"
      {...animationProps.dashboard}
    >
      <div>
        Hello world
      </div>
    </m.main>
  )
}