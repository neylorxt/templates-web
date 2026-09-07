"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { openingHours } from "@/config/site";

const toMinutes = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const formatLabel = (time: string) => time.replace(":", "h");

export function OpeningHours() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    let id: number;
    const update = () => {
      setNow(new Date());
      id = window.setTimeout(update, 60_000);
    };
    id = window.setTimeout(update, 0);
    return () => window.clearTimeout(id);
  }, []);

  const todayIndex = now ? (now.getDay() + 6) % 7 : -1;
  const today = now ? openingHours[todayIndex] : undefined;
  const minutes = now ? now.getHours() * 60 + now.getMinutes() : -1;

  let status: { label: string; tone: "open" | "closed" | "off" } | null = null;
  if (today) {
    if (today.open && today.close) {
      const isOpen = minutes >= toMinutes(today.open) && minutes < toMinutes(today.close);
      status = isOpen
        ? { label: `Ouvert actuellement · jusqu’à ${formatLabel(today.close)}`, tone: "open" }
        : { label: `Fermé actuellement · ouvre à ${formatLabel(today.open)}`, tone: "closed" };
    } else {
      status = { label: "Fermé aujourd’hui", tone: "off" };
    }
  }

  return (
    <section id="horaires" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            <Clock className="h-4 w-4" />
            Horaires d’ouverture
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Quand venir nous voir ?
          </h2>
          <p className="mt-4 max-w-md text-ink-soft">
            Le service continu vous accueille toute la journée, sans
            interruption entre midi et soir. La terrasse est ouverte dès que le
            soleil lyonnais pointe le bout de son nez.
          </p>

          <div className="mt-6 inline-flex h-12 items-center gap-3 rounded-full bg-sand px-5 text-sm font-semibold">
            {status ? (
              <>
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    status.tone === "open"
                      ? "bg-green-500"
                      : status.tone === "closed"
                        ? "bg-brand"
                        : "bg-ink/40"
                  }`}
                />
                {status.label}
              </>
            ) : (
              <span className="text-ink-soft">Indicateur d’ouverture en direct</span>
            )}
          </div>
        </div>

        <div className="rounded-3xl bg-sand p-6 shadow-sm ring-1 ring-ink/5 sm:p-8">
          <ul className="divide-y divide-ink/10">
            {openingHours.map((day, index) => {
              const isToday = index === todayIndex;
              return (
                <li
                  key={day.day}
                  className={`flex items-center justify-between py-3.5 ${
                    isToday ? "font-semibold text-brand" : ""
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {isToday && (
                      <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                    )}
                    {day.day}
                    {isToday && <span className="text-xs text-ink-soft">· aujourd’hui</span>}
                  </span>
                  <span className={isToday ? "" : "text-ink-soft"}>
                    {day.open && day.close
                      ? `${formatLabel(day.open)} à ${formatLabel(day.close)}`
                      : "Fermé"}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="mt-6 rounded-2xl bg-cream px-5 py-4 text-sm text-ink-soft">
            Dernier service 45 minutes avant la fermeture. Les jours fériés,
            n’hésitez pas à nous contacter sur WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}