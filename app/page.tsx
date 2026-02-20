import { CategoryCards } from "@/components/CategoryCards";
import { CTASection } from "@/components/CTASection";
import { HeroBanner } from "@/components/HeroBanner";
import { MaterialCards } from "@/components/MaterialCards";
import { RealizationShowcase } from "@/components/RealizationShowcase";
import { TrustSection } from "@/components/TrustSection";

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <CategoryCards />
      <MaterialCards />
      <RealizationShowcase />
      <TrustSection />
      <CTASection />
    </main>
  );
}
