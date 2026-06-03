import type { SitePage } from '@/lib/pageData';

export function PageBody({ page }: { page: SitePage }) {
  return (
    <>
      <main id="main" tabIndex={-1} dangerouslySetInnerHTML={{ __html: page.bodyHtml }} />
      {page.jsonLd.map((json, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: json }}
        />
      ))}
    </>
  );
}
