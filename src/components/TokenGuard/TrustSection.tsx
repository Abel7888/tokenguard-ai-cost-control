import { useInView } from "./useInView";

const badges = [
  {
    label: "Zero prompt storage",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "SOC 2 in progress",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    label: "Deploy in your cloud",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      </svg>
    ),
  },
  {
    label: "End-to-end encrypted",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <circle cx="12" cy="16" r="1" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
];

const TrustSection = () => {
  const { ref, inView } = useInView(0.2);

  return (
    <section ref={ref} className={`section-fade ${inView ? "visible" : ""} grid-texture border-y border-border py-16`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {badges.map((b, i) => (
            <div key={i} className="flex flex-col items-center gap-3 text-center">
              <div className="text-muted-foreground">{b.icon}</div>
              <span className="font-mono text-xs text-muted-foreground">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
