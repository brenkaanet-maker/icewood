import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { realizations } from "@/data/realizations";

export const metadata: Metadata = { title: "Realizace | IceWood", description: "Ukázky realizací teras, fasád a WPC projektů od IceWood s.r.o." };

export default function Page() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Realizace" }]} />
      <PageHero title="Realizace" description="Reference projektů teras, fasád a WPC ploch. Další realizace lze snadno přidat přes datový soubor." />
      <section className="container-main py-12">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link href="/realizace/terasy" className="btn-secondary">Terasy</Link>
          <Link href="/realizace/fasady" className="btn-secondary">Fasády</Link>
          <Link href="/realizace/wpc" className="btn-secondary">WPC</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {realizations.map((item) => (
            <article key={item.id} className="card p-0 overflow-hidden"><img src={item.image} alt={item.title} className="h-56 w-full object-cover"/><div className="p-5"><h2 className="text-xl font-bold">{item.title}</h2><p className="text-sm text-slate-600">{item.location} • {item.material}</p><p className="mt-2">{item.description}</p></div></article>
          ))}
        </div>
      </section>
    </main>
  );
}
