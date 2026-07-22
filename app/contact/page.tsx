import { site } from "@/content/site";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { RatingBadge } from "@/components/reviews/RatingBadge";

export const metadata = createMetadata({
  title: "Contact Us | Schedule Pest Control",
  description: `Contact Sono-Marin Pest Solutions in Santa Rosa. Call ${site.phone}, text ${site.text}, or request an estimate for Sonoma & Marin service.`,
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ])}
      />

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Call or text today - or request an estimate. We serve homes and
            businesses across Sonoma and Marin Counties.
          </p>
          <div className="mt-6">
            <RatingBadge light />
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="lg:sticky lg:top-36 lg:self-start lg:pt-2 lg:pb-8">
            <SectionHeading title="Get in touch" />
            <div className="space-y-6 text-slate-600">
              <div>
                <h2 className="font-semibold text-slate-900">Address</h2>
                <p className="mt-1">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-slate-900">Call or text</h2>
                <p className="mt-2 flex flex-wrap gap-3">
                  <Button href={site.phoneTel}>Call {site.phone}</Button>
                  <Button href={site.textTel} variant="outline">
                    Text {site.text}
                  </Button>
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-slate-900">Email</h2>
                <a
                  href={site.emailMailto}
                  className="mt-1 inline-block text-brand-blue hover:underline"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <h2 className="font-semibold text-slate-900">Hours</h2>
                <p className="mt-1">{site.hours.display}</p>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Map to Sono-Marin Pest Solutions"
                src="https://www.google.com/maps?q=3471+Regional+Pkwy+B,+Santa+Rosa,+CA+95403&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <EstimateForm title="Request an estimate" />
        </div>
      </Section>
    </>
  );
}
