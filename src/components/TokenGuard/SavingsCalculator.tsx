import { useState } from "react";
import { useInView } from "./useInView";

const SavingsCalculator = () => {
  const [spend, setSpend] = useState(50000);
  const { ref, inView } = useInView(0.2);
  const monthlySavings = Math.round(spend * 0.4);
  const annualSavings = monthlySavings * 12;

  return (
    <section ref={ref} className={`section-fade ${inView ? "visible" : ""} py-24`}>
      <div className="container mx-auto px-6">
        <h2 className="mb-16 text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Savings calculator
        </h2>
        <div className="mx-auto max-w-2xl">
          <label className="mb-4 block text-center font-mono text-sm text-muted-foreground">
            Monthly AI spend:{" "}
            <span className="text-foreground">${spend.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min={5000}
            max={200000}
            step={1000}
            value={spend}
            onChange={(e) => setSpend(Number(e.target.value))}
            className="mb-10 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="glow-border rounded-lg bg-card p-6 text-center">
              <div className="font-mono text-xs text-muted-foreground">Estimated monthly savings</div>
              <div className="mt-2 font-mono text-3xl font-bold text-primary glow-text">
                ${monthlySavings.toLocaleString()}
              </div>
            </div>
            <div className="glow-border rounded-lg bg-card p-6 text-center">
              <div className="font-mono text-xs text-muted-foreground">Annual savings</div>
              <div className="mt-2 font-mono text-3xl font-bold text-primary glow-text">
                ${annualSavings.toLocaleString()}
              </div>
            </div>
          </div>
          <p className="mt-6 text-center font-mono text-xs text-muted-foreground/60">
            Based on average savings across Cypress Partner MSP design partners.
          </p>
          <p className="mt-8 text-center font-heading text-lg text-foreground">
            Want to see your real number?{" "}
            <a href="https://calendly.com/abelassefa788/partnerships-investor-and-advisors-information" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
              Book a free 30-minute audit.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
