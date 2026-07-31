export function SectionIntro({
  eyebrow,
  title,
  lede,
  updated,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  updated?: string;
}) {
  return (
    <header className="pt-16 pb-12 max-w-3xl">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-muted">
        {eyebrow}
      </p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl leading-tight tracking-tight">
        {title}
      </h1>
      <p className="mt-5 font-serif text-lg text-muted leading-relaxed">{lede}</p>
      {updated && (
        <p className="mt-4 font-sans text-xs text-muted/80">
          Data compiled as of {updated}. Corrections by pull request are welcome.
        </p>
      )}
    </header>
  );
}
