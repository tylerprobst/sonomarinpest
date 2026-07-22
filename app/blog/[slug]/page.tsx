import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/content/blog";
import { createMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.metaDescription,
    path: post.path,
  });
}

const moneyLinks = [
  { href: "/rodents/", label: "Rodent control" },
  { href: "/ants/", label: "Ant control" },
  { href: "/ipm-services/", label: "IPM maintenance" },
  { href: "/maintenance/", label: "ETM rodent service" },
  { href: "/pest-control-santa-rosa/", label: "Santa Rosa" },
  { href: "/pest-control-sonoma-county/", label: "Sonoma County" },
  { href: "/pest-control-marin-county/", label: "Marin County" },
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog/" },
            { name: post.title, path: post.path },
          ]),
          articleSchema({
            title: post.title,
            description: post.metaDescription,
            path: post.path,
            date: post.date,
          }),
        ]}
      />

      <article>
        <header className="bg-slate-900 text-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-sm text-slate-400">
              <Link href="/blog/" className="underline-offset-2 hover:text-white hover:underline">
                Blog
              </Link>
              <span className="mx-2 text-slate-600">·</span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h1 className="heading-display mt-4 text-3xl sm:text-4xl">
              {post.title}
            </h1>
            {post.tags?.length > 0 && (
              <p className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium tracking-wide text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </p>
            )}
          </div>
        </header>

        <Section>
          <div className="prose-body mx-auto max-w-3xl space-y-5 text-pretty">
            {post.content.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <p className="eyebrow text-brand-green">Next step</p>
            <h2 className="heading-card mt-2 text-xl text-slate-900 sm:text-2xl">
              Need professional pest control?
            </h2>
            <p className="mt-3 text-pretty text-slate-600">
              Sono-Marin Pest Solutions serves Sonoma and Marin Counties with
              quality, honest service—rodent exclusion, IPM maintenance, and
              more.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/contact/">Contact us</Button>
              <Button href="/services/" variant="outline">
                Our services
              </Button>
              <Button href="/rodents/" variant="green">
                Rodent control
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl border-t border-slate-100 pt-10">
            <h2 className="heading-card text-lg text-slate-900">
              Related services &amp; areas
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {moneyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700 transition hover:border-brand-blue hover:text-brand-blue"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </article>
    </>
  );
}
