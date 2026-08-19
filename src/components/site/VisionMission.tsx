import { Eye, Target, Check } from "lucide-react";
import { missionPoints } from "@/lib/site-data";
import { Reveal, SectionHeading, WaveBackdrop } from "./primitives";

export function VisionMission() {
  return (
    <section
      id="vision"
      className="section-pad relative overflow-hidden"
      style={{ backgroundImage: "var(--gradient-navy)" }}
    >
      <WaveBackdrop className="top-[-20%] left-[-10%] h-[140%] w-[80%] text-teal/50" />
      <div className="container-gc relative">
        <SectionHeading
          eyebrow="Vision & Mission"
          title="Built for affordability, accessibility and long-term well-being"
          tone="dark"
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="hover-lift rounded-[2rem] border border-white/12 bg-white/[0.06] p-8 backdrop-blur-sm md:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal text-teal-foreground">
              <Eye className="h-5 w-5" />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-navy-foreground">Vision</h3>
            <p className="mt-4 text-lg leading-relaxed text-navy-foreground/80">
              To become a leading and trusted end-to-end consumer financing and distribution partner
              for cooperatives all around Malaysia.
            </p>
            <p className="mt-4 leading-relaxed text-navy-foreground/70">
              To serve the B40 segment by enabling access to essential consumer and technology
              products through a structured and responsible financing ecosystem — ensuring
              affordability, sustainability, and long-term financial well-being.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Affordability", "Sustainability", "Accessibility", "Financial well-being"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-teal/40 px-3 py-1.5 text-xs font-semibold tracking-wide text-teal uppercase"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </Reveal>

          <Reveal
            delay={120}
            className="hover-lift rounded-[2rem] border border-white/12 bg-white/[0.06] p-8 backdrop-blur-sm md:p-10"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground">
              <Target className="h-5 w-5" />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-navy-foreground">Mission</h3>
            <ul className="mt-6 space-y-4">
              {missionPoints.map((p, i) => (
                <li
                  key={p}
                  style={{ transitionDelay: `${i * 60}ms` }}
                  className="flex gap-3 text-navy-foreground/80"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal/20 text-teal">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
