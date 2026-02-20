import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Poptávka | IceWood", description: "Nezávazná poptávka materiálu nebo realizace. Ceny připravujeme individuálně dle rozsahu." };

export default function Page() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Poptávka" }]} />
      <PageHero title="Nezávazná poptávka" description="Pošlete nám základní informace o projektu. Připravíme doporučení materiálu i cenovou nabídku." />
      <section className="container-main py-12"><ContactForm /></section>
    </main>
  );
}
