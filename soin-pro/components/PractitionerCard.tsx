"use client";

import Image from "next/image";
import { useState } from "react";
import { CalendarCheck, ChevronDown, Languages } from "lucide-react";
import type { Practitioner } from "@/data/practitioners";
import { bookingHref, hasOnlineBooking } from "@/config/site";

export function PractitionerCard({ practitioner }: { practitioner: Practitioner }) {
  const [expanded, setExpanded] = useState(false);
  const online = hasOnlineBooking();
  const bookingUrl = practitioner.bookingUrl || bookingHref();

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-300 hover:border-brand-200 hover:shadow-lg">
      <div className="overflow-hidden">
        <Image
          src={practitioner.image}
          alt={`Portrait de ${practitioner.name}`}
          width={800}
          height={1000}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-ink">
          {practitioner.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-brand-700">
          {practitioner.profession}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {practitioner.specialties.map((specialty) => (
            <span
              key={specialty}
              className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800"
            >
              {specialty}
            </span>
          ))}
        </div>

        <p
          className={`mt-4 text-sm leading-relaxed text-zinc-600 ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {practitioner.bio}
        </p>

        {expanded ? (
          <button
            type="button"
            onClick={() => setExpanded(false)}
            className="mt-3 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
          >
            Réduire la présentation
            <ChevronDown className="h-4 w-4 rotate-180" aria-hidden="true" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="mt-3 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
          >
            En savoir plus
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </button>
        )}

        {practitioner.languages?.length ? (
          <p className="mt-4 inline-flex items-center gap-2 text-xs text-zinc-500">
            <Languages className="h-4 w-4 shrink-0" aria-hidden="true" />
            {practitioner.languages.join(" · ")}
          </p>
        ) : null}

        <div className="mt-5 border-t border-zinc-100 pt-5">
          <a
            href={bookingUrl}
            {...(online ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </article>
  );
}