"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
 * Horizontal review carousel:
 * - slow continuous auto-scroll
 * - touch / mouse swipe (pointer events)
 * - pauses while dragging / hovering; resumes shortly after
 */
export function ReviewCarousel({
  reviews,
  speed = 28,
}: {
  reviews: CarouselReview[];
  /** Pixels per second for auto-scroll */
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const lastPointerId = useRef<number | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [hint, setHint] = useState("Swipe or hover · Auto-scrolls slowly");

  const items =
    reviews.length === 0
      ? []
      : reviews.length < 4
        ? [...reviews, ...reviews, ...reviews]
        : [...reviews, ...reviews];

  const normalizeOffset = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    if (half <= 0) return;
    // Keep offset in [0, half)
    while (offsetRef.current >= half) offsetRef.current -= half;
    while (offsetRef.current < 0) offsetRef.current += half;
  }, []);

  const applyTransform = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    normalizeOffset();
    track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
  }, [normalizeOffset]);

  const pauseAuto = useCallback((ms = 0) => {
    pausedRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    if (ms > 0) {
      resumeTimer.current = setTimeout(() => {
        if (!draggingRef.current) pausedRef.current = false;
      }, ms);
    }
  }, []);

  const resumeAuto = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    if (!draggingRef.current) pausedRef.current = false;
  }, []);

  // Auto-scroll loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track || items.length === 0) return;

    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      if (!pausedRef.current && !draggingRef.current) {
        offsetRef.current += speed * dt;
        applyTransform();
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, [speed, items.length, applyTransform]);

  // Pointer swipe (touch + mouse)
  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track || items.length === 0) return;

    const onPointerDown = (e: PointerEvent) => {
      // Only primary button / touch
      if (e.pointerType === "mouse" && e.button !== 0) return;

      draggingRef.current = true;
      pausedRef.current = true;
      dragStartX.current = e.clientX;
      dragStartOffset.current = offsetRef.current;
      lastPointerId.current = e.pointerId;
      viewport.setPointerCapture(e.pointerId);
      track.style.transition = "none";
      setHint("Release to continue · Auto-scroll resumes shortly");
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current || e.pointerId !== lastPointerId.current) return;
      const dx = e.clientX - dragStartX.current;
      // Drag left → show next (increase offset)
      offsetRef.current = dragStartOffset.current - dx;
      applyTransform();
    };

    const endDrag = (e: PointerEvent) => {
      if (!draggingRef.current || e.pointerId !== lastPointerId.current) return;
      draggingRef.current = false;
      lastPointerId.current = null;
      try {
        viewport.releasePointerCapture(e.pointerId);
      } catch {
        /* already released */
      }
      applyTransform();
      // Resume auto-scroll after a short pause so user can read
      pauseAuto(2200);
      setHint("Swipe or hover · Auto-scrolls slowly");
    };

    viewport.addEventListener("pointerdown", onPointerDown);
    viewport.addEventListener("pointermove", onPointerMove);
    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);

    return () => {
      viewport.removeEventListener("pointerdown", onPointerDown);
      viewport.removeEventListener("pointermove", onPointerMove);
      viewport.removeEventListener("pointerup", endDrag);
      viewport.removeEventListener("pointercancel", endDrag);
    };
  }, [items.length, applyTransform, pauseAuto]);

  if (reviews.length === 0) return null;

  return (
    <div
      className="relative max-w-full overflow-x-hidden"
      onMouseEnter={() => pauseAuto(0)}
      onMouseLeave={() => resumeAuto()}
      onFocusCapture={() => pauseAuto(0)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          resumeAuto();
        }
      }}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-sky-50 to-transparent sm:w-16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-sky-50 to-transparent sm:w-16"
        aria-hidden
      />

      <div
        ref={viewportRef}
        className="cursor-grab overflow-hidden py-1 active:cursor-grabbing touch-pan-y"
        style={{ touchAction: "pan-y" }}
        role="region"
        aria-label="Customer reviews carousel. Swipe or drag to browse."
      >
        <div
          ref={trackRef}
          className="flex w-max gap-5 will-change-transform select-none"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {items.map((r, i) => (
            <article
              key={`${r.id}-${i}`}
              className="w-[min(85vw,22rem)] shrink-0 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm shadow-slate-900/5"
              tabIndex={i < reviews.length ? 0 : -1}
              aria-hidden={i >= reviews.length}
            >
              <div className="flex items-center justify-between gap-2">
                <Stars rating={r.rating ?? 5} size="sm" />
                {r.source && (
                  <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400">
                    {r.source}
                  </span>
                )}
              </div>
              <blockquote className="mt-4 line-clamp-6 text-pretty text-[0.95rem] leading-relaxed text-slate-700">
                “{r.text}”
              </blockquote>
              <footer className="mt-5 border-t border-slate-100 pt-4">
                <p className="font-semibold tracking-tight text-slate-900">
                  {r.author}
                </p>
                {r.relativeTime && (
                  <p className="mt-0.5 text-sm text-slate-500">{r.relativeTime}</p>
                )}
              </footer>
            </article>
          ))}
        </div>
      </div>

      <p className="mt-4 text-center text-xs tracking-wide text-slate-400">
        {hint}
      </p>
    </div>
  );
}
