import { Section, SectionHeader } from "@/components/Section";

const technologies = [
  { name: "Next.js", color: "#000000" },
  { name: "React", color: "#61dafb" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Tailwind CSS", color: "#38bdf8" },
  { name: "Vercel", color: "#000000" },
];

export function Stack() {
  return (
    <Section id="technologies">
      <SectionHeader
        eyebrow="Technologies"
        title="Technologies modernes"
        description="Des technologies modernes pour des sites rapides, fiables et évolutifs."
      />

      <ul className="mt-12 flex flex-wrap items-center justify-center gap-4">
        {technologies.map((technology) => (
          <li
            key={technology.name}
            className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white px-6 py-3 text-base font-semibold text-zinc-800 shadow-sm"
          >
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: technology.color }}
              aria-hidden="true"
            />
            {technology.name}
          </li>
        ))}
      </ul>
    </Section>
  );
}