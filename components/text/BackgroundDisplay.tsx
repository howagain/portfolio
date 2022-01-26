import { useLayoutEffect, useRef, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

type Props = {};

const BackgroundDisplay = (props: Props) => {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 100], [-100, 0], {
    clamp: false,
  });

  useLayoutEffect(() => {
    if (!ref || !ref.current) return;
    const element = ref.current as HTMLElement;
    setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <div
      ref={ref}
      className="min-h-screen flex justify-center items-center bg-slate-200"
    >
      <motion.h2
        className="w-36 h-36 bg-white rounded flex justify-center items-center"
        style={{ x: y }}
      >
        About Me
      </motion.h2>
    </div>
  );
};

export default BackgroundDisplay;
