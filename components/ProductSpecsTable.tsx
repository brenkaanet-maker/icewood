export function ProductSpecsTable({ specs }: { specs: { label: string; value: string }[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold">Parametry / varianty</h2>
      <div className="mt-4 overflow-hidden rounded-card border border-brand-border">
        {specs.map((spec) => (
          <div key={spec.label} className="grid grid-cols-1 border-b border-brand-border p-4 sm:grid-cols-[220px_1fr]">
            <strong>{spec.label}</strong>
            <span>{spec.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
