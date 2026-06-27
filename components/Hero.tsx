export default function Hero() {
  const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=yerosentamrat4545@gmail.com";

  return (
    <section
      id="hero"
      className="relative grid min-h-screen items-center gap-10 overflow-hidden px-4 pb-16 pt-[110px] sm:px-6 md:grid-cols-2 md:gap-12 md:pt-[130px] md:pb-20 lg:gap-[72px] lg:px-14"
    >
      <div className="grid-bg" />
      {/* glows */}
      <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[340px] w-[340px] rounded-full sm:right-[-120px] sm:top-[-100px] sm:h-[480px] sm:w-[480px] lg:right-[-180px] lg:top-[-120px] lg:h-[700px] lg:w-[700px]"
        style={{ background: "radial-gradient(circle,rgba(86,71,135,.28) 0%,rgba(154,212,214,.04) 40%,transparent 70%)" }} />
      <div className="pointer-events-none absolute bottom-[-40px] left-[-80px] h-[240px] w-[240px] rounded-full sm:left-[-100px] sm:h-[320px] sm:w-[320px] lg:left-[-120px] lg:h-[420px] lg:w-[420px]"
        style={{ background: "radial-gradient(circle,rgba(154,212,214,.07) 0%,transparent 70%)" }} />

      {/* LEFT */}
      <div>
        {/* badge */}
        <div className="mb-[22px] inline-flex items-center gap-2 border border-[rgba(154,212,214,0.18)] bg-[rgba(154,212,214,0.07)] px-3 py-[6px] animate-fade-up sm:mb-[26px] sm:px-[14px]">
          <span className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse-dot" />
          <span className="font-mono text-[9px] text-accent tracking-[0.12em] uppercase sm:text-[10px] sm:tracking-[0.14em]">A2SV Member · Open to Opportunities</span>
        </div>

        <p className="mb-4 flex items-center gap-[10px] font-mono text-[10px] uppercase tracking-[0.14em] text-[#dbcbd8] animate-fade-up delay-100 before:h-px before:w-6 before:bg-[#dbcbd8] before:opacity-50 before:content-[''] sm:mb-[18px] sm:text-[11px] sm:tracking-[0.18em] sm:before:w-7">
          Frontend Developer &amp; CS Student
        </p>

        <h1 className="mb-5 font-sans text-[clamp(34px,9vw,76px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#f2fdff] animate-fade-up delay-200 sm:mb-[26px]">
          Solving<br />Problems.<br /><span className="text-accent">Shipping Code.</span>
        </h1>

        <p className="mb-8 max-w-[500px] font-mono text-[12px] leading-[1.8] text-[#4a5e7a] animate-fade-up delay-300 sm:mb-10 sm:text-[13px]">
          CS student and A2SV member building clean, fast web experiences. Obsessed with DSA, UI detail, and writing code that just works.           200+ LeetCode problems solved.
        </p>

        <div className="flex flex-wrap gap-3 animate-fade-up delay-400 sm:gap-[14px]">
          <a href="#projects" className="inline-flex w-full items-center justify-center gap-[10px] bg-accent px-6 py-[13px] font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-bg2 no-underline transition-all duration-200 hover:bg-accent2 hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(154,212,214,0.2)] sm:w-auto sm:px-7 sm:py-[14px] sm:text-[11px]">
            VIEW MY WORK ↓
          </a>
          <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-[10px] border border-[rgba(154,212,214,0.18)] bg-transparent px-6 py-[13px] font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-[#f2fdff] no-underline transition-all duration-200 hover:border-[#7060b0] hover:text-[#dbcbd8] hover:-translate-y-[3px] sm:w-auto sm:px-7 sm:py-[14px] sm:text-[11px]">
            GET IN TOUCH
          </a>
        </div>
      </div>

      {/* RIGHT – code card */}
      <div className="w-full animate-slide-r">
        <div className="mx-auto w-full max-w-[760px] border border-[rgba(154,212,214,0.08)] bg-bg2 font-mono text-[12px] leading-[1.8] shadow-[0_0_80px_rgba(86,71,135,0.18)] sm:text-[13px] sm:leading-[1.9]">
          {/* header */}
          <div className="flex items-center gap-2 border-b border-[rgba(154,212,214,0.08)] bg-bg3 px-4 py-3 sm:px-[18px]">
            <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
            <span className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]" />
            <span className="w-[10px] h-[10px] rounded-full bg-[#28ca41]" />
            <span className="font-mono text-[11px] text-[#4a5e7a] ml-auto tracking-[0.05em]">yerosen.ts</span>
          </div>

          {/* code body */}
          <div className="overflow-x-auto px-4 py-5 sm:px-6 sm:py-[22px]">
            {[
              <><Ln n={1}/><Cm>// Frontend Developer &amp; A2SV Member</Cm></>,
              <><Ln n={2}/>&nbsp;</>,
              <><Ln n={3}/><Kw>const</Kw> <Fn>engineer</Fn> <Br>=</Br> <Br>{"{"}</Br></>,
              <><Ln n={4}/>&nbsp;&nbsp;<Pr>name</Pr>: <Str>{"'Yerosen Tamrat'"}</Str>,</>,
              <><Ln n={5}/>&nbsp;&nbsp;<Pr>location</Pr>: <Str>{"'Addis Ababa, ET'"}</Str>,</>,
              <><Ln n={6}/>&nbsp;&nbsp;<Pr>gpa</Pr>: <Str>{"'3.93 / 4.0'"}</Str>,</>,
              <><Ln n={7}/>&nbsp;&nbsp;<Pr>community</Pr>: <Str>{"'A2SV Member'"}</Str>,</>,
              <><Ln n={8}/>&nbsp;&nbsp;<Pr>focus</Pr>: <Br>[</Br><Str>{"'DSA'"}</Str>, <Str>{"'Web Dev'"}</Str>, <Str>{"'UI/UX'"}</Str><Br>]</Br>,</>,
              <><Ln n={9}/>&nbsp;&nbsp;<Pr>languages</Pr>: <Br>[</Br><Str>{"'HTML'"}</Str>, <Str>{"'CSS'"}</Str>, <Str>{"'JS'"}</Str>, <Str>{"'Python'"}</Str>, <Str>{"'C++'"}</Str><Br>]</Br>,</>,
              <><Ln n={10}/>&nbsp;&nbsp;<Pr>tools</Pr>: <Str>{"'Git · Figma · Adobe Illustrator · Linux'"}</Str>,</>,
              <><Ln n={11}/>&nbsp;&nbsp;<Pr>leetcode</Pr>: <Str>{"'200+ solved'"}</Str></>,
              <><Ln n={12}/><Br>{"}"}</Br>;</>,
              <><Ln n={13}/>&nbsp;</>,
              <><Ln n={14}/><span className="inline-block w-2 h-[15px] bg-accent align-bottom animate-blink" /></>,
            ].map((row, i) => (
              <div key={i}>{row}</div>
            ))}
          </div>

          {/* stats bar */}
          <div className="grid grid-cols-1 border-t border-[rgba(154,212,214,0.08)] sm:grid-cols-3">
            {[["GPA","3.93"],["LeetCode","200+"],["Community","A2SV"]].map(([l,v]) => (
              <div key={l} className="flex flex-col gap-[2px] border-b border-[rgba(154,212,214,0.08)] px-4 py-[10px] last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                <span className="text-[9px] tracking-[0.12em] text-[#232e42] uppercase">{l}</span>
                <span className="text-accent font-medium text-[11px]">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* mini helpers */
const Ln = ({ n }: { n: number }) => <span className="mr-4 inline-block min-w-[18px] select-none text-right text-[#232e42] sm:mr-5">{n}</span>;
const Kw = ({ children }: { children: React.ReactNode }) => <span style={{ color: "#c4a8e8" }}>{children} </span>;
const Fn = ({ children }: { children: React.ReactNode }) => <span className="text-accent">{children}</span>;
const Str = ({ children }: { children: React.ReactNode }) => <span style={{ color: "#a8d8a8" }}>{children}</span>;
const Pr = ({ children }: { children: React.ReactNode }) => <span className="text-[#dbcbd8]">{children}</span>;
const Cm = ({ children }: { children: React.ReactNode }) => <span className="text-[#4a5e7a] italic">{children}</span>;
const Br = ({ children }: { children: React.ReactNode }) => <span className="text-accent opacity-80">{children}</span>;
