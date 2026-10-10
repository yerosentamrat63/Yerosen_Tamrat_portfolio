"use client";

import { Fragment, useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Easing,
} from "framer-motion";

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

const easings: Record<NonNullable<SplitTextProps["ease"]>, Easing> = {
  "power3.out": [0.215, 0.61, 0.355, 1],
  linear: "linear",
};

export default function SplitText({
  text,
  className = "",
  delay = 0,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "0px",
  textAlign = "left",
  onLetterAnimationComplete,
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold, margin: rootMargin });
  const reduceMotion = useReducedMotion();
  const lines = text.split("\n");
  let segmentIndex = 0;
  const segmentDelay = delay / 1000;

  const animateSegment = (content: string, key: string, index: number, isLast: boolean) => (
    <motion.span
      key={key}
      initial={reduceMotion ? to : from}
      animate={inView || reduceMotion ? to : from}
      transition={{
        duration: reduceMotion ? 0 : duration,
        delay: reduceMotion ? 0 : segmentDelay + index * (splitType === "chars" ? 0.018 : 0.055),
        ease: easings[ease],
      }}
      onAnimationComplete={isLast ? onLetterAnimationComplete : undefined}
      className="inline-block"
      aria-hidden="true"
    >
      {content}
    </motion.span>
  );

  return (
    <span
      ref={ref}
      className={className || "block"}
      style={{ textAlign, whiteSpace: "pre-line" }}
      aria-label={text.replace(/\n/g, " ")}
    >
      <span className="sr-only">{text.replace(/\n/g, " ")}</span>
      <span aria-hidden="true">
        {lines.map((line, lineIndex) => {
          const parts = splitType === "chars" ? line.split(/(\s+)/) : [line];
          const renderedLine = parts.map((part, partIndex) => {
            if (!part || /^\s+$/.test(part)) return part;

            if (splitType === "chars") {
              const chars = Array.from(part);
              return (
                <span key={`${lineIndex}-${partIndex}`} className="inline-block whitespace-nowrap">
                  {chars.map((char, charIndex) => {
                    const globalIndex = segmentIndex++;
                    return animateSegment(
                      char,
                      `${lineIndex}-${partIndex}-${charIndex}`,
                      globalIndex,
                      lineIndex === lines.length - 1 && partIndex === parts.length - 1 && charIndex === chars.length - 1,
                    );
                  })}
                </span>
              );
            }

            const index = segmentIndex++;
            return animateSegment(
              part,
              `${lineIndex}-${partIndex}`,
              index,
              lineIndex === lines.length - 1 && partIndex === parts.length - 1,
            );
          });

          return (
            <Fragment key={`line-${lineIndex}`}>
              {renderedLine}
              {lineIndex < lines.length - 1 && <br />}
            </Fragment>
          );
        })}
      </span>
    </span>
  );
}
