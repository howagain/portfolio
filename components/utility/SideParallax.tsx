import { ReactChild, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import clsx from "clsx";

type Props = {
  children: ReactChild;
  className?: string;
};

const BackgroundDisplay = ({ children, className = "" }: Props) => {
  const classes = clsx(className);
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
    <div ref={ref} className="">
      <motion.div className={classes} style={{ x: y }}>
        {children}
      </motion.div>
    </div>
  );
};

export default BackgroundDisplay;
