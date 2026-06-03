import type { Metadata } from 'next';
import { PageBody } from '@/components/PageBody';
import { getPageBySlug } from '@/lib/pageData';

const page = getPageBySlug('/');

export const metadata: Metadata = page
  ? {
      title: page.title,
      description: page.description,
      alternates: { canonical: page.canonical },
      openGraph: {
        title: page.ogTitle || page.title,
        description: page.ogDescription || page.description,
        url: page.canonical,
        type: 'website',
        images: [page.ogImage || '/assets/og-gomentum.svg']
      },
      twitter: {
        card: 'summary_large_image',
        title: page.ogTitle || page.title,
        description: page.ogDescription || page.description,
        images: [page.ogImage || '/assets/og-gomentum.svg']
      }
    }
  : {};

export default function HomePage() {
  if (!page) return null;
  return <PageBody page={page} />;
}
