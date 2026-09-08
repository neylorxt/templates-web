import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";
import Reveal from "./Reveal";

const heroImage =
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=80";

export default function Hero() {
  return (
    <section id="accueil" className="scroll-mt-24 overflow-hidden pt-28 sm:pt-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" aria-hidden="true" />
              {siteConfig.tagline}
            </p>

            <h1 className="mt-6 font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {siteConfig.headline}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-500">
              {siteConfig.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#realisations"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-brand-700 hover:shadow-md"
              >
                Voir mes réalisations
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white/60 px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-200 hover:border-brand-600 hover:text-brand-600"
              >
                Me contacter
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-stone-200 pt-8">
              {siteConfig.trust.map((item) => (
                <div key={item.label}>
                  <dt className="sr-only">{item.label}</dt>
                  <dd className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {item.value}
                  </dd>
                  <dd className="mt-1 text-xs leading-snug text-stone-500 sm:text-sm">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div
              className="pointer-events-none absolute -right-5 -top-5 h-32 w-32 rounded-3xl border border-brand-200"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-stone-200 shadow-xl">
              <Image
                src={heroImage}
                alt={`${siteConfig.name}, ${siteConfig.profession}`}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-stone-200 bg-white/95 px-5 py-4 shadow-lg backdrop-blur sm:-left-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Star className="h-5 w-5 fill-current" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display text-lg font-semibold leading-none text-ink">
                  {siteConfig.globalRating}
                </span>
                <span className="mt-1 block text-xs text-stone-500">
                  {siteConfig.globalRatingLabel}
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}