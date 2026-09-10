import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { properties } from "@/data/properties";
import Hero from "@/components/Hero";
import PropertyGrid from "@/components/PropertyGrid";
import FeaturedProperty from "@/components/FeaturedProperty";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import CtaFinal from "@/components/CtaFinal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  const latestProperties = properties.slice(0, 6);

  return (
    <>
      <Hero />

      <Section>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Catalogue"
            title="Nos biens disponibles"
            subtitle="Une sélection rigoureuse de maisons, appartements et biens d'exception à la vente et à la location."
          />
          <Link
            href="/biens"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:border-brand-300 hover:text-brand-700"
          >
            Voir tous les biens
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <Reveal className="mt-12">
          <PropertyGrid properties={latestProperties} />
        </Reveal>
      </Section>

      <FeaturedProperty />
      <About />
      <Services />
      <Testimonials />
      <Location />
      <CtaFinal />
    </>
  );
}