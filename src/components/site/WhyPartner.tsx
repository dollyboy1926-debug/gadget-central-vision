import { Check } from "lucide-react";
import { whyPartner, faqs } from "@/lib/site-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./primitives";

export function WhyPartner() {
  return (
    <section className="section-pad relative overflow-hidden bg-cream">
      <div className="container-gc">
        <SectionHeading eyebrow="Why Partner With Us" title="Reasons cooperatives choose GCSB" />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {whyPartner.map((w, i) => (
            <Reveal key={w} delay={i * 40}>
              <div className="surface-card flex items-center gap-3 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/50">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-primary-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium">{w}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <Reveal delay={100}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
