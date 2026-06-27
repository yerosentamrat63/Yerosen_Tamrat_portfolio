const stats = [
  { num: "200+", label: "LeetCode Problems" },
  { num: "3.93", label: "Current GPA" },
  { num: "3+",   label: "Projects Shipped" },
  { num: "A2SV", label: "Community Member" },
];

export default function About() {
  return (
    <section id="about" className="relative grid items-center gap-12 border-t border-[rgba(154,212,214,0.08)] px-4 py-20 sm:px-6 md:grid-cols-2 md:gap-14 md:py-[100px] lg:gap-20 lg:px-14">
      <div className="grid-bg" />

      {/* LEFT */}
      <div className="animate-fade-up">
        <p className="sc mb-4 font-mono text-[10px] tracking-[0.11em] text-[#4a5e7a] sm:mb-[18px] sm:text-[11px] sm:tracking-[0.12em]">WHO I AM</p>
        <div className="mb-7 font-sans text-[clamp(24px,6.5vw,40px)] font-bold leading-[1.25] tracking-[-0.02em] text-[#f2fdff] sm:mb-9 sm:leading-[1.3]">
          Crafting the web<br />with <em className="text-accent not-italic">clean code</em><br />&amp; <em className="text-accent not-italic">sharp logic.</em>
        </div>
        <div className="grid grid-cols-2 gap-px border border-[rgba(154,212,214,0.08)] bg-[rgba(154,212,214,0.08)] sm:grid-cols-2">
          {stats.map(s => (
            <div key={s.label} className="flex flex-col gap-[6px] bg-bg2 px-4 py-5 sm:px-5 sm:py-6">
              <span className="font-sans text-[28px] font-extrabold leading-none tracking-[-0.03em] text-accent sm:text-[34px]">{s.num}</span>
              <span className="font-mono text-[10px] text-[#4a5e7a] tracking-[0.1em] uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="animate-fade-up delay-100">
        <p className="sc mb-4 font-mono text-[10px] tracking-[0.11em] text-[#4a5e7a] sm:mb-[18px] sm:text-[11px] sm:tracking-[0.12em]">MY STORY</p>
        <div className="space-y-4 font-mono text-[12px] leading-[1.8] text-[#4a5e7a] sm:space-y-[18px] sm:text-[13px] sm:leading-[1.9]">
          <p>I&apos;m a Computer Science student at the American College of Technology in Addis Ababa, passionate about building clean, well-crafted web interfaces and solving hard problems through code.</p>
          <p>During an intensive summer session I dove deep into Data Structures and Algorithms, solving over 100 problems on LeetCode under guided instruction. That discipline now shapes how I approach every engineering challenge.</p>
          <p>As an A2SV member I sharpen my problem-solving and collaboration skills alongside a community of Africa&apos;s top engineers — working toward software that creates real, lasting impact.</p>
        </div>
      </div>
    </section>
  );
}
