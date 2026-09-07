import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/company";

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-white pt-28 lg:pt-36">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60rem 30rem at 90% -10%, rgba(51,128,252,0.10), transparent 60%), radial-gradient(40rem 25rem at -10% 20%, rgba(51,128,252,0.06), transparent 60%)",
        }}
      />
      <Container className="pb-16 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
                <span className="h-2 w-2 rounded-full bg-brand-600" aria-hidden="true" />
                {company.slogan}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.4rem]">
                {company.heroTitle}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
                {company.heroSubtitle}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                >
                  Demander un devis
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-7 py-3.5 text-base font-semibold text-zinc-900 transition-colors hover:border-brand-600 hover:text-brand-600"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Nous contacter
                </a>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <dl className="mt-10 grid grid-cols-1 gap-4 border-t border-zinc-100 pt-8 sm:grid-cols-3">
                {company.trustPoints.map((point) => (
                  <div key={point.title} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <point.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-sm font-semibold text-zinc-900">
                        {point.title}
                      </dt>
                      <dd className="mt-0.5 text-sm text-zinc-500">
                        {point.description}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative">
              <div
                className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-brand-100 via-brand-50 to-transparent"
                aria-hidden="true"
              />
              <Image
                src={company.heroImage.src}
                alt={company.heroImage.alt}
                width={960}
                height={1080}
                priority
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-8 sm:left-8 sm:right-auto">
                <div>
                  <p className="text-sm font-bold text-zinc-900">Devis gratuit</p>
                  <p className="text-xs text-zinc-500">Réponse sous 24h</p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}