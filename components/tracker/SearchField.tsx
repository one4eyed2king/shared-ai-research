'use client';

import { useEffect, useRef } from 'react';

export function SearchField({
  value,
  onChange,
  placeholder,
  count,
  total,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  count: number;
  total: number;
}) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        ref.current?.focus();
      }
      if (e.key === 'Escape' && document.activeElement === ref.current) {
        onChange('');
        ref.current?.blur();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onChange]);

  return (
    <div className="flex items-center gap-3 flex-1 min-w-0 max-w-md">
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        className="w-4 h-4 shrink-0 text-muted"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="9" cy="9" r="6" />
        <path d="m13.5 13.5 4 4" strokeLinecap="round" />
      </svg>
      <input
        ref={ref}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full bg-transparent font-sans text-sm text-ink placeholder:text-muted/60 border-b border-rule focus:border-ink outline-none py-1.5 transition-colors [&::-webkit-search-cancel-button]:hidden"
      />
      <span className="shrink-0 font-sans text-xs text-muted tabular-nums whitespace-nowrap">
        {value ? `${count} of ${total}` : `${total}`}
        <kbd className="hidden md:inline-block ml-3 px-1.5 py-0.5 border border-rule rounded text-[0.65rem] text-muted/80 font-sans">
          /
        </kbd>
      </span>
    </div>
  );
}

export function matches(query: string, ...fields: (string | number | undefined)[]): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const haystack = fields.filter(Boolean).join(' ').toLowerCase();
  return q.split(/\s+/).every((term) => haystack.includes(term));
}
