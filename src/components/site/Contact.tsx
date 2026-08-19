import { Phone, Mail, MapPin } from "lucide-react";
import { brand } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading, WaveBackdrop } from "./primitives";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden"
      style={{ backgroundImage: "var(--gradient-navy)" }}
    >
      <WaveBackdrop className="right-[-20%] bottom-[-50%] h-[160%] w-[90%] text-teal/50" />
      <div className="container-gc relative">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's build a stronger cooperative partnership"
          tone="dark"
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <Reveal>
            <div className="hover-lift h-full rounded-[1.75rem] border border-white/12 bg-white/[0.06] p-7 backdrop-blur-sm">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal text-teal-foreground">
                <Phone className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-bold text-navy-foreground">Phone</h3>
              <a
                href={`tel:${brand.phone1.replace(/[^\d+]/g, "")}`}
                className="mt-2 block text-navy-foreground/80 transition-colors hover:text-teal"
              >
                {brand.phone1}
              </a>
              <a
                href={`tel:${brand.phone2.replace(/[^\d+]/g, "")}`}
                className="block text-navy-foreground/80 transition-colors hover:text-teal"
              >
                {brand.phone2}
              </a>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="hover-lift h-full rounded-[1.75rem] border border-white/12 bg-white/[0.06] p-7 backdrop-blur-sm">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal text-teal-foreground">
                <Mail className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-bold text-navy-foreground">Email</h3>
              <a
                href={`mailto:${brand.email}`}
                className="mt-2 block break-all text-navy-foreground/80 transition-colors hover:text-teal"
              >
                {brand.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="hover-lift h-full rounded-[1.75rem] border border-white/12 bg-white/[0.06] p-7 backdrop-blur-sm">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal text-teal-foreground">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-bold text-navy-foreground">Address</h3>
              <address className="mt-2 text-navy-foreground/80 not-italic">
                {brand.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild variant="onNavy" size="lg">
              <a href={`mailto:${brand.email}`}>Email Us</a>
            </Button>
            <Button asChild variant="ghostNavy" size="lg">
              <a href={`tel:${brand.phone2.replace(/[^\d+]/g, "")}`}>Call {brand.phone2}</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
