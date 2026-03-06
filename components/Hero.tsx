export default function Hero() {
  const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=yerosentamrat4545@gmail.com";

  return (
    <section
      id="hero"
      className="relative min-h-screen grid grid-cols-2 items-center gap-[72px] px-14 pt-[130px] pb-20 overflow-hidden"
    >
      <div className="grid-bg" />
      {/* glows */}
      <div className="absolute w-[700px] h-[700px] rounded-full pointer-events-none top-[-120px] right-[-180px]"
        style={{ background: "radial-gradient(circle,rgba(86,71,135,.28) 0%,rgba(154,212,214,.04) 40%,transparent 70%)" }} />
      <div className="absolute w-[420px] h-[420px] rounded-full pointer-events-none bottom-[-40px] left-[-120px]"
        style={{ background: "radial-gradient(circle,rgba(154,212,214,.07) 0%,transparent 70%)" }} />

      {/* LEFT */}
      <div>
        {/* badge */}
        <div className="inline-flex items-center gap-2 px-[14px] py-[6px] border border-[rgba(154,212,214,0.18)] bg-[rgba(154,212,214,0.07)] mb-[26px] animate-fade-up">
          <span className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse-dot" />
          <span className="font-mono text-[10px] text-accent tracking-[0.14em] uppercase">A2SV Member · Open to Opportunities</span>
        </div>

        <p className="font-mono text-[11px] text-[#dbcbd8] tracking-[0.18em] uppercase mb-[18px] flex items-center gap-[10px] animate-fade-up delay-100 before:content-[''] before:w-7 before:h-px before:bg-[#dbcbd8] before:opacity-50">
          Frontend Developer &amp; CS Student
        </p>

        <h1 className="font-sans text-[clamp(44px,5.5vw,76px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#f2fdff] mb-[26px] animate-fade-up delay-200">
          Solving<br />Problems.<br /><span className="text-accent">Shipping Code.</span>
        </h1>

        <p className="font-mono text-[13px] text-[#4a5e7a] leading-[1.8] max-w-[500px] mb-10 animate-fade-up delay-300">
          CS student and A2SV member building clean, fast web experiences. Obsessed with DSA, UI detail, and writing code that just works. 100+ LeetCode problems solved.
        </p>

        <div className="flex gap-[14px] flex-wrap animate-fade-up delay-400">
          <a href="#projects" className="inline-flex items-center gap-[10px] px-7 py-[14px] bg-accent text-bg2 font-mono text-[11px] font-bold tracking-[0.1em] uppercase no-underline transition-all duration-200 hover:bg-accent2 hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(154,212,214,0.2)]">
            VIEW MY WORK ↓
          </a>
          <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[10px] px-7 py-[14px] bg-transparent text-[#f2fdff] font-mono text-[11px] font-medium tracking-[0.1em] uppercase no-underline border border-[rgba(154,212,214,0.18)] transition-all duration-200 hover:border-[#7060b0] hover:text-[#dbcbd8] hover:-translate-y-[3px]">
            GET IN TOUCH
          </a>
        </div>
      </div>

      {/* RIGHT – code card */}
      <div className="animate-slide-r">
        <div className="bg-bg2 border border-[rgba(154,212,214,0.08)] font-mono text-[13px] leading-[1.9] shadow-[0_0_80px_rgba(86,71,135,0.18)]">
          {/* header */}
          <div className="flex items-center gap-2 px-[18px] py-3 border-b border-[rgba(154,212,214,0.08)] bg-bg3">
            <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
            <span className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]" />
            <span className="w-[10px] h-[10px] rounded-full bg-[#28ca41]" />
            <span className="font-mono text-[11px] text-[#4a5e7a] ml-auto tracking-[0.05em]">yerosen.ts</span>
          </div>

          {/* code body */}
          <div className="px-6 py-[22px]">
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
              <><Ln n={10}/>&nbsp;&nbsp;<Pr>tools</Pr>: <Str>{"'Git · Figma · Linux'"}</Str>,</>,
              <><Ln n={11}/>&nbsp;&nbsp;<Pr>leetcode</Pr>: <Str>{"'100+ solved'"}</Str></>,
              <><Ln n={12}/><Br>{"}"}</Br>;</>,
              <><Ln n={13}/>&nbsp;</>,
              <><Ln n={14}/><span className="inline-block w-2 h-[15px] bg-accent align-bottom animate-blink" /></>,
            ].map((row, i) => (
              <div key={i}>{row}</div>
            ))}
          </div>

          {/* stats bar */}
          <div className="flex border-t border-[rgba(154,212,214,0.08)]">
            {[["GPA","3.93"],["LeetCode","100+"],["Community","A2SV"]].map(([l,v]) => (
              <div key={l} className="flex-1 px-4 py-[10px] border-r border-[rgba(154,212,214,0.08)] last:border-r-0 flex flex-col gap-[2px]">
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
const Ln = ({ n }: { n: number }) => <span className="text-[#232e42] select-none mr-5 inline-block text-right min-w-[18px]">{n}</span>;
const Kw = ({ children }: { children: React.ReactNode }) => <span style={{ color: "#c4a8e8" }}>{children} </span>;
const Fn = ({ children }: { children: React.ReactNode }) => <span className="text-accent">{children}</span>;
const Str = ({ children }: { children: React.ReactNode }) => <span style={{ color: "#a8d8a8" }}>{children}</span>;
const Pr = ({ children }: { children: React.ReactNode }) => <span className="text-[#dbcbd8]">{children}</span>;
const Cm = ({ children }: { children: React.ReactNode }) => <span className="text-[#4a5e7a] italic">{children}</span>;
const Br = ({ children }: { children: React.ReactNode }) => <span className="text-accent opacity-80">{children}</span>;
