import Link from "next/link";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";

/**
 * Static soft-redirect for hosts without server 301s (e.g. GitHub Pages).
 * Pair with redirectMetadata() for noindex + canonical.
 */
export function RedirectPage({
  to,
  label,
}: {
  to: string;
  label: string;
}) {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
      <script
        dangerouslySetInnerHTML={{
          __html: `try{window.location.replace(${JSON.stringify(to)});}catch(e){}`,
        }}
      />
      <noscript>
        <meta httpEquiv="refresh" content={`0;url=${to}`} />
      </noscript>
      <p className="eyebrow text-brand-green">Redirecting</p>
      <h1 className="heading-section mt-3 text-2xl text-slate-900 sm:text-3xl">
        This page has moved
      </h1>
      <p className="mt-4 text-pretty text-slate-600">
        You&apos;re being sent to{" "}
        <strong className="font-semibold text-slate-900">{label}</strong>.
      </p>
      <Link
        href={to}
        className="mt-8 inline-flex rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white hover:bg-brand-blue-dark"
      >
        Continue to {label}
      </Link>
      <p className="mt-6 text-xs text-slate-400">
        If you are not redirected, use the button above.
      </p>
    </div>
  );
}

export function redirectMetadata(to: string, label: string): Metadata {
  const url = absoluteUrl(to);
  return {
    title: `${label} | Page moved`,
    description: `This page has moved permanently to ${label}.`,
    alternates: { canonical: url },
    robots: { index: false, follow: true },
  };
}
