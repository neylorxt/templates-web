import { CheckIcon, LogoMark } from "@/components/icons";
import { siteConfig } from "@/config/site";

/** Panneau de marque affiché à gauche sur les grands écrans. */
export function BrandPanel() {
  return (
    <aside className="relative hidden overflow-hidden bg-accent p-10 text-accent-foreground lg:flex lg:flex-col">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 size-96 rounded-full bg-black/10 blur-3xl"
      />

      <div className="relative flex items-center gap-3">
        <LogoMark className="size-9" />
        <span className="text-lg font-semibold tracking-tight">{siteConfig.name}</span>
      </div>

      <div className="relative my-auto space-y-8 py-16">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-balance">
            {siteConfig.tagline}
          </h2>
          <p className="max-w-md text-sm/6 text-accent-foreground/80">{siteConfig.description}</p>
        </div>
        <ul className="space-y-3">
          {siteConfig.highlights.map((highlight) => (
            <li key={highlight} className="flex items-center gap-3 text-sm">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                <CheckIcon className="size-3" />
              </span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <p className="relative text-xs text-accent-foreground/70">
        © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
      </p>
    </aside>
  );
}
