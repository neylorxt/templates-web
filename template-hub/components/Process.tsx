import {
  ClipboardCheck,
  MousePointerClick,
  Palette,
  Rocket,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";

const steps = [
  {
    icon: MousePointerClick,
    title: "Choisissez un template",
    description:
      "Le client sélectionne le modèle le plus adapté à son activité.",
  },
  {
    icon: Palette,
    title: "Nous le personnalisons",
    description:
      "Modification des couleurs, logo, contenu, images et coordonnées.",
  },
  {
    icon: ClipboardCheck,
    title: "Validation",
    description: "Le client vérifie le résultat.",
  },
  {
    icon: Rocket,
    title: "Mise en ligne",
    description: "Le site est publié et prêt à recevoir des visiteurs.",
  },
];

export function Process() {
  return (
    <Section id="process">
      <SectionHeader
        eyebrow="Comment ça marche"
        title="Comment ça marche ?"
        description="Un processus simple et rapide, pensé pour les petites entreprises."
      />

      <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
              <step.icon className="h-7 w-7" aria-hidden="true" />
            </div>
            <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-brand-600">
              Étape {index + 1}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950">
              {step.title}
            </h3>
            <p className="mt-2 leading-relaxed text-zinc-600">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}