import type { MetadataRoute } from 'next';
import { pages } from '@/lib/pageData';

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: page.canonical,
    lastModified: new Date('2026-06-03'),
    changeFrequency: page.slug.startsWith('/resources/') ? 'monthly' : 'weekly',
    priority: page.slug === '/' ? 1 : page.slug.startsWith('/resources/') ? 0.7 : 0.8
  }));
}
