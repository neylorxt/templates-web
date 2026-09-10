"use client";

import { siteConfig, whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons";

/**
 * Bouton WhatsApp flottant.
 * N'est affiché que si le cabinet utilise WhatsApp (`useWhatsApp`).
 */
export default function WhatsAppButton() {
  if (!siteConfig.useWhatsApp) return null;

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition-transform hover:scale-105 lg:bottom-5"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}