import seed from "@/content/generated/google-reviews.json";

export type GoogleReview = {
  author: string;
  rating: number;
  text: string;
  relativeTime?: string;
  publishTime?: string | null;
};

export type GoogleReviewsData = {
  fetchedAt: string;
  source: string;
  placeId: string;
  displayName: string;
  rating: number;
  userRatingCount: number;
  googleMapsUri?: string;
  reviews: GoogleReview[];
};

/** Seed / last build-time snapshot (always available offline). */
export function getBuiltReviews(): GoogleReviewsData {
  return seed as GoogleReviewsData;
}
