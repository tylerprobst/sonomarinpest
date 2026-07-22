import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/lib/paths";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { locations } from "@/content/locations";
import { RatingBadge } from "@/components/reviews/RatingBadge";

export function Footer() {
  const year = new Date().getFullYear();
  const footerServices = services.filter((s) =>
    ["rodents", "ants", "ipm-services", "maintenance", "wildlife"].includes(
      s.slug,
    ),
  );

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-sm">
              <Image
                src={assetPath("/images/logo.png")}
                alt={site.name}
                width={160}
                height={52}
                className="h-9 w-auto sm:h-10"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              A family-owned and operated local business providing quality,
              honest pest control to Marin County and Sonoma County.
            </p>
            <div className="mt-4">
              <RatingBadge light showLink />
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <address className="not-italic text-sm leading-relaxed">
              <p>{site.address.street}</p>
              <p>
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
              <p className="mt-3">
                <a
                  href={site.phoneTel}
                  className="font-semibold text-white hover:text-brand-green-light"
                >
                  {site.phone}
                </a>
              </p>
              <p>
                Text:{" "}
                <a href={site.textTel} className="hover:text-white">
                  {site.text}
                </a>
              </p>
              <p>
                <a href={site.emailMailto} className="hover:text-white">
                  {site.email}
                </a>
              </p>
              <p className="mt-3 text-slate-400">{site.hours.display}</p>
            </address>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {footerServices.map((s) => (
                <li key={s.slug}>
                  <Link href={s.path} className="hover:text-white">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/" className="hover:text-white">
                  All services
                </Link>
              </li>
              <li>
                <Link href="/homeowners-association/" className="hover:text-white">
                  HOA & property managers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us/" className="hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers/" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href={site.googleWriteReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Leave a Google review
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Proudly serving
          </p>
          <p className="text-sm leading-relaxed text-slate-500">
            {locations.map((l, i) => (
              <span key={l.slug}>
                <Link href={l.path} className="hover:text-slate-300">
                  {l.name}
                </Link>
                {i < locations.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
          <p className="mt-6 text-xs text-slate-600">
            {site.license.note} © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
