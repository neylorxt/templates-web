import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/company";

export function About() {
  return (
    <section id="apropos" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative">
              <div
                className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-bl from-brand-100 to-transparent"
                aria-hidden="true"
              />
              <Image
                src={company.aboutImage.src}
                alt={company.aboutImage.alt}
                width={880}
                height={660}
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 left-6 rounded-2xl bg-white p-5 shadow-lg">
                <p className="text-3xl font-bold text-brand-600">
                  {company.stats[0].value}
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-600">
                  {company.stats[0].label}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
                À propos
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                {company.aboutTitle}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-zinc-600">
                {company.aboutIntro}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <ul className="mt-7 space-y-3">
                {company.aboutPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                      aria-hidden="true"
                    />
                    <span className="text-zinc-700">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 grid grid-cols-3 gap-4 border-y border-zinc-100 py-6">
                {company.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-zinc-900 sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={300}>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                Découvrir notre entreprise
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}