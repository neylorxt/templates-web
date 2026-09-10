"use client";

import Link from "next/link";
import { GraduationCap, Phone } from "lucide-react";
import { telLink, whatsappLink, siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons";

/**
 * Barre d'actions mobile : appel, WhatsApp et inscription toujours accessibles.
 * Masquée sur grand écran (lg+), la navigation principale la remplace.
 */
export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
      <div className="mx-auto grid w-full max-w-lg grid-cols-3 gap-3 px-5 py-3">
        <a
          href={telLink()}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
        >
          <Phone className="h-4 w-4 text-brand-700" aria-hidden="true" />
          Appeler
        </a>
        {siteConfig.useWhatsApp ? (
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
          >
            <WhatsAppIcon className="h-4 w-4 text-brand-700" />
            WhatsApp
          </a>
        ) : null}
        <Link
          href="/#inscription"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
        >
          <GraduationCap className="h-4 w-4" aria-hidden="true" />
          S&apos;inscrire
        </Link>
      </div>
    </div>
  );
}