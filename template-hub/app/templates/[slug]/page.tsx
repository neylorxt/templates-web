import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  LayoutTemplate,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { getTemplateBySlug, templates } from "@/data/templates";
import { Badge } from "@/components/Badge";
import { buttonClassName } from "@/components/Button";
import { Section } from "@/components/Section";

type TemplatePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return templates.map((template) => ({ slug: template.slug }));
}

export async function generateMetadata({
  params,
}: TemplatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    return { title: "Template introuvable" };
  }

  return {
    title: `${template.name} | TemplateHub`,
    description: template.longDescription,
    alternates: {
      canonical: `/templates/${template.slug}`,
    },
    openGraph: {
      title: `${template.name} | TemplateHub`,
      description: template.description,
      images: [{ url: `${siteConfig.baseUrl}${template.image}`, alt: `Aperçu du template ${template.name}` }],
    },
  };
}

export default async function TemplateDetailPage({ params }: TemplatePageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  return (
    <>
      <section className="border-b border-zinc-100 bg-gradient-to-b from-brand-50/70 to-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Tous les templates
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold"
              style={{
                backgroundColor: template.accentSoft,
                color: template.accent,
              }}
            >
              {template.category}
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              {template.name}
            </h1>
          </div>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600">
            {template.longDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={template.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClassName("primary", "lg")}
            >
              Voir la démo
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href="/contact"
              className={buttonClassName("secondary", "lg")}
            >
              Demander ce template
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {template.tags.map((tag) => (
              <Badge
                key={tag}
                className="border border-zinc-200 bg-white text-zinc-600"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <Section className="pt-12">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl">
          <div className="flex items-center gap-1.5 border-b border-zinc-100 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
            <div className="ml-3 flex-1 truncate rounded-md bg-zinc-100 px-3 py-1 text-[11px] text-zinc-500">
              {template.slug}.fr
            </div>
          </div>
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={template.image}
              alt={`Aperçu complet du template ${template.name}`}
              fill
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              Idéal pour
            </h2>
            <p className="mt-3 leading-relaxed text-zinc-600">
              {template.audience}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {template.target.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-800"
                >
                  <Check className="h-4 w-4 text-brand-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              Structure du site
            </h2>
            <p className="mt-3 leading-relaxed text-zinc-600">
              Une organisation claire, pensée pour convertir les visiteurs en
              clients.
            </p>
            <ol className="mt-6 space-y-3">
              {template.structure.map((section, index) => (
                <li key={section} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-600">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-zinc-800">
                    {section}
                  </span>
                  {index < template.structure.length - 1 ? (
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-zinc-300"
                      aria-hidden="true"
                    />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section className="bg-zinc-50">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
          Fonctionnalités
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {template.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4"
            >
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: template.accentSoft,
                  color: template.accent,
                }}
              >
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-zinc-800">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-zinc-50">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
          Technologies utilisées
        </h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {template.technologies.map((technology) => (
            <li
              key={technology}
              className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 shadow-sm"
            >
              <LayoutTemplate
                className="h-4 w-4 text-brand-600"
                aria-hidden="true"
              />
              {technology}
            </li>
          ))}
        </ul>
      </Section>

      <section className="bg-zinc-950 py-20 sm:py-24">
        <div className="mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Vous aimez ce modèle ?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            Nous pouvons le personnaliser pour votre entreprise : couleurs, logo,
            contenu et coordonnées.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              Demander ce template
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/templates"
              className="inline-flex items-center rounded-full border border-white/25 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              Voir les autres templates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}