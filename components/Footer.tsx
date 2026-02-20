import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-brand-border bg-brand-surface py-12">
      <div className="container-main grid gap-8 md:grid-cols-3">
        <div>
          <img src="/assets/logo/icewood-logo.svg" alt="IceWood logo" className="h-10 w-auto" />
          <p className="mt-3 text-sm text-slate-600">TODO: Doplnit přesnou adresu sídla a IČO.</p>
        </div>
        <div>
          <h3 className="font-bold">Rychlé odkazy</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/terasy">Terasy</Link></li><li><Link href="/fasady">Fasády</Link></li><li><Link href="/realizace">Realizace</Link></li><li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Kontakt</h3>
          <p className="mt-3 text-sm">+420 777 000 000<br/>info@icewood.cz<br/>TODO: adresa showroomu/skladu</p>
        </div>
      </div>
    </footer>
  );
}
