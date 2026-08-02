import type { Metadata } from 'next';
import { Source_Serif_4, Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Footer } from '@/components/Footer';
import { Shell } from '@/components/nav/Shell';
import { getAllPapers } from '@/lib/papers';
import { buildSearchIndex } from '@/lib/search-index';
import './globals.css';
import 'katex/dist/katex.min.css';

const serif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport = {
  themeColor: '#fafaf7',
};

export const metadata: Metadata = {
  title: {
    default: 'Shared AI Research',
    template: '%s — Shared AI Research',
  },
  description:
    'An open repository of research on artificial intelligence, its institutions, and its consequences. A nonprofit publication for humans and agents.',
  metadataBase: new URL('https://shared-ai-research.org'),
  openGraph: {
    title: 'Shared AI Research',
    description:
      'An open repository of research on artificial intelligence, its institutions, and its consequences.',
    url: 'https://shared-ai-research.org',
    siteName: 'Shared AI Research',
    type: 'website',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Built once on the server and handed to the palette as a reduced record, so
  // the source datasets never ship to the client just to be searched.
  const docs = buildSearchIndex(await getAllPapers());

  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen flex flex-col bg-paper text-ink">
        <Shell docs={docs} footer={<Footer />}>
          {children}
        </Shell>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
