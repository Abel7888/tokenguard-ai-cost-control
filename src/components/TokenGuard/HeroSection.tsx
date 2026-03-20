import { useEffect, useState } from "react";
import ParticleGrid from "./ParticleGrid";

const HeroSection = () => {
  const [waste, setWaste] = useState(0);
  const [saved, setSaved] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaste((prev) => {
        const next = prev + 0.47 + Math.random() * 1.2;
        return Math.round(next * 100) / 100;
      });
      setSaved((prev) => {
        const next = prev + 0.22 + Math.random() * 0.8;
        return Math.round(next * 100) / 100;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <ParticleGrid />
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl font-800 leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Your AI agents are burning money.{" "}
            <span className="text-primary glow-text">We stop that.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Cypress Partner MSP monitors, optimises and controls your AI API spend in real time
            — cutting costs 30–70% without touching your performance.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#early-access"
              className="glow-border inline-flex items-center rounded-md bg-primary px-7 py-3 font-heading text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--glow-primary-intense)]"
            >
              Request Early Demo
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-md border border-border px-7 py-3 font-heading text-sm font-semibold text-foreground transition-colors duration-300 hover:border-muted-foreground"
            >
              See How It Works
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-foreground">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Cost counter */}
        <div className="absolute bottom-12 right-6 hidden rounded-lg border border-border bg-card/80 p-5 backdrop-blur-sm md:block lg:right-12">
          <div className="font-mono text-xs text-muted-foreground">Wasted AI spend today</div>
          <div className="font-mono text-2xl font-bold text-destructive">
            ${waste.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </div>
          <div className="mt-3 font-mono text-xs text-muted-foreground">TokenGuard would have saved</div>
          <div className="font-mono text-2xl font-bold text-primary glow-text">
            ${saved.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
