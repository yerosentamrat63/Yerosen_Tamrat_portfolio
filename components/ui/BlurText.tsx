"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type BlurTextProps = {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom" | "left" | "right";
  className?: string;
  onAnimationComplete?: () => void;
};

const directionOffset = {
  top: { x: 0, y: 14 },
  bottom: { x: 0, y: -14 },
  left: { x: 14, y: 0 },
  right: { x: -14, y: 0 },
};

export default function BlurText({
  text,
  delay = 0,
  animateBy = "words",
  direction = "top",
  className = "",
  onAnimationComplete,
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reduceMotion = useReducedMotion();
  const offset = directionOffset[direction];
  const segments = animateBy === "words" ? text.split(/(\s+)/) : Array.from(text);
  let segmentIndex = 0;
  const visibleSegments = segments.map((segment, index) => {
    if (!segment || /^\s+$/.test(segment)) return segment;

    const currentIndex = segmentIndex++;
    const isLast = index === segments.length - 1;
    return (
      <motion.span
        key={`segment-${index}`}
        initial={reduceMotion ? false : { opacity: 0, filter: "blur(8px)", ...offset }}
        animate={inView || reduceMotion ? { opacity: 1, filter: "blur(0px)", x: 0, y: 0 } : { opacity: 0, filter: "blur(8px)", ...offset }}
        transition={{
          duration: reduceMotion ? 0 : 0.38,
          delay: reduceMotion ? 0 : delay / 1000 + currentIndex * (animateBy === "words" ? 0.022 : 0.012),
          ease: "easeOut",
        }}
        onAnimationComplete={isLast ? onAnimationComplete : undefined}
        className={animateBy === "words" ? "inline-block whitespace-nowrap" : "inline-block"}
        aria-hidden="true"
      >
        {segment}
      </motion.span>
    );
  });

  return (
    <span ref={ref} className={`inline ${className}`} aria-label={text}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{visibleSegments}</span>
    </span>
  );
}
