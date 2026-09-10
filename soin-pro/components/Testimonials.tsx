import { Info, Quote, Star } from "lucide-react";
import {
  averageRating,
  reviewCount,
  showTestimonials,
  testimonials,
} from "@/data/testimonials";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`Note : ${rating} sur 5`}
    >
      {Array.from({ length: 5 }).map((_, index) => {
        const fill = Math.min(Math.max(rating - index, 0), 1);
        return (
          <span key={index} className="relative inline-block h-4 w-4">
            <Star
              className="absolute inset-0 h-4 w-4 text-zinc-300"
              fill="currentColor"
              aria-hidden="true"
            />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
              aria-hidden="true"
            >
              <Star className="h-4 w-4 text-clay-500" fill="currentColor" />
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default function Testimonials() {
  if (!showTestimonials) return null;

  return (
    <Section id="avis">
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="Avis"
          title="Ils nous font confiance"
          subtitle="Des retours d'expérience de patients du cabinet."
        />
        <div className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white px-6 py-4 shadow-sm">
          <p className="font-display text-4xl font-semibold tracking-tight text-ink">
            {averageRating.toLocaleString("fr-FR")}
          </p>
          <div>
            <Stars rating={averageRating} />
            <p className="mt-1 text-sm text-zinc-500">
              Basé sur plus de {reviewCount} avis
            </p>
          </div>
        </div>
      </div>

      <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-clay-300 bg-clay-100 px-4 py-2 text-xs font-semibold text-clay-600">
        <Info className="h-4 w-4" aria-hidden="true" />
        Contenu de démonstration : ces avis sont fictifs et doivent être remplacés
        par de vrais avis autorisés avant mise en ligne.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 60}>
            <figure className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-lg">
              <Quote className="h-6 w-6 text-brand-400" aria-hidden="true" />
              <Stars rating={testimonial.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600">
                « {testimonial.text} »
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-zinc-100 pt-4">
                <span className="text-sm font-semibold text-zinc-900">
                  {testimonial.name}
                </span>
                {testimonial.consultation ? (
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {testimonial.consultation}
                  </span>
                ) : null}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}