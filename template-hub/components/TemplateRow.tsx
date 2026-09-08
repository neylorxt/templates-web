import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import type { Template } from "@/data/templates";
import { Badge } from "@/components/Badge";
import { buttonClassName } from "@/components/Button";

type TemplateRowProps = {
  template: Template;
  reverse?: boolean;
};

export function TemplateRow({ template, reverse = false }: TemplateRowProps) {
  return (
    <article className="grid items-center gap-8 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-2 lg:gap-12">
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
          <Image
            src={template.image}
            alt={`Aperçu du template ${template.name}`}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>

      <div className={reverse ? "lg:order-1" : ""}>
        <span
          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: template.accentSoft, color: template.accent }}
        >
          {template.category}
        </span>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">
          {template.name}
        </h2>
        <p className="mt-1.5 font-medium text-brand-600">{template.tagline}</p>
        <p className="mt-4 leading-relaxed text-zinc-600">
          {template.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
          {template.target.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-1.5 text-sm text-zinc-600"
            >
              <Check className="h-4 w-4 text-brand-600" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {template.tags.map((tag) => (
            <Badge
              key={tag}
              className="border border-zinc-200 bg-zinc-50 text-zinc-600"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={template.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonClassName("secondary", "md")} flex-1`}
          >
            Voir la démo
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <Link
            href={`/templates/${template.slug}`}
            className={`${buttonClassName("primary", "md")} flex-1`}
          >
            Découvrir {template.name}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}