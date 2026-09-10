"use client";

import { useEffect, useState } from "react";
import { AlertCircle, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { formatSlots, getOpenStatus, type OpenStatus } from "@/lib/hours";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const timeZone = "Europe/Paris";

type OpenState = { status: OpenStatus; today: number } | null;

export default function OpeningHours() {
  const [state, setState] = useState<OpenState>(null);

  useEffect(() => {
    const update = () =>
      setState({
        status: getOpenStatus(siteConfig.hours, timeZone),
        today: new Date().getDay(),
      });
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  const isOpen = state?.status.state === "open";

  return (
    <Section id="horaires" className="bg-cream">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading
            eyebrow="Horaires"
            title="Horaires du cabinet"
            subtitle="Consultations uniquement sur rendez-vous. Le secrétariat répond aux appels pendant les horaires d'ouverture."
          />

          <div className="mt-8 space-y-5">
            {state ? (
              <p
                className={`inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold ${
                  isOpen
                    ? "bg-brand-100 text-brand-800"
                    : "bg-zinc-200 text-zinc-700"
                }`}
                role="status"
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    isOpen ? "bg-brand-600" : "bg-zinc-500"
                  }`}
                  aria-hidden="true"
                />
                {state.status.label}
              </p>
            ) : (
              <p className="inline-flex items-center gap-2.5 rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-500">
                <Clock className="h-4 w-4" aria-hidden="true" />
                Ouverture vérifiée en temps réel
              </p>
            )}

            <div className="space-y-3 text-sm">
              <p className="inline-flex items-start gap-2.5 text-zinc-600">
                <Clock
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                <span>
                  Horaires téléphoniques :<br />
                  {siteConfig.phoneHours}
                </span>
              </p>
              {siteConfig.appointmentOnly ? (
                <p className="inline-flex items-start gap-2.5 text-zinc-600">
                  <AlertCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                    aria-hidden="true"
                  />
                  Les consultations ont lieu uniquement sur rendez-vous.
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <Reveal delay={120} className="lg:col-span-3">
          <div className="h-full rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
            <ul className="divide-y divide-zinc-100">
              {siteConfig.hours.map((day) => {
                const isToday = state?.today === day.weekday;
                return (
                  <li
                    key={day.label}
                    className={`flex items-center justify-between gap-4 py-3.5 ${
                      isToday ? "rounded-xl bg-brand-50 px-3" : "px-3"
                    }`}
                  >
                    <span
                      className={`text-sm font-medium ${
                        isToday ? "text-brand-800" : "text-zinc-900"
                      }`}
                    >
                      {day.label}
                      {isToday ? (
                        <span className="ml-2 rounded-full bg-brand-600 px-2 py-0.5 text-[11px] font-semibold text-white">
                          Aujourd&apos;hui
                        </span>
                      ) : null}
                    </span>
                    <span
                      className={`text-sm ${
                        day.slots.length === 0
                          ? "font-medium text-zinc-400"
                          : "text-zinc-700"
                      }`}
                    >
                      {formatSlots(day.slots)}
                    </span>
                  </li>
                );
              })}
            </ul>

            {siteConfig.exceptionalClosure ? (
              <p className="mt-6 flex items-start gap-2.5 rounded-2xl border border-clay-300 bg-clay-100 px-5 py-4 text-sm text-clay-600">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                {siteConfig.exceptionalClosure}
              </p>
            ) : null}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}