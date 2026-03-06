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

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center px-14 py-5 border-b border-[rgba(154,212,214,0.08)] bg-[rgba(2,3,8,0.94)] backdrop-blur-xl animate-fade-in">
      <div className="font-mono text-[13px] font-medium tracking-[0.04em]">
        <span className="text-accent">Y</span>erosen Tamrat
      </div>
      <ul className="flex gap-9 list-none">
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className={`font-mono text-[11px] font-medium tracking-[0.1em] no-underline transition-colors duration-200 ${active === l.href.slice(1) ? "text-accent" : "text-[#4a5e7a] hover:text-accent"}`}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
