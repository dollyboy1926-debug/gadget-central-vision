import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { VisionMission } from "@/components/site/VisionMission";
import { Milestones } from "@/components/site/Milestones";
import { ProductsServices } from "@/components/site/ProductsServices";
import { Strengths } from "@/components/site/Strengths";
import { Clientele } from "@/components/site/Clientele";
import { TargetMarket } from "@/components/site/TargetMarket";
import { BusinessModel } from "@/components/site/BusinessModel";
import { SalesStrategy } from "@/components/site/SalesStrategy";
import { Operations } from "@/components/site/Operations";
import { WhyPartner } from "@/components/site/WhyPartner";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "Gadget Central Sdn Bhd | Cooperative Consumer Distribution & Financing";
const description =
  "Gadget Central Sdn Bhd is a Malaysian end-to-end consumer product distribution and financing partner for cooperatives since 2015 — gadgets, appliances, 916 gold and motorbikes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Milestones />
        <ProductsServices />
        <Strengths />
        <Clientele />
        <TargetMarket />
        <BusinessModel />
        <SalesStrategy />
        <Operations />
        <WhyPartner />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
