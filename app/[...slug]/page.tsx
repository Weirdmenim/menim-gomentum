import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageBody } from '@/components/PageBody';
import { getPageBySlug, normalizeSlug, pages, routeToParams } from '@/lib/pageData';

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

export function generateStaticParams() {
  return pages.filter((page) => page.slug !== '/').map((page) => ({ slug: routeToParams(page.slug) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(normalizeSlug(slug));
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.canonical
    },
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
  };
}

export default async function SitePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(normalizeSlug(slug));
  if (!page) notFound();
  return <PageBody page={page} />;
}
