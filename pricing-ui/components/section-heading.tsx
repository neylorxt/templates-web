type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  eyebrowClassName?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  eyebrowClassName = "text-zinc-500",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <p
        className={`text-[11px] font-medium uppercase tracking-[0.22em] ${eyebrowClassName}`}
      >
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}
