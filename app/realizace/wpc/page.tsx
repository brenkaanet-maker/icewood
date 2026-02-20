import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { realizations } from "@/data/realizations";

export const metadata: Metadata = { title: "Realizace Wpc | IceWood", description: "Ukázky realizací kategorie wpc." };

export default function Page() {
  const filtered = realizations.filter((r) => r.category === "wpc");
  return (
    <main>
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Realizace", href: "/realizace" }, { label: "Wpc" }]} />
      <PageHero title="Realizace – Wpc" description="Reference vybraných projektů v této kategorii." />
      <section className="container-main py-12 grid gap-5 md:grid-cols-2">
        {filtered.map((item) => (
          <article key={item.id} className="card p-0 overflow-hidden"><img src={item.image} alt={item.title} className="h-56 w-full object-cover"/><div className="p-5"><h2 className="text-xl font-bold">{item.title}</h2><p className="text-sm text-slate-600">{item.location} • {item.material}</p><p className="mt-2">{item.description}</p></div></article>
        ))}
      </section>
    </main>
  );
}
