const partners = ["Meridian Labs", "Stackform", "Arclight AI", "NovaBuild"];

const SocialProof = () => (
  <section className="border-y border-border bg-card/50 py-6">
    <div className="container mx-auto flex flex-col items-center gap-4 px-6 sm:flex-row sm:gap-8">
      <span className="whitespace-nowrap font-mono text-xs text-muted-foreground">
        Built for teams running AI at scale
      </span>
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {partners.map((name) => (
          <span key={name} className="font-heading text-sm font-semibold tracking-wide text-muted-foreground/60">
            {name}
          </span>
        ))}
      </div>
    </div>
    <p className="mt-3 text-center font-mono text-[10px] text-muted-foreground/40">
      Early design partners — launching Q3 2026
    </p>
  </section>
);

export default SocialProof;
