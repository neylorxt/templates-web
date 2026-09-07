"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/config/site";

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBySlide = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector<HTMLElement>("[data-slide]");
    const width = slide?.offsetWidth ?? 320;
    track.scrollBy({ left: direction * (width + 16), behavior: "smooth" });
  };

  useEffect(() => {
    if (selected === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") setSelected((i) => (i === null ? i : (i + 1) % gallery.length));
      if (event.key === "ArrowLeft")
        setSelected((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section id="galerie" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Nos photos
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Un aperçu en images
            </h2>
          </div>
          <p className="max-w-sm text-ink-soft">
            Plats, salle, équipe et coulisses : un avant-goût de l’ambiance du
            comptoir. Faites glisser pour parcourir.
          </p>
        </div>

        <div className="relative mt-10">
          <button
            type="button"
            onClick={() => scrollBySlide(-1)}
            className="absolute -left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-ink shadow-lg ring-1 ring-ink/10 transition-colors hover:bg-brand hover:text-cream sm:left-0"
            aria-label="Photo précédente"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
          >
            {gallery.map((item, index) => (
              <button
                key={item.src}
                data-slide
                type="button"
                onClick={() => setSelected(index)}
                className="group relative aspect-[4/3] w-[78vw] max-w-md shrink-0 snap-center overflow-hidden rounded-2xl bg-sand text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:w-[420px]"
                aria-label={`Agrandir la photo : ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 640px) 420px, 78vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 text-sm font-semibold text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.caption}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollBySlide(1)}
            className="absolute -right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-ink shadow-lg ring-1 ring-ink/10 transition-colors hover:bg-brand hover:text-cream sm:right-0"
            aria-label="Photo suivante"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={gallery[selected].alt}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
            aria-label="Fermer la galerie"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelected((selected - 1 + gallery.length) % gallery.length);
            }}
            className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:left-6"
            aria-label="Photo précédente"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <figure className="max-h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={gallery[selected].src}
              alt={gallery[selected].alt}
              width={1200}
              height={900}
              className="max-h-[78vh] w-auto rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-sm text-cream/80">
              {gallery[selected].caption}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelected((selected + 1) % gallery.length);
            }}
            className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:right-6"
            aria-label="Photo suivante"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}