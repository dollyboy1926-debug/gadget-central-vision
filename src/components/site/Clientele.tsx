import { Building2, Landmark } from "lucide-react";
import { cooperatives, corporateMarket, photos } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./primitives";

export function Clientele() {
  return (
    <section id="clientele" className="section-pad relative overflow-hidden bg-cream">
      <div className="container-gc">
        <SectionHeading
          eyebrow="Our Clientele"
          title="Strong relationships with major koperasi & government institutions"
          description="We build long-term relationships with cooperatives and government institutions across Malaysia."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="surface-card h-full p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                  <Building2 className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold">Co-operative</h3>
              </div>
              <ul className="mt-6 grid gap-2">
                {cooperatives.map((c) => (
                  <li
                    key={c}
                    className="rounded-xl border border-transparent bg-secondary/60 px-4 py-3 text-sm font-medium transition-all duration-300 hover:translate-x-1 hover:border-teal/40 hover:bg-card"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-card h-full p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy text-navy-foreground">
                  <Landmark className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold">Government & Corporate Market</h3>
              </div>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {corporateMarket.map((c) => (
                  <li
                    key={c}
                    className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/50 hover:shadow-[var(--shadow-soft)]"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-12">
            <p className="text-sm font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              1.1 — Extract of some of our appointment letters
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[photos.letter1, photos.letter2, photos.letter3].map((p) => (
                <img
                  key={p.url}
                  src={p.url}
                  alt={p.alt}
                  loading="lazy"
                  className="h-56 w-full rounded-2xl border border-border bg-card object-cover object-top shadow-[var(--shadow-soft)] transition-transform duration-500 hover:-translate-y-1"
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
