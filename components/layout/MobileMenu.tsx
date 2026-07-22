"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/lib/paths";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { priorityLocations } from "@/content/locations";
import { Button } from "@/components/ui/Button";
import { scrollToEstimate } from "@/lib/scroll-to-estimate";

const serviceLinks = services.filter((s) =>
  [
    "rodents",
    "ants",
    "spiders",
    "cockroaches",
    "fleas",
    "carpenter-bees",
    "wasps-hornets",
    "wildlife",
    "ipm-services",
    "maintenance",
  ].includes(s.slug),
);

const estimateHref = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/#estimate`;
const areasHref = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/#service-areas`;

type Props = {
  open: boolean;
  onClose: () => void;
};

/**
 * Full-screen mobile menu rendered via portal to document.body
 * so parent overflow/transform cannot clip or shrink it.
 */
export function MobileMenu({ open, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setServicesOpen(false);
      setAreasOpen(false);
    }
  }, [open]);

  if (!mounted || !open) return null;

  const panel = (
    <div
      className="fixed inset-0 z-[9999] flex h-[100dvh] w-full max-w-[100vw] flex-col bg-white"
      style={{ backgroundColor: "#ffffff" }}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      {/* Top bar */}
      <div
        className="shrink-0 border-b border-slate-200"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div
          className="flex items-center gap-3 px-4 py-2 text-xs text-white"
          style={{ backgroundColor: "#0f172a" }}
        >
          <a href={site.phoneTel} className="font-semibold">
            Call {site.phone}
          </a>
          <span className="text-slate-500" aria-hidden>
            |
          </span>
          <a href={site.textTel}>Text {site.text}</a>
        </div>
        <div
          className="flex items-center justify-between gap-3 px-4 py-3"
          style={{ backgroundColor: "#ffffff" }}
        >
          <Link href="/" onClick={onClose} className="shrink-0">
            <Image
              src={assetPath("/images/logo.png")}
              alt={site.name}
              width={160}
              height={52}
              className="h-9 w-auto"
              priority
            />
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 text-2xl leading-none text-slate-800"
            style={{ backgroundColor: "#ffffff" }}
            aria-label="Close menu"
            onClick={onClose}
          >
            ×
          </button>
        </div>
      </div>

      {/* Scrollable links */}
      <nav
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-3"
        style={{
          backgroundColor: "#ffffff",
          paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))",
        }}
      >
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-lg px-2 py-3.5 text-left text-base font-semibold text-slate-900"
          onClick={() => setServicesOpen((v) => !v)}
          aria-expanded={servicesOpen}
        >
          Services
          <span
            className={`text-slate-400 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
            aria-hidden
          >
            ▾
          </span>
        </button>
        {servicesOpen && (
          <div
            className="mb-2 ml-1 border-l-2 border-slate-200 pl-3"
            style={{ backgroundColor: "#f8fafc" }}
          >
            <Link
              href="/services/"
              className="block rounded-lg px-2 py-2.5 text-sm font-semibold text-brand-blue"
              onClick={onClose}
            >
              All services
            </Link>
            {serviceLinks.map((s) => (
              <Link
                key={s.slug}
                href={s.path}
                className="block rounded-lg px-2 py-2.5 text-sm text-slate-700"
                onClick={onClose}
              >
                {s.navLabel}
              </Link>
            ))}
          </div>
        )}

        <button
          type="button"
          className="flex w-full items-center justify-between rounded-lg px-2 py-3.5 text-left text-base font-semibold text-slate-900"
          onClick={() => setAreasOpen((v) => !v)}
          aria-expanded={areasOpen}
        >
          Service areas
          <span
            className={`text-slate-400 transition-transform ${areasOpen ? "rotate-180" : ""}`}
            aria-hidden
          >
            ▾
          </span>
        </button>
        {areasOpen && (
          <div
            className="mb-2 ml-1 border-l-2 border-slate-200 pl-3"
            style={{ backgroundColor: "#f8fafc" }}
          >
            {priorityLocations.slice(0, 8).map((l) => (
              <Link
                key={l.slug}
                href={l.path}
                className="block rounded-lg px-2 py-2.5 text-sm text-slate-700"
                onClick={onClose}
              >
                {l.name}
              </Link>
            ))}
            <Link
              href={areasHref}
              className="block rounded-lg px-2 py-2.5 text-sm font-semibold text-brand-blue"
              onClick={onClose}
            >
              All service areas
            </Link>
          </div>
        )}

        <div className="my-2 border-t border-slate-200" />

        <Link
          href="/about-us/"
          className="block rounded-lg px-2 py-3.5 text-base font-semibold text-slate-900"
          onClick={onClose}
        >
          About
        </Link>
        <Link
          href="/blog/"
          className="block rounded-lg px-2 py-3.5 text-base font-semibold text-slate-900"
          onClick={onClose}
        >
          Blog
        </Link>
        <Link
          href="/contact/"
          className="block rounded-lg px-2 py-3.5 text-base font-semibold text-slate-900"
          onClick={onClose}
        >
          Contact
        </Link>
        <Link
          href="/careers/"
          className="block rounded-lg px-2 py-3.5 text-base font-semibold text-slate-900"
          onClick={onClose}
        >
          Careers
        </Link>

        <div className="mt-6 space-y-2 border-t border-slate-200 pt-6">
          <Button
            href="#estimate"
            className="w-full"
            onClick={() => {
              onClose();
              // Wait for menu to close before scrolling
              window.setTimeout(() => scrollToEstimate(), 50);
            }}
          >
            Schedule service
          </Button>
          <Button href={site.phoneTel} variant="outline" className="w-full">
            Call {site.phone}
          </Button>
        </div>
      </nav>
    </div>
  );

  return createPortal(panel, document.body);
}
