import type { Metadata } from "next";

import { ComplianceBlock } from "@/components/ComplianceBlock";
import { ContentTypes } from "@/components/ContentTypes";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PartnerCTA } from "@/components/PartnerCTA";
import { ResponsibleGamingBlock } from "@/components/ResponsibleGamingBlock";

export const metadata: Metadata = {
  title: "FATRO Tips | Alertas pré-jogo +18",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <ContentTypes />
      <ResponsibleGamingBlock />
      <ComplianceBlock />
      <PartnerCTA />
    </main>
  );
}
