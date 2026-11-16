"use client";

import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: "power3.out" | "linear";
  splitType?: "chars" | "words" | "lines";
  from?: { opacity?: number; y?: number };
  to?: { opacity?: number; y?: number };
  threshold?: number;
  rootMargin?: `${number}px`;
  textAlign?: "left" | "center" | "right";
  onLetterAnimationComplete?: () => void;
};

const easings: Record<NonNullable<SplitTextProps["ease"]>, string> = {
  "power3.out": "cubic-bezier(0.215, 0.61, 0.355, 1)",
  linear: "linear",
};

export default function SplitText({
  text,
  className = "",
  delay = 0,
  ease = "power3.out",
  threshold = 0.1,
  rootMargin = "0px",
  textAlign = "left",
  onLetterAnimationComplete,
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold, margin: rootMargin });
  const reduceMotion = useReducedMotion();
  const shown = inView || reduceMotion;

  return (
    <span
      ref={ref}
      className={className || "block"}
      style={{
        textAlign,
        whiteSpace: "pre-line",
        maxWidth: "100%",
      }}
      aria-label={text.replace(/\n/g, " ")}
    >
      <span className="sr-only">{text.replace(/\n/g, " ")}</span>
      <span
        aria-hidden="true"
        data-state={shown ? "in" : "pending"}
        className="blur-reveal inline-block max-w-full"
        style={{ animationDelay: `${delay}ms`, animationTimingFunction: easings[ease] }}
        onAnimationEnd={shown ? onLetterAnimationComplete : undefined}
      >
        {text}
      </span>
    </span>
  );
}
