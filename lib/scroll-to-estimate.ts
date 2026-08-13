import { ESTIMATE_FALLBACK_HREF, withBasePath } from "@/lib/paths";

type EstimateClickEvent = {
  preventDefault?: () => void;
  currentTarget?: { getAttribute?: (name: string) => string | null };
};

/**
 * Scroll so #estimate is in view under the sticky header.
 * If this page has no form (careers, blog), go to the contact form.
 * Never leave a dead #estimate hash. Apply GitHub Pages basePath once.
 */
export function scrollToEstimate(e?: EstimateClickEvent) {
  const el = document.getElementById("estimate");
  if (el) {
    e?.preventDefault?.();

    const headerOffset = window.matchMedia("(min-width: 640px)").matches
      ? 112
      : 116;

    const top =
      el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: Math.max(0, top),
      left: 0,
      behavior: "smooth",
    });

    try {
      history.replaceState(null, "", `${window.location.pathname}#estimate`);
    } catch {
      /* ignore */
    }
    return;
  }

  const href = e?.currentTarget?.getAttribute?.("href") || "";
  // Let next/link (or an in-app href) navigate when it already points at the form.
  // Link applies basePath once — do not prefix again.
  if (href && href !== "#" && href !== "#estimate") {
    return;
  }

  e?.preventDefault?.();
  window.location.href = withBasePath(ESTIMATE_FALLBACK_HREF);
}
