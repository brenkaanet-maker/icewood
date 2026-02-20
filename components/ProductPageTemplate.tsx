import Link from "next/link";
import { ProductContent } from "@/data/products";
import { Breadcrumbs } from "./Breadcrumbs";
import { CTASection } from "./CTASection";
import { FAQAccordion } from "./FAQAccordion";
import { PageHero } from "./PageHero";
import { ProductSpecsTable } from "./ProductSpecsTable";

export function ProductPageTemplate({ content, parentLabel }: { content: ProductContent; parentLabel: string }) {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: parentLabel, href: content.slug.split('/').slice(0,2).join('/') || '/' }, { label: content.title }]} />
      <PageHero title={content.title} description={content.intro} />
      <section className="container-main py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="card"><h2 className="text-2xl font-bold">Použití</h2><ul className="mt-4 list-disc space-y-2 pl-5">{content.usage.map((u)=><li key={u}>{u}</li>)}</ul></article>
          <article className="card"><h2 className="text-2xl font-bold">Výhody</h2><ul className="mt-4 list-disc space-y-2 pl-5">{content.benefits.map((b)=><li key={b}>{b}</li>)}</ul></article>
        </div>
        <ProductSpecsTable specs={content.specs} />
        <section className="mt-10"><h2 className="text-2xl font-bold">Související odkazy</h2><div className="mt-4 flex flex-wrap gap-3">{content.related.map((r)=><Link key={r.href} href={r.href} className="btn-secondary">{r.label}</Link>)}</div></section>
        <FAQAccordion faq={content.faq} />
      </section>
      <CTASection />
    </main>
  );
}
