import type { Metadata } from "next";
import { Building2, FileText, Lock, MessagesSquare } from "lucide-react";
import { Table } from "@heroui/react";
import { BackToHome } from "@/components/back-to-home";
import { QuoteForm } from "./quote-form";

export const metadata: Metadata = {
  title: "Enterprise",
  description:
    "Exemple de tarification grands comptes : devis personnalisé et tableau comparatif des offres.",
};

const rows = [
  {
    feature: "Sièges inclus",
    team: "Jusqu’à 25",
    enterprise: "Jusqu’à 250",
    custom: "Illimité",
  },
  {
    feature: "Authentification",
    team: "SSO",
    enterprise: "SSO + SAML",
    custom: "SAML, SCIM, OIDC",
  },
  {
    feature: "Déploiement",
    team: "Mutualisé",
    enterprise: "VPC dédié",
    custom: "Auto-hébergé",
  },
  { feature: "SLA", team: "99,9 %", enterprise: "99,95 %", custom: "Sur mesure" },
  {
    feature: "Support",
    team: "E-mail prioritaire",
    enterprise: "24/7",
    custom: "Ingénieur dédié",
  },
  {
    feature: "Audit et conformité",
    team: "—",
    enterprise: "Journal d’audit",
    custom: "ISO 27001, SOC 2",
  },
  {
    feature: "Tarification",
    team: "149 € / mois",
    enterprise: "1 200 € / mois",
    custom: "Sur devis",
  },
];

const arguments_ = [
  {
    icon: FileText,
    title: "Devis en 48 h",
    description: "Périmètre, volumétrie et conditions négociées noir sur blanc.",
  },
  {
    icon: Lock,
    title: "Sécurité vérifiée",
    description: "Auto-hébergement, chiffrement et audit régulier.",
  },
  {
    icon: MessagesSquare,
    title: "Interlocuteur unique",
    description: "Un ingénieur dédié qui connaît votre architecture.",
  },
];

export default function EnterprisePage() {
  return (
    <main className="theme-enterprise min-h-dvh bg-slate-50 text-slate-900">
      <div className="bg-[#0f1f4d] text-white">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center rounded bg-white/10">
              <Building2 className="size-4" />
            </span>
            <span className="text-sm font-semibold tracking-tight">
              Enterprise
            </span>
          </div>
          <BackToHome className="text-white/60 hover:text-white" />
        </header>
      </div>

      <section className="mx-auto max-w-3xl px-6 pt-16 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700">
          Offre grands comptes
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Une tarification à l’échelle de votre organisation
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-slate-600">
          Comparez les niveaux de service, puis demandez un devis construit
          autour de votre volumétrie et de vos exigences de conformité.
        </p>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-6">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Table>
            <Table.ScrollContainer>
              <Table.Content
                aria-label="Comparatif des offres grands comptes"
                className="min-w-[720px]"
              >
                <Table.Header>
                  <Table.Column isRowHeader>Inclus</Table.Column>
                  <Table.Column>Équipe</Table.Column>
                  <Table.Column>Entreprise</Table.Column>
                  <Table.Column>Sur mesure</Table.Column>
                </Table.Header>
                <Table.Body>
                  {rows.map((row) => (
                    <Table.Row key={row.feature}>
                      <Table.Cell className="font-medium text-slate-900">
                        {row.feature}
                      </Table.Cell>
                      <Table.Cell>{row.team}</Table.Cell>
                      <Table.Cell>{row.enterprise}</Table.Cell>
                      <Table.Cell className="font-medium text-blue-800">
                        {row.custom}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl gap-12 px-6 pb-20 lg:grid-cols-[1fr_460px]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Parlons de votre contexte
          </h2>
          <p className="mt-3 max-w-md text-pretty leading-relaxed text-slate-600">
            Chaque contrat est unique. Décrivez votre besoin, nous revenons vers
            vous avec une proposition chiffrée et un plan de déploiement.
          </p>
          <div className="mt-8 flex flex-col gap-6">
            {arguments_.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-800">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <QuoteForm />
      </section>
    </main>
  );
}
