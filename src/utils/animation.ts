import { motion as m } from "framer-motion";

const animationProps = {
  dashboard: {
    initial: { x: "100%" },
    animate: { x: "0%" },
    transition: { duration: 0.75, ease: "easeOut" },
    exit: { opacity: 1 },
  },
  diary: {
    initial: { x: "-100%" },
    animate: { x: "0%" },
    transition: { duration: 0.75, ease: "easeOut" },
    exit: { opacity: 1 },
  },
};

export { m, animationProps };
