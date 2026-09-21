import type { ReactNode } from "react";
import { BrandPanel } from "@/components/BrandPanel";
import { LogoMark } from "@/components/icons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { siteConfig } from "@/config/site";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <BrandPanel />

      <div className="flex flex-col">
        <header className="flex items-center justify-between gap-4 p-4 sm:px-8 sm:py-6">
          <div className="flex items-center gap-2 lg:hidden">
            <LogoMark className="size-8" />
            <span className="font-semibold tracking-tight">{siteConfig.name}</span>
          </div>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </header>

        <main className="flex flex-1 items-center justify-center px-4 py-8 sm:px-8">
          <div className="w-full max-w-md">{children}</div>
        </main>

        <footer className="space-y-1 px-4 pb-6 text-center text-xs text-muted sm:px-8">
          <p>
            Une question&nbsp;?{" "}
            <a className="link" href={`mailto:${siteConfig.supportEmail}`}>
              {siteConfig.supportEmail}
            </a>
          </p>
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
        </footer>
      </div>
    </div>
  );
}
