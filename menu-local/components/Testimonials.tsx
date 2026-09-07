import { Quote, Star } from "lucide-react";
import { siteConfig, testimonials } from "@/config/site";

function Stars({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex gap-0.5" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.round(value) ? "fill-gold text-gold" : "text-ink/20"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const { average, count } = siteConfig.rating;
  const countLabel = count >= 200 ? "plus de 200 avis" : `${count} avis`;

  return (
    <section id="avis" className="bg-sand py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Avis clients
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Ils nous font confiance
            </h2>
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-cream px-5 py-4 shadow-sm ring-1 ring-ink/5">
            <p className="font-display text-4xl font-semibold text-brand">
              {average.toLocaleString("fr-FR")}
            </p>
            <div>
              <Stars value={average} label={`Note moyenne : ${average} sur 5`} />
              <p className="mt-1 text-sm text-ink-soft">/ 5 · {countLabel}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-3xl bg-cream p-6 shadow-sm ring-1 ring-ink/5"
            >
              <Quote
                className="h-7 w-7 fill-brand/20 text-brand"
                aria-hidden="true"
              />
              <Stars value={review.rating} label={`Note de ${review.name} : ${review.rating} sur 5`} />
              <blockquote className="mt-3 flex-1 leading-relaxed text-ink-soft">
                « {review.comment} »
              </blockquote>
              <figcaption className="mt-5">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-ink-soft/80">{review.mention}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}