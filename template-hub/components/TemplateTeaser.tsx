import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Template } from "@/data/templates";

type TemplateTeaserProps = {
  template: Template;
};

export function TemplateTeaser({ template }: TemplateTeaserProps) {
  return (
    <Link
      href={`/templates/${template.slug}`}
      className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-100">
        <Image
          src={template.image}
          alt={`Aperçu du template ${template.name}`}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 340px, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span
          className="absolute left-4 top-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: template.accentSoft, color: template.accent }}
        >
          {template.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
          {template.name}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-brand-600">
          {template.tagline}
        </p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-600">
          {template.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 transition-colors group-hover:text-brand-600">
          Découvrir
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}