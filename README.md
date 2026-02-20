# IceWood s.r.o. web (Next.js)

Profesionální statický frontend připravený pro produkční nasazení a budoucí napojení formuláře/CMS.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Spuštění
```bash
npm install
npm run dev
```
Aplikace poběží na `http://localhost:3000`.

## Build
```bash
npm run build
npm run start
```

## Struktura projektu
```text
app/
  page.tsx
  terasy/... fasady/... interier/... sauny/...
  realizace/... o-nas/ kontakt/ poptavka/ dubove-rezivo/
  layout.tsx globals.css robots.ts sitemap.ts
components/
  Header TopBar HeroBanner CategoryCards MaterialCards
  RealizationShowcase TrustSection CTASection Footer
  PageHero FAQAccordion ContactForm Breadcrumbs ProductSpecsTable ProductPageTemplate
data/
  products.ts realizations.ts navigation.ts
public/assets/
  logo/ hero/ products/ realizations/
```

## SEO a obsah
- Každá stránka má vlastní `metadata` (`title`, `description`).
- Připravené `robots.ts` a `sitemap.ts`.
- JSON-LD (`Organization`, `LocalBusiness`) v `app/layout.tsx`.
- Interní prolinkování mezi produktovými kategoriemi, realizacemi a poptávkou.

## Poznámky k assetům
- Logo a fotografie jsou aktuálně placeholdery ve složce `public/assets`.
- `TODO` poznámky v projektu označují místa pro doplnění reálných kontaktů/fotek/katalogových podkladů.

## Připravenost na CMS
Obsah je centralizovaný v `data/products.ts` a `data/realizations.ts`, aby šel snadno nahradit headless CMS (Sanity/Strapi/WordPress Headless) bez zásahu do layout komponent.
