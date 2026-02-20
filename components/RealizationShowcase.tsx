import Link from "next/link";
import { realizations } from "@/data/realizations";

export function RealizationShowcase() {
  const featured = realizations.slice(0, 3);
  return (
    <section className="container-main py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-bold">Ukázky realizací</h2>
        <Link href="/realizace" className="text-sm font-semibold text-brand-blue">Všechny realizace →</Link>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {featured.map((item) => (
          <article key={item.id} className="card p-0 overflow-hidden">
            <img src={item.image} alt={item.title} className="h-52 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.location} • {item.material}</p>
              <p className="mt-2 text-sm text-slate-700">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
