import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ValuationCTA from "@/components/ValuationCTA";

export const metadata: Metadata = {
  title: "Estimation de votre bien",
  description: `Estimez gratuitement votre bien immobilier dans ${siteConfig.area} : réponse sous 24 h ouvrées par un professionnel.`,
  alternates: {
    canonical: "/estimation",
  },
  openGraph: {
    title: `Estimation de votre bien | ${siteConfig.name}`,
    description: `Estimez gratuitement votre bien immobilier dans ${siteConfig.area}.`,
  },
};

export default function EstimationPage() {
  return (
    <>
      <section className="border-b border-zinc-100 bg-gradient-to-b from-brand-50/70 to-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
            Propriétaires
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Estimez votre bien gratuitement
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Une première estimation gratuite et sans engagement, fondée sur une
            connaissance fine du marché local.
          </p>
        </div>
      </section>

      <ValuationCTA />
    </>
  );
}