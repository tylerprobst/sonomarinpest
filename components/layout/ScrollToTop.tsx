"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * On every client-side route change, jump to the absolute top.
 * Disables browser scroll restoration so back/forward doesn't fight us
 * on a marketing site (users almost always want the top of the new page).
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
    // Hash links (e.g. /#estimate) should keep their target
    if (typeof window === "undefined") return;
    if (window.location.hash) return;

    // Instant jump - "smooth" often stops short with sticky headers
    const forceTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    forceTop();
    // Next paint + short delay cover layout/images shifting scroll
    requestAnimationFrame(forceTop);
    const t = window.setTimeout(forceTop, 50);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return null;
}
