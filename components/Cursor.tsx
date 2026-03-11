"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const curRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouchDevice =
      window.matchMedia("(hover: none), (pointer: coarse)").matches ||
      "ontouchstart" in window;

    if (isTouchDevice) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener("mousemove", onMove);

    let raf: number;
    const tick = () => {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      if (curRef.current) {
        curRef.current.style.left = mx + "px";
        curRef.current.style.top  = my + "px";
      }
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top  = ry + "px";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const grow = () => {
      if (curRef.current) {
        curRef.current.style.width = "18px";
        curRef.current.style.height = "18px";
      }
      if (ringRef.current) {
        ringRef.current.style.width = "52px";
        ringRef.current.style.height = "52px";
      }
    };
    const shrink = () => {
      if (curRef.current) {
        curRef.current.style.width = "10px";
        curRef.current.style.height = "10px";
      }
      if (ringRef.current) {
        ringRef.current.style.width = "36px";
        ringRef.current.style.height = "36px";
      }
    };
    const interactiveEls = document.querySelectorAll("a,button");
    interactiveEls.forEach(el => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      interactiveEls.forEach(el => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={curRef}
        className="fixed w-[10px] h-[10px] rounded-full bg-accent pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200"
        style={{ mixBlendMode: "screen" }}
      />
      <div
        ref={ringRef}
        className="fixed w-[36px] h-[36px] rounded-full border border-[rgba(154,212,214,0.3)] pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-300"
      />
    </>
  );
}
