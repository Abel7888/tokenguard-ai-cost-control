import { useEffect, useState } from "react";
import { useInView } from "./useInView";

const AnimatedNumber = ({ target, prefix = "", suffix = "", duration = 2000 }: { target: number; prefix?: string; suffix?: string; duration?: number }) => {
  const { ref, inView } = useInView(0.3);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return <span ref={ref} className="font-mono text-4xl font-bold text-primary glow-text sm:text-5xl">{prefix}{value.toLocaleString()}{suffix}</span>;
};

const stats = [
  { target: 47, prefix: "$", suffix: "K", desc: "average monthly AI waste per engineering team" },
  { target: 68, suffix: "%", desc: "of AI API calls use a model that's 10× more expensive than needed" },
  { target: 0, suffix: "", desc: "companies have real-time visibility into agent-level AI spend", isZero: true },
];

const ProblemSection = () => {
  const { ref, inView } = useInView(0.2);

  return (
    <section ref={ref} className={`section-fade ${inView ? "visible" : ""} py-24`}>
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((s, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-8 text-center">
              {s.isZero ? (
                <span className="font-mono text-4xl font-bold text-primary glow-text sm:text-5xl">0</span>
              ) : (
                <AnimatedNumber target={s.target} prefix={s.prefix} suffix={s.suffix} />
              )}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center font-heading text-lg text-foreground">
          You wouldn't run your cloud infra without cost monitoring.{" "}
          <span className="text-primary">Why are you running AI without it?</span>
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
