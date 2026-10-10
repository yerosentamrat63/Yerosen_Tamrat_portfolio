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

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 8);
      const sections = document.querySelectorAll("section[id]");
      let cur = "";
      sections.forEach(s => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 200) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const linkClass = (href: string) =>
    `font-mono text-[11px] font-medium tracking-[0.1em] no-underline transition-colors duration-200 ${
      active === href.slice(1) ? "text-accent" : "text-[#4a5e7a] hover:text-accent"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] animate-fade-in border-b transition-[background-color,border-color,backdrop-filter] duration-500 ease-in-out ${scrolled ? "border-[rgba(154,212,214,0.1)] bg-[rgba(2,3,8,0.28)] md:border-[rgba(154,212,214,0.08)] md:bg-[rgba(2,3,8,0.94)]" : "border-[rgba(154,212,214,0.08)] bg-[rgba(2,3,8,0.94)]"}`}
      style={{
        backdropFilter: scrolled ? "blur(48px) saturate(1.4)" : "blur(24px)",
        WebkitBackdropFilter: scrolled ? "blur(48px) saturate(1.4)" : "blur(24px)",
      }}
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
