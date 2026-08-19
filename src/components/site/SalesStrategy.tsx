import { Truck, PackageCheck, Globe, Share2, PhoneCall, Handshake } from "lucide-react";
import { salesStrategy, photos } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./primitives";

const icons = [Truck, PackageCheck, Globe, Share2, PhoneCall, Handshake];

export function SalesStrategy() {
  return (
    <section id="strategy" className="section-pad relative overflow-hidden bg-cream">
      <div className="container-gc">
        <SectionHeading
          eyebrow="Sales Strategy"
          title="On-ground presence backed by digital reach"
          description="A multi-channel strategy built around trust, physical presence and long-term cooperative relationships."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {salesStrategy.map((s, i) => {
              const Icon = icons[i] ?? Truck;
              return (
                <Reveal as="article" key={s.title} delay={i * 60}>
                  <div className="surface-card hover-lift h-full p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={140} className="grid gap-4 self-start">
            <img
              src={photos.oppoCustomer.url}
              alt={photos.oppoCustomer.alt}
              loading="lazy"
              className="h-72 w-full rounded-[2rem] border border-border object-cover object-center shadow-[var(--shadow-lift)]"
            />
            <img
              src={photos.goldRoadshow.url}
              alt={photos.goldRoadshow.alt}
              loading="lazy"
              className="h-56 w-full rounded-[2rem] border border-border object-cover shadow-[var(--shadow-soft)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
