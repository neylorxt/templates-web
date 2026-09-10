import { Star, StarHalf, Info } from "lucide-react";
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
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;

  return (
    <span
      className="inline-flex items-center gap-0.5"
      role="img"
      aria-label={`Note de ${rating} sur 5`}
    >
      {Array.from({ length: full }).map((_, index) => (
        <Star
          key={index}
          className="h-4 w-4 fill-accent-400 text-accent-400"
          aria-hidden="true"
        />
      ))}
      {half ? (
        <StarHalf
          className="h-4 w-4 fill-accent-400 text-accent-400"
          aria-hidden="true"
        />
      ) : null}
    </span>
  );
}

function initials(name: string): string {
  return name
    .replace(/[^A-Za-zÀ-ÿ -]/g, "")
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Section « Témoignages ». Les avis proviennent de `data/testimonials.ts` et
 * sont identifiés comme données de démonstration tant qu'ils n'ont pas été
 * remplacés par de vrais avis.
 */
export default function Testimonials() {
  if (!showTestimonials) return null;

  return (
    <Section id="temoignages" className="bg-white">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Témoignages"
          title="Ils ont progressé avec nous"
          subtitle="Des apprenants racontent leur expérience, leur progression et leur satisfaction."
        />
        <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm">
          <span className="font-display text-3xl font-semibold text-ink">
            {averageRating}
          </span>
          <div>
            <Stars rating={averageRating} />
            <p className="mt-0.5 text-xs text-zinc-500">
              sur la base de {reviewCount} avis
            </p>
          </div>
        </div>
      </div>

      <p className="mt-8 flex items-start gap-2 rounded-xl bg-accent-100 px-4 py-3 text-xs leading-relaxed text-zinc-700">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
        Témoignages de démonstration : remplacez-les par de vrais avis
        autorisés par vos apprenants avant la mise en ligne.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 60}>
            <figure className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <Stars rating={testimonial.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-700">
                « {testimonial.text} »
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800">
                  {initials(testimonial.name)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-zinc-500">
                    Formation {testimonial.course}
                  </p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}