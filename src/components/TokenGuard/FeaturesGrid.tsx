import { useInView } from "./useInView";

const features = [
  {
    title: "Real-time token dashboard",
    desc: "Live visibility into every token flowing through your AI stack. Filter by model, agent, user, or workflow.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 17V13M12 17V9M17 17V7" />
      </svg>
    ),
  },
  {
    title: "Multi-model router",
    desc: "Automatically routes each task to the cheapest model that meets your quality threshold. No code changes needed.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
      </svg>
    ),
  },
  {
    title: "Prompt cache engine",
    desc: "Detects duplicate and near-duplicate prompts. Serves cached responses instantly, cutting repeat spend to zero.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 7h16M4 12h16M4 17h10" />
        <path d="M20 17l-3-3 3-3" />
      </svg>
    ),
  },
  {
    title: "Budget enforcer + alerts",
    desc: "Set hard limits per agent, team, or project. Get Slack/email alerts before you hit your ceiling.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Per-agent cost breakdown",
    desc: "Know exactly which agent, workflow, or feature is driving your bill. Drill down to the individual call level.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Auto-generated ROI reports",
    desc: "Weekly and monthly reports quantifying exactly how much TokenGuard saved. Built for CFO and board consumption.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
];

const FeaturesGrid = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} className={`section-fade ${inView ? "visible" : ""} py-24`}>
      <div className="container mx-auto px-6">
        <h2 className="mb-16 text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
          What you get
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--glow-primary)]"
            >
              <div className="mb-4 text-primary">{f.icon}</div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
