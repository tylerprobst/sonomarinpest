import { site } from "@/content/site";
import { getBuiltReviews } from "@/lib/reviews-data";
import { Stars } from "@/components/reviews/Stars";

export function RatingBadge({
  className = "",
  light = false,
  showLink = true,
}: {
  className?: string;
  light?: boolean;
  showLink?: boolean;
}) {
  const data = getBuiltReviews();

  return (
    <div
      className={`inline-flex flex-wrap items-center gap-2 ${className}`}
    >
      <Stars rating={data.rating} size="md" />
      <span
        className={`font-semibold ${light ? "text-white" : "text-slate-900"}`}
      >
        {data.rating.toFixed(1)} from {data.userRatingCount} Google reviews
      </span>
      {showLink && (
        <a
          href={data.googleMapsUri || site.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm font-medium underline-offset-2 hover:underline ${
            light ? "text-brand-green-light" : "text-brand-blue"
          }`}
        >
          Read on Google
        </a>
      )}
    </div>
  );
}
