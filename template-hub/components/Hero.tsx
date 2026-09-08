import {
  ArrowRight,
  MessageCircle,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { templates } from "@/data/templates";
import { Button } from "@/components/Button";
import { BrowserMockup } from "@/components/BrowserMockup";

const heroBadges = [
  { label: "Responsive", icon: Smartphone },
  { label: "Design professionnel", icon: Sparkles },
  { label: "Personnalisable", icon: SlidersHorizontal },
  { label: "Optimisé mobile", icon: Smartphone },
  { label: "WhatsApp intégré", icon: MessageCircle },
];

export function Hero() {
  const [primary, secondary, tertiary] = templates;

  return (
    <section id="accueil" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/80 via-white to-white" />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-100/70 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {templates.length} templates prêts à personnaliser
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            Choisissez votre modèle. Lancez votre site plus rapidement.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
            Découvrez une collection de sites professionnels conçus pour les
            petites entreprises, commerces et prestataires de services.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/templates" size="lg">
              Explorer les templates
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/contact" size="lg" variant="secondary">
              Nous contacter
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {heroBadges.map((badge) => (
              <li
                key={badge.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-sm font-medium text-zinc-600"
              >
                <badge.icon className="h-4 w-4 text-brand-600" aria-hidden="true" />
                {badge.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto hidden w-full max-w-xl lg:block" aria-hidden="true">
          <BrowserMockup
            src={primary.image}
            alt="Aperçu du template ProService"
            url="proservice.fr"
            className="animate-float relative z-10 w-3/4"
          />
          <div className="animate-float-slow absolute -left-6 top-8 w-1/2 -rotate-6 opacity-90">
            <BrowserMockup
              src={secondary.image}
              alt="Aperçu du template MenuLocal"
              url="menulocal.fr"
            />
          </div>
          <div className="animate-float absolute -right-2 bottom-6 w-1/2 rotate-6 opacity-90">
            <BrowserMockup
              src={tertiary.image}
              alt="Aperçu du template ShowcasePro"
              url="showcasepro.fr"
            />
          </div>
        </div>
      </div>
    </section>
  );
}