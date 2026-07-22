import Image from "next/image";
import { assetPath } from "@/lib/paths";
import Link from "next/link";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { homeFaqs } from "@/content/faq";
import { getBuiltReviews } from "@/lib/reviews-data";
import { createMetadata } from "@/lib/seo";
import { faqSchema, localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { RatingBadge } from "@/components/reviews/RatingBadge";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { AllLocationsLinks } from "@/components/pages/LocationPageView";

export const metadata = createMetadata({
  title: "Professional Pest Control in Sonoma County | 100+ 5-Star Reviews",
  description: site.description,
  path: "/",
});

const pillars = [
  {
    title: "Thorough inspections first",
    body: "We find how pests get in - and what attracts them - before recommending treatment. No cookie-cutter spray routes.",
    accent: "border-l-brand-blue",
  },
  {
    title: "Honest, no-pressure quotes",
    body: "Customers rave that we don’t upsell. Clear options, fair pricing, and recommendations you’d give your own family.",
    accent: "border-l-brand-green",
  },
  {
    title: "We stand behind the work",
    body: "Follow-up visits, text updates, and technicians who want it done right - especially on tough rodent jobs.",
    accent: "border-l-sky-500",
  },
  {
    title: "Eco-conscious & poison-free rodents",
    body: "IPM-first approach. For rodents we exclude and trap - never rodenticides that risk pets, wildlife, or wall odors.",
    accent: "border-l-emerald-500",
  },
];

export default function HomePage() {
  const reviews = getBuiltReviews();
  const gridServices = services.filter((s) =>
    [
      "rodents",
      "ants",
      "spiders",
      "cockroaches",
      "wasps-hornets",
      "wildlife",
      "ipm-services",
      "maintenance",
    ].includes(s.slug),
  );

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
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <RatingBadge light className="mb-5" />
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.15]">
              <span className="block">Professional</span>
              <span className="block">
                <span className="text-brand-green-light">pest control</span>
                {" "}
                in
              </span>
              <span className="block">Sonoma &amp; Marin</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-[1.7]">
              Family-owned and operated. Licensed Branch&nbsp;2 technicians.
              Eco-friendly IPM and expert rodent exclusion - with the five-star
              service our neighbors rave about.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={site.phoneTel} size="lg">
                Call {site.phone}
              </Button>
              <Button href="#estimate" variant="outlineLight" size="lg">
                Schedule a service
              </Button>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-300">
              Or text{" "}
              <a href={site.textTel} className="font-medium text-white underline-offset-2 hover:underline">
                {site.text}
              </a>
              <span className="mx-2 text-slate-500">·</span>
              <span>{site.hours.display}</span>
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-7 shadow-xl backdrop-blur-sm ring-1 ring-brand-green/20">
              <p className="eyebrow text-brand-green-light">
                Why homeowners call us
              </p>
              <ul className="mt-5 space-y-3.5 text-[0.975rem] leading-snug text-slate-100">
                <li className="flex gap-3">
                  <span className="mt-0.5 text-brand-green-light" aria-hidden>✓</span>
                  <span>
                    <strong className="font-semibold text-white">
                      {reviews.rating}★ average
                    </strong>{" "}
                    · {reviews.userRatingCount}+ Google reviews
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 text-brand-green-light" aria-hidden>✓</span>
                  <span>Poison-free rodent programs (ETM)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 text-brand-green-light" aria-hidden>✓</span>
                  <span>Same-week appointments often available</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 text-brand-green-light" aria-hidden>✓</span>
                  <span>Residential &amp; commercial service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-b border-emerald-800/20 bg-gradient-to-r from-brand-green to-emerald-600 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-4 text-center text-xs font-semibold tracking-wide sm:grid-cols-4 sm:gap-4 sm:px-6 sm:py-5 sm:text-sm lg:px-8">
          <p className="leading-snug">Licensed Branch&nbsp;2</p>
          <p className="leading-snug">Bonded &amp; insured</p>
          <p className="leading-snug">Family-owned local</p>
          <p className="leading-snug">Eco-friendly IPM</p>
        </div>
      </div>

      {/* Why us */}
      <Section tone="soft-blue">
        <SectionHeading
          eyebrow="Quality service"
          title="Sonoma County’s specialists in honest pest control"
          description="A family-owned local business providing quality, professional pest control to Marin County and Sonoma County - built on inspections, education, and results that last."
        />
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl border border-blue-100/80 bg-white p-6 shadow-sm shadow-slate-900/5 border-l-4 sm:p-7 ${p.accent}`}
            >
              <h3 className="heading-card text-lg text-slate-900">{p.title}</h3>
              <p className="mt-2.5 text-pretty text-[0.975rem] leading-relaxed text-slate-600">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section tone="white">
        <SectionHeading
          eyebrow="What we treat"
          title="Comprehensive pest management"
          description="From stubborn ants to full rodent exclusion - customized plans for homes and businesses across the North Bay."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gridServices.map((s, i) => {
            const cardTones = [
              "bg-blue-50/80 border-blue-100 hover:border-brand-blue",
              "bg-emerald-50/80 border-emerald-100 hover:border-brand-green",
              "bg-sky-50/80 border-sky-100 hover:border-sky-400",
              "bg-amber-50/80 border-amber-100 hover:border-amber-400",
            ];
            const tone = cardTones[i % cardTones.length];
            return (
              <Link
                key={s.slug}
                href={s.path}
                className={`group rounded-2xl border p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${tone}`}
              >
                {s.featured && (
                  <span className="mb-2.5 inline-block rounded-full bg-brand-green px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                    Popular
                  </span>
                )}
                <h3 className="heading-card text-base text-slate-900 group-hover:text-brand-blue">
                  {s.shortTitle}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-slate-600">
                  {s.summary}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services/" variant="outline">
            View all services
          </Button>
        </div>
      </Section>

      {/* Rodent / ETM spotlight */}
      <Section tone="soft-green">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow text-brand-green">Our specialty</p>
            <h2 className="heading-section mt-3 text-3xl text-slate-900 sm:text-4xl">
              Rodent exclusion that lasts - without poison
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-relaxed">
              Traps alone don’t work if entry points stay open. We inspect,
              seal, and trap mechanically. Our ETM (Exclude-Trap-Manage)
              program keeps rodents out year-round - no rodenticides that risk
              pets, wildlife, or odor in the walls.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/rodents/">Rodent inspections</Button>
              <Button href="/maintenance/" variant="outline">
                ETM rodent service
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
            description="Local routes across the North Bay - residential and commercial properties welcome."
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

      {/* CTA */}
      <Section tone="brand" className="relative">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-brand-green/30 blur-2xl" />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="lg:sticky lg:top-36 lg:self-start lg:pt-2 lg:pb-8">
            <SectionHeading
              title="Contact us to schedule a service"
              description="Have questions or need pest control? Reach our team for fast, reliable solutions. Fill out the form or give us a call - we’ll get back to you as soon as possible."
              light
            />
            <RatingBadge light className="mb-6" />
            <dl className="space-y-3 text-[0.975rem] text-blue-50">
              <div className="flex flex-wrap gap-x-2">
                <dt className="font-semibold text-white">Call</dt>
                <dd>
                  <a href={site.phoneTel} className="underline-offset-2 hover:underline">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="font-semibold text-white">Text</dt>
                <dd>
                  <a href={site.textTel} className="underline-offset-2 hover:underline">
                    {site.text}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="font-semibold text-white">Email</dt>
                <dd>
                  <a href={site.emailMailto} className="underline-offset-2 hover:underline">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="font-semibold text-white">Hours</dt>
                <dd>{site.hours.display}</dd>
              </div>
            </dl>
          </div>
          <EstimateForm />
        </div>
      </Section>
    </>
  );
}
