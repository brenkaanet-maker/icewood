import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "O nás | IceWood", description: "IceWood s.r.o. – dodavatel dřevěných a WPC materiálů s důrazem na kvalitu a realizace." };

export default function Page() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "O nás" }]} />
      <PageHero title="O nás" description="IceWood s.r.o. je partner pro architekty, firmy i koncové zákazníky, kteří hledají kvalitní materiál a technickou jistotu." />
      <section className="container-main py-12 space-y-4 text-slate-700">
        <p>Specializujeme se na dřevěné a WPC materiály pro terasy, fasády, interiéry a sauny. Kromě dodávky materiálu nabízíme také realizace na klíč.</p>
        <p>Zakládáme si na kvalitním výběru dřevin, správné skladbě konstrukcí a individuálním přístupu ke každé zakázce.</p>
        <p>TODO: doplnit historii firmy, tým a přesné reference.</p>
      </section>
    </main>
  );
}
