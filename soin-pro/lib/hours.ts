import type { OpeningDay } from "@/config/site";

export type OpenState = "open" | "closed";

export type OpenStatus = {
  state: OpenState;
  label: string;
};

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function toMinutes(value: string): number {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + (minutes || 0);
}

/** Formate « 18:30 » en « 18h30 » (et « 09:00 » en « 9h »). */
export function formatTime(value: string): string {
  const [hours, minutes] = value.split(":");
  const h = String(Number(hours));
  return minutes && minutes !== "00" ? `${h}h${minutes}` : `${h}h`;
}

/** Formate les créneaux d'une journée pour l'affichage. */
export function formatSlots(slots: OpeningDay["slots"]): string {
  if (slots.length === 0) return "Fermé";
  return slots
    .map((slot) => `${formatTime(slot.open)} – ${formatTime(slot.close)}`)
    .join("  ·  ");
}

function getZonedParts(timeZone: string, date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const get = (type: string) =>
    parts.find((part) => part.type === type)?.value ?? "";
  let hour = Number(get("hour"));
  if (hour === 24) hour = 0;
  return {
    weekday: WEEKDAYS.indexOf(get("weekday")),
    minutes: hour * 60 + Number(get("minute")),
  };
}

/**
 * Calcule si le cabinet est ouvert maintenant, dans le fuseau indiqué.
 *
 * Le calcul se fait dans le fuseau `timeZone` (par défaut Europe/Paris) afin
 * de rester juste même si le visiteur consulte le site depuis l'étranger.
 * À appeler côté client (dans un effet) pour éviter tout écart d'hydratation.
 */
export function getOpenStatus(
  days: OpeningDay[],
  timeZone = "Europe/Paris",
  date: Date = new Date()
): OpenStatus {
  const { weekday, minutes } = getZonedParts(timeZone, date);
  const today = days.find((day) => day.weekday === weekday);
  const todaySlots = today?.slots ?? [];

  const current = todaySlots.find(
    (slot) => minutes >= toMinutes(slot.open) && minutes < toMinutes(slot.close)
  );
  if (current) {
    return {
      state: "open",
      label: `Ouvert jusqu'à ${formatTime(current.close)}`,
    };
  }

  const next = todaySlots.find((slot) => minutes < toMinutes(slot.open));
  if (next) {
    return {
      state: "closed",
      label: `Fermé, ouvre à ${formatTime(next.open)}`,
    };
  }

  for (let offset = 1; offset <= 7; offset++) {
    const day = days.find((item) => item.weekday === (weekday + offset) % 7);
    if (day && day.slots.length > 0) {
      const first = day.slots[0];
      const when = offset === 1 ? "demain" : day.label.toLowerCase();
      return {
        state: "closed",
        label: `Fermé, ouvre ${when} à ${formatTime(first.open)}`,
      };
    }
  }

  return { state: "closed", label: "Fermé" };
}
