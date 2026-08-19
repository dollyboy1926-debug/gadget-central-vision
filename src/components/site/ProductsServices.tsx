import {
  Smartphone,
  Laptop,
  WashingMachine,
  Droplets,
  Gem,
  Bike,
  BadgeCheck,
  ShieldCheck,
  Store,
  LineChart,
  Layers,
  Coins,
  Users,
  Sprout,
} from "lucide-react";
import { products, services, photos } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./primitives";

const productIcons = [Smartphone, Laptop, WashingMachine, Droplets, Gem, Bike];
const serviceIcons = [LineChart, Layers, Coins, Users, Sprout];

export function ProductsServices() {
  return (
    <section id="products" className="section-pad relative overflow-hidden">
      <div className="container-gc">
        <SectionHeading
          eyebrow="Products & Services"
          title="A comprehensive range of high-demand consumer products"
          description="Carefully curated product selection to meet evolving consumer needs and market demand."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => {
            const Icon = productIcons[i] ?? Smartphone;
            return (
              <Reveal as="article" key={p.title} delay={i * 60}>
                <div className="surface-card hover-lift group h-full overflow-hidden p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-[image:var(--gradient-brand)] group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 grid gap-4 rounded-[2rem] border border-border bg-secondary/50 p-6 sm:grid-cols-3 md:p-8">
            {[
              { icon: BadgeCheck, t: "100% Authentic", d: "All products sold are genuine." },
              {
                icon: ShieldCheck,
                t: "Manufacturer Warranty",
                d: "Covered under warranty nationwide.",
              },
              {
                icon: Store,
                t: "Authorised Distributors",
                d: "Sourced from authorised distributors.",
              },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <div>
                  <p className="font-semibold">{t}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-20 grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="lg:sticky lg:top-28">
            <img
              src={photos.teamSetup.url}
              alt={photos.teamSetup.alt}
              loading="lazy"
              className="h-64 w-full rounded-[2rem] border border-border object-cover shadow-[var(--shadow-lift)] md:h-96"
            />
            <div className="mt-6">
              <h3 className="text-2xl font-bold md:text-3xl">Cooperative Services</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Beyond product supply, we work alongside cooperatives to grow member participation
                and long-term income.
              </p>
              <Button asChild variant="hero" className="mt-6">
                <a href="#contact">Become a Cooperative Partner</a>
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {services.map((s, i) => {
              const Icon = serviceIcons[i] ?? LineChart;
              return (
                <Reveal as="article" key={s.title} delay={i * 70}>
                  <div className="surface-card group flex items-start gap-4 p-6 hover:-translate-y-1 hover:border-teal/50">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground opacity-90 transition-opacity group-hover:opacity-100">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-bold">{s.title}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {s.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
