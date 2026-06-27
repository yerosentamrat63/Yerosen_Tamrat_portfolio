const socials = [
  { label: "GitHub",     href: "https://github.com/yerosentamrat63"                          },
  { label: "LinkedIn",   href: "https://www.linkedin.com/in/yerosen-tamrat-a294a3396/"       },
  { label: "LeetCode",   href: "https://leetcode.com/u/yerosentamrat/"                       },
  { label: "Codeforces", href: "https://codeforces.com/profile/yerosen_tamrat"               },
];

const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=yerosentamrat4545@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-[rgba(154,212,214,0.08)] px-4 py-24 text-center sm:px-6 md:py-[140px] lg:px-14">
      {/* glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center,rgba(86,71,135,0.18) 0%,transparent 65%)" }} />
      <div className="grid-bg" />

      <div className="relative z-10 mx-auto max-w-[700px]">
        <p className="sc mb-5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent animate-fade-up sm:mb-6 sm:text-[11px] sm:tracking-[0.2em]">READY TO BUILD?</p>

        <h2 className="font-sans text-[clamp(36px,5vw,66px)] font-extrabold tracking-[-0.02em] text-[#f2fdff] leading-[1.05] mb-5 animate-fade-up delay-100">
          Let&apos;s engineer<br />something great.
        </h2>

        <p className="mb-9 font-mono text-[12px] leading-[1.8] text-[#4a5e7a] animate-fade-up delay-200 sm:mb-11 sm:text-[13px]">
          Frontend developer and A2SV member open to internships, collaborative projects, and meaningful opportunities. Let&apos;s build something impactful together.
        </p>

        {/* contact info bar */}
        <div className="mx-auto mb-10 flex w-full max-w-[700px] flex-col overflow-hidden border border-[rgba(154,212,214,0.08)] animate-fade-up delay-200 md:w-fit md:max-w-none md:flex-row">
          <a href="mailto:yerosentamrat4545@gmail.com" className="flex items-center gap-[10px] break-all border-b border-[rgba(154,212,214,0.08)] px-4 py-3 font-mono text-[10px] text-[#4a5e7a] no-underline transition-colors duration-200 hover:bg-[rgba(154,212,214,0.07)] hover:text-accent sm:px-6 sm:text-[11px] md:border-b-0 md:border-r">
            <span className="text-accent text-[13px]">✉</span> yerosentamrat4545@gmail.com
          </a>
          <a href="tel:+251945235859" className="flex items-center gap-[10px] border-b border-[rgba(154,212,214,0.08)] px-4 py-3 font-mono text-[10px] text-[#4a5e7a] no-underline transition-colors duration-200 hover:bg-[rgba(154,212,214,0.07)] hover:text-accent sm:px-6 sm:text-[11px] md:border-b-0 md:border-r">
            <span className="text-accent text-[13px]">☎</span> +251 945 235 859
          </a>
          <span className="flex items-center gap-[10px] px-4 py-3 font-mono text-[10px] text-[#4a5e7a] sm:px-6 sm:text-[11px]">
            <span className="text-accent text-[13px]">◎</span> Addis Ababa, Ethiopia
          </span>
        </div>

        {/* buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-3 animate-fade-up delay-300 sm:gap-4">
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-[10px] bg-accent px-6 py-[13px] font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-bg2 no-underline transition-all duration-200 hover:bg-accent2 hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(154,212,214,0.2)] sm:w-auto sm:px-7 sm:py-[14px] sm:text-[11px]"
          >
            SEND EMAIL ↗
          </a>
          <a
            href="https://drive.google.com/file/d/144pmUdaI1s04o4XJhjBKXK4zeaGera5y/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-[10px] border border-[rgba(154,212,214,0.18)] bg-transparent px-6 py-[13px] font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-[#f2fdff] no-underline transition-all duration-200 hover:border-[#7060b0] hover:text-[#dbcbd8] hover:-translate-y-[3px] sm:w-auto sm:px-7 sm:py-[14px] sm:text-[11px]"
          >
            View Resume ↗
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
