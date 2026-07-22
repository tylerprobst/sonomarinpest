import Image from "next/image";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/seo";
import { getBuiltReviews } from "@/lib/reviews-data";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { RatingBadge } from "@/components/reviews/RatingBadge";

export const metadata = createMetadata({
  title: "About Us | Family-Owned Pest Control",
  description:
    "Sono-Marin Pest Solutions is a family-owned, Branch 2 licensed pest control company serving Sonoma and Marin Counties with honest, eco-conscious service.",
  path: "/about-us/",
});

export default function AboutPage() {
  const reviews = getBuiltReviews();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about-us/" },
          ]),
          localBusinessSchema(reviews),
        ]}
      />

      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/truck.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About Sono-Marin Pest Solutions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Locally operated residential and commercial pest control for the
            North Bay—dedicated to quality service and safe, effective solutions.
          </p>
          <div className="mt-6">
            <RatingBadge light />
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              Sono-Marin Pest Solutions is a locally operated residential and
              commercial Branch 2 pest control business serving Sonoma County,
              Marin County, and the greater North Bay. Branch 2 licensing covers
              general pests—including ground-crawling insects, flying insects, and
              rodents.
            </p>
            <p>
              We are licensed through the State of California Structural Pest
              Control Board, and our company is bonded and insured as required. Our
              technicians are state licensed and trained regularly to industry
              standards and applicable laws.
            </p>
            <p>
              We specialize in rodent inspections and high-quality exclusion
              repairs. We believe in safe pest control methods and recommend
              eco-friendly solutions for most problems. When pesticides are
              necessary, our technicians use Integrated Pest Management methods to
              reduce unnecessary product use while solving the issue effectively.
            </p>
            <p>
              Pest problems are stressful. Our motivated team is here to help
              community members resolve issues with clear communication, thorough
              work, and follow-through you can trust.
            </p>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/images/service-work.jpg"
                alt="Sono-Marin Pest Solutions team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <Image
                src="/images/shield.png"
                alt=""
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
              <p className="text-sm text-slate-600">
                Licensed Branch 2 · Bonded & insured · Family-owned in Santa Rosa
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              t: "Inspect",
              d: "Identify pests, entry points, and conditions driving activity.",
            },
            {
              t: "Plan",
              d: "Custom plan of action—honest options, no pressure upsells.",
            },
            {
              t: "Protect",
              d: "Treat, exclude, and follow up so results last.",
            },
          ].map((s) => (
            <div
              key={s.t}
              className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6"
            >
              <h2 className="text-xl font-bold text-slate-900">{s.t}</h2>
              <p className="mt-2 text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft-green">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Ask about our ETM rodent service"
              description="Stop using poisonous rodenticides. Our Exclude–Trap–Manage program provides efficient, eco-friendly rodent solutions tailored to your property."
            />
            <div className="flex flex-wrap gap-3">
              <Button href="/maintenance/">Learn about ETM</Button>
              <Button href="/rodents/" variant="outline">
                Rodent inspections
              </Button>
              <Button href={site.phoneTel} variant="green">
                Call {site.phone}
              </Button>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-md">
            <Image
              src="/images/home-sunset.jpg"
              alt="Protected North Bay home"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <Section tone="soft-blue" id="estimate">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="lg:sticky lg:top-36 lg:self-start lg:pt-2 lg:pb-8">
            <SectionHeading
              title="Talk with our team"
              description="Questions about your pest issue? A licensed technician will help you find the right plan."
            />
          </div>
          <EstimateForm />
        </div>
      </Section>
    </>
  );
}
