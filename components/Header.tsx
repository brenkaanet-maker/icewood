import Link from "next/link";
import { navigationItems } from "@/data/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/95 backdrop-blur">
      <div className="container-main flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/assets/logo/icewood-logo.svg" alt="IceWood logo" className="h-10 w-auto" />
          <span className="hidden text-sm font-semibold text-brand-graphite sm:block">IceWood s.r.o.</span>
        </Link>
        <nav aria-label="Hlavní navigace" className="hidden items-center gap-5 lg:flex">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium hover:text-brand-blue">
              {item.label}
            </Link>
          ))}
          <Link href="/poptavka" className="btn-primary">Poptávka</Link>
        </nav>
        <Link href="/poptavka" className="btn-primary lg:hidden">Poptávka</Link>
      </div>
    </header>
  );
}
