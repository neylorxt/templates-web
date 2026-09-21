import type { Metadata } from "next";
import NextLink from "next/link";
import { Separator } from "@heroui/react";
import { RegisterForm } from "@/components/RegisterForm";
import { SocialAuthButtons } from "@/components/SocialAuthButtons";

export const metadata: Metadata = {
  title: "Créer un compte",
  description: "Créez votre compte en quelques secondes et accédez à votre espace.",
};

export default function RegisterPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Créer un compte</h1>
        <p className="text-sm text-muted">Quelques informations suffisent pour démarrer.</p>
      </div>

      <SocialAuthButtons />

      <div className="flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs font-medium tracking-wide text-muted uppercase">ou</span>
        <Separator className="flex-1" />
      </div>

      <RegisterForm />

      <p className="text-center text-sm text-muted">
        Déjà un compte&nbsp;?{" "}
        <NextLink className="link font-medium" href="/login">
          Se connecter
        </NextLink>
      </p>
    </div>
  );
}
