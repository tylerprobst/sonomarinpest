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
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
            <p className="text-sm text-slate-400">
              <Link href="/blog/" className="hover:text-white">
                Blog
              </Link>
              {" · "}
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {post.title}
            </h1>
          </div>
        </header>

        <Section>
          <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-slate-600">
            {post.content.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Need professional help?
            </h2>
            <p className="mt-2 text-slate-600">
              Sono-Marin Pest Solutions serves Sonoma and Marin Counties with
              quality, honest pest control.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/contact/">Contact us</Button>
              <Button href="/services/" variant="outline">
                Our services
              </Button>
            </div>
          </div>
        </Section>
      </article>
    </>
  );
}
