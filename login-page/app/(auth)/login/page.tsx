import type { Metadata } from "next";
import NextLink from "next/link";
import { Separator } from "@heroui/react";
import { LoginForm } from "@/components/LoginForm";
import { SocialAuthButtons } from "@/components/SocialAuthButtons";

export const metadata: Metadata = {
  title: "Connexion",
  description: "Connectez-vous à votre espace pour retrouver vos projets et vos préférences.",
};

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Connexion</h1>
        <p className="text-sm text-muted">Ravis de vous revoir. Connectez-vous pour continuer.</p>
      </div>

      <SocialAuthButtons />

      <div className="flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs font-medium tracking-wide text-muted uppercase">ou</span>
        <Separator className="flex-1" />
      </div>

      <LoginForm />

      <p className="text-center text-sm text-muted">
        Pas encore de compte&nbsp;?{" "}
        <NextLink className="link font-medium" href="/register">
          Créer un compte
        </NextLink>
      </p>
    </div>
  );
}
