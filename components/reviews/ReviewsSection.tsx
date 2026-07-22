import { site } from "@/content/site";
import { featuredReviews } from "@/content/reviews";
import { getBuiltReviews } from "@/lib/reviews-data";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RatingBadge } from "@/components/reviews/RatingBadge";
import { LiveReviewsRefresh } from "@/components/reviews/LiveReviewsRefresh";
import {
  ReviewCarousel,
  type CarouselReview,
} from "@/components/reviews/ReviewCarousel";

export function ReviewsSection({
  showFeatured = true,
  limit = 8,
  tone = "soft-sky",
}: {
  showFeatured?: boolean;
  limit?: number;
  tone?: "muted" | "soft-sky" | "soft-blue" | "white";
}) {
  const built = getBuiltReviews();

  const googleItems: CarouselReview[] = built.reviews.map((r, i) => ({
    id: `google-${i}-${r.author}`,
    author: r.author,
    text: r.text,
    rating: r.rating,
    relativeTime: r.relativeTime,
    source: "Google",
  }));

  const featuredItems: CarouselReview[] = featuredReviews
    .slice(0, limit)
    .map((r) => ({
      id: r.id,
      author: r.author,
      text: r.text,
      rating: r.rating,
      relativeTime: r.relativeTime,
    }));

  // Prefer a single continuous carousel: Google first, then featured (dedupe by author)
  const seen = new Set<string>();
  const combined: CarouselReview[] = [];
  for (const item of [...googleItems, ...(showFeatured ? featuredItems : [])]) {
    const key = item.author.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    combined.push(item);
  }

  return (
    <Section tone={tone} id="reviews">
      <SectionHeading
        eyebrow="Client testimonials"
        title="See why neighbors choose Sono-Marin"
        description="Don’t just take our word for it - homeowners and businesses across Sonoma and Marin trust us to keep their properties pest-free."
        align="center"
      />

      <div className="mb-8 flex flex-col items-center gap-2">
        <RatingBadge />
        <LiveReviewsRefresh initial={built} />
      </div>

      <ReviewCarousel reviews={combined} speed={26} />

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row">
        <Button
          href={built.googleMapsUri || site.googleMapsUrl}
          variant="outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read all Google reviews
        </Button>
        <Button
          href={site.googleWriteReviewUrl}
          variant="green"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leave a review
        </Button>
      </div>
    </Section>
  );
}
