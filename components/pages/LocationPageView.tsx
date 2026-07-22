import Image from "next/image";
import Link from "next/link";
import type { Location } from "@/content/locations";
import { getLocationBySlug, locations } from "@/content/locations";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { getBuiltReviews } from "@/lib/reviews-data";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { RatingBadge } from "@/components/reviews/RatingBadge";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";

const highlightServices = services.filter((s) =>
  ["rodents", "ants", "ipm-services", "maintenance", "wildlife"].includes(
    s.slug,
  ),
);

export function LocationPageView({ location }: { location: Location }) {
  const reviews = getBuiltReviews();
  const nearby = location.nearby
    .map((slug) => getLocationBySlug(slug))
    .filter(Boolean) as Location[];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: `Pest Control ${location.name}`, path: location.path },
          ]),
          localBusinessSchema(reviews),
          faqSchema(location.faqs),
        ]}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-brand-blue-dark text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/neighborhood.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-sm font-medium text-brand-green-light">
            {location.county === "Both"
              ? "Sonoma & Marin"
              : `${location.county} County`}{" "}
            · Local service
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
            Pest Control in {location.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-200">
            Family-owned, licensed Branch 2 technicians serving {location.name}{" "}
            with thorough inspections, eco-conscious IPM, and expert rodent
            exclusion.
          </p>
          <div className="mt-6">
            <RatingBadge light />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.phoneTel} size="lg">
              Call {site.phone}
            </Button>
            <Button href="/contact/#estimate" variant="outlineLight" size="lg">
              Schedule in {location.name}
            </Button>
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="grid items-start gap-10 lg:grid-cols-5">
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-slate-600 lg:col-span-3">
            {location.intro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            <p className="rounded-xl border border-brand-green/25 bg-emerald-50 p-5 text-base text-slate-700">
              <strong className="text-slate-900">Local note:</strong>{" "}
              {location.localNotes}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200 lg:col-span-2">
            <Image
              src="/images/home-sunset.jpg"
              alt={`Homes we protect in ${location.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">
            Common pests in {location.name}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {location.commonPests.map((pest) => (
              <span
                key={pest}
                className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-brand-blue ring-1 ring-blue-100"
              >
                {pest}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="soft-blue">
        <SectionHeading
          title={`Our services in ${location.name}`}
          description="From one-time treatments to year-round IPM and poison-free rodent programs."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlightServices.map((s) => (
            <Link
              key={s.slug}
              href={s.path}
              className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:border-brand-blue"
            >
              <h3 className="font-bold text-slate-900">{s.shortTitle}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="soft-green">
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              t: "Licensed & insured",
              d: "California Branch 2 for general pests and rodents. Bonded and insured.",
            },
            {
              t: "Quality over quick fixes",
              d: "Thorough inspections, honest options, and work we stand behind.",
            },
            {
              t: "Eco-conscious IPM",
              d: "Targeted treatments and no rodenticides on our rodent programs.",
            },
          ].map((item) => (
            <div
              key={item.t}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"
            >
              <h3 className="font-bold text-slate-900">{item.t}</h3>
              <p className="mt-2 text-slate-600">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {location.faqs.length > 0 && (
        <Section tone="white">
          <SectionHeading title={`${location.name} FAQ`} />
          <Accordion items={location.faqs} />
        </Section>
      )}

      {nearby.length > 0 && (
        <Section tone="soft-sky">
          <SectionHeading title="Nearby service areas" />
          <div className="flex flex-wrap gap-2">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                href={n.path}
                className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-brand-blue hover:text-brand-blue"
              >
                {n.name}
              </Link>
            ))}
            <Link
              href="/#service-areas"
              className="rounded-full border border-brand-blue bg-brand-blue px-4 py-2 text-sm font-medium text-white"
            >
              All areas
            </Link>
          </div>
        </Section>
      )}

      <ReviewsSection showFeatured limit={4} tone="soft-sky" />

      <Section tone="brand" id="estimate" className="relative">
        <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-brand-green/30 blur-2xl" />
        <div className="relative grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="lg:sticky lg:top-36 lg:self-start lg:pt-2 lg:pb-8">
            <SectionHeading
              title={`Schedule pest control in ${location.name}`}
              description={`Call ${site.phone} or request an estimate. We serve residential and commercial properties across ${location.county === "Both" ? "the region" : `${location.county} County`}.`}
              light
            />
          </div>
          <EstimateForm />
        </div>
      </Section>
    </>
  );
}

export function AllLocationsLinks() {
  const sonoma = locations.filter((l) => l.county === "Sonoma");
  const marin = locations.filter((l) => l.county === "Marin");

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-2xl border border-blue-100 bg-white/80 p-6 shadow-sm">
        <h3 className="font-bold text-slate-900">Sonoma County</h3>
        <ul className="mt-3 columns-2 gap-4 text-sm text-slate-600">
          {sonoma.map((l) => (
            <li key={l.slug} className="mb-1">
              <Link href={l.path} className="hover:text-brand-blue">
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-emerald-100 bg-white/80 p-6 shadow-sm">
        <h3 className="font-bold text-slate-900">Marin County</h3>
        <ul className="mt-3 columns-2 gap-4 text-sm text-slate-600">
          {marin.map((l) => (
            <li key={l.slug} className="mb-1">
              <Link href={l.path} className="hover:text-brand-blue">
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
