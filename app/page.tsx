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
    body: "We find how pests get in—and what attracts them—before recommending treatment. No cookie-cutter spray routes.",
    accent: "border-l-brand-blue",
  },
  {
    title: "Honest, no-pressure quotes",
    body: "Customers rave that we don’t upsell. Clear options, fair pricing, and recommendations you’d give your own family.",
    accent: "border-l-brand-green",
  },
  {
    title: "We stand behind the work",
    body: "Follow-up visits, text updates, and technicians who want it done right—especially on tough rodent jobs.",
    accent: "border-l-sky-500",
  },
  {
    title: "Eco-conscious & poison-free rodents",
    body: "IPM-first approach. For rodents we exclude and trap—never rodenticides that risk pets, wildlife, or wall odors.",
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
            src={assetPath("/images/truck.png")}
            alt="Sono-Marin Pest Solutions service truck"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/92 to-brand-blue-dark/70" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <RatingBadge light className="mb-4" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Professional{" "}
              <span className="text-brand-green-light">pest control</span> in
              Sonoma & Marin
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-200 leading-relaxed">
              Family-owned and operated. Licensed Branch 2 technicians.
              Eco-friendly IPM and expert rodent exclusion—with the five-star
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
            <p className="mt-4 text-sm text-slate-300">
              Or text {site.text} · {site.hours.display}
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur-sm ring-1 ring-brand-green/20">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-green-light">
                Why homeowners call us
              </p>
              <ul className="mt-4 space-y-3 text-slate-100">
                <li>
                  ✓ {reviews.rating}★ average · {reviews.userRatingCount}+ reviews
                </li>
                <li>✓ Poison-free rodent programs (ETM)</li>
                <li>✓ Same-week appointments often available</li>
                <li>✓ Residential & commercial</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar — green band */}
      <div className="border-b border-emerald-700/20 bg-gradient-to-r from-brand-green to-emerald-600 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-5 text-center text-sm font-semibold sm:grid-cols-4 sm:px-6">
          <p>Licensed Branch 2</p>
          <p>Bonded & insured</p>
          <p>Family-owned local</p>
          <p>Eco-friendly IPM</p>
        </div>
      </div>

      {/* Why us — soft blue */}
      <Section tone="soft-blue">
        <SectionHeading
          eyebrow="Quality service"
          title="Sonoma County’s specialists in honest pest control"
          description="A family-owned local business providing quality, professional pest control to Marin County and Sonoma County—built on inspections, education, and results that last."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl border border-blue-100 bg-white p-6 shadow-sm border-l-4 ${p.accent}`}
            >
              <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services — white with colored cards */}
      <Section tone="white">
        <SectionHeading
          eyebrow="What we treat"
          title="Comprehensive pest management"
          description="From stubborn ants to full rodent exclusion—customized plans for homes and businesses."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gridServices.map((s, i) => {
            const cardTones = [
              "bg-blue-50 border-blue-100 hover:border-brand-blue",
              "bg-emerald-50 border-emerald-100 hover:border-brand-green",
              "bg-sky-50 border-sky-100 hover:border-sky-400",
              "bg-amber-50 border-amber-100 hover:border-amber-400",
            ];
            const tone = cardTones[i % cardTones.length];
            return (
              <Link
                key={s.slug}
                href={s.path}
                className={`group rounded-2xl border p-5 shadow-sm transition hover:shadow-md ${tone}`}
              >
                {s.featured && (
                  <span className="mb-2 inline-block rounded-full bg-brand-green px-2 py-0.5 text-xs font-semibold text-white">
                    Popular
                  </span>
                )}
                <h3 className="font-bold text-slate-900 group-hover:text-brand-blue">
                  {s.shortTitle}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {s.summary}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Button href="/services/" variant="outline">
            View all services
          </Button>
        </div>
      </Section>

      {/* Rodent / ETM spotlight — soft green */}
      <Section tone="soft-green">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
              Our specialty
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Rodent exclusion that lasts—without poison
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Traps alone don’t work if entry points stay open. We inspect,
              seal, and trap mechanically. Our ETM (Exclude–Trap–Manage)
              program keeps rodents out year-round—no rodenticides that risk
              pets, wildlife, or odor in the walls.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
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

      {/* Service areas — soft blue */}
      <Section id="service-areas" tone="soft-blue">
        <div className="mb-10 grid items-end gap-8 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Service area"
            title="Proudly serving Sonoma & Marin Counties"
            description="Local routes across the North Bay—residential and commercial."
          />
          <div className="relative hidden h-40 overflow-hidden rounded-2xl lg:block">
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

      {/* FAQ — white */}
      <Section tone="white">
        <SectionHeading title="Frequently asked questions" align="center" />
        <div className="mx-auto max-w-3xl">
          <Accordion items={homeFaqs} />
        </div>
      </Section>

      {/* CTA — brand blue band with white form card */}
      <Section id="estimate" tone="brand" className="relative">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-brand-green/30 blur-2xl" />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="lg:sticky lg:top-36 lg:self-start lg:pt-2 lg:pb-8">
            <SectionHeading
              title="Contact us to schedule a service"
              description="Have questions or need pest control? Reach our team for fast, reliable solutions. Fill out the form or give us a call—we’ll get back to you as soon as possible."
              light
            />
            <RatingBadge light className="mb-6" />
            <ul className="space-y-2 text-blue-50">
              <li>
                <strong className="text-white">Call:</strong>{" "}
                <a href={site.phoneTel} className="underline-offset-2 hover:underline">
                  {site.phone}
                </a>
              </li>
              <li>
                <strong className="text-white">Text:</strong>{" "}
                <a href={site.textTel} className="underline-offset-2 hover:underline">
                  {site.text}
                </a>
              </li>
              <li>
                <strong className="text-white">Email:</strong>{" "}
                <a href={site.emailMailto} className="underline-offset-2 hover:underline">
                  {site.email}
                </a>
              </li>
              <li>
                <strong className="text-white">Hours:</strong> {site.hours.display}
              </li>
            </ul>
          </div>
          <EstimateForm />
        </div>
      </Section>
    </>
  );
}
