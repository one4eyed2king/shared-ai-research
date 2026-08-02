'use client';

import { useEffect, useState } from 'react';

/**
 * Tracker search state, seeded from a `?q=` parameter.
 *
 * This is what lets a global search result deep-link into a tracker with its
 * filter already applied — picking "H100" from the palette lands on
 * /hardware?q=H100 showing only that row, rather than dropping the reader at
 * the top of an unfiltered table to search a second time.
 *
 * The parameter is read in an effect rather than in a useState initialiser so
 * that server and client agree on the first render; seeding directly from
 * window.location would make the markup diverge during hydration.
 */
export function useTrackerQuery(): [string, (value: string) => void] {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const seed = new URLSearchParams(window.location.search).get('q');
    if (seed) setQuery(seed);
  }, []);

  return [query, setQuery];
}
