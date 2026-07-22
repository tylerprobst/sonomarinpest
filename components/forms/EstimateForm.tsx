import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";

const GORILLA_IFRAME_SRC =
  "https://portal-embed-v3.gorilladesk.com/?screen=contact&account_id=83906303";

/**
 * Estimate block + GorillaDesk embed.
 * fullBleedMobile: edge-to-edge white panel on small screens (even on blue section).
 * id="estimate" is the scroll target for the sticky Estimate button.
 */
export function EstimateForm({
  title = "Request a free estimate",
  compact = false,
  fullBleedMobile = false,
}: {
  title?: string;
  compact?: boolean;
  fullBleedMobile?: boolean;
}) {
  const pad = compact ? "px-4 py-5 sm:p-5" : "px-4 py-6 sm:p-8";

  return (
    <div
      id="estimate"
      className={`scroll-mt-[7.25rem] sm:scroll-mt-28 ${
        fullBleedMobile
          ? "max-lg:relative max-lg:left-1/2 max-lg:w-screen max-lg:max-w-[100vw] max-lg:-translate-x-1/2"
          : "max-sm:relative max-sm:left-1/2 max-sm:w-screen max-sm:max-w-[100vw] max-sm:-translate-x-1/2"
      }`}
    >
      <div className="overflow-hidden border border-slate-200 bg-white shadow-md shadow-slate-900/10 max-lg:rounded-none max-lg:border-x-0 lg:rounded-2xl">
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

        {/* Form iframe - full width of card */}
        <div className="border-t border-slate-200 bg-white lg:mx-8 lg:mb-2 lg:overflow-hidden lg:rounded-xl lg:border">
          <iframe
            id="gorilladesk-contact-iframe"
            src={GORILLA_IFRAME_SRC}
            title="Contact Sono-Marin Pest Solutions"
            className="block w-full max-w-full border-0"
            style={{ height: "min(720px, 85vh)", minHeight: 420 }}
            loading="lazy"
          />
        </div>

        {/* Contact actions - stacked label + equal-width buttons */}
        <div className={`${pad} border-t border-slate-100`}>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Or reach us
          </p>
          <div className="mt-3 grid grid-cols-1 gap-2 min-[400px]:grid-cols-2">
            <Button
              href={site.phoneTel}
              size="md"
              variant="primary"
              className="w-full justify-center"
            >
              Call {site.phone}
            </Button>
            <Button
              href={site.textTel}
              size="md"
              variant="outline"
              className="w-full justify-center"
            >
              Text {site.text}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
