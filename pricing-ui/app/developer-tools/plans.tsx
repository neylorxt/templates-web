"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button, Card, Chip } from "@heroui/react";

type Plan = {
  name: string;
  monthly: number | null;
  yearly: number | null;
  perUser: boolean;
  tagline: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    perUser: false,
    tagline: "Pour les projets personnels.",
    features: [
      "Dépôts publics illimités",
      "2 000 minutes de CI",
      "500 Mo de stockage",
      "1 utilisateur",
    ],
    cta: "Commencer",
  },
  {
    name: "Pro",
    monthly: 24,
    yearly: 20,
    perUser: true,
    tagline: "Pour les développeurs exigeants.",
    features: [
      "Dépôts privés illimités",
      "10 000 minutes de CI",
      "50 Go de stockage",
      "Protection de branche",
      "Support par e-mail",
    ],
    cta: "Passer à Pro",
    highlighted: true,
  },
  {
    name: "Team",
    monthly: 48,
    yearly: 40,
    perUser: true,
    tagline: "Pour les équipes qui livrent.",
    features: [
      "Tout le forfait Pro",
      "Revue de code intégrée",
      "100 000 minutes de CI",
      "SSO et rôles",
      "Support prioritaire",
    ],
    cta: "Créer une équipe",
  },
  {
    name: "Enterprise",
    monthly: null,
    yearly: null,
    perUser: false,
    tagline: "Pour les organisations régulées.",
    features: [
      "Déploiement auto-hébergé",
      "SAML et SCIM",
      "Journal d’audit",
      "SLA sur mesure",
    ],
    cta: "Nous contacter",
  },
];

export function DeveloperPlans() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] p-1 font-mono text-xs">
          <button
            type="button"
            aria-pressed={!annual}
            onClick={() => setAnnual(false)}
            className={`rounded-md px-3 py-1.5 transition ${
              annual ? "text-zinc-500 hover:text-zinc-200" : "bg-cyan-400 text-zinc-950"
            }`}
          >
            --mensuel
          </button>
          <button
            type="button"
            aria-pressed={annual}
            onClick={() => setAnnual(true)}
            className={`flex items-center gap-2 rounded-md px-3 py-1.5 transition ${
              annual ? "bg-cyan-400 text-zinc-950" : "text-zinc-500 hover:text-zinc-200"
            }`}
          >
            --annuel
            <span className="rounded bg-black/20 px-1.5 py-0.5 text-[10px]">
              -17 %
            </span>
          </button>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`bg-white/[0.02] ${
              plan.highlighted
                ? "border-cyan-400/60 shadow-lg shadow-cyan-950/50"
                : "border-white/10"
            }`}
          >
            <Card.Header>
              <div className="flex items-center justify-between gap-3">
                <Card.Title className="font-mono text-base">{plan.name}</Card.Title>
                {plan.highlighted ? (
                  <Chip color="accent" variant="soft" size="sm">
                    Populaire
                  </Chip>
                ) : null}
              </div>
              <Card.Description>{plan.tagline}</Card.Description>
            </Card.Header>
            <Card.Content className="flex flex-col gap-5">
              <div>
                {plan.monthly === null ? (
                  <p className="text-2xl font-semibold tracking-tight text-zinc-50">
                    Sur mesure
                  </p>
                ) : (
                  <p className="text-3xl font-semibold tracking-tight text-zinc-50">
                    {annual ? plan.yearly : plan.monthly} €
                    <span className="text-xs font-normal text-zinc-500">
                      {plan.perUser ? " / utilisateur / mois" : " / mois"}
                    </span>
                  </p>
                )}
                {plan.monthly !== null && plan.perUser ? (
                  <p className="mt-1 text-xs text-zinc-500">
                    {annual
                      ? "facturé annuellement"
                      : "facturé au mois, sans engagement"}
                  </p>
                ) : null}
              </div>
              <ul className="flex flex-col gap-2.5 text-sm text-zinc-400">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-cyan-400" />
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
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-lg border border-white/10 bg-white/[0.02] px-6 py-4 font-mono text-xs text-zinc-400">
        <span>Minutes CI supplémentaires&nbsp;: 0,01 € / min</span>
        <span className="text-zinc-700">|</span>
        <span>Stockage additionnel&nbsp;: 0,25 € / Go</span>
        <span className="text-zinc-700">|</span>
        <span>Sièges additionnels au tarif de l’offre</span>
      </div>
    </div>
  );
}
