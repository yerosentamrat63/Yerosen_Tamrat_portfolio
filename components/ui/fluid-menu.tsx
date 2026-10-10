"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2,
  FolderKanban,
  GraduationCap,
  House,
  Mail,
  UserRound,
  X,
  Menu as MenuIcon,
} from "lucide-react";

const items = [
  { href: "#hero", label: "Home", Icon: House },
  { href: "#about", label: "About", Icon: UserRound },
  { href: "#skills", label: "Skills", Icon: Code2 },
  { href: "#projects", label: "Projects", Icon: FolderKanban },
  { href: "#education", label: "Education", Icon: GraduationCap },
  { href: "#contact", label: "Contact", Icon: Mail },
];

export default function FluidMenu({ active }: { active: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setIsExpanded(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsExpanded(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative h-[52px] w-[52px]" data-expanded={isExpanded}>
      {items.map(({ href, label, Icon }, index) => (
        <a
          key={href}
          href={href}
          aria-label={label}
          aria-current={active === href.slice(1) ? "location" : undefined}
          tabIndex={isExpanded ? 0 : -1}
          onClick={() => setIsExpanded(false)}
          className={`absolute right-0 top-0 z-40 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[rgba(154,212,214,0.2)] bg-[#101421] text-accent shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-[transform,opacity,background-color,color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[rgba(154,212,214,0.14)] hover:text-[#f2fdff] ${active === href.slice(1) ? "ring-1 ring-accent/60" : ""}`}
          style={{
            transform: `translateY(${isExpanded ? (index + 1) * 44 : 0}px) scale(${isExpanded ? 1 : 0.88})`,
            opacity: isExpanded ? 1 : 0,
            pointerEvents: isExpanded ? "auto" : "none",
            transitionDelay: isExpanded ? `${index * 24}ms` : `${(items.length - index - 1) * 18}ms`,
          }}
        >
          <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
        </a>
      ))}

      <button
        type="button"
        onClick={() => setIsExpanded((expanded) => !expanded)}
        className="relative z-50 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[rgba(154,212,214,0.28)] bg-[#101421] text-accent shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-colors hover:bg-[rgba(154,212,214,0.12)]"
        aria-label={isExpanded ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isExpanded}
      >
        <span className={`absolute transition-all duration-300 ${isExpanded ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}>
          <MenuIcon size={22} strokeWidth={1.7} aria-hidden="true" />
        </span>
        <span className={`absolute transition-all duration-300 ${isExpanded ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}>
          <X size={22} strokeWidth={1.7} aria-hidden="true" />
        </span>
      </button>
    </div>
  );
}
