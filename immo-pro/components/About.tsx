import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export default function About() {
  return (
    <Section id="a-propos" className="bg-cream">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src={siteConfig.agent.photo}
                alt={`${siteConfig.agent.name}, ${siteConfig.agent.role}`}
                width={800}
                height={1000}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-zinc-100 bg-white p-5 shadow-xl sm:left-8 sm:right-auto sm:w-72">
              <p className="text-sm font-medium text-zinc-500">
                {siteConfig.agent.role}
              </p>
              <p className="font-display text-xl font-semibold text-ink">
                {siteConfig.agent.name}
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                Expertise de la métropole lyonnaise
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
            À propos
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Votre partenaire immobilier de confiance
          </h2>
          <p className="mt-5 leading-relaxed text-zinc-600">
            Depuis plus de dix ans, {siteConfig.name} accompagne particuliers et
            investisseurs dans toutes leurs démarches immobilières à{" "}
            {siteConfig.area}. Notre force : une connaissance fine du marché
            local, une écoute attentive et une exigence de qualité à chaque
            étape de votre projet.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-600">
            Achat, vente ou location, nous travaillons en toute transparence,
            avec des conseils clairs et une disponibilité réelle. Nos clients le
            disent : être accompagné par {siteConfig.name}, c&apos;est aborder son
            projet sereinement.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Zone d&apos;intervention : {siteConfig.area}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {siteConfig.areaCities.map((city) => (
              <span
                key={city}
                className="rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-medium text-zinc-600"
              >
                {city}
              </span>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-semibold tracking-tight text-brand-800">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-sm text-zinc-500">{stat.label}</dd>
              </div>
            ))}
          </dl>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-brand-800"
          >
            Découvrir l&apos;agence
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
            <CheckCircle2 className="h-4 w-4 text-gold-500" aria-hidden="true" />
            Estimation gratuite et sans engagement
          </div>
        </Reveal>
      </div>
    </Section>
  );
}