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
      className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${
        compact ? "p-5" : "p-6 sm:p-8"
      }`}
    >
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">
        Prefer to talk? Call{" "}
        <a
          href={site.phoneTel}
          className="font-semibold text-brand-blue hover:underline"
        >
          {site.phone}
        </a>{" "}
        or text{" "}
        <a
          href={site.textTel}
          className="font-semibold text-brand-blue hover:underline"
        >
          {site.text}
        </a>
        . Or use the form below.
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

      <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
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
