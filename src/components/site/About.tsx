import { Boxes, Handshake, Megaphone, Headphones, Truck, Wallet } from "lucide-react";
import { brand, photos } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./primitives";

const highlights = [
  { icon: Boxes, label: "Consumer product supply" },
  { icon: Truck, label: "Nationwide distribution" },
  { icon: Wallet, label: "Financing partnerships" },
  { icon: Handshake, label: "Cooperative relationships" },
  { icon: Megaphone, label: "Marketing & roadshows" },
  { icon: Headphones, label: "Service & after-sales support" },
];

const brands = ["Samsung", "Apple", "Huawei", "Panasonic", "Honor"];

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="container-gc">
        <SectionHeading
          eyebrow="About Us"
          title="A trusted end-to-end distribution & financing partner"
          description={`${brand.name} (Registration No. ${brand.regNo}) is a Malaysian company established in 2015, serving cooperative members nationwide.`}
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground md:text-base">
            <Reveal>
              <p>
                The company's core business activities include the supply and distribution of
                gadgets, laptops, home appliances, water filtration systems, 916 gold jewellery, and
                motorcycles. Gadget Central is committed to providing high-quality products from
                reputable brands while ensuring excellent customer service and reliable after-sales
                support. The company operates with a professional and experienced sales and
                operations team, supported by established relationships with multiple cooperatives
                with financing capabilities.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p>
                To enhance market reach and customer engagement, Gadget Central adopts innovative
                marketing strategies by organising promotional roadshows at government institutions
                with approval. This approach allows the company to introduce its products and
                services directly to consumers while strengthening brand presence in the market.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p>
                All products supplied by the company are supported by official manufacturer
                warranties, ensuring product authenticity and customer confidence. Gadget Central is
                also an authorised distributor for several internationally recognised brands.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {brands.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)]"
                  >
                    {b}
                  </span>
                ))}
                <span className="text-sm">and other leading manufacturers</span>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <ul className="grid gap-3 pt-4 sm:grid-cols-2">
                {highlights.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="surface-card hover-lift flex items-center gap-3 px-4 py-3"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={photos.teamSetup.url}
                alt={photos.teamSetup.alt}
                loading="lazy"
                className="col-span-2 h-52 w-full rounded-[1.75rem] border border-border object-cover shadow-[var(--shadow-lift)] md:h-64"
              />
              <img
                src={photos.goldRoadshow.url}
                alt={photos.goldRoadshow.alt}
                loading="lazy"
                className="h-56 w-full rounded-[1.5rem] border border-border object-cover shadow-[var(--shadow-soft)] md:h-72"
              />
              <img
                src={photos.roadshowCounter.url}
                alt={photos.roadshowCounter.alt}
                loading="lazy"
                className="h-56 w-full rounded-[1.5rem] border border-border object-cover shadow-[var(--shadow-soft)] md:h-72"
              />
            </div>
            <div className="surface-card mt-4 flex items-center justify-between gap-4 px-5 py-4">
              <div>
                <p className="font-display text-2xl font-extrabold">2015</p>
                <p className="text-xs text-muted-foreground">Established in Malaysia</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="font-display text-2xl font-extrabold">{brand.regNo}</p>
                <p className="text-xs text-muted-foreground">Registration No.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
