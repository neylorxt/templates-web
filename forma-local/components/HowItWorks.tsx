import { steps } from "@/data/howItWorks";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

/**
 * Section « Comment ça se passe » : le parcours de l'apprenant en 4 étapes.
 */
export default function HowItWorks() {
  return (
    <Section id="deroulement" className="bg-mist">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading
          align="center"
          eyebrow="Déroulement"
          title="Comment ça se passe ?"
          subtitle="De la première question à la validation finale, votre parcours est simple et accompagné."
        />
      </div>

      <ol className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 80}>
            <li className="relative flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 font-display text-lg font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {step.description}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}