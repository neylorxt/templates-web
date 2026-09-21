"use client";

import { Button, useTheme } from "@heroui/react";
import { MoonIcon, SunIcon } from "@/components/icons";

/**
 * Bascule entre les thèmes clair et sombre. Le thème est mémorisé par
 * `useTheme` (clé `heroui-theme` du localStorage) et appliqué à `<html>`.
 *
 * `resolvedTheme` vaut `undefined` pendant le rendu serveur et la première
 * passe d'hydratation, puis se résout côté client : l'icône se met à jour
 * sans provoquer d'écart d'hydratation.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme("system");
  const isDark = resolvedTheme === "dark";

  return (
    <Button
      isIconOnly
      aria-label={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
      variant="ghost"
      onPress={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
    </Button>
  );
}
