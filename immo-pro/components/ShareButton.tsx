"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons";

/**
 * Bouton « Partager le bien » : partage natif si disponible, sinon copie du
 * lien dans le presse-papiers, avec un partage WhatsApp en option.
 */
export default function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const pageUrl =
    typeof window !== "undefined" ? window.location.href : siteConfig.baseUrl;

  async function handleShare() {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: `${title} | ${siteConfig.name}`,
        url,
      });
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950"
      >
        {copied ? (
          <Check className="h-4 w-4 text-brand-700" aria-hidden="true" />
        ) : (
          <Share2 className="h-4 w-4" aria-hidden="true" />
        )}
        {copied ? "Lien copié" : "Partager le bien"}
      </button>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(
          `${title} — ${pageUrl}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Partager sur WhatsApp"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-colors hover:border-[#25d366] hover:text-[#25d366]"
      >
        <WhatsAppIcon className="h-4 w-4" />
      </a>
    </div>
  );
}