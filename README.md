# Gomentum Website

A calm, mobile-first **Next.js App Router** website for Gomentum, a task initiation product for people who struggle to start tasks.

The website is built for the Website Growth, SEO & Conversion Optimization task. It includes product pages, SEO resource articles, conversion CTAs, accessibility pages, privacy and terms pages, and a proof/evidence area for final submission screenshots.

---

## What this build includes

- Real Next.js App Router structure
- 21 public pages
- SEO metadata for every page
- Canonical URLs per page
- Open Graph metadata
- Sitemap and robots routes
- Resources/blog hub with 6 SEO articles
- Article schema for resource pages
- FAQ schema for FAQ content
- SoftwareApplication and Organization schema
- Evidence & QA page for Lighthouse, WAVE, mobile, and form screenshots
- Accessible skip link, semantic structure, visible labels, and calm CTA language
- No fake testimonials, fake scores, fake waitlist numbers, or medical claims

---

## Page map

| Page | Route |
|---|---|
| Home | `/` |
| Product | `/product/` |
| Features | `/features/` |
| How It Works | `/how-it-works/` |
| Use Cases | `/use-cases/` |
| Resources | `/resources/` |
| Pricing | `/pricing/` |
| FAQ | `/faq/` |
| Contact | `/contact/` |
| Privacy | `/privacy/` |
| Terms | `/terms/` |
| Accessibility | `/accessibility/` |
| Evidence & QA | `/evidence/` |
| ADHD Task Initiation | `/adhd-task-initiation/` |
| Task Paralysis Guide | `/task-paralysis-guide/` |
| Blog: Task Paralysis | `/resources/task-paralysis/` |
| Blog: ADHD Task Initiation | `/resources/adhd-task-initiation/` |
| Blog: Start When Overwhelmed | `/resources/how-to-start-when-overwhelmed/` |
| Blog: Break Big Tasks Into Small Steps | `/resources/break-big-tasks-into-small-steps/` |
| Blog: To-Do Lists Not Helping | `/resources/why-to-do-lists-do-not-help-starting/` |
| Blog: Brain Dump Productivity | `/resources/brain-dump-productivity/` |

---

## Local setup

```bash
npm install
npm run build
npm run dev
```

Open:

```txt
http://localhost:3000
```

Run the project validation:

```bash
npm run validate
```

---

## Vercel deployment settings

Use these settings on Vercel:

```txt
Framework Preset: Next.js
Build Command: npm run build
Install Command: npm install
Root Directory: ./
```

Do **not** use the old static-site `dist` settings for this version. This package is now a real Next.js project.

---

## Important GitHub push rules

Do not push generated folders. They are ignored already, but keep this rule in mind:

```txt
Do not push: node_modules, .next, out, dist, .vercel
Do push: app, components, data, lib, public, scripts, package.json, next.config.mjs, tsconfig.json, README.md
```

The `.gitignore` is already configured to prevent the large generated files that caused GitHub's 100MB error earlier.

---

## Contact form setup

The contact form currently uses the placeholder endpoint:

```txt
https://formspree.io/f/YOUR_FORMSPREE_ID
```

Replace it only when a real Formspree endpoint is available.

---

## Evidence folder

The evidence folders are ready for final proof screenshots:

```txt
public/evidence/screenshots
public/evidence/lighthouse
public/evidence/wave
public/evidence/form-test
```

Use these folders for final mobile screenshots, Lighthouse results, WAVE results, and contact form tests.

---

## Final submission reminder

Before the final one-document submission pack, capture evidence for:

- Live website URL
- Mobile homepage screenshot
- Resources page screenshot
- Working blog route screenshot
- Sitemap screenshot
- Robots screenshot
- Lighthouse screenshot
- WAVE screenshot
- Contact form test screenshot
- Accessibility page screenshot
- Evidence & QA page screenshot
