import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";

const GORILLA_IFRAME_SRC =
  "https://portal-embed-v3.gorilladesk.com/?screen=contact&account_id=83906303";

/**
 * Estimate block + GorillaDesk embed.
 * Full-width on mobile (no colored side gutters). Card on sm+.
 * id="estimate" is the scroll target for the sticky Estimate button.
 */
export function EstimateForm({
  title = "Request a free estimate",
  compact = false,
}: {
  title?: string;
  compact?: boolean;
}) {
  const pad = compact ? "px-4 py-5 sm:p-5" : "px-4 py-6 sm:p-8";

  return (
    <div
      id="estimate"
      className="scroll-mt-[7.25rem] sm:scroll-mt-28 max-sm:relative max-sm:left-1/2 max-sm:w-screen max-sm:max-w-[100vw] max-sm:-translate-x-1/2"
    >
      <div className="overflow-hidden border border-slate-200 bg-white sm:rounded-2xl sm:shadow-md sm:shadow-slate-900/5 max-sm:border-x-0 max-sm:border-y">
        {/* Intro */}
        <div className={pad}>
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
        </div>

        {/* Form - full width of this container (viewport on mobile) */}
        <div className="border-t border-slate-200 bg-white sm:mx-8 sm:mb-8 sm:overflow-hidden sm:rounded-xl sm:border">
          <iframe
            id="gorilladesk-contact-iframe"
            src={GORILLA_IFRAME_SRC}
            title="Contact Sono-Marin Pest Solutions"
            className="block w-full max-w-full border-0"
            style={{ height: "min(720px, 85vh)", minHeight: 420 }}
            loading="lazy"
          />
        </div>

        {/* Contact actions */}
        <div className={`${pad} border-t border-slate-100 pt-4 sm:border-0 sm:pt-0`}>
          <div className="flex flex-wrap items-center gap-2">
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
      </div>
    </div>
  );
}
