export function SectionIntro({
  eyebrow,
  title,
  lede,
  updated,
  count,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  updated?: string;
  count?: string;
}) {
  return (
    <header className="pt-16 pb-12 max-w-3xl">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-muted">
        {eyebrow}
        {count && (
          <span className="ml-3 text-muted/70 tabular-nums normal-case tracking-normal">
            {count}
          </span>
        )}
      </p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl leading-tight tracking-tight text-balance">
        {title}
      </h1>
      <p className="mt-5 font-serif text-lg text-muted leading-relaxed text-pretty">{lede}</p>
      {updated && (
        <p className="mt-4 font-sans text-xs text-muted/80">
          Data compiled as of {updated}. Corrections by pull request are welcome.
        </p>
      )}
    </header>
  );
}
