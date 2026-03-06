const projects = [
  {
    num: "/01",
    name: "Laura",
    status: "COMPLETED",
    desc: "A free movie streaming site built with vanilla HTML, CSS and JavaScript. Pulls live movie and TV data from the TMDB API — browse trending titles, search by genre or title, and jump straight into streaming. Clean dark UI with a focus on speed and simplicity.",
    role: "Role: Sole developer — full UI build, TMDB API integration, dynamic content rendering, search functionality, and responsive layout.",
    tags: ["HTML", "CSS", "JavaScript", "TMDB API", "Streaming", "Responsive Design"],
    link: "https://github.com/yerosentamrat63/Laura---Free-Movie-Streaming-site",
  },
  {
    num: "/02",
    name: "AI Pushup Fitness App",
    status: "ONGOING",
    desc: "An AI-powered mobile fitness app that uses the phone camera for real-time posture detection during pushup exercises. Built collaboratively with a small cross-functional team.",
    role: "Role: React Native Integration & App Glue — connecting components and architecting the camera API integration workflow.",
    tags: ["React Native", "AI / Pose Detection", "Camera API", "Mobile", "Team Project"],
  },
  {
    num: "/03",
    name: "E-commerce Marketplace",
    status: "ONGOING",
    desc: "A fully responsive online marketplace inspired by Amazon. Features product listings, category-based navigation, cart functionality, and a clean UI built purely with HTML, CSS & JavaScript.",
    role: "Role: Sole developer — UI architecture, product listing structure, category navigation, and frontend state management.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-14 py-[120px] border-t border-[rgba(154,212,214,0.08)]">
      <div className="grid-bg" />

      <div className="mb-[52px] animate-fade-up">
        <p className="sc font-mono text-[11px] text-[#4a5e7a] tracking-[0.12em] mb-3">ARCHIVE 2024 – 2025</p>
        <h2 className="font-sans text-[clamp(30px,4vw,52px)] font-extrabold tracking-[-0.02em] text-[#f2fdff] leading-[1.1]">Selected Projects</h2>
      </div>

      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))" }}>
        {projects.map((p, i) => (
          <div
            key={p.num}
            className="relative border border-[rgba(154,212,214,0.08)] bg-bg2 px-8 py-9 flex flex-col gap-4 overflow-hidden transition-all duration-300 hover:border-[rgba(154,212,214,0.18)] hover:-translate-y-[6px] hover:shadow-[0_20px_60px_rgba(86,71,135,0.22)] group animate-fade-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {/* accent bar */}
            <div className="absolute top-0 left-0 w-[3px] h-full bg-pur scale-y-0 origin-top transition-transform duration-[350ms] group-hover:scale-y-100" />

            <span className="font-mono text-[11px] text-pur2 tracking-[0.1em]">{p.num}</span>

            <div className="flex flex-col gap-2">
              <h3 className="font-sans text-[26px] font-extrabold tracking-[-0.02em] text-[#f2fdff] leading-tight">{p.name}</h3>
              <div className="inline-flex items-center gap-[6px] px-[10px] py-1 bg-[rgba(154,212,214,0.08)] border border-[rgba(154,212,214,0.08)] font-mono text-[10px] text-accent tracking-[0.1em] w-fit">
                {p.status === "ONGOING" && (
                  <span className="w-[6px] h-[6px] rounded-full bg-accent animate-pulse-dot" />
                )}
                {p.status}
              </div>
            </div>

            <p className="font-mono text-[13px] text-[#4a5e7a] leading-[1.8]">{p.desc}</p>

            <div className="font-mono text-[11px] text-[#dbcbd8] leading-[1.65] bg-[rgba(219,203,216,0.06)] border-l-2 border-[rgba(219,203,216,0.4)] px-[14px] py-[10px]">
              {p.role}
            </div>

            <div className="flex flex-wrap gap-2 mt-1">
              {p.tags.map(t => (
                <span key={t} className="font-mono text-[10px] px-[10px] py-1 border border-[rgba(154,212,214,0.18)] text-[#4a5e7a] tracking-[0.06em] uppercase">{t}</span>
              ))}
            </div>

            {"link" in p && p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[8px] font-mono text-[10px] text-accent tracking-[0.1em] uppercase border border-[rgba(154,212,214,0.18)] px-[12px] py-[8px] w-fit mt-1 transition-all duration-200 hover:bg-[rgba(154,212,214,0.07)] hover:border-accent"
              >
                ↗ VIEW ON GITHUB
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
