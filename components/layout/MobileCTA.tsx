import { site } from "@/content/site";

const estimateHref = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/#estimate`;

/**
 * Fixed mobile call bar — stays fully inside the viewport (no clipped buttons).
 */
export function MobileCTA() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed bottom-0 z-50 box-border sm:hidden"
      style={{
        left: 0,
        right: 0,
        width: "100%",
        maxWidth: "100%",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div className="border-t border-slate-200 bg-white/95 px-2 pt-2 pb-2 backdrop-blur">
        <div className="grid w-full grid-cols-3 gap-2">
          <a
            href={site.phoneTel}
            className="flex items-center justify-center rounded-lg bg-brand-blue py-2.5 text-center text-xs font-semibold text-white"
          >
            Call
          </a>
          <a
            href={site.textTel}
            className="flex items-center justify-center rounded-lg bg-slate-900 py-2.5 text-center text-xs font-semibold text-white"
          >
            Text
          </a>
          <a
            href={estimateHref}
            className="flex items-center justify-center rounded-lg bg-brand-green py-2.5 text-center text-xs font-semibold text-white"
          >
            Estimate
          </a>
        </div>
      </div>
    </nav>
  );
}
