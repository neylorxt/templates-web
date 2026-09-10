import Image from "next/image";
import { CalendarCheck, Phone } from "lucide-react";
import { bookingHref, hasOnlineBooking, siteConfig, telLink } from "@/config/site";

export default function CtaFinal() {
  const online = hasOnlineBooking();

  return (
    <section className="relative overflow-hidden bg-coal">
      <Image
        src={siteConfig.images.cta}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-coal to-coal/70"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-300">
          {siteConfig.name}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Besoin d&apos;un rendez-vous ?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">
          Choisissez votre créneau en ligne ou contactez directement le cabinet.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={bookingHref()}
            {...(online ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-medium text-brand-900 transition-colors hover:bg-brand-50"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Prendre rendez-vous
          </a>
          <a
            href={telLink()}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Appeler le cabinet
          </a>
        </div>
      </div>
    </section>
  );
}