import Link from "next/link";

const categories = [
  ["Terasy", "/terasy"], ["Fasády", "/fasady"], ["Interiér", "/interier"], ["Sauny", "/sauny"], ["Dubové řezivo", "/dubove-rezivo"], ["Realizace", "/realizace"]
];

export function CategoryCards() {
  return (
    <section className="container-main py-16">
      <h2 className="text-3xl font-bold">Hlavní rozcestník webu</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(([name, href]) => (
          <Link key={name} href={href} className="card hover:border-brand-blue">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="mt-2 text-slate-600">Detail produktů, použití, parametrů i doporučených realizací.</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
