import type { Metadata } from "next";
import { Check, GraduationCap, Sparkles, Users } from "lucide-react";
import { Button, Card, Chip } from "@heroui/react";
import { BackToHome } from "@/components/back-to-home";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Exemple de tarification éducation : offres Basic, Student et School pour les classes et établissements.",
};

const plans = [
  {
    name: "Basic",
    price: "0 €",
    detail: "pour toujours",
    description: "Pour tester en classe dès demain.",
    features: [
      "1 classe, 40 élèves",
      "Exercices essentiels",
      "Tableau de bord simple",
      "Application élève",
    ],
    cta: "Créer ma classe",
    highlighted: false,
  },
  {
    name: "Student",
    price: "4 €",
    detail: "par élève et par mois",
    description: "Pour suivre chaque élève individuellement.",
    features: [
      "Corrections automatiques",
      "Parcours personnalisés",
      "Suivi des progrès",
      "Révisions illimitées",
      "Accès hors ligne",
    ],
    cta: "Activer Student",
    highlighted: true,
  },
  {
    name: "School",
    price: "990 €",
    detail: "par an et par établissement",
    description: "Pour équiper toute une école.",
    features: [
      "Élèves illimités",
      "Connexion SSO",
      "Espace direction",
      "Formation de l’équipe",
      "Support dédié",
    ],
    cta: "Demander une démo",
    highlighted: false,
  },
];

export default function EducationPage() {
  return (
    <main className="theme-education min-h-dvh bg-[#eef4ff] text-slate-900">
      <div className="mx-auto w-full max-w-6xl px-6 py-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-2xl bg-sky-500 text-white">
              <GraduationCap className="size-5" />
            </span>
            <span className="font-semibold tracking-tight">Education</span>
          </div>
          <BackToHome className="text-slate-500 hover:text-sky-700" />
        </header>

        <section className="mx-auto mt-16 max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-medium text-sky-700 shadow-sm">
            <Users className="size-3.5" />
            1 200 classes actives cette année
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Apprendre sans friction, enseigner sans paperasse
          </h1>
          <p className="mt-4 text-pretty leading-relaxed text-slate-600">
            Une formule gratuite pour commencer, un tarif par élève pour
            grandir, une licence d’établissement pour tout simplifier.
          </p>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`bg-white ${
                plan.highlighted
                  ? "border-2 border-sky-500 shadow-xl shadow-sky-200/60"
                  : "border-sky-100"
              }`}
            >
              <Card.Header>
                <div className="flex items-center justify-between gap-3">
                  <Card.Title className="text-lg">{plan.name}</Card.Title>
                  {plan.highlighted ? (
                    <Chip color="accent" variant="soft" size="sm">
                      Populaire
                    </Chip>
                  ) : null}
                </div>
                <Card.Description>{plan.description}</Card.Description>
              </Card.Header>
              <Card.Content className="flex flex-col gap-6">
                <div>
                  <p className="text-3xl font-semibold tracking-tight">
                    {plan.price}
                    <span className="ml-2 text-sm font-normal text-slate-500">
                      {plan.detail}
                    </span>
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5 text-sm text-slate-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card.Content>
              <Card.Footer>
                <Button
                  variant={plan.highlighted ? "primary" : "outline"}
                  fullWidth
                >
                  {plan.cta}
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </section>

        <section className="mx-auto mt-14 flex max-w-3xl items-center gap-4 rounded-3xl bg-white px-6 py-5 text-sm text-slate-600">
          <Sparkles className="size-5 shrink-0 text-sky-500" />
          <p>
            Les établissements publics bénéficient d’une réduction de 30 % et
            d’un accompagnement à la prise en main offert.
          </p>
        </section>
      </div>
    </main>
  );
}
