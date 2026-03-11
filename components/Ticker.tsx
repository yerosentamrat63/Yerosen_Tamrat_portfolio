const items = ["HTML","CSS","JavaScript","Python","C++","Responsive Design","Git & GitHub","Figma","DSA & Algorithms","A2SV Member","100+ LeetCode","Linux"];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden whitespace-nowrap border-b border-t border-[rgba(154,212,214,0.08)] bg-bg3 py-3 sm:py-[14px]">
      <div className="inline-flex animate-ticker">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-5 font-mono text-[10px] uppercase tracking-[0.08em] text-[#4a5e7a] sm:gap-[14px] sm:px-7 sm:text-[11px] sm:tracking-[0.1em]">
            {item}
            <span className="w-1 h-1 rounded-full bg-pur flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
