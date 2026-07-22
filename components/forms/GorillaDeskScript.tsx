import Script from "next/script";

/**
 * Companion script for the inline GorillaDesk contact iframe
 * (see EstimateForm).
 */
export function GorillaDeskScript() {
  return (
    <Script
      src="https://portal-embed-v3.gorilladesk.com/js/contact/embed.js"
      strategy="lazyOnload"
    />
  );
}
