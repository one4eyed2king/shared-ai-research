'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/papers', label: 'Research' },
  { href: '/models', label: 'Models' },
  { href: '/advances', label: 'Advances' },
  { href: '/people', label: 'People' },
  { href: '/organizations', label: 'Organizations' },
  { href: '/hardware', label: 'Hardware' },
  { href: '/startups', label: 'Startups' },
  { href: '/about', label: 'About' },
];

export function NavLinks() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Sections"
      className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-sans"
    >
      {links.map((l) => {
        const active = pathname === l.href || pathname.startsWith(`${l.href}/`);
        return (
          <Link
            key={l.href}
            href={l.href}
            aria-current={active ? 'page' : undefined}
            className={`pb-0.5 border-b transition-colors ${
              active
                ? 'text-accent border-accent'
                : 'text-muted border-transparent hover:text-ink'
            }`}
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
