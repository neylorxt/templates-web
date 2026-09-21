"use client";

import { Button, toast } from "@heroui/react";
import { AppleIcon, GitHubIcon, GoogleIcon } from "@/components/icons";

const providers = [
  { id: "google", label: "Google", icon: GoogleIcon },
  { id: "github", label: "GitHub", icon: GitHubIcon },
  { id: "apple", label: "Apple", icon: AppleIcon },
] as const;

/** Boutons de connexion sociale (Google, GitHub, Apple). */
export function SocialAuthButtons() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {providers.map(({ id, label, icon: Icon }) => (
        <Button
          key={id}
          aria-label={`Continuer avec ${label}`}
          className="w-full"
          variant="secondary"
          // TODO: brancher votre fournisseur OAuth (NextAuth, Clerk, Supabase…).
          onPress={() =>
            toast.info(`Continuer avec ${label}`, {
              description: "Branchez votre fournisseur OAuth pour activer cette connexion.",
            })
          }
        >
          <Icon className="size-4" />
          {label}
        </Button>
      ))}
    </div>
  );
}
