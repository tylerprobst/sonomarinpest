import { site } from "@/content/site";

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-2 backdrop-blur sm:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={site.phoneTel}
          className="rounded-lg bg-brand-blue px-2 py-2.5 text-center text-xs font-semibold text-white"
        >
          Call
        </a>
        <a
          href={site.textTel}
          className="rounded-lg bg-slate-900 px-2 py-2.5 text-center text-xs font-semibold text-white"
        >
          Text
        </a>
        <a
          href="/#estimate"
          className="rounded-lg bg-brand-green px-2 py-2.5 text-center text-xs font-semibold text-white"
        >
          Estimate
        </a>
      </div>
    </div>
  );
}
