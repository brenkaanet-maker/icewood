import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Kontakt | IceWood", description: "Kontaktujte IceWood s.r.o. pro poptávku dřevěných a WPC materiálů i realizací." };

export default function Page() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Kontakt" }]} />
      <PageHero title="Kontakt" description="Ozvěte se nám pro technické konzultace, výběr materiálu i cenovou nabídku na míru." />
      <section className="container-main py-12 grid gap-6 lg:grid-cols-2">
        <div className="card"><h2 className="text-2xl font-bold">Kontaktní údaje</h2><p className="mt-4">IceWood s.r.o.<br/>+420 777 000 000<br/>info@icewood.cz<br/>TODO: doplnit adresu a IČO</p></div>
        <ContactForm />
      </section>
    </main>
  );
}
