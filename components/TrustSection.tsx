export function TrustSection() {
  const reasons = [
    "Široký sortiment dřevěných i WPC materiálů",
    "Technické poradenství a návrh skladby",
    "Zkušenosti s realizacemi teras a fasád",
    "Individuální nabídky přesně podle projektu"
  ];
  return (
    <section className="bg-brand-surface py-16">
      <div className="container-main">
        <h2 className="text-3xl font-bold">Proč si vybrat IceWood</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason} className="card"><p className="font-semibold">✓ {reason}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
