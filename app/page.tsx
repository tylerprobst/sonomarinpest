import Image from "next/image";
import { assetPath } from "@/lib/paths";
import Link from "next/link";
import { site } from "@/content/site";
import { homeFaqs } from "@/content/faq";
import { getBuiltReviews } from "@/lib/reviews-data";
import { createMetadata } from "@/lib/seo";
import { faqSchema, localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { EstimateCtaSection } from "@/components/forms/EstimateCtaSection";
import { RatingBadge } from "@/components/reviews/RatingBadge";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { AllLocationsLinks } from "@/components/pages/LocationPageView";

export const metadata = createMetadata({
  title: "Rodent Exclusion & Pest Control in Sonoma and Marin",
  description: site.description,
  path: "/",
});

const homeCards = [
  {
    title: "Rodents",
    body: "Exclusion, then a maintenance plan so they don’t return. No poison.",
    href: "/rodents/",
    tone: "bg-blue-50/80 border-blue-100 hover:border-brand-blue",
  },
  {
    title: "Ants",
    body: "Colony treatment or a maintenance plan.",
    href: "/ants/",
    tone: "bg-emerald-50/80 border-emerald-100 hover:border-brand-green",
  },
  {
    title: "Wasps",
    body: "Nest treatment around eaves, yards, and play areas.",
    href: "/wasp-hornet/",
    tone: "bg-amber-50/80 border-amber-100 hover:border-amber-400",
  },
];

export default function HomePage() {
  const reviews = getBuiltReviews();

  return (
    <>
      <JsonLd data={[localBusinessSchema(reviews), faqSchema(homeFaqs)]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src={assetPath("/images/truck-hero.jpg")}
            alt="Sono-Marin Pest Solutions service truck"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/92 to-brand-blue-dark/70" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <RatingBadge light className="mb-5" />
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            Rodent exclusion and pest control in Sonoma and Marin
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-[1.7]">
            Family-owned out of Santa Rosa. We inspect first, explain the
            options, and don’t upsell. Especially strong on rats and mice: find
            the entry, seal it, no rodenticides.
          </p>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-brand-green-light sm:text-lg">
            Ask about a monthly or bi-monthly plan so it doesn’t come back.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.phoneTel} size="lg">
              Call {site.phone}
            </Button>
            <Button href={site.textTel} variant="outlineLight" size="lg">
              Text {site.text}
            </Button>
            <Button href="#estimate" variant="green" size="lg">
              Request a service
            </Button>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-300">
            {reviews.rating.toFixed(1)} from {reviews.userRatingCount} Google
            reviews
            <span className="mx-2 text-slate-500">·</span>
            <span>{site.hours.display}</span>
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-b border-emerald-800/20 bg-gradient-to-r from-brand-green to-emerald-600 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-4 text-center text-xs font-semibold tracking-wide sm:grid-cols-4 sm:gap-4 sm:px-6 sm:py-5 sm:text-sm lg:px-8">
          <p className="leading-snug">Licensed Branch&nbsp;2</p>
          <p className="leading-snug">Bonded &amp; insured</p>
          <p className="leading-snug">Family-owned local</p>
          <p className="leading-snug">No rodenticides</p>
        </div>
      </div>

      {/* Three service cards */}
      <Section tone="white">
        <SectionHeading
          eyebrow="What we treat"
          title="Rats, ants, and wasps — then the rest"
          description="We inspect, explain the options, and treat what you actually have. No cookie-cutter spray routes."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {homeCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className={`group rounded-2xl border p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${card.tone}`}
            >
              <h2 className="heading-card text-xl text-slate-900 group-hover:text-brand-blue">
                {card.title}
              </h2>
              <p className="mt-2 text-pretty text-[0.975rem] leading-relaxed text-slate-600">
                {card.body}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-blue">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-pretty text-center text-[0.975rem] leading-relaxed text-slate-600 sm:text-base">
          Also spiders, cockroaches, fleas, carpenter bees, and wildlife
          (raccoon, skunk, opossum). Licensed Branch&nbsp;2. We don’t do
          termites.
        </p>
        <div className="mt-8 text-center">
          <Button href="/services/" variant="outline">
            View all services
          </Button>
        </div>
      </Section>

      {/* Rodent spotlight */}
      <Section tone="soft-green">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow text-brand-green">Our specialty</p>
            <h2 className="heading-section mt-3 text-3xl text-slate-900 sm:text-4xl">
              Find the entry, seal it, no rodenticides
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-relaxed">
              Traps alone don’t work if entry points stay open. We inspect,
              seal, and trap mechanically — never rodenticides that risk pets,
              wildlife, or odor in the walls. Ask about a monthly or bi-monthly
              plan so they don’t come back.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/rodents/">Rodent exclusion</Button>
              <Button href="#estimate" variant="outline">
                Request a service
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-emerald-100 shadow-lg ring-4 ring-white">
            <Image
              src={assetPath("/images/service-work.jpg")}
              alt="Sono-Marin Pest technician on the job"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <ReviewsSection tone="soft-sky" />

      {/* Service areas */}
      <Section id="service-areas" tone="soft-blue">
        <div className="mb-10 grid items-end gap-8 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Service area"
            title="Proudly serving Sonoma & Marin Counties"
            description="Local routes across the North Bay — residential and commercial properties welcome."
            className="mb-0"
          />
          <div className="relative hidden h-44 overflow-hidden rounded-2xl shadow-md lg:block">
            <Image
              src={assetPath("/images/neighborhood.jpg")}
              alt="North Bay neighborhoods we serve"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
        </div>
        <AllLocationsLinks />
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <SectionHeading
          title="Frequently asked questions"
          description="Quick answers about our services, safety practices, and service area."
          align="center"
        />
        <div className="mx-auto max-w-3xl">
          <Accordion items={homeFaqs} />
        </div>
      </Section>

      <EstimateCtaSection
        aside={
          <>
            <SectionHeading
              title="Request a service"
              description="Have questions or need pest control? Reach our team for fast, reliable solutions. Fill out the form, call, or text — we’ll get back to you as soon as possible."
              light
            />
            <RatingBadge light className="mb-6" />
            <dl className="space-y-3 text-[0.975rem]">
              <div className="flex flex-wrap gap-x-2">
                <dt className="font-semibold">Call</dt>
                <dd>
                  <a href={site.phoneTel}>{site.phone}</a>
                </dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="font-semibold">Text</dt>
                <dd>
                  <a href={site.textTel}>{site.text}</a>
                </dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="font-semibold">Email</dt>
                <dd>
                  <a href={site.emailMailto}>{site.email}</a>
                </dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="font-semibold">Hours</dt>
                <dd>{site.hours.display}</dd>
              </div>
            </dl>
          </>
        }
      />
    </>
  );
}
