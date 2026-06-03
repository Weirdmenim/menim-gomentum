import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://gomentum-website.vercel.app'),
  title: {
    default: 'Gomentum | Task Initiation App for Starting Small',
    template: '%s'
  },
  description: 'Gomentum helps overwhelmed people start tasks with one tiny first move, a calm timer, and ADHD-friendly task support.',
  icons: {
    icon: '/assets/favicon.svg'
  },
  openGraph: {
    siteName: 'Gomentum',
    type: 'website',
    images: ['/assets/og-gomentum.svg']
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/og-gomentum.svg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
        <a className="sticky-cta" href="/#demo">Start One Small Step</a>
        <Script src="/assets/app.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
