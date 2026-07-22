import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";

export const metadata = createMetadata({
  title: "Blog | Pest Control Tips for Sonoma & Marin",
  description:
    "Tips and guides from Sono-Marin Pest Solutions—IPM, ants, rodents, and home protection for the North Bay.",
  path: "/blog/",
});

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
        ])}
      />

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Practical pest tips from a family-owned local business serving
            Sonoma and Marin Counties.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:border-brand-blue"
            >
              <p className="text-sm text-slate-500">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                <Link href={post.path} className="hover:text-brand-blue">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                href={post.path}
                className="mt-4 inline-block text-sm font-semibold text-brand-blue"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
