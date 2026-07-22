"use client";

import { useEffect, useState } from "react";
import type { GoogleReviewsData } from "@/lib/reviews-data";
import { fetchPlaceDetails } from "@/lib/google-places";

const CACHE_KEY = "smp-google-reviews";
const CACHE_MS = 24 * 60 * 60 * 1000;

/**
 * Optional client-side refresh when NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is set.
 * Caches in sessionStorage for 24h. Silent no-op without a key.
 */
export function LiveReviewsRefresh({
  initial,
}: {
  initial: GoogleReviewsData;
}) {
  const [status, setStatus] = useState<"idle" | "live" | "error">("idle");

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!key) return;

    try {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached) as {
          at: number;
          data: GoogleReviewsData;
        };
        if (Date.now() - parsed.at < CACHE_MS) {
          setStatus("live");
          return;
        }
      }
    } catch {
      /* ignore */
    }

    fetchPlaceDetails(key)
      .then((data) => {
        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ at: Date.now(), data }),
        );
        setStatus("live");
        // Dispatch so parent sections could listen if needed later
        window.dispatchEvent(
          new CustomEvent("smp-reviews-updated", { detail: data }),
        );
      })
      .catch(() => setStatus("error"));
  }, []);

  if (status === "idle" && !process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    return null;
  }

  if (status === "live") {
    return (
      <p className="text-xs text-slate-500">
        Ratings refreshed from Google · last build{" "}
        {new Date(initial.fetchedAt).toLocaleDateString()}
      </p>
    );
  }

  return null;
}
