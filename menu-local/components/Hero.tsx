import Image from "next/image";
import { MapPin } from "lucide-react";
import { hero, siteConfig, trustBadges, whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/15" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-sm font-medium text-cream backdrop-blur">
          <MapPin className="h-4 w-4 text-gold" />
          {siteConfig.name} · {siteConfig.district}, {siteConfig.city}
        </p>

        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl lg:text-6xl">
          {hero.title}
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/85">
          {hero.subtitle}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-ink shadow-lg transition-all hover:brightness-110"
          >
            Voir le menu
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#1fb457]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Commander sur WhatsApp
          </a>
        </div>

        <ul className="mt-12 flex flex-wrap gap-3">
          {trustBadges.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2 text-sm font-medium text-cream backdrop-blur"
            >
              <Icon className="h-4 w-4 text-gold" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}