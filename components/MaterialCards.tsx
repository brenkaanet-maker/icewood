import Link from "next/link";

const materials = [
  { title: "Sibiřský modřín", href: "/terasy/sibirsky-modrin" },
  { title: "Exotická Garapa", href: "/terasy/garapa" },
  { title: "WPC prkna", href: "/terasy/wpc" },
  { title: "Akustické panely", href: "/interier/akusticke-panely" }
];

export function MaterialCards() {
  return (
    <section className="bg-brand-surface py-16">
      <div className="container-main">
        <h2 className="text-3xl font-bold">Oblíbené materiály a produktové řady</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {materials.map((material) => (
            <Link href={material.href} key={material.title} className="card">
              <h3 className="text-lg font-bold">{material.title}</h3>
              <p className="mt-1 text-sm text-slate-600">Technické parametry, varianty a použití.</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
