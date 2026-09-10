import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, CheckCircle2, Phone } from "lucide-react";
import { bookingHref, hasOnlineBooking, siteConfig, telLink } from "@/config/site";
import { buttonClassName } from "@/components/Button";

export default function Hero() {
  const online = hasOnlineBooking();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mist to-paper">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 top-64 h-72 w-72 rounded-full bg-clay-100/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-2 lg:gap-16 lg:pb-24">
        <div className="animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            {siteConfig.profession} à {siteConfig.contact.city}
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
            Notre cabinet vous accueille dans un environnement professionnel et
            bienveillant pour un accompagnement adapté à vos besoins.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={bookingHref()}
              {...(online ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={buttonClassName("primary", "lg")}
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Prendre rendez-vous
            </a>
            <Link
              href="/#cabinet"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-zinc-200 bg-white px-7 py-3.5 text-base font-medium text-zinc-900 transition-all duration-200 hover:border-brand-300 hover:text-brand-700"
            >
              Découvrir le cabinet
            </Link>
          </div>

          <ul className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
            {siteConfig.heroHighlights.map((highlight) => (
              <li
                key={highlight}
                className="inline-flex items-center gap-2.5 text-sm font-medium text-zinc-700"
              >
                <CheckCircle2
                  className="h-5 w-5 shrink-0 text-brand-500"
                  aria-hidden="true"
                />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-fade-up">
          <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-brand-900/10">
            <Image
              src={siteConfig.images.hero}
              alt="Salle d'attente lumineuse du cabinet SoinPro"
              width={1200}
              height={1400}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              priority
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-brand-100 bg-white/95 p-5 shadow-lg backdrop-blur sm:left-8 sm:right-auto sm:w-72">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              Prendre rendez-vous
            </p>
            <a
              href={telLink()}
              className="mt-1.5 flex items-center gap-2 font-display text-xl font-semibold text-ink transition-colors hover:text-brand-700"
            >
              <Phone className="h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <p className="mt-1 text-xs text-zinc-500">{siteConfig.phoneHours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}