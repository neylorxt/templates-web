"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button, Card, Chip } from "@heroui/react";

type Plan = {
  name: string;
  monthly: number;
  yearly: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

const plans: Plan[] = [
  {
    name: "Starter",
    monthly: 12,
    yearly: 9,
    description: "Pour les petites équipes qui démarrent.",
    features: [
      "Jusqu’à 3 utilisateurs",
      "5 projets actifs",
      "Tableaux kanban et listes",
      "Support par e-mail",
    ],
    cta: "Commencer gratuitement",
  },
  {
    name: "Pro",
    monthly: 29,
    yearly: 23,
    description: "Pour les équipes qui livrent vite.",
    features: [
      "Utilisateurs illimités",
      "Projets illimités",
      "Automatisations et intégrations",
      "Historique sur 12 mois",
      "Support prioritaire",
    ],
    highlighted: true,
    cta: "Essayer 14 jours",
  },
  {
    name: "Business",
    monthly: 59,
    yearly: 47,
    description: "Pour les organisations exigeantes.",
    features: [
      "SSO et rôles avancés",
      "Journal d’audit",
      "SLA 99,9 %",
      "Gestionnaire de compte dédié",
    ],
    cta: "Contacter l’équipe",
  },
];

export function SaasPricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <div className="flex justify-center">
        <div className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white p-1 shadow-sm">
          <button
            type="button"
            aria-pressed={!annual}
            onClick={() => setAnnual(false)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              annual ? "text-zinc-500 hover:text-zinc-900" : "bg-zinc-900 text-white"
            }`}
          >
            Mensuel
          </button>
          <button
            type="button"
            aria-pressed={annual}
            onClick={() => setAnnual(true)}
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition ${
              annual ? "bg-zinc-900 text-white" : "text-zinc-500 hover:text-zinc-900"
            }`}
          >
            Annuel
            <span
              className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                annual ? "bg-violet-500 text-white" : "bg-violet-100 text-violet-700"
              }`}
            >
              -20 %
            </span>
          </button>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`bg-white ${
              plan.highlighted
                ? "border-2 border-violet-600 shadow-xl shadow-violet-100"
                : "border-zinc-200"
            }`}
          >
            <Card.Header>
              <div className="flex items-center justify-between gap-3">
                <Card.Title className="text-lg">{plan.name}</Card.Title>
                {plan.highlighted ? (
                  <Chip color="accent" variant="soft" size="sm">
                    Le plus populaire
                  </Chip>
                ) : null}
              </div>
              <Card.Description>{plan.description}</Card.Description>
            </Card.Header>
            <Card.Content className="flex flex-col gap-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight text-zinc-900">
                  {annual ? plan.yearly : plan.monthly} €
                </span>
                <span className="text-sm text-zinc-500">
                  / utilisateur / mois
                </span>
                {annual ? (
                  <span className="text-sm text-zinc-400 line-through">
                    {plan.monthly} €
                  </span>
                ) : null}
              </div>
              <ul className="flex flex-col gap-2.5 text-sm text-zinc-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
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
                className={plan.highlighted ? "bg-violet-600" : ""}
              >
                {plan.cta}
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-zinc-400">
        Tarifs hors taxes, par utilisateur et par mois. L’offre annuelle est
        facturée en une fois.
      </p>
    </div>
  );
}
