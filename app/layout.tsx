import type { Metadata } from 'next';
import { Source_Serif_4, Inter, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen flex flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
