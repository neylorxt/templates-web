import type { ReactNode } from "react";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const fill = { fill: "currentColor", stroke: "none" } as const;

function renderShapes(slug: string): ReactNode {
  switch (slug) {
    case "saas":
      return (
        <>
          <g {...stroke}>
            <rect x="18" y="42" width="32" height="42" rx="5" />
            <rect x="64" y="26" width="32" height="58" rx="5" />
            <rect x="110" y="42" width="32" height="42" rx="5" />
            <path d="M26 52h16M72 36h16M118 52h16" />
          </g>
          <circle cx="80" cy="16" r="4" {...fill} />
        </>
      );
    case "cloud":
      return (
        <>
          <g {...stroke}>
            <path d="M52 64h52a14 14 0 0 0 0-28 18 18 0 0 0-34-6 13 13 0 0 0-18 12 11 11 0 0 0 0 22Z" />
            <path d="M56 64v14M80 64v14M104 64v14" />
          </g>
          <circle cx="56" cy="82" r="3" {...fill} />
          <circle cx="80" cy="82" r="3" {...fill} />
          <circle cx="104" cy="82" r="3" {...fill} />
        </>
      );
    case "ai-api":
      return (
        <>
          <g {...stroke}>
            <rect x="56" y="32" width="48" height="40" rx="7" />
            <rect x="70" y="46" width="20" height="12" rx="3" />
            <path d="M56 42H44M56 54H44M56 66H44M104 42h12M104 54h12M104 66h12M68 32V20M80 32V20M92 32V20M68 72v12M80 72v12M92 72v12" />
          </g>
          <path
            {...fill}
            d="M132 20l2.6 6.4 6.4 2.6-6.4 2.6-2.6 6.4-2.6-6.4-6.4-2.6 6.4-2.6z"
          />
          <path
            {...fill}
            d="M28 66l1.8 4.2 4.2 1.8-4.2 1.8-1.8 4.2-1.8-4.2-4.2-1.8 4.2-1.8z"
          />
        </>
      );
    case "agency":
      return (
        <g {...stroke}>
          <rect x="20" y="24" width="78" height="54" rx="5" />
          <path d="M20 38h78" />
          <path d="M30 48h26M30 58h16" />
          <rect x="66" y="46" width="22" height="22" rx="3" />
          <path d="M112 74l22-22 8 8-22 22-11 3z" />
          <path d="M134 52l8 8" />
        </g>
      );
    case "ecommerce":
      return (
        <>
          <g {...stroke}>
            <path d="M50 40h50l6 42H44z" />
            <path d="M64 40a11 11 0 0 1 22 0" />
            <circle cx="126" cy="34" r="10" />
            <path d="M121 39l10-10" />
          </g>
          <circle cx="121.5" cy="29.5" r="1.8" {...fill} />
          <circle cx="130.5" cy="38.5" r="1.8" {...fill} />
        </>
      );
    case "education":
      return (
        <>
          <g {...stroke}>
            <path d="M80 24 30 43l50 19 50-19z" />
            <path d="M54 51v13c0 6 12 10 26 10s26-4 26-10V51" />
            <path d="M130 43v19" />
          </g>
          <circle cx="130" cy="66" r="3.5" {...fill} />
        </>
      );
    case "streaming":
      return (
        <>
          <g {...stroke}>
            <rect x="24" y="22" width="112" height="56" rx="7" />
            <path d="M80 78v6M60 88h40" />
          </g>
          <path {...fill} d="M72 38l24 12-24 12z" />
        </>
      );
    case "developer-tools":
      return (
        <>
          <g {...stroke}>
            <rect x="22" y="20" width="116" height="62" rx="6" />
            <path d="M22 34h116" />
            <path d="M38 48l8 6-8 6M54 60h18" />
            <path d="M38 68h34" />
          </g>
          <circle cx="34" cy="27" r="2.2" {...fill} />
          <circle cx="43" cy="27" r="2.2" {...fill} />
          <circle cx="52" cy="27" r="2.2" {...fill} />
        </>
      );
    case "enterprise":
      return (
        <g {...stroke}>
          <rect x="44" y="22" width="46" height="62" rx="4" />
          <rect x="90" y="48" width="28" height="36" rx="4" />
          <path d="M56 34h8M72 34h8M56 48h8M72 48h8M56 62h8M72 62h8M100 60h10M100 72h10" />
        </g>
      );
    default:
      return null;
  }
}

type PricingIllustrationProps = {
  slug: string;
  color?: string;
  className?: string;
};

export function PricingIllustration({
  slug,
  color,
  className,
}: PricingIllustrationProps) {
  return (
    <svg
      viewBox="0 0 160 100"
      className={className}
      style={{ color }}
      aria-hidden
    >
      {renderShapes(slug)}
    </svg>
  );
}
