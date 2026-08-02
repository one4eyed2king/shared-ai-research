'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { isReadingPage } from '@/lib/nav';
import type { SearchDoc } from '@/lib/search-index';
import { Sidebar } from './Sidebar';
import { SubHeader, ReadingBar } from './SubHeader';
import { CommandPalette } from './CommandPalette';

/**
 * The application shell: persistent navigation, and the one place that decides
 * which chrome a route gets.
 *
 * A paper is a reading surface, so it drops the sidebar for a slim bar. Giving
 * a 40rem measure a 16rem rail costs a fifth of the viewport to navigation the
 * reader is not using while reading.
 */
export function Shell({
  docs,
  footer,
  children,
}: {
  docs: SearchDoc[];
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const reading = isReadingPage(pathname);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const skipLink = (
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:font-sans focus:text-sm focus:border focus:border-ink"
    >
      Skip to content
    </a>
  );

  const palette = (
    <CommandPalette docs={docs} open={searchOpen} onOpenChange={setSearchOpen} />
  );

  if (reading) {
    return (
      <>
        {skipLink}
        <ReadingBar onOpenSearch={() => setSearchOpen(true)} />
        <main id="content" className="flex-1">{children}</main>
        {footer}
        {palette}
      </>
    );
  }

  return (
    <>
      {skipLink}
      <Sidebar onOpenSearch={() => setSearchOpen(true)} />
      <div className="md:pl-64 flex-1 flex flex-col">
        <SubHeader />
        <main id="content" className="flex-1">{children}</main>
        {footer}
      </div>
      {palette}
    </>
  );
}
