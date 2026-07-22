import type { ReactNode } from "react";
import { EstimateForm } from "@/components/forms/EstimateForm";

/**
 * Contact / estimate section: clean white full-bleed on mobile,
 * two-column layout on large screens (no blue side gutters).
 */
export function EstimateCtaSection({
  aside,
  formTitle,
}: {
  aside: ReactNode;
  formTitle?: string;
}) {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="px-4 sm:px-0 lg:sticky lg:top-36 lg:self-start lg:pt-2 lg:pb-8">
            {aside}
          </div>
          <div className="min-w-0">
            <EstimateForm title={formTitle} />
          </div>
        </div>
      </div>
    </section>
  );
}
