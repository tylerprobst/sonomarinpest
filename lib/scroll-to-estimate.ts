/**
 * Scroll so #estimate (top of the form block) is in view under the sticky header.
 */
export function scrollToEstimate(e?: { preventDefault?: () => void }) {
  e?.preventDefault?.();

  const el = document.getElementById("estimate");
  if (!el) {
    // Not on a page with a form - go home estimate
    const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
    window.location.href = `${base}/#estimate`;
    return;
  }

  // Match scroll-mt used on #estimate (header height)
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

  // Ensure hash is set for shareable URL without fighting scroll later
  try {
    history.replaceState(null, "", `${window.location.pathname}#estimate`);
  } catch {
    /* ignore */
  }
}
