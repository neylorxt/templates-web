import { Quote, Star } from "lucide-react";
import { averageRating, reviewCount, testimonials } from "@/data/testimonials";
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
              <Star className="h-4 w-4 text-gold-500" fill="currentColor" />
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default function Testimonials() {
  return (
    <Section className="bg-cream">
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="Avis clients"
          title="Ils nous ont confié leur projet"
          subtitle="La satisfaction de nos clients est notre meilleure publicité."
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

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 70}>
            <figure className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-lg">
              <Quote className="h-6 w-6 text-gold-500" aria-hidden="true" />
              <Stars rating={testimonial.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600">
                « {testimonial.text} »
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-zinc-100 pt-4">
                <span className="text-sm font-semibold text-zinc-900">
                  {testimonial.name}
                </span>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  {testimonial.service}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}