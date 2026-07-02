import type { Metadata } from "next";

import { ComplianceBlock } from "@/components/ComplianceBlock";
import { ContentTypes } from "@/components/ContentTypes";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PartnerCTA } from "@/components/PartnerCTA";
import { ResponsibleGamingBlock } from "@/components/ResponsibleGamingBlock";

export const metadata: Metadata = {
  title: "Home",
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
