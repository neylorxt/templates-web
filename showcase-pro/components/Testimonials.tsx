import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/config/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <span
      className={`flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`Note : ${rating} sur 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-brand-500 text-brand-500" : "fill-stone-200 text-stone-200"
          }`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section id="avis" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Avis clients"
          title="Ils m'ont fait confiance"
          subtitle="La satisfaction de mes clients est ma meilleure vitrine. Voici ce qu'ils disent de leur expérience."
        />

        <Reveal delay={100}>
          <div className="mt-10 flex flex-col items-center gap-2 text-center">
            <Stars rating={5} className="justify-center" />
            <p className="font-display text-3xl font-semibold text-ink">
              {siteConfig.globalRating}
            </p>
            <p className="text-sm text-stone-500">{siteConfig.globalRatingLabel}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={(index % 2) * 120}>
              <figure className="relative flex h-full flex-col rounded-3xl border border-stone-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Quote
                  className="absolute right-6 top-6 h-8 w-8 text-brand-100"
                  aria-hidden="true"
                />
                <Stars rating={testimonial.rating} />

                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">
                  « {testimonial.text} »
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-4 border-t border-stone-100 pt-5">
                  <Image
                    src={testimonial.avatar}
                    alt={`Photo de ${testimonial.name}`}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-xs text-stone-400">Prestation : {testimonial.service}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}