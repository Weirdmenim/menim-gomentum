const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const appDir = path.join(root, 'app');
const publicDir = path.join(root, 'public');
const pageData = require(path.join(root, 'data', 'pages.json'));

function fail(message) {
  console.error(`Validation failed: ${message}`);
  process.exit(1);
}

if (!fs.existsSync(path.join(root, 'package.json'))) fail('package.json missing');
if (!fs.existsSync(path.join(root, 'next.config.mjs'))) fail('next.config.mjs missing');
if (!fs.existsSync(path.join(appDir, 'layout.tsx'))) fail('app/layout.tsx missing');
if (!fs.existsSync(path.join(appDir, '[...slug]', 'page.tsx'))) fail('App Router dynamic page missing');
if (!fs.existsSync(path.join(publicDir, 'assets', 'app.js'))) fail('public/assets/app.js missing');
if (!fs.existsSync(path.join(publicDir, 'assets', 'styles.css'))) fail('public/assets/styles.css missing');
if (!fs.existsSync(path.join(publicDir, 'evidence'))) fail('public/evidence folder missing');

const requiredSlugs = [
  '/',
  '/product/',
  '/features/',
  '/how-it-works/',
  '/use-cases/',
  '/resources/',
  '/pricing/',
  '/faq/',
  '/contact/',
  '/privacy/',
  '/terms/',
  '/accessibility/',
  '/evidence/',
  '/adhd-task-initiation/',
  '/task-paralysis-guide/',
  '/resources/task-paralysis/',
  '/resources/adhd-task-initiation/',
  '/resources/how-to-start-when-overwhelmed/',
  '/resources/break-big-tasks-into-small-steps/',
  '/resources/why-to-do-lists-do-not-help-starting/',
  '/resources/brain-dump-productivity/'
];

const slugs = new Set(pageData.map((page) => page.slug));
for (const slug of requiredSlugs) {
  if (!slugs.has(slug)) fail(`required route missing from data/pages.json: ${slug}`);
}

for (const page of pageData) {
  if (!page.title || !page.description || !page.canonical || !page.bodyHtml) {
    fail(`metadata or body missing for ${page.slug}`);
  }
  if (!page.canonical.includes('gomentum-website.vercel.app')) {
    fail(`canonical is not the final site URL for ${page.slug}`);
  }
  const h1Count = (page.bodyHtml.match(/<h1[\s>]/g) || []).length;
  if (h1Count !== 1) fail(`${page.slug} should have one H1, found ${h1Count}`);
}

const serialized = JSON.stringify(pageData);
const banned = ['treats ADHD', 'cures procrastination', 'fixes executive dysfunction'];
for (const phrase of banned) {
  if (serialized.toLowerCase().includes(phrase.toLowerCase())) fail(`unsafe or placeholder phrase found: ${phrase}`);
}

console.log(`Validation passed: ${pageData.length} Next.js routes, metadata records, public assets, and evidence folders are present.`);
