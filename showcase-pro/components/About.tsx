import Image from "next/image";
import { Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import Reveal from "./Reveal";

const portraitImage =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80";

const values = [
  "À l'écoute de vos envies dès le premier échange",
  "Une exigence de qualité à chaque étape",
  "Un résultat naturel, jamais artificiel",
];

export default function About() {
  return (
    <section id="apropos" className="scroll-mt-24 bg-coal py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="pointer-events-none absolute -left-4 -top-4 h-28 w-28 rounded-3xl border border-brand-500/40"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-stone-800">
                <Image
                  src={portraitImage}
                  alt={`Portrait de ${siteConfig.name}`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 right-4 rounded-2xl border border-white/10 bg-cream px-5 py-4 text-ink shadow-xl">
                <p className="font-display text-lg font-semibold">{siteConfig.name}</p>
                <p className="mt-0.5 text-xs uppercase tracking-[0.16em] text-stone-500">
                  {siteConfig.profession}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
              À propos
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Une approche centrée sur vos objectifs
            </h2>
            <p className="mt-6 leading-relaxed text-stone-300">
              Photographe indépendant à Lyon depuis plus de sept ans, j’accompagne particuliers et
              entreprises dans la création d’images qui leur ressemblent. Mon travail repose sur
              trois convictions : écouter avant de photographier, préparer chaque séance avec soin,
              et livrer des images qui dépassent vos attentes.
            </p>
            <p className="mt-4 leading-relaxed text-stone-400">
              Que ce soit pour un mariage, un portrait ou un événement d’entreprise, je m’adapte à
              votre univers pour que chaque image reflète votre histoire.
            </p>

            <ul className="mt-8 space-y-3">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3 text-sm text-stone-200">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {value}
                </li>
              ))}
            </ul>

            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-semibold text-brand-300">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs leading-snug text-stone-400 sm:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}