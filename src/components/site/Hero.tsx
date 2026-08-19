import { ArrowRight, ShieldCheck, MapPinned, Building2 } from "lucide-react";
import { brand, photos } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Reveal, WaveBackdrop } from "./primitives";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />
      <WaveBackdrop className="top-[-8%] right-[-25%] -z-10 h-[130%] w-[95%] text-primary/70" />
      <div
        aria-hidden="true"
        className="gc-float absolute -top-24 -left-24 -z-10 h-80 w-80 rounded-full bg-teal/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="gc-float absolute right-[10%] bottom-0 -z-10 h-72 w-72 rounded-full bg-indigo/20 blur-3xl"
        style={{ animationDelay: "2.5s" }}
      />

      <div className="container-gc grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-16 w-16 object-contain md:h-20 md:w-20"
              />
              <div className="h-12 w-px bg-border" />
              <div className="leading-tight">
                <p className="font-display text-sm font-extrabold tracking-tight md:text-base">
                  GADGET CENTRAL SDN BHD
                </p>
                <p className="text-xs text-muted-foreground">
                  Registration No. {brand.regNo} · Established 2015
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-8 text-4xl leading-[1.05] font-extrabold text-balance md:text-6xl">
              Driving <span className="text-gradient-brand">Smart Consumer Solutions</span> Across
              Malaysia
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Your trusted end-to-end consumer product distribution and financing partner for
              cooperative members.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <a href="#products">
                  Explore Our Solutions <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="outlineBrand" size="lg">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4">
              {[
                { icon: MapPinned, k: "14", v: "States covered" },
                { icon: Building2, k: "20", v: "Cooperatives" },
                { icon: ShieldCheck, k: "50+", v: "Brands" },
              ].map(({ icon: Icon, k, v }) => (
                <div key={v} className="surface-card px-4 py-4">
                  <Icon className="h-4 w-4 text-teal" />
                  <dt className="font-display mt-3 text-2xl font-extrabold">{k}</dt>
                  <dd className="text-xs text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={180} className="relative">
          <div className="relative grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-lift)]">
              <img
                src={photos.roadshowCounter.url}
                alt={photos.roadshowCounter.alt}
                className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-72"
                loading="eager"
              />
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-border shadow-[var(--shadow-soft)]">
              <img
                src={photos.goldRoadshow.url}
                alt={photos.goldRoadshow.alt}
                className="h-44 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-56"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-border shadow-[var(--shadow-soft)]">
              <img
                src={photos.oppoCustomer.url}
                alt={photos.oppoCustomer.alt}
                className="h-44 w-full object-cover object-top transition-transform duration-700 hover:scale-105 md:h-56"
                loading="lazy"
              />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute -right-6 -bottom-6 -z-10 h-40 w-40 rounded-3xl bg-[image:var(--gradient-brand)] opacity-20 blur-2xl"
          />
        </Reveal>
      </div>
    </section>
  );
}
