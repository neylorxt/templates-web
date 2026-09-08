import type { Metadata } from "next";
import { Process } from "@/components/Process";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Comment ça marche",
  description:
    "Choisissez un template, nous le personnalisons, vous validez, votre site est mis en ligne. Un processus simple pour les petites entreprises.",
  alternates: {
    canonical: "/comment-ca-marche",
  },
};

export default function CommentCaMarchePage() {
  return (
    <>
      <section className="border-b border-zinc-100 bg-gradient-to-b from-brand-50/70 to-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Comment ça marche
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Un site professionnel en quatre étapes
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
            De la sélection du modèle à la mise en ligne, un accompagnement
            simple et transparent pour les petites entreprises.
          </p>
        </div>
      </section>

      <Process />

      <Cta />
    </>
  );
}