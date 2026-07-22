import Image from "next/image";
import { assetPath } from "@/lib/paths";
import Link from "next/link";
import type { Service } from "@/content/services";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { getBuiltReviews } from "@/lib/reviews-data";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContentLabel, Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { RatingBadge } from "@/components/reviews/RatingBadge";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";

/** Rotate stock photos so service pages feel less empty */
function serviceImage(slug: string): { src: string; alt: string } {
  const map: Record<string, { src: string; alt: string }> = {
    rodents: {
      src: assetPath("/images/service-work.jpg"),
      alt: "Professional rodent inspection and exclusion work",
    },
    maintenance: {
      src: assetPath("/images/service-work.jpg"),
      alt: "Ongoing rodent ETM maintenance service",
    },
    "ipm-services": {
      src: assetPath("/images/home-sunset.jpg"),
      alt: "Protected residential property with IPM care",
    },
    hoa: {
      src: assetPath("/images/neighborhood.jpg"),
      alt: "Neighborhood and multi-property pest management",
    },
  };
  return (
    map[slug] ?? {
      src: assetPath("/images/truck-hero.jpg"),
      alt: "Sono-Marin Pest Solutions service vehicle",
    }
  );
}

export function ServicePageView({ service }: { service: Service }) {
  const reviews = getBuiltReviews();
  const related = (service.relatedSlugs || [])
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as Service[];
  const img = serviceImage(service.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: service.shortTitle, path: service.path },
          ]),
          serviceSchema({
            name: service.title,
            description: service.metaDescription,
            path: service.path,
            reviews,
          }),
          faqSchema(service.faqs),
        ]}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-brand-blue-dark text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={img.src}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
            aria-hidden
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-medium tracking-wide text-brand-green-light">
            <Link href="/services/" className="underline-offset-2 hover:underline">
              Services
            </Link>
            <span className="mx-2 text-white/40" aria-hidden>
              /
            </span>
            <span className="text-white/90">{service.shortTitle}</span>
          </p>
          <h1 className="heading-display mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl">
            {service.heroHeadline}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-relaxed">
            {service.summary}
          </p>
          <div className="mt-6">
            <RatingBadge light />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.phoneTel} size="lg">
              Call {site.phone}
            </Button>
            <Button href="/contact/#estimate" variant="outlineLight" size="lg">
              Schedule service
            </Button>
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-10">
            <div>
              <ContentLabel>The problem</ContentLabel>
              <h2 className="heading-section text-2xl text-slate-900 sm:text-3xl">
                What you&apos;re dealing with
              </h2>
              <p className="prose-body mt-4 text-pretty">{service.problem}</p>
            </div>
            <div>
              <ContentLabel>Our approach</ContentLabel>
              <h2 className="heading-section text-2xl text-slate-900 sm:text-3xl">
                How we solve it
              </h2>
              <p className="prose-body mt-4 text-pretty">{service.approach}</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-md ring-1 ring-slate-200">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-16 border-t border-slate-100 pt-14">
          <ContentLabel>Service details</ContentLabel>
          <h2 className="heading-section text-2xl text-slate-900 sm:text-3xl">
            What&apos;s included
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.includes.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-emerald-100 bg-emerald-50/70 px-4 py-3.5 text-[0.975rem] leading-snug text-slate-700"
              >
                <span className="mt-0.5 font-bold text-brand-green" aria-hidden>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {service.faqs.length > 0 && (
        <Section tone="soft-blue">
          <SectionHeading title="Frequently asked questions" />
          <Accordion items={service.faqs} />
        </Section>
      )}

      {related.length > 0 && (
        <Section tone="soft-green">
          <SectionHeading title="Related services" />
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={r.path}
                className="rounded-2xl border border-emerald-100 bg-white p-6 transition hover:border-brand-blue hover:shadow-md"
              >
                <h3 className="font-bold text-slate-900">{r.shortTitle}</h3>
                <p className="mt-2 text-sm text-slate-600">{r.summary}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <ReviewsSection showFeatured={false} limit={5} tone="soft-sky" />

      <Section tone="brand" className="relative">
        <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="relative grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="lg:sticky lg:top-36 lg:self-start lg:pt-2 lg:pb-8">
            <SectionHeading
              title={`Get help with ${service.shortTitle}`}
              description="Talk to a licensed technician about your property. We’ll inspect, explain options, and give you a clear plan - no pressure."
              light
            />
            <Button href={site.phoneTel} size="lg" variant="green">
              Call {site.phone}
            </Button>
          </div>
          <EstimateForm title="Request this service" />
        </div>
      </Section>
    </>
  );
}
