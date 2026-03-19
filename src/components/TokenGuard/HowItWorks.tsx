import { useInView } from "./useInView";

const steps = [
  {
    num: "01",
    title: "Connect",
    desc: "Point your AI calls through our proxy in under 10 minutes. Works with OpenAI, Anthropic, Gemini, and any open-source model.",
  },
  {
    num: "02",
    title: "Analyse",
    desc: "See every token, every model call, every workflow — broken down by agent, user, and task in real time.",
  },
  {
    num: "03",
    title: "Optimise",
    desc: "Our model router automatically sends each task to the cheapest model that meets your quality bar. Prompt caching cuts repeat spend. Budget caps prevent surprises.",
  },
];

const HowItWorks = () => {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="how-it-works" ref={ref} className={`section-fade ${inView ? "visible" : ""} py-24`}>
      <div className="container mx-auto px-6">
        <h2 className="mb-16 text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
          How it works
        </h2>
        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-10 hidden h-px md:block">
            {inView && (
              <div className="line-grow h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />
            )}
          </div>
          {steps.map((step, i) => (
            <div key={i} className="relative rounded-lg border border-border bg-card p-8">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 font-mono text-sm text-primary">
                {step.num}
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
