"use client";

import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type BlurTextProps = {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom" | "left" | "right";
  className?: string;
  onAnimationComplete?: () => void;
};

export default function BlurText({
  text,
  delay = 0,
  className = "",
  onAnimationComplete,
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduceMotion = useReducedMotion();
  const shown = inView || reduceMotion;

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span className="sr-only">{text}</span>
      <span
        aria-hidden="true"
        data-state={shown ? "in" : "pending"}
        className="blur-reveal inline-block max-w-full"
        style={{ animationDelay: `${delay}ms` }}
        onAnimationEnd={shown ? onAnimationComplete : undefined}
      >
        {text}
      </span>
    </span>
  );
}
