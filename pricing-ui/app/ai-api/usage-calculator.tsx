"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button, Label, Slider } from "@heroui/react";

const tiers = [
  { min: 0, rate: 0.9, label: "Standard" },
  { min: 25, rate: 0.7, label: "Volume" },
  { min: 100, rate: 0.55, label: "Scale" },
  { min: 250, rate: 0.42, label: "Grand compte" },
];

const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const formatRate = (rate: number) => `${rate.toFixed(2).replace(".", ",")} €`;

export function UsageCalculator() {
  const [tokens, setTokens] = useState(40);

  const tier = [...tiers].reverse().find((item) => tokens >= item.min) ?? tiers[0];
  const monthlyCost = tokens * tier.rate;
  const savings = tokens * tiers[0].rate - monthlyCost;

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
        <Slider
          value={tokens}
          onChange={(value) => setTokens(Number(value))}
          minValue={1}
          maxValue={500}
          step={1}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <Label className="text-sm font-medium text-zinc-200">
              Consommation mensuelle estimée
            </Label>
            <span className="font-mono text-sm text-fuchsia-200">
              {tokens} M de tokens
            </span>
          </div>
          <Slider.Track className="mt-4">
            <Slider.Fill />
            <Slider.Thumb />
          </Slider.Track>
          <div className="mt-2 flex justify-between font-mono text-[10px] text-zinc-600">
            <span>1 M</span>
            <span>100 M</span>
            <span>250 M</span>
            <span>500 M</span>
          </div>
        </Slider>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {tiers.map((item) => {
            const active = item.label === tier.label;
            return (
              <div
                key={item.label}
                className={`rounded-lg border px-3 py-2.5 ${
                  active
                    ? "border-fuchsia-500/50 bg-fuchsia-500/10"
                    : "border-white/10"
                }`}
              >
                <p
                  className={`text-xs font-medium ${
                    active ? "text-fuchsia-200" : "text-zinc-400"
                  }`}
                >
                  {item.label}
                </p>
                <p className="mt-0.5 font-mono text-[11px] text-zinc-500">
                  {formatRate(item.rate)} / M
                </p>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-zinc-600">
          Palier {tier.label} appliqué à partir de {tier.min} M de tokens par
          mois.
        </p>
      </div>

      <div className="flex flex-col rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/[0.04] p-6 sm:p-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-fuchsia-300/80">
          Coût mensuel estimé
        </p>
        <p className="mt-3 font-mono text-4xl font-semibold tracking-tight text-zinc-50">
          {euro.format(monthlyCost)}
        </p>
        <dl className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm">
          <div className="flex items-center justify-between">
            <dt className="text-zinc-500">Tokens</dt>
            <dd className="text-zinc-200">{tokens} M</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-zinc-500">Tarif appliqué</dt>
            <dd className="text-zinc-200">{formatRate(tier.rate)} / M</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-zinc-500">Économie</dt>
            <dd className="text-fuchsia-200">
              {savings > 0 ? euro.format(savings) : "—"}
            </dd>
          </div>
        </dl>
        <Button className="mt-6" fullWidth>
          Créer une clé API
          <ArrowRight className="size-4" />
        </Button>
        <p className="mt-3 text-center text-[11px] leading-relaxed text-zinc-500">
          1 M de tokens offerts chaque mois · plafond de dépense configurable
        </p>
      </div>
    </div>
  );
}
