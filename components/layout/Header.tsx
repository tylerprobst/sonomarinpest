"use client";

import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/lib/paths";
import { useState } from "react";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { priorityLocations } from "@/content/locations";
import { Button } from "@/components/ui/Button";

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

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="border-b border-slate-100 bg-slate-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs sm:px-6 sm:text-sm">
          <p className="text-slate-300">{site.hours.display}</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href={site.phoneTel} className="font-semibold hover:text-brand-green-light">
              Call {site.phone}
            </a>
            <span className="text-slate-600">|</span>
            <a href={site.textTel} className="hover:text-brand-green-light">
              Text {site.text}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src={assetPath("/images/logo.png")}
            alt={site.name}
            width={180}
            height={58}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services ▾
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                <Link
                  href="/services/"
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand-blue hover:bg-slate-50"
                >
                  All services
                </Link>
                {serviceLinks.map((s) => (
                  <Link
                    key={s.slug}
                    href={s.path}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    {s.navLabel}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setLocationsOpen(true)}
            onMouseLeave={() => setLocationsOpen(false)}
          >
            <button
              type="button"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
              onClick={() => setLocationsOpen((v) => !v)}
            >
              Areas ▾
            </button>
            {locationsOpen && (
              <div className="absolute left-0 top-full z-50 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                {priorityLocations.slice(0, 10).map((l) => (
                  <Link
                    key={l.slug}
                    href={l.path}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    {l.name}
                  </Link>
                ))}
                <Link
                  href="/#service-areas"
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand-blue hover:bg-slate-50"
                >
                  All service areas
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/about-us/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
          >
            About
          </Link>
          <Link
            href="/blog/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
          >
            Blog
          </Link>
          <Link
            href="/contact/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/#estimate" size="sm" className="hidden sm:inline-flex">
            Schedule service
          </Button>
          <button
            type="button"
            className="rounded-lg border border-slate-200 p-2 lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-0.5 w-6 bg-slate-800" />
            <span className="mt-1.5 block h-0.5 w-6 bg-slate-800" />
            <span className="mt-1.5 block h-0.5 w-6 bg-slate-800" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            <p className="px-2 text-xs font-semibold uppercase text-slate-400">
              Services
            </p>
            <Link href="/services/" className="rounded-lg px-2 py-2 font-medium" onClick={() => setOpen(false)}>
              All services
            </Link>
            {serviceLinks.map((s) => (
              <Link
                key={s.slug}
                href={s.path}
                className="rounded-lg px-2 py-2 text-slate-700"
                onClick={() => setOpen(false)}
              >
                {s.navLabel}
              </Link>
            ))}
            <p className="mt-3 px-2 text-xs font-semibold uppercase text-slate-400">
              Company
            </p>
            <Link href="/about-us/" className="rounded-lg px-2 py-2" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/blog/" className="rounded-lg px-2 py-2" onClick={() => setOpen(false)}>
              Blog
            </Link>
            <Link href="/contact/" className="rounded-lg px-2 py-2" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link href="/careers/" className="rounded-lg px-2 py-2" onClick={() => setOpen(false)}>
              Careers
            </Link>
            <div onClick={() => setOpen(false)}>
              <Button href="/#estimate" className="mt-3 w-full">
                Schedule service
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
