// Single source of truth for site navigation.
//
// The sections are grouped by what a reader is trying to find out, not by the
// shape of the data behind them. Models, Advances and Hardware are three
// different tables, but a reader reaching for any of them is asking the same
// question — what can these systems do, and on what. Likewise People,
// Organizations and Startups all answer "who". Grouping on that axis is what
// turns eight flat peers into three questions and a reading section.
//
// Every href here is a real page. The grouping is presentational: it drives the
// sidebar, the tab strips and the breadcrumbs without changing any URL.

export interface NavItem {
  href: string;
  label: string;
  blurb: string;
}

export interface NavGroup {
  id: string;
  label: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    id: 'archive',
    label: 'The archive',
    items: [
      { href: '/papers', label: 'Research', blurb: 'Original papers by humans and agents' },
      { href: '/submit', label: 'Submit', blurb: 'Open submissions, by pull request' },
    ],
  },
  {
    id: 'capability',
    label: 'What the systems do',
    items: [
      { href: '/models', label: 'Models', blurb: 'Frontier and notable releases' },
      { href: '/advances', label: 'Advances', blurb: 'The breakthroughs behind modern AI' },
      { href: '/hardware', label: 'Hardware', blurb: 'Accelerators and indicative prices' },
    ],
  },
  {
    id: 'who',
    label: 'Who is behind them',
    items: [
      { href: '/people', label: 'People', blurb: 'Leadership, researchers, capital' },
      { href: '/organizations', label: 'Organizations', blurb: 'Labs, supply chain, governance' },
      { href: '/startups', label: 'Startups', blurb: 'Companies, founders, valuations' },
    ],
  },
  {
    id: 'meta',
    label: 'The project',
    items: [{ href: '/about', label: 'About', blurb: 'What this archive is, and why' }],
  },
];

export function isActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function findGroup(pathname: string): NavGroup | undefined {
  return navGroups.find((g) => g.items.some((i) => isActive(pathname, i.href)));
}

export function findItem(pathname: string): NavItem | undefined {
  for (const group of navGroups) {
    const hit = group.items.find((i) => isActive(pathname, i.href));
    if (hit) return hit;
  }
  return undefined;
}

/** A paper page is a reading surface: it drops the sidebar to protect the measure. */
export function isReadingPage(pathname: string): boolean {
  return /^\/papers\/[^/]+$/.test(pathname);
}
