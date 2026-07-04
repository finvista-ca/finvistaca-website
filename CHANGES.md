# Changes Applied — Missing Features Fixed

All items from MISSING_FEATURES.md addressed. Brand = Finvista. Forms are UI-only
(success message, no backend). News + Due Dates use a real current snapshot editable in src/data/.

## Broken menu links (were 404) — now built
- 29 Knowledge Base pages (Tools, Important Links, Acts) via src/data/kbResourceContent.ts +
  src/pages/knowledge-base/KbGeneric.tsx, wired in src/pageMappings.ts. Real reference tables
  (income-tax rates, TDS, depreciation, CII, ROC fees, LLP/Competition/Cost-Accountants/Societies
  Acts) ported from legacy; Important Links + a few acts link to official government portals.
- GST Orders and GST Instructions pages, mapped in pageMappings.ts.
- Footer links: RBI Policy -> RBI Sachet; Data Collection Policy -> new /data-policy page;
  the four Services links now point to real service pages.
- Home "Latest Updates" no longer links to the missing /news/:id; items open the source article.

## Real data (replaced 2023 placeholders)
- News: shared src/data/newsData.ts (2026 snapshot) used by the News page and home section.
- Due Dates: src/data/dueDatesData.ts with live days-left; new full /due-dates calendar with month tabs.
- Testimonials: the 6 real client reviews from the legacy site.

## New sections / components
- Header top bar: phones, email, social icons (LinkedIn, X, Facebook, Instagram, WhatsApp).
- Associations home section.
- Get a Call Back floating popup on every page.

## Content / branding fixes
- "Ark Associates" -> Finvista; ServiceLayout "IRK & Associates" -> Finvista; placeholder phone/email -> real.

## Verification
- tsc -b passes clean. Every KB/GST/Calculator slug and all 69 service slugs resolve (no 404s).
- Run npm run build / npm run dev on the Mac: this Linux sandbox can't use the macOS node_modules (rolldown) binaries.
