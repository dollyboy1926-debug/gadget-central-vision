import { milestones } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./primitives";

export function Milestones() {
  return (
    <section id="milestones" className="section-pad relative overflow-hidden bg-cream">
      <div className="container-gc">
        <SectionHeading
          eyebrow="Key Milestones"
          title="A decade of cooperative growth"
          description="Milestones achieved since Gadget Central Sdn Bhd was founded in 2015."
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-4 w-px bg-[image:var(--gradient-brand)] opacity-40 md:left-1/2"
          />
          <ol className="space-y-8">
            {milestones.map((m, i) => (
              <Reveal
                as="li"
                key={m.year}
                delay={i * 60}
                className={`relative pl-14 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-6 left-4 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-[image:var(--gradient-brand)] ring-4 ring-background ${
                    i % 2 === 0 ? "md:left-full" : "md:left-0"
                  }`}
                />
                <article className="surface-card hover-lift p-6">
                  <p className="font-display bg-[image:var(--gradient-brand)] bg-clip-text text-3xl font-extrabold text-transparent">
                    {m.year}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
