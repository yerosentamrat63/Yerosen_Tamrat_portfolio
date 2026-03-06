const socials = [
  { label: "GitHub",     href: "https://github.com/yerosentamrat63"                          },
  { label: "LinkedIn",   href: "https://www.linkedin.com/in/yerosen-tamrat-a294a3396/"       },
  { label: "LeetCode",   href: "https://leetcode.com/u/yerosentamrat/"                       },
  { label: "Codeforces", href: "https://codeforces.com/profile/yerosen_tamrat"               },
];

const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=yerosentamrat4545@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="relative px-14 py-[140px] border-t border-[rgba(154,212,214,0.08)] text-center overflow-hidden">
      {/* glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center,rgba(86,71,135,0.18) 0%,transparent 65%)" }} />
      <div className="grid-bg" />

      <div className="relative z-10 max-w-[700px] mx-auto">
        <p className="sc font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-6 animate-fade-up">READY TO BUILD?</p>

        <h2 className="font-sans text-[clamp(36px,5vw,66px)] font-extrabold tracking-[-0.02em] text-[#f2fdff] leading-[1.05] mb-5 animate-fade-up delay-100">
          Let&apos;s engineer<br />something great.
        </h2>

        <p className="font-mono text-[13px] text-[#4a5e7a] mb-11 leading-[1.8] animate-fade-up delay-200">
          Frontend developer and A2SV member open to internships, collaborative projects, and meaningful opportunities. Let&apos;s build something impactful together.
        </p>

        {/* contact info bar */}
        <div className="flex justify-center mb-10 border border-[rgba(154,212,214,0.08)] overflow-hidden w-fit mx-auto animate-fade-up delay-200">
          <a href="mailto:yerosentamrat4545@gmail.com" className="flex items-center gap-[10px] px-6 py-3 border-r border-[rgba(154,212,214,0.08)] font-mono text-[11px] text-[#4a5e7a] no-underline transition-colors duration-200 hover:bg-[rgba(154,212,214,0.07)] hover:text-accent">
            <span className="text-accent text-[13px]">✉</span> yerosentamrat4545@gmail.com
          </a>
          <a href="tel:+251945235859" className="flex items-center gap-[10px] px-6 py-3 border-r border-[rgba(154,212,214,0.08)] font-mono text-[11px] text-[#4a5e7a] no-underline transition-colors duration-200 hover:bg-[rgba(154,212,214,0.07)] hover:text-accent">
            <span className="text-accent text-[13px]">☎</span> +251 945 235 859
          </a>
          <span className="flex items-center gap-[10px] px-6 py-3 font-mono text-[11px] text-[#4a5e7a]">
            <span className="text-accent text-[13px]">◎</span> Addis Ababa, Ethiopia
          </span>
        </div>

        {/* buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-12 animate-fade-up delay-300">
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[10px] px-7 py-[14px] bg-accent text-bg2 font-mono text-[11px] font-bold tracking-[0.1em] uppercase no-underline transition-all duration-200 hover:bg-accent2 hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(154,212,214,0.2)]"
          >
            SEND EMAIL ↗
          </a>
          <a
            href="/resume.pdf"
            download="Yerosen_Tamrat_Resume.pdf"
            className="inline-flex items-center gap-[10px] px-7 py-[14px] bg-transparent text-[#f2fdff] font-mono text-[11px] font-medium tracking-[0.1em] uppercase no-underline border border-[rgba(154,212,214,0.18)] transition-all duration-200 hover:border-[#7060b0] hover:text-[#dbcbd8] hover:-translate-y-[3px]"
          >
            DOWNLOAD RESUME ↓
          </a>
        </div>

        {/* socials */}
        <div className="flex gap-[10px] justify-center flex-wrap animate-fade-up delay-400">
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-[#4a5e7a] no-underline tracking-[0.06em] px-[18px] py-[9px] border border-[rgba(154,212,214,0.08)] transition-all duration-200 hover:text-accent hover:border-[rgba(154,212,214,0.18)] hover:bg-[rgba(154,212,214,0.07)]"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
