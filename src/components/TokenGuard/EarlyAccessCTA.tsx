import { useState } from "react";
import { useInView } from "./useInView";

const EarlyAccessCTA = () => {
  const [submitted, setSubmitted] = useState(false);
  const { ref, inView } = useInView(0.2);

  return (
    <section id="early-access" ref={ref} className={`section-fade ${inView ? "visible" : ""} py-24`}>
      <div className="container mx-auto px-6">
        <div className="glow-border mx-auto max-w-2xl rounded-xl bg-card p-10 text-center sm:p-14">
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            We're onboarding 10 design partners before public launch.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Get early access, locked pricing, and direct input into the product roadmap.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-lg border border-primary/30 bg-primary/5 p-6">
              <p className="font-heading text-lg font-semibold text-primary">
                You're on the list.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                We'll be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 rounded-md border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
              />
              <button
                type="submit"
                className="glow-border whitespace-nowrap rounded-md bg-primary px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--glow-primary-intense)]"
              >
                Request Early Access
              </button>
            </form>
          )}

          <p className="mt-6 font-mono text-xs text-muted-foreground/50">
            No spam. No sales pressure. Just a 30-minute call to see if we're a fit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessCTA;
