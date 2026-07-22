import Image from "next/image";
import { assetPath } from "@/lib/paths";
import Link from "next/link";
import { services } from "@/content/services";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { RatingBadge } from "@/components/reviews/RatingBadge";
import { EstimateCtaSection } from "@/components/forms/EstimateCtaSection";

export const metadata = createMetadata({
  title: "Pest Control Services | Rodents, Ants, IPM & More",
  description:
    "Explore Sono-Marin Pest Solutions services: rodent exclusion, ant control, IPM maintenance, wildlife, stinging insects, and more across Sonoma & Marin.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
        ])}
      />

      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={assetPath("/images/neighborhood.jpg")}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Customized treatments that stop pests - and keep them from coming
            back. Specializing in rodent inspections, IPM maintenance, and
            quality residential & commercial care.
          </p>
          <div className="mt-6">
            <RatingBadge light />
          </div>
        </div>
      </section>

      <Section tone="soft-blue">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const tones = [
              "bg-white border-blue-100",
              "bg-white border-emerald-100",
              "bg-white border-sky-100",
            ];
            return (
              <Link
                key={s.slug}
                href={s.path}
                className={`group rounded-2xl border p-6 shadow-sm transition hover:border-brand-blue hover:shadow-md ${tones[i % 3]}`}
              >
                <h2 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue">
                  {s.shortTitle}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.summary}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-blue">
                  Learn more →
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <EstimateCtaSection
        aside={
          <>
            <SectionHeading
              title="Not sure which service you need?"
              description="Describe what you’re seeing - we’ll recommend the right inspection and plan."
              light
            />
            <div className="relative mt-4 hidden aspect-[16/10] overflow-hidden rounded-2xl ring-2 ring-white/20 lg:block">
              <Image
                src={assetPath("/images/truck-hero.jpg")}
                alt="Sono-Marin service truck"
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>
          </>
        }
      />
    </>
  );
}
