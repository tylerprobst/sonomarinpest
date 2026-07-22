import { site } from "@/content/site";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata = createMetadata({
  title: "Careers | Join Our Pest Control Team",
  description:
    "Careers at Sono-Marin Pest Solutions. We’re hiring driven Branch 2 service technicians in a family-owned North Bay company.",
  path: "/careers/",
});

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers/" },
        ])}
      />

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Careers
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Grow your career in a family-owned company that values quality work,
            honesty, and our community.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Current openings"
          title="Branch 2 Pest Control Service Technician"
        />
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-slate-600">
          <p>
            Looking for an experienced Branch 2 service technician. Tools
            provided; training available if needed. Must have an active license
            (or be willing to obtain one with our support where applicable).
          </p>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              What you can expect
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Family-owned, supportive team culture</li>
              <li>Quality-focused service—not high-pressure sales</li>
              <li>Company tools and vehicle support as discussed in hiring</li>
              <li>Opportunity to grow with a respected local brand</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Responsibilities
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Inspect residential and commercial properties</li>
              <li>Perform treatments and exclusion work per plan</li>
              <li>Communicate clearly with customers</li>
              <li>Maintain equipment, safety standards, and service notes</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Qualifications</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Branch 2 license preferred; motivated learners welcome to apply</li>
              <li>Valid driver’s license and clean record</li>
              <li>Professional, reliable, and customer-oriented</li>
              <li>Comfortable with physical outdoor and attic/crawl work</li>
            </ul>
          </div>
          <p>
            Interested? Email{" "}
            <a
              href={site.emailMailto}
              className="font-semibold text-brand-blue hover:underline"
            >
              {site.email}
            </a>{" "}
            with your resume and a short note about your experience—or call{" "}
            <a href={site.phoneTel} className="font-semibold text-brand-blue">
              {site.phone}
            </a>
            .
          </p>
          <Button href={site.emailMailto}>Email your application</Button>
        </div>
      </Section>
    </>
  );
}
