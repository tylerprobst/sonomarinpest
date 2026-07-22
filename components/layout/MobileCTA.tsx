import { site } from "@/content/site";

const estimateHref = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/#estimate`;

/**
 * Fixed mobile call bar. Constrained to viewport width so it cannot
 * introduce horizontal scroll on small screens.
 */
export function MobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 z-50 w-full max-w-full border-t border-slate-200 bg-white/95 backdrop-blur sm:hidden"
      style={{
        paddingBottom: "max(0.5rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <div className="mx-auto box-border grid w-full max-w-full grid-cols-3 gap-1.5 p-2">
        <a
          href={site.phoneTel}
          className="min-w-0 rounded-lg bg-brand-blue px-1 py-2.5 text-center text-xs font-semibold text-white"
        >
          Call
        </a>
        <a
          href={site.textTel}
          className="min-w-0 rounded-lg bg-slate-900 px-1 py-2.5 text-center text-xs font-semibold text-white"
        >
          Text
        </a>
        <a
          href={estimateHref}
          className="min-w-0 rounded-lg bg-brand-green px-1 py-2.5 text-center text-xs font-semibold text-white"
        >
          Estimate
        </a>
      </div>
    </div>
  );
}
