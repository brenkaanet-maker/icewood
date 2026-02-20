export function FAQAccordion({ faq }: { faq: { q: string; a: string }[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold">Časté dotazy</h2>
      <div className="mt-4 space-y-3">
        {faq.map((item) => (
          <details key={item.q} className="card">
            <summary className="cursor-pointer font-semibold">{item.q}</summary>
            <p className="mt-3 text-slate-700">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
