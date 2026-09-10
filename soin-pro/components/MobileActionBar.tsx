"use client";

import { CalendarCheck, Phone } from "lucide-react";
import { bookingHref, hasOnlineBooking, telLink } from "@/config/site";

/**
 * Barre d'actions mobile : appel et prise de rendez-vous toujours accessibles.
 * Masquée sur grand écran (lg+), la navigation principale la remplace.
 */
export default function MobileActionBar() {
  const online = hasOnlineBooking();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
      <div className="mx-auto grid w-full max-w-lg grid-cols-2 gap-3 px-5 py-3">
        <a
          href={telLink()}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
        >
          <Phone className="h-4 w-4 text-brand-700" aria-hidden="true" />
          Appeler
        </a>
        <a
          href={bookingHref()}
          {...(online ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
          Prendre rendez-vous
        </a>
      </div>
    </div>
  );
}