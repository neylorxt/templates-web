import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import type { Template } from "@/data/templates";
import { Badge } from "@/components/Badge";
import { buttonClassName } from "@/components/Button";

type TemplateCardProps = {
  template: Template;
};

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden border-b border-zinc-100">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={template.image}
            alt={`Aperçu du template ${template.name}`}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 340px, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <span
          className="absolute left-4 top-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: template.accentSoft, color: template.accent }}
        >
          {template.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">
          {template.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          {template.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {template.tags.map((tag) => (
            <Badge
              key={tag}
              className="border border-zinc-200 bg-zinc-50 text-zinc-600"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Idéal pour
          </p>
          <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5">
            {template.target.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 text-sm text-zinc-600"
              >
                <Check
                  className="h-3.5 w-3.5 text-brand-600"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-zinc-100 pt-5 sm:flex-row">
          <a
            href={template.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonClassName("secondary", "sm")} flex-1`}
          >
            Voir la démo
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <Link
            href={`/templates/${template.slug}`}
            className={`${buttonClassName("primary", "sm")} flex-1`}
          >
            Découvrir {template.name}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}