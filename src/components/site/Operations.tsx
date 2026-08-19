import { operations } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./primitives";

export function Operations() {
  return (
    <section id="operations" className="section-pad relative overflow-hidden">
      <div className="container-gc">
        <SectionHeading
          eyebrow="Operations Process"
          title="From roadshow to delivery — a clear four-step process"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {operations.map((o, i) => (
            <Reveal as="article" key={o.step} delay={i * 90}>
              <div className="surface-card hover-lift group relative h-full overflow-hidden p-7">
                <span className="font-display absolute -top-3 right-3 text-6xl font-extrabold text-secondary transition-colors duration-300 group-hover:text-teal/25">
                  {o.step}
                </span>
                <div className="relative">
                  <span className="inline-block h-1.5 w-10 rounded-full bg-[image:var(--gradient-brand)]" />
                  <h3 className="mt-5 text-lg font-bold">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
