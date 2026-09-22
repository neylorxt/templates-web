import type { Metadata } from "next";
import { ArrowRight, PenLine, Code2, Rocket } from "lucide-react";
import { Button, Chip } from "@heroui/react";
import { BackToHome } from "@/components/back-to-home";

export const metadata: Metadata = {
  title: "Agency",
  description:
    "Exemple de tarification d’agence : offres Starter, Business et Custom sur devis.",
};

const plans = [
  {
    name: "Starter",
    price: "1 900 €",
    suffix: "projet",
    description:
      "Un site vitrine net, rapide et prêt à convertir, livré en trois semaines.",
    features: [
      "Site de 5 pages",
      "Design sur mesure",
      "Formulaire de contact",
      "Optimisation mobile",
      "Mise en ligne accompagnée",
    ],
    cta: "Demander un devis",
    highlighted: false,
  },
  {
    name: "Business",
    price: "4 500 €",
    suffix: "projet",
    description:
      "La refonte complète : identité, contenu et acquisition réunis.",
    features: [
      "Tout le forfait Starter",
      "Identité visuelle complète",
      "CMS pour votre équipe",
      "SEO technique et éditorial",
      "3 mois de suivi",
    ],
    cta: "Discuter du projet",
    highlighted: true,
  },
  {
    name: "Custom",
    price: "Sur devis",
    suffix: "",
    description:
      "Plateforme métier, e-commerce ou application : cadrons ensemble.",
    features: [
      "Atelier de cadrage",
      "Équipe dédiée",
      "Développement sur mesure",
      "Maintenance et évolutions",
    ],
    cta: "Prendre rendez-vous",
    highlighted: false,
  },
];

const steps = [
  {
    icon: PenLine,
    title: "Cadrage",
    description: "Un atelier de deux heures pour aligner objectifs et périmètre.",
  },
  {
    icon: Code2,
    title: "Production",
    description: "Design et développement en cycles courts, démos toutes les semaines.",
  },
  {
    icon: Rocket,
    title: "Lancement",
    description: "Mise en ligne, formation de l’équipe et suivi des performances.",
  },
];

export default function AgencyPage() {
  return (
    <main className="theme-agency min-h-dvh bg-[#f7f2ea] font-editorial text-stone-900">
      <div className="border-b border-stone-900/10">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-baseline gap-3">
            <span className="text-lg font-semibold tracking-tight">
              Agency
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.28em] text-stone-500 sm:inline">
              design & développement
            </span>
          </div>
          <BackToHome className="text-stone-500 hover:text-stone-900" />
        </header>
      </div>

      <section className="mx-auto max-w-6xl px-6 pt-16">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone-500">
            Tarifs 2026
          </p>
          <h1 className="mt-5 text-balance text-4xl leading-[1.1] tracking-tight sm:text-6xl">
            Des offres claires pour des projets qui le sont moins.
          </h1>
          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-stone-600">
            Pas de coût caché, pas de régie interminable. Un périmètre, un
            prix, une date de livraison.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-6xl gap-6 px-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`flex flex-col border p-7 ${
              plan.highlighted
                ? "border-stone-900 bg-stone-900 text-stone-50"
                : "border-stone-900/25 bg-transparent"
            }`}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-sm uppercase tracking-[0.24em]">
                {plan.name}
              </h2>
              {plan.highlighted ? (
                <Chip color="accent" variant="primary" size="sm">
                  Le plus choisi
                </Chip>
              ) : null}
            </div>
            <p className="mt-8 text-4xl tracking-tight">
              {plan.price}
              {plan.suffix ? (
                <span
                  className={`ml-2 text-sm tracking-normal ${
                    plan.highlighted ? "text-stone-400" : "text-stone-500"
                  }`}
                >
                  / {plan.suffix}
                </span>
              ) : null}
            </p>
            <p
              className={`mt-4 text-sm leading-relaxed ${
                plan.highlighted ? "text-stone-300" : "text-stone-600"
              }`}
            >
              {plan.description}
            </p>
            <ul
              className={`mt-8 flex flex-col gap-3 border-t pt-6 text-sm ${
                plan.highlighted
                  ? "border-stone-700 text-stone-200"
                  : "border-stone-900/15 text-stone-700"
              }`}
            >
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-baseline gap-3">
                  <span aria-hidden className="text-xs">
                    ✦
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-2">
              <Button
                variant={plan.highlighted ? "primary" : "outline"}
                fullWidth
                className={
                  plan.highlighted
                    ? "bg-stone-50 text-stone-900 hover:bg-stone-200"
                    : "border-stone-900/40 text-stone-900"
                }
              >
                {plan.cta}
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="border-t border-stone-900/15 pt-10">
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-stone-500">
            La méthode
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {steps.map(({ icon: Icon, title, description }) => (
              <div key={title}>
                <Icon className="size-5 text-stone-700" />
                <h3 className="mt-4 text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
