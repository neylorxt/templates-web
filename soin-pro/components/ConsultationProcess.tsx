import { consultationSteps } from "@/data/process";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export default function ConsultationProcess() {
  return (
    <Section id="processus" className="bg-mist">
      <SectionHeading
        eyebrow="Déroulement"
        title="Comment se déroule une consultation"
        subtitle="Quatre étapes claires, de la prise de rendez-vous au suivi, pour vous sentir accompagné à chaque moment."
        align="center"
      />
      <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {consultationSteps.map((item, index) => (
          <Reveal key={item.step} delay={index * 100}>
            <li className="relative">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-200 bg-white font-display text-lg font-semibold text-brand-700"
                aria-hidden="true"
              >
                {item.step}
              </span>
              {index < consultationSteps.length - 1 ? (
                <span
                  className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-brand-200 lg:block"
                  aria-hidden="true"
                />
              ) : null}
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {item.description}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}