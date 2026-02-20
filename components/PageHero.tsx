export function PageHero({ title, description }: { title: string; description: string }) {
  return (
    <section className="bg-brand-surface py-14">
      <div className="container-main">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <p className="mt-4 max-w-3xl text-slate-700">{description}</p>
      </div>
    </section>
  );
}
