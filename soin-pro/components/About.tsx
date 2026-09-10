import Image from "next/image";
import { ArrowRight, CalendarCheck, CheckCircle2 } from "lucide-react";
import { bookingHref, hasOnlineBooking, siteConfig } from "@/config/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { buttonClassName } from "@/components/Button";

export default function About() {
  const online = hasOnlineBooking();

  return (
    <Section id="cabinet">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <Image
                src={siteConfig.images.about}
                alt="Intérieur chaleureux du cabinet SoinPro"
                width={1200}
                height={1000}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-brand-100 bg-white/95 p-5 shadow-xl backdrop-blur sm:left-8 sm:right-auto sm:w-80">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                {siteConfig.name}
              </p>
              <p className="mt-1 font-display text-xl font-semibold text-ink">
                {siteConfig.contact.address}
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                {siteConfig.contact.postalCode} {siteConfig.contact.city}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Le cabinet
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {siteConfig.about.title}
          </h2>
          {siteConfig.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 leading-relaxed text-zinc-600">
              {paragraph}
            </p>
          ))}

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {siteConfig.about.advantages.map((advantage) => (
              <li
                key={advantage}
                className="inline-flex items-center gap-2.5 text-sm font-medium text-zinc-700"
              >
                <CheckCircle2
                  className="h-5 w-5 shrink-0 text-brand-500"
                  aria-hidden="true"
                />
                {advantage}
              </li>
            ))}
          </ul>

          {siteConfig.stats.length > 0 ? (
            <dl className="mt-9 grid grid-cols-3 gap-6">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-semibold tracking-tight text-brand-800">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-sm text-zinc-500">{stat.label}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          <a
            href={bookingHref()}
            {...(online ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`${buttonClassName("primary", "lg")} mt-9`}
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Prendre rendez-vous
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </Section>
  );
}