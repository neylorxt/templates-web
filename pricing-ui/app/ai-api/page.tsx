import type { Metadata } from "next";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button, Card, Chip, Table } from "@heroui/react";
import { BackToHome } from "@/components/back-to-home";
import { Faq } from "@/components/faq";
import { SectionHeading } from "@/components/section-heading";
import { UsageCalculator } from "./usage-calculator";

export const metadata: Metadata = {
  title: "AI API",
  description:
    "Exemple de tarification d’API IA : facturation au token, paliers dégressifs et tarifs par modèle.",
};

const requestLines = [
  "curl https://api.ai-api.dev/v1/chat \\",
  '  -H "Authorization: Bearer $API_KEY" \\',
  '  -H "Content-Type: application/json" \\',
  "  -d '{",
  '    "model": "pro",',
  '    "messages": [{"role": "user", "content": "Bonjour"}]',
  "  }'",
];

const stats = [
  { value: "99,99 %", label: "de disponibilité" },
  { value: "< 300 ms", label: "de latence médiane" },
  { value: "12", label: "régions" },
  { value: "SOC 2", label: "et conformité RGPD" },
];

const plans = [
  {
    name: "Développeur",
    price: "0 €",
    detail: "1 M de tokens offerts chaque mois, puis 0,90 € par million.",
    features: [
      "Accès aux trois modèles",
      "Limite de débit standard",
      "Support communautaire",
    ],
    cta: "Créer une clé",
    highlighted: false,
  },
  {
    name: "Scale",
    price: "0,55 €",
    detail: "par million de tokens, à partir de 100 M par mois.",
    features: [
      "Paliers dégressifs",
      "Limite de débit étendue",
      "SLA 99,9 %",
      "Support prioritaire",
    ],
    cta: "Passer à Scale",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Sur mesure",
    detail: "Engagements annuels, déploiement privé et conditions négociées.",
    features: [
      "Déploiement privé",
      "SSO et journal d’audit",
      "Ingénieur dédié",
    ],
    cta: "Contacter l’équipe",
    highlighted: false,
  },
];

const models = [
  {
    name: "Mini",
    context: "128k",
    input: "0,15 €",
    output: "0,60 €",
    usage: "Classement et extraction",
  },
  {
    name: "Pro",
    context: "200k",
    input: "0,90 €",
    output: "3,60 €",
    usage: "Rédaction et support client",
  },
  {
    name: "Max",
    context: "1M",
    input: "3,20 €",
    output: "12,80 €",
    usage: "Raisonnement complexe",
  },
];

const faqItems = [
  {
    question: "Comment les tokens sont-ils comptés ?",
    answer:
      "Les tokens d’entrée et de sortie sont comptabilisés séparément, arrondis à la requête. Vous retrouvez le détail par clé et par modèle dans le tableau de bord.",
  },
  {
    question: "Que se passe-t-il après le million de tokens offert ?",
    answer:
      "La facturation passe automatiquement à l’usage, au tarif du palier atteint. Vous pouvez définir un plafond mensuel pour éviter toute surprise.",
  },
  {
    question: "Peut-on obtenir un tarif pour de gros volumes ?",
    answer:
      "Oui. Au-delà de 250 M de tokens par mois, les conditions sont négociées avec l’équipe, avec engagement et facturation annuelle possibles.",
  },
  {
    question: "Où les données sont-elles traitées ?",
    answer:
      "Par défaut dans l’Union européenne. Les requêtes ne sont pas conservées et aucune donnée n’est utilisée pour entraîner les modèles.",
  },
];

function RequestSample() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <span className="font-mono text-xs text-zinc-500">requete.sh</span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
          <span className="size-1.5 rounded-full bg-emerald-400" />
          200 OK
        </span>
      </div>
      <div className="overflow-x-auto p-5 font-mono text-xs leading-relaxed">
        {requestLines.map((line, index) => (
          <p
            key={index}
            className={index === 0 ? "text-zinc-100" : "text-zinc-400"}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function AiApiPage() {
  return (
    <main
      data-theme="dark"
      className="theme-ai min-h-dvh bg-[#09090c] text-zinc-100"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center rounded-md bg-fuchsia-500 text-[11px] font-bold text-white">
              AI
            </span>
            <span className="font-semibold tracking-tight">AI API</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden items-center gap-2 text-xs text-zinc-500 sm:flex">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              API opérationnelle
            </span>
            <BackToHome className="text-zinc-500 hover:text-fuchsia-200" />
          </div>
        </header>

        <section className="mt-16 grid items-center gap-12 lg:mt-20 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-fuchsia-300/80">
              Tarification à l’usage
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Payez au token, à la requête près.
            </h1>
            <p className="mt-5 max-w-lg text-pretty leading-relaxed text-zinc-400">
              Trois modèles, une seule API, aucun abonnement. Un million de
              tokens offert chaque mois, puis des paliers qui baissent avec le
              volume.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg">
                Créer une clé API
                <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="outline">
                <BookOpen className="size-4" />
                Lire la documentation
              </Button>
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              Sans engagement · Facturation à la seconde · Plafond de dépense
              configurable
            </p>
          </div>
          <RequestSample />
        </section>

        <section className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4"
            >
              <p className="font-mono text-xl font-semibold text-zinc-50">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </section>

        <section className="mt-20">
          <SectionHeading
            eyebrow="Estimation"
            title="Combien allez-vous payer ?"
            description="Déplacez le curseur pour simuler votre consommation. Le palier est appliqué automatiquement."
            eyebrowClassName="text-fuchsia-300/80"
          />
          <UsageCalculator />
        </section>

        <section className="mt-20">
          <SectionHeading
            eyebrow="Formules"
            title="Un plan pour chaque étape"
            description="Commencez gratuitement, passez à Scale quand le volume augmente, négociez un contrat pour les déploiements privés."
            eyebrowClassName="text-fuchsia-300/80"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`bg-white/[0.02] ${
                  plan.highlighted
                    ? "border-fuchsia-500/50"
                    : "border-white/10"
                }`}
              >
                <Card.Header>
                  <div className="flex items-center justify-between gap-3">
                    <Card.Title className="text-lg">{plan.name}</Card.Title>
                    {plan.highlighted ? (
                      <Chip color="accent" variant="soft" size="sm">
                        Recommandé
                      </Chip>
                    ) : null}
                  </div>
                </Card.Header>
                <Card.Content className="flex flex-col gap-6">
                  <div>
                    <p className="text-3xl font-semibold tracking-tight text-zinc-50">
                      {plan.price}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                      {plan.detail}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2.5 text-sm text-zinc-400">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5">
                        <span className="size-1.5 rounded-full bg-fuchsia-400" />
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
        </section>

        <section className="mt-20">
          <SectionHeading
            eyebrow="Modèles"
            title="Tarifs par modèle"
            description="Prix hors taxes pour un million de tokens. L’entrée et la sortie sont facturées séparément."
            eyebrowClassName="text-fuchsia-300/80"
          />
          <div className="mt-10 overflow-hidden rounded-xl border border-white/10">
            <Table variant="secondary">
              <Table.ScrollContainer>
                <Table.Content
                  aria-label="Tarifs des modèles"
                  className="min-w-[640px]"
                >
                  <Table.Header>
                    <Table.Column isRowHeader>Modèle</Table.Column>
                    <Table.Column>Contexte</Table.Column>
                    <Table.Column>Entrée / M</Table.Column>
                    <Table.Column>Sortie / M</Table.Column>
                    <Table.Column>Idéal pour</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {models.map((model) => (
                      <Table.Row key={model.name}>
                        <Table.Cell className="font-medium text-zinc-100">
                          {model.name}
                        </Table.Cell>
                        <Table.Cell>{model.context}</Table.Cell>
                        <Table.Cell className="font-mono">
                          {model.input}
                        </Table.Cell>
                        <Table.Cell className="font-mono">
                          {model.output}
                        </Table.Cell>
                        <Table.Cell className="text-zinc-500">
                          {model.usage}
                        </Table.Cell>
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
            eyebrow="Questions fréquentes"
            title="Tout ce qu’il faut savoir"
            eyebrowClassName="text-fuchsia-300/80"
          />
          <div className="mt-10">
            <Faq items={faqItems} indicatorClassName="text-fuchsia-300" />
          </div>
        </section>

        <footer className="mt-20 flex flex-col gap-2 border-t border-white/10 py-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>AI API — démonstration · prix hors taxes par million de tokens</p>
          <p className="font-mono text-zinc-600">api.ai-api.dev</p>
        </footer>
      </div>
    </main>
  );
}
