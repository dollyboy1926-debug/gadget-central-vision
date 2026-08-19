import { strengths } from "@/lib/site-data";
import { Counter, Reveal, SectionHeading, WaveBackdrop } from "./primitives";

export function Strengths() {
  return (
    <section
      id="strengths"
      className="section-pad relative overflow-hidden"
      style={{ backgroundImage: "var(--gradient-navy)" }}
    >
      <WaveBackdrop className="right-[-20%] bottom-[-40%] h-[140%] w-[85%] text-sky/50" />
      <div className="container-gc relative">
        <SectionHeading
          eyebrow="Core Strengths"
          title="Proven experience across the cooperative market"
          tone="dark"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="hover-lift h-full rounded-[1.75rem] border border-white/12 bg-white/[0.06] p-7 backdrop-blur-sm">
                <p className="font-display text-4xl font-extrabold text-teal md:text-5xl">
                  <Counter value={s.value} prefix={s.prefix ?? ""} suffix={s.suffix ?? ""} />
                </p>
                <p className="mt-3 text-sm font-bold tracking-[0.14em] text-navy-foreground uppercase">
                  {s.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
