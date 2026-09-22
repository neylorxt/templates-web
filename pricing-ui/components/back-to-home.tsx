import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BackToHome({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 text-sm font-medium transition ${className}`}
    >
      <ArrowLeft className="size-4" />
      Tous les pricing
    </Link>
  );
}
