import { ReactChild, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";

type Props = {
  children: ReactChild;
};

const BackgroundDisplay = ({ children: text }: Props) => {
  const [elementRight, setElementRight] = useState(0);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop - clientHeight / 2;

  const yRange = useTransform(scrollY, [initial, final], [-elementRight, 0], {
    clamp: true,
  });
  const y = useSpring(yRange, { stiffness: 300, damping: 120, mass: 3 });

  useLayoutEffect(() => {
    if (!ref || !ref.current) return;
    const element = ref.current as HTMLElement;
    setElementTop(element.offsetTop);
    setElementRight(element.getBoundingClientRect().right);
    setClientHeight(window.innerHeight);
  }, [ref]);

  return (
    <span ref={ref} className="">
      <motion.h2
        className="text-gray-400 text-6xl whitespace-nowrap font-bold my-0 text-center"
        style={{ x: y }}
      >
        {text}
      </motion.h2>
    </span>
  );
};

export default BackgroundDisplay;
