"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHashTarget() {
  const hash = window.location.hash;
  if (!hash || hash === "#") return false;

  const id = decodeURIComponent(hash.slice(1));
  const el = document.getElementById(id);
  if (!el) return false;

  const headerOffset = window.matchMedia("(min-width: 640px)").matches
    ? 112
    : 116;

  const top =
    el.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "auto" });
  return true;
}

/**
 * On route change: jump to top, or to #hash target (e.g. #estimate)
 * under the sticky header.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const run = () => {
      if (window.location.hash) {
        // Retry once if the target mounts a frame late
        if (!scrollToHashTarget()) {
          requestAnimationFrame(() => {
            if (!scrollToHashTarget()) {
              window.setTimeout(scrollToHashTarget, 80);
            }
          });
        }
        return;
      }

      const forceTop = () => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      };
      forceTop();
      requestAnimationFrame(forceTop);
    };

    run();
    const t = window.setTimeout(run, 60);
    return () => window.clearTimeout(t);
  }, [pathname]);

  // Handle in-page hash clicks / hashchange (Estimate when already on page)
  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === "#estimate") {
        scrollToHashTarget();
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return null;
}
