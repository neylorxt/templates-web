"use client";

import { usePathname } from "next/navigation";
import { getPropertyBySlug } from "@/data/properties";
import { siteConfig, whatsappLink } from "@/config/site";
import { propertyWhatsappMessage } from "@/lib/format";
import { WhatsAppIcon } from "@/components/icons";

/**
 * Bouton WhatsApp flottant.
 *
 * Sur une page de bien, le message pré-rempli est personnalisé avec le nom
 * du bien consulté. Le numéro provient de la configuration globale.
 */
export default function WhatsAppButton() {
  const pathname = usePathname();

  let message = siteConfig.whatsappMessage;
  const isPropertyPage = /^\/biens\/[^/]+/.test(pathname);
  if (isPropertyPage) {
    const property = getPropertyBySlug(pathname.split("/").pop() ?? "");
    if (property) {
      message = propertyWhatsappMessage(property);
    }
  }

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className={`fixed right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition-transform hover:scale-105 ${
        isPropertyPage ? "bottom-24 lg:bottom-5" : "bottom-5"
      }`}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}