"use client";
import { useState } from "react";

type Cat = "all" | "lang" | "web" | "tools" | "core";

const skills: { name: string; cat: Exclude<Cat,"all">; sub: string }[] = [
  { name: "HTML",               cat: "lang",  sub: "Language"   },
  { name: "CSS",                cat: "lang",  sub: "Language"   },
  { name: "JavaScript",         cat: "lang",  sub: "Language"   },
  { name: "Python",             cat: "lang",  sub: "Language"   },
  { name: "C++",                cat: "lang",  sub: "Language"   },
  { name: "Java",               cat: "lang",  sub: "Language"   },
  { name: "SQL",                cat: "lang",  sub: "Language"   },
  { name: "Responsive Design",  cat: "web",   sub: "Web"        },
  { name: "CSS Layouts",        cat: "web",   sub: "Web"        },
  { name: "DOM Manipulation",   cat: "web",   sub: "Web"        },
  { name: "Figma",              cat: "web",   sub: "UI / Design"},
  { name: "Adobe Illustrator",  cat: "tools", sub: "UI / Design"},
  { name: "Git & GitHub",       cat: "tools", sub: "Tools"      },
  { name: "Linux",              cat: "tools", sub: "Tools"      },
  { name: "VS Code",            cat: "tools", sub: "Tools"      },
  { name: "DSA / Algorithms",   cat: "core", sub: "Core Area"  },
  { name: "Problem Solving",    cat: "core", sub: "Core Area"  },
  { name: "Team Collaboration", cat: "core", sub: "Core Area"  },
];

const tabs: { label: string; value: Cat }[] = [
  { label: "ALL",       value: "all"   },
  { label: "LANGUAGES", value: "lang"  },
  { label: "WEB",       value: "web"   },
  { label: "TOOLS",     value: "tools" },
  { label: "CORE",      value: "core"  },
];

export default function Skills() {
  const [active, setActive] = useState<Cat>("all");
  const visible = skills.filter(s => active === "all" || s.cat === active);

  return (
    <section id="skills" className="relative border-t border-[rgba(154,212,214,0.08)] px-4 py-20 sm:px-6 md:py-[120px] lg:px-14">
      <div className="grid-bg" />

      {/* header */}
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6 animate-fade-up sm:mb-[52px] sm:gap-7">
        <div>
          <p className="sc mb-2 font-mono text-[10px] tracking-[0.11em] text-[#4a5e7a] sm:mb-3 sm:text-[11px] sm:tracking-[0.12em]">TECHNICAL ARSENAL</p>
          <h2 className="font-sans text-[clamp(30px,4vw,52px)] font-extrabold tracking-[-0.02em] text-[#f2fdff] leading-[1.1]">Skills &amp; Tools</h2>
        </div>
        <div className="flex flex-wrap border border-[rgba(154,212,214,0.08)]">
          {tabs.map(t => (
            <button
              key={t.value}
              onClick={() => setActive(t.value)}
              className={`border-r border-t border-[rgba(154,212,214,0.08)] px-4 py-[9px] font-mono text-[9px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 first:border-t-0 last:border-r-0 sm:border-t-0 sm:px-[18px] sm:py-[10px] sm:text-[10px] sm:tracking-[0.1em] ${active === t.value ? "bg-accent text-bg2" : "bg-transparent text-[#4a5e7a] hover:bg-bg4 hover:text-[#f2fdff]"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* grid */}
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(145px, 1fr))" }}>
        {visible.map((s, i) => (
          <div
            key={s.name + i}
            className="flex flex-col gap-2 border border-[rgba(154,212,214,0.08)] bg-bg2 px-4 py-5 transition-all duration-250 hover:-translate-y-[5px] hover:border-accent hover:bg-[rgba(154,212,214,0.06)] hover:shadow-[0_8px_24px_rgba(154,212,214,0.1)] animate-fade-up sm:px-[18px] sm:py-[22px]"
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            <span className="font-sans text-[14px] font-bold text-[#f2fdff] sm:text-[15px]">{s.name}</span>
            <span className="font-mono text-[10px] text-accent tracking-[0.1em] uppercase">{s.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
