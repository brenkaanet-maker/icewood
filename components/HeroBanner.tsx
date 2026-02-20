import Link from "next/link";

export function HeroBanner() {
  const tags = ["Sibiřský modřín", "Garapa", "WPC", "Akustické panely", "Saunové profily"];
  return (
    <section className="relative isolate overflow-hidden">
      <img src="/assets/hero/hero_garapa.svg" alt="Dřevem obložená terasa IceWood" className="h-[560px] w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-graphite/80 to-brand-blue/55" />
      <div className="container-main absolute inset-0 flex flex-col justify-center py-16 text-white">
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">Prémiové dřevěné a WPC materiály pro terasy, fasády i interiér</h1>
        <p className="mt-5 max-w-2xl text-lg">Spolehlivá dodávka, technické poradenství a profesionální realizace. IceWood s.r.o. je partner pro projekty, které mají vydržet.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/poptavka" className="btn-primary">Nezávazná poptávka</Link>
          <Link href="/terasy" className="btn-secondary">Prohlédnout sortiment</Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag) => <span key={tag} className="rounded-full border border-white/50 bg-white/10 px-3 py-1 text-xs font-semibold">{tag}</span>)}
        </div>
      </div>
      <div className="container-main relative -mt-16 grid gap-4 pb-8 md:grid-cols-3">
        {["Široký sortiment", "Dodávka + realizace", "Ceny na míru"].map((item) => (
          <article key={item} className="card bg-white/95">
            <h2 className="text-xl font-bold">{item}</h2>
            <p className="mt-2 text-sm text-slate-600">Návrh vhodné skladby materiálů i individuální nabídka dle projektu.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
