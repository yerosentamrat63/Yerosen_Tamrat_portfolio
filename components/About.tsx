const stats = [
  { num: "100+", label: "LeetCode Problems" },
  { num: "3.93", label: "Current GPA" },
  { num: "3+",   label: "Projects Shipped" },
  { num: "A2SV", label: "Community Member" },
];

export default function About() {
  return (
    <section id="about" className="relative px-14 py-[100px] border-t border-[rgba(154,212,214,0.08)] grid grid-cols-2 gap-20 items-center">
      <div className="grid-bg" />

      {/* LEFT */}
      <div className="animate-fade-up">
        <p className="sc font-mono text-[11px] text-[#4a5e7a] tracking-[0.12em] mb-[18px]">WHO I AM</p>
        <div className="font-sans text-[clamp(24px,2.8vw,40px)] font-bold leading-[1.3] tracking-[-0.02em] text-[#f2fdff] mb-9">
          Crafting the web<br />with <em className="text-accent not-italic">clean code</em><br />&amp; <em className="text-accent not-italic">sharp logic.</em>
        </div>
        <div className="grid grid-cols-2 gap-px border border-[rgba(154,212,214,0.08)] bg-[rgba(154,212,214,0.08)]">
          {stats.map(s => (
            <div key={s.label} className="bg-bg2 px-5 py-6 flex flex-col gap-[6px]">
              <span className="font-sans text-[34px] font-extrabold text-accent tracking-[-0.03em] leading-none">{s.num}</span>
              <span className="font-mono text-[10px] text-[#4a5e7a] tracking-[0.1em] uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="animate-fade-up delay-100">
        <p className="sc font-mono text-[11px] text-[#4a5e7a] tracking-[0.12em] mb-[18px]">MY STORY</p>
        <div className="font-mono text-[13px] text-[#4a5e7a] leading-[1.9] space-y-[18px]">
          <p>I&apos;m a Computer Science student at the American College of Technology in Addis Ababa, passionate about building clean, well-crafted web interfaces and solving hard problems through code.</p>
          <p>During an intensive summer session I dove deep into Data Structures and Algorithms, solving over 100 problems on LeetCode under guided instruction. That discipline now shapes how I approach every engineering challenge.</p>
          <p>As an A2SV member I sharpen my problem-solving and collaboration skills alongside a community of Africa&apos;s top engineers — working toward software that creates real, lasting impact.</p>
        </div>
      </div>
    </section>
  );
}
