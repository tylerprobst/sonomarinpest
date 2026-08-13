"use client";

import { useEffect, useState } from "react";

/**
 * Scroll so #estimate (top of the form block) is in view under the sticky header.
 * If this page has no form, go to the homepage estimate section.
 * window.location needs basePath; Next.js Link hrefs must NOT prepend it.
 */
export function scrollToEstimate(e?: { preventDefault?: () => void }) {
  e?.preventDefault?.();

  const el = document.getElementById("estimate");
  if (!el) {
    const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
    window.location.href = `${base}/#estimate`;
    return;
  }

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
}

/**
 * href for Next.js Link / Button: same-page hash when #estimate exists,
 * otherwise home /#estimate (Link applies basePath once — never prefix it here).
 */
export function useEstimateHref(): string {
  const [href, setHref] = useState("/#estimate");
  useEffect(() => {
    setHref(document.getElementById("estimate") ? "#estimate" : "/#estimate");
  }, []);
  return href;
}
