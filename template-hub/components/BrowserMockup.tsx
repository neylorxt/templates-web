import Image from "next/image";

type BrowserMockupProps = {
  src: string;
  alt: string;
  url?: string;
  className?: string;
};

export function BrowserMockup({
  src,
  alt,
  url = "template-hub.fr",
  className = "",
}: BrowserMockupProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-zinc-100 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
        <div className="ml-3 flex-1 truncate rounded-md bg-zinc-100 px-3 py-1 text-[11px] text-zinc-500">
          {url}
        </div>
      </div>
      <div className="relative aspect-[16/10] w-full bg-zinc-50">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 640px, (min-width: 640px) 420px, 100vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}