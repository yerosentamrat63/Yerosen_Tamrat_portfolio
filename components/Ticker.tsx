const items = ["HTML","CSS","JavaScript","Python","C++","Responsive Design","Git & GitHub","Figma","DSA & Algorithms","A2SV Member","100+ LeetCode","Linux"];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-t border-b border-[rgba(154,212,214,0.08)] py-[14px] bg-bg3 whitespace-nowrap">
      <div className="inline-flex animate-ticker">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-[14px] px-7 font-mono text-[11px] text-[#4a5e7a] uppercase tracking-[0.1em]">
            {item}
            <span className="w-1 h-1 rounded-full bg-pur flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
