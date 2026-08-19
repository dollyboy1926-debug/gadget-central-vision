import { Users, Building2, Briefcase, HeartHandshake } from "lucide-react";
import { Counter, Reveal, SectionHeading } from "./primitives";

const stats = [
  {
    value: 16000,
    suffix: "+",
    label: "Cooperatives in Malaysia",
    detail: "A large addressable cooperative network nationwide.",
    icon: Building2,
  },
  {
    value: 1.8,
    suffix: "M",
    label: "Government Servants",
    detail: "Total government servants across Malaysia.",
    icon: Briefcase,
    decimal: true,
  },
  {
    value: 100000,
    suffix: "",
    label: "Members Served",
    detail: "Serving up to 100,000 government servants nationwide.",
    icon: Users,
  },
  {
    value: 20,
    suffix: "",
    label: "Cooperative Accounts",
    detail: "Approximately 20 cooperative accounts nationwide.",
    icon: HeartHandshake,
  },
];

export function TargetMarket() {
  return (
    <section id="market" className="section-pad relative overflow-hidden">
      <div className="container-gc">
        <SectionHeading
          eyebrow="Target Market"
          title="Cooperatives, government institutions and the B40 segment"
          description="Our focus is the cooperative ecosystem and the members it serves across Malaysia."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, ...s }, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="surface-card hover-lift h-full p-7">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="font-display mt-5 text-3xl font-extrabold md:text-4xl">
                  {s.decimal ? (
                    <span>1.8M</span>
                  ) : (
                    <Counter value={s.value} suffix={s.suffix} />
                  )}
                </p>
                <p className="mt-2 text-sm font-bold tracking-wide text-foreground uppercase">
                  {s.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
