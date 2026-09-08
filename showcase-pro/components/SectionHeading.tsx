import Reveal from "./Reveal";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <Reveal className={`max-w-2xl ${alignClass}`}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.22em] ${
          dark ? "text-brand-300" : "text-brand-600"
        }`}
      >
        {kicker}
      </p>
      <h2
        className={`mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? "text-stone-300" : "text-stone-500"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}