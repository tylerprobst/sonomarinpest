import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";

const GORILLA_IFRAME_SRC =
  "https://portal-embed-v3.gorilladesk.com/?screen=contact&account_id=83906303";

/**
 * Estimate card with GorillaDesk contact form (iframe embed).
 * Companion script is loaded once from layout via GorillaDeskScript.
 */
export function EstimateForm({
  title = "Request a free estimate",
  compact = false,
}: {
  title?: string;
  compact?: boolean;
}) {
  return (
    <div
      id="estimate"
      className={`rounded-2xl border border-slate-200/90 bg-white shadow-md shadow-slate-900/5 ${
        compact ? "p-5" : "p-6 sm:p-8"
      }`}
    >
      <p className="eyebrow text-brand-green">Online request</p>
      <h3 className="heading-card mt-2 text-xl text-slate-900 sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-pretty text-[0.975rem] leading-relaxed text-slate-600 sm:text-base">
        Prefer to talk? Call{" "}
        <a href={site.phoneTel} className="link-inline">
          {site.phone}
        </a>{" "}
        or text{" "}
        <a href={site.textTel} className="link-inline">
          {site.text}
        </a>
        . Or complete the form below and a technician will follow up.
      </p>

      <div className="mt-6 max-w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
        <iframe
          id="gorilladesk-contact-iframe"
          src={GORILLA_IFRAME_SRC}
          title="Contact Sono-Marin Pest Solutions"
          className="block w-full max-w-full border-0"
          style={{ height: "min(720px, 85vh)", minHeight: 420 }}
          loading="lazy"
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-5">
        <span className="mr-1 text-xs font-medium uppercase tracking-wide text-slate-400">
          Or reach us
        </span>
        <Button href={site.phoneTel} size="sm" variant="primary">
          Call {site.phone}
        </Button>
        <Button href={site.textTel} size="sm" variant="outline">
          Text {site.text}
        </Button>
      </div>
    </div>
  );
}
