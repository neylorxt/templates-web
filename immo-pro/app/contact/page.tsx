import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez ${siteConfig.name} à ${siteConfig.contact.city} : téléphone, WhatsApp, email ou formulaire. Réponse sous 24 h ouvrées.`,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description: `Contactez ${siteConfig.name} à ${siteConfig.contact.city} : téléphone, WhatsApp, email ou formulaire.`,
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-zinc-100 bg-gradient-to-b from-brand-50/70 to-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Parlons de votre projet
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Une question, une visite ou un bien à confier ? Notre équipe vous
            répond rapidement.
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
}