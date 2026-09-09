import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Conteneur de section centré avec marges cohérentes sur tout le site.
 */
export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        {children}
      </div>
    </section>
  );
}