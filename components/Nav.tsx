"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#about",     label: "ABOUT"     },
  { href: "#skills",    label: "SKILLS"    },
  { href: "#projects",  label: "PROJECTS"  },
  { href: "#education", label: "EDUCATION" },
  { href: "#contact",   label: "CONTACT"   },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
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

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkClass = (href: string) =>
    `font-mono text-[11px] font-medium tracking-[0.1em] no-underline transition-colors duration-200 ${
      active === href.slice(1) ? "text-accent" : "text-[#4a5e7a] hover:text-accent"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] border-b border-[rgba(154,212,214,0.08)] bg-[rgba(2,3,8,0.94)] backdrop-blur-xl animate-fade-in">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-4 sm:px-6 lg:px-12">
        <div className="font-mono text-[12px] font-medium tracking-[0.04em] sm:text-[13px]">
          <span className="text-accent">Y</span>erosen Tamrat
        </div>

        <button
          type="button"
          onClick={() => setOpen(prev => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center border border-[rgba(154,212,214,0.18)] text-accent md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? "X" : "="}
        </button>

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

      <ul
        className={`overflow-hidden border-t border-[rgba(154,212,214,0.08)] px-4 pb-3 pt-2 transition-all duration-200 sm:px-6 md:hidden ${
          open ? "max-h-[320px] opacity-100" : "max-h-0 border-t-0 p-0 opacity-0"
        }`}
      >
        {links.map(l => (
          <li key={l.href} className="py-2">
            <a
              href={l.href}
              onClick={() => setOpen(false)}
              className={linkClass(l.href)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
