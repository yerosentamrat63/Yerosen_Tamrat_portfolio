const certs = [
  { num: "01", name: "Advanced CSS and Sass: Flexbox, Grid and Animations", provider: "Udemy",            done: true  },
  { num: "02", name: "CS50: Introduction to Computer Science",               provider: "Harvard University", done: false },
  { num: "03", name: "Full Stack Web Development Path",                       provider: "The Odin Project",  done: false },
  { num: "04", name: "Agentic AI Development",                                provider: "ReadyTensor",       done: false },
];

export default function Education() {
  return (
    <section id="education" className="relative grid items-start gap-12 border-t border-[rgba(154,212,214,0.08)] px-4 py-20 sm:px-6 md:grid-cols-2 md:gap-10 md:py-[120px] lg:gap-[72px] lg:px-14">
      <div className="grid-bg" />

      {/* Education */}
      <div className="animate-fade-up">
        <p className="sc mb-2 font-mono text-[10px] tracking-[0.11em] text-[#4a5e7a] sm:mb-3 sm:text-[11px] sm:tracking-[0.12em]">ACADEMIC BACKGROUND</p>
        <h2 className="mb-7 font-sans text-[clamp(30px,4vw,52px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#f2fdff] sm:mb-8">Education</h2>

        <div className="flex flex-col gap-5">
          <div className="border border-[rgba(154,212,214,0.08)] bg-bg2 p-5 transition-all duration-250 hover:border-[rgba(154,212,214,0.18)] hover:shadow-[0_8px_40px_rgba(86,71,135,0.15)] sm:p-9">
            <div className="mb-[6px] font-sans text-[19px] font-extrabold tracking-[-0.02em] text-[#f2fdff] sm:text-[22px]">American College of Technology</div>
            <div className="font-mono text-[11px] text-accent tracking-[0.08em] uppercase mb-[22px]">BSc in Computer Science</div>
            <div className="flex flex-col gap-[10px] mb-6">
              {["Addis Ababa, Ethiopia","Expected Graduation: 2027","Focus: DSA · Web Development · Digital Logic Design · Software Engineering","Transferred from AASTU after first semester"].map(m => (
                <div key={m} className="flex items-start gap-[10px] font-mono text-[11px] leading-[1.55] text-[#4a5e7a] sm:text-[12px] sm:leading-[1.5]">
                  <span className="text-accent text-[10px] flex-shrink-0 mt-[1px]">→</span>
                  {m}
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 border border-[rgba(154,212,214,0.18)] bg-[rgba(154,212,214,0.07)] px-4 py-[10px] font-mono text-[12px] font-bold tracking-[0.05em] text-accent sm:px-5 sm:py-3 sm:text-[14px]">
              GPA &nbsp;3.93 / 4.0 ↑
            </div>
          </div>

          <div className="border border-[rgba(154,212,214,0.08)] bg-bg2 p-5 transition-all duration-250 hover:border-[rgba(154,212,214,0.18)] hover:shadow-[0_8px_40px_rgba(86,71,135,0.15)] sm:p-9">
            <div className="mb-[6px] font-sans text-[19px] font-extrabold tracking-[-0.02em] text-[#f2fdff] sm:text-[22px]">A2SV (Africa to Silicon Valley)</div>
            <div className="font-mono text-[11px] text-accent tracking-[0.08em] uppercase mb-[22px]">Software Engineering Fellowship — G7 Batch</div>
            <div className="flex flex-col gap-[10px] mb-6">
              {[
                "Remote Program",
                "Intensive training in Data Structures & Algorithms and problem solving",
                "Daily LeetCode practice and technical interview preparation",
                "Phase II: Building real-world software products in teams",
                "Collaboration with top African engineering students",
              ].map(m => (
                <div key={m} className="flex items-start gap-[10px] font-mono text-[11px] leading-[1.55] text-[#4a5e7a] sm:text-[12px] sm:leading-[1.5]">
                  <span className="text-accent text-[10px] flex-shrink-0 mt-[1px]">→</span>
                  {m}
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-[18px] py-[10px] bg-[rgba(86,71,135,0.15)] border border-[rgba(112,96,176,0.4)] font-mono text-[11px] text-[#dbcbd8] tracking-[0.1em] uppercase">
              <span className="text-[#7060b0] text-[9px] mr-1">◆</span>A2SV Fellow — G7 Batch
            </div>
          </div>
        </div>
      </div>

      {/* Certs */}
      <div className="animate-fade-up delay-100">
        <p className="sc mb-2 font-mono text-[10px] tracking-[0.11em] text-[#4a5e7a] sm:mb-3 sm:text-[11px] sm:tracking-[0.12em]">SELF-DIRECTED LEARNING</p>
        <h2 className="mb-7 font-sans text-[clamp(30px,4vw,52px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#f2fdff] sm:mb-8">Certificates</h2>

        <div className="flex flex-col gap-[14px]">
          {certs.map((c, i) => (
            <div
              key={c.num}
              className="flex items-start gap-3 border border-[rgba(154,212,214,0.08)] bg-bg2 px-4 py-4 transition-all duration-200 hover:translate-x-[6px] hover:border-[#7060b0] hover:bg-[rgba(86,71,135,0.1)] animate-fade-up sm:gap-4 sm:px-[22px] sm:py-5"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <span className="font-mono text-[11px] text-[#7060b0] flex-shrink-0 mt-[2px]">{c.num}</span>
              <div className="flex-1">
                <div className="mb-1 font-sans text-[13px] font-bold text-[#f2fdff] sm:text-[14px]">{c.name}</div>
                <div className="font-mono text-[10px] text-[#4a5e7a] tracking-[0.08em] uppercase">{c.provider}</div>
              </div>
              <span className={`font-mono text-[9px] px-[9px] py-1 border tracking-[0.08em] uppercase flex-shrink-0 mt-[2px] ${c.done ? "border-[rgba(86,71,135,0.5)] text-[#dbcbd8] bg-[rgba(86,71,135,0.12)]" : "border-[rgba(154,212,214,0.4)] text-accent bg-[rgba(154,212,214,0.07)]"}`}>
                {c.done ? "Completed" : "Ongoing"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
