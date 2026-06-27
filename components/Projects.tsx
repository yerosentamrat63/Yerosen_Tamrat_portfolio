const projects = [
  {
    num: "/01",
    name: "Laura",
    status: "COMPLETED",
    desc: "A full-featured streaming platform with real-time video playback, user authentication, and a content discovery feed. Built with a responsive UI that adapts seamlessly across devices, featuring smooth transitions and a cinema-quality dark interface.",
    role: "Role: Lead Frontend Developer — UI architecture, video player integration, responsive layout system, and authentication flow.",
    tags: ["HTML", "CSS", "JavaScript", "Streaming", "UI/UX", "Auth"],
    link: "https://laura-drab.vercel.app/",
    github: "https://github.com/yerosentamrat63/Laura---Free-Movie-Streaming-site",
  },
  {
    num: "/02",
    name: "Telegram Agent",
    status: "COMPLETED",
    desc: "A personal Telegram AI agent that summarizes group chats and channels, powered by Groq LLMs. Runs as a single-user bot connected to your own Telegram account via Telethon with natural language command parsing.",
    role: "Role: Sole developer — built full agent with Telethon integration, Groq LLM summarization pipeline, natural language intent parser, and Render deployment.",
    tags: ["Python", "Telegram API", "Groq", "AI / LLM", "Automation", "Deployment"],
    link: "https://github.com/yerosentamrat63/telegram-agent",
    github: "https://github.com/yerosentamrat63/telegram-agent",
  },
  {
    num: "/03",
    name: "Natours Landing Page",
    status: "COMPLETED",
    desc: "A responsive single-page travel landing website focused on clean UI composition, animated sections, reusable Sass components, and scalable stylesheet architecture.",
    role: "Role: Sole frontend developer — implemented semantic HTML structure, Sass 7-1 architecture, BEM-based styling, responsive layout, and CSS build workflow.",
    tags: ["HTML5", "Sass (SCSS)", "BEM", "Responsive Design", "Landing Page"],
    github: "https://github.com/yerosentamrat63/natours-sass-project",
  },
  {
    num: "/04",
    name: "AW Coffee Export — Brand Logo Design",
    status: "COMPLETED",
    desc: "Designed a clean, scalable logo for AW Coffee Export that blends Ethiopian coffee heritage with a modern visual identity for web, packaging, and global brand use.",
    role: "Role: Logo Designer — concept development, vector construction, brand identity exploration, and final scalable logo design for digital and print use.",
    tags: ["Figma", "Adobe Illustrator", "Brand Identity", "Logo Design", "Vector Design"],
    link: "https://www.awcoffeeexport.com/",
    highlight: "DESIGN PROJECT",
    image: "/AW-coffee%20logo%20preview.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-[rgba(154,212,214,0.08)] px-4 py-20 sm:px-6 md:py-[120px] lg:px-14">
      <div className="grid-bg" />

      <div className="mb-10 animate-fade-up sm:mb-[52px]">
        <p className="sc mb-2 font-mono text-[10px] tracking-[0.11em] text-[#4a5e7a] sm:mb-3 sm:text-[11px] sm:tracking-[0.12em]">ARCHIVE 2024 – 2025</p>
        <h2 className="font-sans text-[clamp(30px,4vw,52px)] font-extrabold tracking-[-0.02em] text-[#f2fdff] leading-[1.1]">Selected Projects</h2>
      </div>

      <div className="grid gap-4 sm:gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
        {projects.map((p, i) => (
          <div
            key={p.num}
            className="group relative flex flex-col gap-4 overflow-hidden border border-[rgba(154,212,214,0.08)] bg-bg2 px-5 py-6 transition-all duration-300 hover:-translate-y-[6px] hover:border-[rgba(154,212,214,0.18)] hover:shadow-[0_20px_60px_rgba(86,71,135,0.22)] animate-fade-up sm:px-8 sm:py-9"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {/* accent bar */}
            <div className="absolute top-0 left-0 w-[3px] h-full bg-pur scale-y-0 origin-top transition-transform duration-[350ms] group-hover:scale-y-100" />

            <span className="font-mono text-[11px] text-pur2 tracking-[0.1em]">{p.num}</span>

            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <h3 className="font-sans text-[22px] font-extrabold leading-tight tracking-[-0.02em] text-[#f2fdff] sm:text-[26px]">{p.name}</h3>
                {"highlight" in p && p.highlight && (
                  <span className="inline-flex items-center gap-[6px] px-[10px] py-[5px] border border-[rgba(112,96,176,0.45)] bg-[rgba(86,71,135,0.18)] font-mono text-[9px] text-[#dbcbd8] tracking-[0.12em] uppercase whitespace-nowrap">
                    <span className="text-[#7060b0] text-[8px]">◆</span>
                    {p.highlight}
                  </span>
                )}
              </div>
              <div className="inline-flex items-center gap-[6px] px-[10px] py-1 bg-[rgba(154,212,214,0.08)] border border-[rgba(154,212,214,0.08)] font-mono text-[10px] text-accent tracking-[0.1em] w-fit">
                {p.status === "ONGOING" && (
                  <span className="w-[6px] h-[6px] rounded-full bg-accent animate-pulse-dot" />
                )}
                {p.status}
              </div>
            </div>

            <p className="font-mono text-[12px] leading-[1.75] text-[#4a5e7a] sm:text-[13px] sm:leading-[1.8]">{p.desc}</p>

            <div className="border-l-2 border-[rgba(219,203,216,0.4)] bg-[rgba(219,203,216,0.06)] px-3 py-[10px] font-mono text-[10px] leading-[1.6] text-[#dbcbd8] sm:px-[14px] sm:text-[11px] sm:leading-[1.65]">
              {p.role}
            </div>

            <div className="flex flex-wrap gap-2 mt-1">
              {p.tags.map(t => (
                <span key={t} className="font-mono text-[10px] px-[10px] py-1 border border-[rgba(154,212,214,0.18)] text-[#4a5e7a] tracking-[0.06em] uppercase">{t}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-1">
              {"link" in p && p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[8px] font-mono text-[10px] text-accent tracking-[0.1em] uppercase border border-[rgba(154,212,214,0.18)] px-[12px] py-[8px] w-fit transition-all duration-200 hover:bg-[rgba(154,212,214,0.07)] hover:border-accent"
                >
                  ↗ VISIT WEBSITE
                </a>
              )}
              {"github" in p && p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[8px] font-mono text-[10px] text-[#dbcbd8] tracking-[0.1em] uppercase border border-[rgba(112,96,176,0.35)] px-[12px] py-[8px] w-fit transition-all duration-200 hover:bg-[rgba(86,71,135,0.12)] hover:border-[#7060b0]"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                </a>
              )}
              {"image" in p && p.image && (
                <a
                  href={p.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[8px] font-mono text-[10px] text-[#dbcbd8] tracking-[0.1em] uppercase border border-[rgba(112,96,176,0.35)] px-[12px] py-[8px] w-fit transition-all duration-200 hover:bg-[rgba(86,71,135,0.12)] hover:border-[#7060b0]"
                >
                  ↗ PREVIEW IMAGE
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
