import type { ReactNode } from "react";
import { EstimateForm } from "@/components/forms/EstimateForm";

/**
 * Blue CTA section with two-column layout on large screens.
 * On mobile the form is full-bleed white so blue never sits on only one side.
 */
export function EstimateCtaSection({
  aside,
  formTitle,
}: {
  aside: ReactNode;
  formTitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-blue py-12 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-brand-green/25 blur-2xl" />

      <div className="relative mx-auto max-w-6xl lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          {/* Aside: padded; light text on blue */}
          <div className="px-4 text-white sm:px-6 lg:sticky lg:top-36 lg:self-start lg:px-0 lg:pt-2 lg:pb-8 [&_.eyebrow]:text-brand-green-light [&_a]:text-white [&_a]:underline-offset-2 [&_a:hover]:underline [&_dt]:text-white [&_dd]:text-blue-50 [&_h2]:text-white [&_p]:text-blue-50">
            {aside}
          </div>

          {/* Form: full viewport width on mobile, card column on desktop */}
          <div className="min-w-0 max-lg:w-full">
            <EstimateForm title={formTitle} fullBleedMobile />
          </div>
        </div>
      </div>
    </section>
  );
}
