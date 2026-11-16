"use client";
import { useEffect, useState } from "react";
import FluidMenu from "@/components/ui/fluid-menu";

const links = [
  { href: "#about",     label: "ABOUT"     },
  { href: "#skills",    label: "SKILLS"    },
  { href: "#projects",  label: "PROJECTS"  },
  { href: "#education", label: "EDUCATION" },
  { href: "#contact",   label: "CONTACT"   },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [allowBlur, setAllowBlur] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (hover: hover) and (pointer: fine)");
    const update = () => setAllowBlur(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    let frame = 0;
    let scrolledState = false;
    let activeState = "";

    const update = () => {
      frame = 0;
      const y = window.scrollY;

      const nextScrolled = y > 8;
      if (nextScrolled !== scrolledState) {
        scrolledState = nextScrolled;
        setScrolled(nextScrolled);
      }

      let current = "";
      for (const section of sections) {
        if (y >= section.offsetTop - 200) current = section.id;
      }
      if (current !== activeState) {
        activeState = current;
        setActive(current);
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const linkClass = (href: string) =>
    `font-mono text-[11px] font-medium tracking-[0.1em] no-underline transition-colors duration-200 ${
      active === href.slice(1) ? "text-accent" : "text-[#4a5e7a] hover:text-accent"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] animate-fade-in border-b transition-colors duration-300 ease-in-out ${scrolled ? "border-[rgba(154,212,214,0.1)] bg-[rgba(2,3,8,0.94)] md:bg-[rgba(2,3,8,0.55)]" : "border-[rgba(154,212,214,0.08)] bg-[rgba(2,3,8,0.94)]"}`}
      style={allowBlur ? {
        backdropFilter: scrolled ? "blur(18px) saturate(1.4)" : "blur(12px)",
        WebkitBackdropFilter: scrolled ? "blur(18px) saturate(1.4)" : "blur(12px)",
      } : undefined}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-4 sm:px-6 lg:px-12">
        <a href="#hero" className="font-mono text-[12px] font-medium tracking-[0.04em] text-[#f2fdff] no-underline sm:text-[13px]">
          <span className="text-accent">Y</span>erosen Tamrat
        </a>

        <div className="md:hidden">
          <FluidMenu active={active} />
        </div>

        <ul className="hidden list-none gap-6 lg:gap-9 md:flex">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className={linkClass(l.href)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
}
