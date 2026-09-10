import Link from "next/link";
import { ArrowRight, CreditCard, HandCoins, HelpCircle, Wallet } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

const iconMap: Record<string, typeof CreditCard> = {
  CreditCard,
  Wallet,
  HandCoins,
  HelpCircle,
};

/**
 * Section « Financement et facilités ».
 * Les options viennent de `siteConfig.financing` : n'afficher que les
 * dispositifs réellement disponibles chez l'établissement.
 */
export default function Financing() {
  const { financing } = siteConfig;
  if (!financing.show) return null;

  return (
    <Section id="financement" className="bg-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {financing.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600">
          {financing.subtitle}
        </p>
      </div>

      <ul className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
        {financing.options.map((option, index) => {
          const Icon = iconMap[option.icon ?? "CreditCard"] ?? CreditCard;
          return (
            <Reveal key={option.title} delay={index * 60}>
              <li className="flex h-full gap-4 rounded-3xl border border-zinc-200 bg-mist p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{option.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                    {option.description}
                  </p>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ul>

      <div className="mx-auto mt-10 max-w-2xl text-center">
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-all duration-200 hover:border-brand-300 hover:text-brand-700"
        >
          Parler de mon financement avec un conseiller
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}