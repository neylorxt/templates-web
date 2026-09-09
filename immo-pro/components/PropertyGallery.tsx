"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

type PropertyGalleryProps = {
  images: string[];
  title: string;
};

/**
 * Galerie d'un bien : grande image, miniatures, compteur et lightbox.
 */
export default function PropertyGallery({
  images,
  title,
}: PropertyGalleryProps) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const previous = useCallback(() => {
    setActive((current) => (current === 0 ? images.length - 1 : current - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setActive((current) => (current === images.length - 1 ? 0 : current + 1));
  }, [images.length]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, previous, next]);

  const mainImage = images[active];

  return (
    <div>
      <div className="relative overflow-hidden rounded-3xl">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={mainImage}
            alt={`${title} — photo ${active + 1} sur ${images.length}`}
            fill
            priority
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover"
          />
        </div>
        <span className="absolute left-5 top-5 rounded-full bg-zinc-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {active + 1} / {images.length}
        </span>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Agrandir la photo"
          className="absolute bottom-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-zinc-800 shadow-lg transition-transform hover:scale-105"
        >
          <Expand className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {images.length > 1 ? (
        <div className="mt-4 grid grid-cols-5 gap-3" role="tablist" aria-label="Miniatures">
          {images.map((image, index) => (
            <button
              key={image + index}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Afficher la photo ${index + 1}`}
              onClick={() => setActive(index)}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl transition-all duration-200 ${
                index === active
                  ? "ring-2 ring-brand-700 ring-offset-2"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 1024px) 13vw, 19vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}

      {open ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-950/95"
          role="dialog"
          aria-modal="true"
          aria-label="Galerie photo"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fermer la galerie"
            className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              previous();
            }}
            aria-label="Photo précédente"
            className="absolute left-3 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>

          <div
            className="relative h-full w-full max-w-5xl px-16 py-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full w-full">
              <Image
                src={images[active]}
                alt={`${title} — photo ${active + 1} sur ${images.length}`}
                fill
                sizes="(min-width: 1024px) 1024px, 90vw"
                className="object-contain"
              />
            </div>
            <p className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-sm font-medium text-zinc-400">
              {active + 1} / {images.length}
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Photo suivante"
            className="absolute right-3 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </div>
  );
}