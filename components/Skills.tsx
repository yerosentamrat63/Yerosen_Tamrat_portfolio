"use client";
import { useState } from "react";

type Cat = "all" | "lang" | "web" | "tools";

const skills: { name: string; cat: Exclude<Cat,"all">; sub: string }[] = [
  { name: "HTML",               cat: "lang",  sub: "Language"   },
  { name: "CSS",                cat: "lang",  sub: "Language"   },
  { name: "JavaScript",         cat: "lang",  sub: "Language"   },
  { name: "Python",             cat: "lang",  sub: "Language"   },
  { name: "C++",                cat: "lang",  sub: "Language"   },
  { name: "Responsive Design",  cat: "web",   sub: "Web"        },
  { name: "CSS Layouts",        cat: "web",   sub: "Web"        },
  { name: "DOM Manipulation",   cat: "web",   sub: "Web"        },
  { name: "Figma",              cat: "web",   sub: "UI / Design"},
  { name: "Adobe Illustrator",  cat: "tools", sub: "UI / Design"},
  { name: "Git & GitHub",       cat: "tools", sub: "Tools"      },
  { name: "Linux",              cat: "tools", sub: "Tools"      },
  { name: "VS Code",            cat: "tools", sub: "Tools"      },
  { name: "DSA / Algorithms",   cat: "tools", sub: "Core Area"  },
  { name: "Problem Solving",    cat: "tools", sub: "Core Area"  },
  { name: "Team Collaboration", cat: "tools", sub: "Core Area"  },
];

const tabs: { label: string; value: Cat }[] = [
  { label: "ALL",       value: "all"   },
  { label: "LANGUAGES", value: "lang"  },
  { label: "WEB",       value: "web"   },
  { label: "TOOLS",     value: "tools" },
];

export default function Skills() {
  const [active, setActive] = useState<Cat>("all");
  const visible = skills.filter(s => active === "all" || s.cat === active);

  return (
    <section id="skills" className="relative px-14 py-[120px] border-t border-[rgba(154,212,214,0.08)]">
      <div className="grid-bg" />

      {/* header */}
      <div className="flex justify-between items-end mb-[52px] flex-wrap gap-7 animate-fade-up">
        <div>
          <p className="sc font-mono text-[11px] text-[#4a5e7a] tracking-[0.12em] mb-3">TECHNICAL ARSENAL</p>
          <h2 className="font-sans text-[clamp(30px,4vw,52px)] font-extrabold tracking-[-0.02em] text-[#f2fdff] leading-[1.1]">Skills &amp; Tools</h2>
        </div>
        <div className="flex border border-[rgba(154,212,214,0.08)] overflow-hidden">
          {tabs.map(t => (
            <button
              key={t.value}
              onClick={() => setActive(t.value)}
              className={`px-[18px] py-[10px] font-mono text-[10px] font-semibold tracking-[0.1em] uppercase border-r border-[rgba(154,212,214,0.08)] last:border-r-0 transition-colors duration-200 ${active === t.value ? "bg-accent text-bg2" : "bg-transparent text-[#4a5e7a] hover:bg-bg4 hover:text-[#f2fdff]"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* grid */}
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(165px, 1fr))" }}>
        {visible.map((s, i) => (
          <div
            key={s.name + i}
            className="border border-[rgba(154,212,214,0.08)] px-[18px] py-[22px] bg-bg2 flex flex-col gap-2 transition-all duration-250 hover:border-accent hover:bg-[rgba(154,212,214,0.06)] hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(154,212,214,0.1)] animate-fade-up"
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            <span className="font-sans text-[15px] font-bold text-[#f2fdff]">{s.name}</span>
            <span className="font-mono text-[10px] text-accent tracking-[0.1em] uppercase">{s.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
