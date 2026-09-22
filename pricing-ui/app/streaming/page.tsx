import type { Metadata } from "next";
import Link from "next/link";
import { Play } from "lucide-react";
import { buttonVariants } from "@heroui/styles";
import { Table } from "@heroui/react";
import { BackToHome } from "@/components/back-to-home";
import { Faq } from "@/components/faq";
import { SectionHeading } from "@/components/section-heading";
import { StreamingPlans } from "./plans";

export const metadata: Metadata = {
  title: "Streaming",
  description:
    "Exemple de tarification streaming : formules Individuel, Duo et Famille avec écrans simultanés et comparatif.",
};

const genres = [
  "Séries",
  "Films",
  "Sport",
  "Documentaires",
  "Jeunesse",
  "Direct",
];

const comparison = [
  {
    feature: "Écrans simultanés",
    individuel: "1",
    duo: "2",
    famille: "4",
  },
  {
    feature: "Qualité vidéo",
    individuel: "Full HD",
    duo: "Full HD",
    famille: "4K HDR",
  },
  { feature: "Profils", individuel: "1", duo: "2", famille: "5" },
  {
    feature: "Téléchargements",
    individuel: "Illimités",
    duo: "Illimités",
    famille: "Illimités",
  },
  {
    feature: "Audio spatial",
    individuel: "—",
    duo: "—",
    famille: "Inclus",
  },
  {
    feature: "Contrôle parental",
    individuel: "—",
    duo: "—",
    famille: "Inclus",
  },
];

const faqItems = [
  {
    question: "Peut-on changer de formule en cours de route ?",
    answer:
      "Oui, le changement est immédiat et facturé au prorata. Vous pouvez passer d’Individuel à Famille sans perdre vos profils ni vos téléchargements.",
  },
  {
    question: "Combien d’écrans simultanés sont inclus ?",
    answer:
      "Un écran en Individuel, deux en Duo et quatre en Famille. Chaque profil regarde ce qu’il veut, au même moment, sur l’appareil de son choix.",
  },
  {
    question: "La qualité 4K est-elle disponible partout ?",
    answer:
      "Le 4K HDR est réservé à la formule Famille. Il nécessite un écran compatible et une connexion d’au moins 25 Mb/s.",
  },
  {
    question: "Comment résilier l’abonnement ?",
    answer:
      "En deux clics depuis votre compte, sans justification. L’accès reste actif jusqu’à la fin de la période déjà réglée.",
  },
];

function PosterGrid() {
  const tints = [
    "bg-rose-500/15",
    "bg-rose-500/10",
    "bg-rose-500/15",
    "bg-rose-500/10",
    "bg-rose-500/15",
    "bg-rose-500/10",
  ];

  return (
    <div className="grid grid-cols-3 gap-3" aria-hidden>
      {genres.map((genre, index) => (
        <div
          key={genre}
          className={`flex aspect-[4/5] flex-col items-center justify-center gap-2.5 rounded-lg border border-white/10 ${tints[index]}`}
        >
          <span className="flex size-8 items-center justify-center rounded-full bg-rose-500/20">
            <Play className="size-3.5 fill-rose-300 text-rose-300" />
          </span>
          <span className="text-[11px] font-medium text-rose-100/90">
            {genre}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function StreamingPage() {
  return (
    <main
      data-theme="dark"
      className="theme-streaming min-h-dvh bg-[#0b0b12] text-zinc-100"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-6">
        <header className="flex items-center justify-between">
          <span className="text-lg font-black uppercase tracking-[0.32em] text-white">
            Streaming
          </span>
          <BackToHome className="text-zinc-500 hover:text-rose-300" />
        </header>

        <section className="mt-16 grid items-center gap-12 lg:mt-20 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-rose-300/80">
              Séries · Films · Sport · Direct
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Un abonnement, tous vos écrans.
            </h1>
            <p className="mt-5 max-w-lg text-pretty leading-relaxed text-zinc-400">
              Trois formules, de un à quatre écrans simultanés, avec
              téléchargements illimités. Sans engagement, résiliable en deux
              clics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#formules"
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                Choisir une formule
              </Link>
              <Link
                href="#comparatif"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Comparer les offres
              </Link>
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              Sans engagement · Résiliation en deux clics · Paiement sécurisé
            </p>
          </div>
          <PosterGrid />
        </section>

        <section id="formules" className="mt-20 scroll-mt-8">
          <SectionHeading
            eyebrow="Formules"
            title="Choisissez votre formule"
            description="Le prix comprend l’accès complet au catalogue, sans publicité et sans supplément."
            eyebrowClassName="text-rose-300/80"
          />
          <div className="mt-10">
            <StreamingPlans />
          </div>
        </section>

        <section id="comparatif" className="mt-20 scroll-mt-8">
          <SectionHeading
            eyebrow="Comparatif"
            title="Ce que contient chaque formule"
            description="Les options marquées Inclus sont disponibles sans surcoût."
            eyebrowClassName="text-rose-300/80"
          />
          <div className="mt-10 overflow-hidden rounded-xl border border-white/10">
            <Table variant="secondary">
              <Table.ScrollContainer>
                <Table.Content
                  aria-label="Comparatif des formules"
                  className="min-w-[640px]"
                >
                  <Table.Header>
                    <Table.Column isRowHeader>Inclus</Table.Column>
                    <Table.Column>Individuel</Table.Column>
                    <Table.Column>Duo</Table.Column>
                    <Table.Column>Famille</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {comparison.map((row) => (
                      <Table.Row key={row.feature}>
                        <Table.Cell className="font-medium text-zinc-100">
                          {row.feature}
                        </Table.Cell>
                        <Table.Cell>{row.individuel}</Table.Cell>
                        <Table.Cell>{row.duo}</Table.Cell>
                        <Table.Cell>{row.famille}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Content>
              </Table.ScrollContainer>
            </Table>
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading
            eyebrow="Bon à savoir"
            title="Questions fréquentes"
            eyebrowClassName="text-rose-300/80"
          />
          <div className="mt-10">
            <Faq items={faqItems} indicatorClassName="text-rose-300" />
          </div>
        </section>

        <footer className="mt-20 flex flex-col gap-2 border-t border-white/10 py-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Streaming — démonstration · catalogue fictif, prix TTC</p>
          <p className="font-mono text-zinc-600">streaming.demo</p>
        </footer>
      </div>
    </main>
  );
}
