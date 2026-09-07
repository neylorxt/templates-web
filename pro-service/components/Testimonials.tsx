import { Quote, Star } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section id="avis" className="scroll-mt-20 bg-zinc-50 py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Avis clients"
            title="Ils nous font confiance"
            description="La satisfaction de nos clients est notre meilleure publicité. Voici quelques retours d'expérience."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-6 py-3 shadow-sm">
              <div className="flex items-center gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm font-medium text-zinc-700">
                <span className="font-bold text-zinc-900">
                  {company.ratingAverage}/5
                </span>{" "}
                — basé sur plus de {company.ratingCount} avis
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {company.testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <Quote
                  className="h-8 w-8 text-brand-100"
                  aria-hidden="true"
                />
                <div
                  className="mt-4 flex items-center gap-1"
                  role="img"
                  aria-label={`Note : ${testimonial.rating} étoiles sur 5`}
                >
                  {Array.from({ length: testimonial.rating }).map((_, star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-zinc-700">
                  « {testimonial.text} »
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
                    {initials(testimonial.name)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-zinc-500">
                      {testimonial.service}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}