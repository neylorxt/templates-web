import { whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter avec nous sur WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-4 pl-4 pr-4 text-white shadow-xl shadow-green-900/20 transition-all hover:bg-[#1fb457] sm:bottom-6 sm:right-6 sm:py-3.5 sm:pr-5"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-75" />
        <WhatsAppIcon className="relative h-6 w-6" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">Commander</span>
    </a>
  );
}