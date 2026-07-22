"use client";

import { useEffect, useRef, useState } from "react";
import { Stars } from "@/components/reviews/Stars";

export type CarouselReview = {
  id: string;
  author: string;
  text: string;
  rating?: number;
  relativeTime?: string;
  source?: string;
};

/**
 * Horizontal review carousel with slow continuous auto-scroll.
 * Pauses on hover / focus. Duplicates items for a seamless loop.
 */
export function ReviewCarousel({
  reviews,
  speed = 28,
}: {
  reviews: CarouselReview[];
  /** Pixels per second */
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const offsetRef = useRef(0);

  // Duplicate for seamless loop (need enough cards)
  const items =
    reviews.length === 0
      ? []
      : reviews.length < 4
        ? [...reviews, ...reviews, ...reviews]
        : [...reviews, ...reviews];

  useEffect(() => {
    const track = trackRef.current;
    if (!track || items.length === 0) return;

    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      if (!paused) {
        offsetRef.current += speed * dt;
        // Loop when we've scrolled half the track (duplicated content)
        const half = track.scrollWidth / 2;
        if (half > 0 && offsetRef.current >= half) {
          offsetRef.current -= half;
        }
        track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused, speed, items.length]);

  if (reviews.length === 0) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      {/* Edge fades (sky-50 matches default reviews section) */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-sky-50 to-transparent sm:w-16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-sky-50 to-transparent sm:w-16"
        aria-hidden
      />

      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-max gap-5 will-change-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {items.map((r, i) => (
            <article
              key={`${r.id}-${i}`}
              className="w-[min(85vw,22rem)] shrink-0 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
              tabIndex={i < reviews.length ? 0 : -1}
              aria-hidden={i >= reviews.length}
            >
              <div className="flex items-center justify-between gap-2">
                <Stars rating={r.rating ?? 5} size="sm" />
                {r.source && (
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    {r.source}
                  </span>
                )}
              </div>
              <blockquote className="mt-4 line-clamp-6 text-slate-700 leading-relaxed">
                “{r.text}”
              </blockquote>
              <footer className="mt-5 border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">{r.author}</p>
                {r.relativeTime && (
                  <p className="text-sm text-slate-500">{r.relativeTime}</p>
                )}
              </footer>
            </article>
          ))}
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-slate-400">
        Hover to pause · Auto-scrolls slowly
      </p>
    </div>
  );
}
