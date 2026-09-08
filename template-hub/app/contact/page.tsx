import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez TemplateHub pour faire personnaliser un template de site internet pour votre entreprise. WhatsApp, téléphone ou formulaire de contact.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-zinc-100 bg-gradient-to-b from-brand-50/70 to-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Contact
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Parlons de votre projet
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Décrivez votre activité et nous vous proposerons le template le plus
            adapté, puis nous le personnaliserons pour votre entreprise.
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
}