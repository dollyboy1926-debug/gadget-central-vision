import { ArrowRight } from "lucide-react";
import { businessFlow } from "@/lib/site-data";
import { Reveal, SectionHeading, WaveBackdrop } from "./primitives";

export function BusinessModel() {
  return (
    <section
      id="model"
      className="section-pad relative overflow-hidden"
      style={{ backgroundImage: "var(--gradient-navy)" }}
    >
      <WaveBackdrop className="top-[-30%] left-[-15%] h-[150%] w-[90%] text-indigo/60" />
      <div className="container-gc relative">
        <SectionHeading
          eyebrow="Business Model"
          title="Product supply integrated with cooperative financing"
          description="Our model integrates product supply with cooperative financing, enabling customers to purchase essential goods through structured repayment schemes."
          tone="dark"
          align="center"
        />

        <div className="mt-14 flex flex-wrap items-stretch justify-center gap-3">
          {businessFlow.map((step, i) => (
            <Reveal key={step} delay={i * 90} className="flex items-center gap-3">
              <div className="hover-lift flex min-w-[190px] flex-col gap-2 rounded-2xl border border-white/12 bg-white/[0.06] px-5 py-5 backdrop-blur-sm">
                <span className="font-display text-xs font-bold tracking-[0.2em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold text-navy-foreground">{step}</span>
              </div>
              {i < businessFlow.length - 1 ? (
                <ArrowRight className="hidden h-5 w-5 shrink-0 text-teal/70 lg:block" />
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
