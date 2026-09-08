import { WhatsAppIcon } from "./icons";
import { whatsappLink } from "@/config/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 sm:bottom-7 sm:right-7"
    >
      <span
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.5s]"
        aria-hidden="true"
      />
      <WhatsAppIcon className="h-7 w-7 transition-transform duration-200 group-hover:scale-110" />
    </a>
  );
}