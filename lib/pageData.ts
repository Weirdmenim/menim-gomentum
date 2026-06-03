import rawPages from '@/data/pages.json';

export type SitePage = {
  slug: string;
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  bodyData: string;
  h1: string;
  jsonLd: string[];
  bodyHtml: string;
};

export const siteUrl = 'https://gomentum-website.vercel.app';

export const pages = rawPages as SitePage[];

export function normalizeSlug(slug?: string[] | string): string {
  if (!slug || (Array.isArray(slug) && slug.length === 0)) return '/';
  const joined = Array.isArray(slug) ? slug.join('/') : slug;
  return `/${joined.replace(/^\/+|\/+$/g, '')}/`;
}

export function getPageBySlug(slug: string): SitePage | undefined {
  const normalized = normalizeSlug(slug);
  return pages.find((page) => page.slug === normalized || page.slug.replace(/\/$/, '') === normalized.replace(/\/$/, ''));
}

export function routeToParams(slug: string): string[] {
  if (slug === '/') return [];
  return slug.replace(/^\/+|\/+$/g, '').split('/');
}
