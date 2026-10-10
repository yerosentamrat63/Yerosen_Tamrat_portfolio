"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

const cursorSpring = {
  damping: 25,
  stiffness: 250,
  mass: 1,
  restSpeed: 0.01,
  restDelta: 0.01,
};

type CursorVariant = "default" | "heading" | "button" | "view";

const cursorVariants = {
  default: { scale: 0.22 },
  heading: { scale: 1 },
  button: { scale: 0.15 },
  view: { scale: 1 },
};

function getCursorState(target: EventTarget | null): CursorVariant {
  if (!(target instanceof Element)) return "default";

  if (target.closest("a, button, [role='button'], input, select, textarea")) {
    return "button";
  }

  if (target.closest("[data-cursor='view']")) {
    return "view";
  }

  if (target.closest("h1, h2, h3, [data-cursor='text']")) {
    return "heading";
  }

  return "default";
}

export interface CustomCursorProps {
  className?: string;
}

export function CustomCursor({ className = "" }: CustomCursorProps) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const x = useSpring(cursorX, cursorSpring);
  const y = useSpring(cursorY, cursorSpring);
  const [enabled, setEnabled] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [variant, setVariant] = React.useState<CursorVariant>("default");

  React.useEffect(() => {
    const coarsePointer = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (coarsePointer || "ontouchstart" in window) return;

    setEnabled(true);

    const onMove = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setVisible(true);

      const next = getCursorState(event.target);
      setVariant((current) => current === next ? current : next);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[10000] flex h-16 w-16 items-center justify-center rounded-full bg-accent font-mono text-[9px] font-bold tracking-[0.08em] text-bg mix-blend-difference ${className}`}
      variants={cursorVariants}
      animate={visible ? variant : { scale: 0, opacity: 0 }}
      initial="default"
      transition={{ type: "spring", ...cursorSpring }}
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
    </motion.div>
  );
}
