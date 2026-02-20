import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16">
      <div className="container-main">
        <div className="rounded-3xl bg-gradient-to-r from-brand-graphite via-brand-blue to-brand-red p-10 text-white">
          <h2 className="text-3xl font-bold">Potřebujete nabídku na míru?</h2>
          <p className="mt-3 max-w-3xl">Cenu připravujeme individuálně podle materiálu, rozměrů a rozsahu realizace. Ozvěte se nám a navrhneme optimální řešení.</p>
          <Link href="/poptavka" className="mt-6 btn-primary">Přejít na poptávku</Link>
        </div>
      </div>
    </section>
  );
}
