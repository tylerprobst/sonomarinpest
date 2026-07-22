import type { GoogleReviewsData } from "@/lib/reviews-data";

const PLACE_ID =
  process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ||
  process.env.GOOGLE_PLACE_ID ||
  "ChIJex_ZR6BJhIARRaPfcTxFdgg";

/**
 * Fetch place details (rating + up to 5 reviews) from Google Places API (New).
 * Used at build time (scripts/fetch-google-reviews.ts) and optionally in the browser.
 */
export async function fetchPlaceDetails(
  apiKey: string,
  placeId: string = PLACE_ID,
): Promise<GoogleReviewsData> {
  const url = `https://places.googleapis.com/v1/places/${placeId}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "id,displayName,rating,userRatingCount,reviews,googleMapsUri",
    },
    // Browser: no cache busting beyond sessionStorage in the component
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Places API ${res.status}: ${body}`);
  }

  const data = (await res.json()) as {
    id?: string;
    displayName?: { text?: string };
    rating?: number;
    userRatingCount?: number;
    googleMapsUri?: string;
    reviews?: Array<{
      authorAttribution?: { displayName?: string };
      rating?: number;
      text?: { text?: string };
      relativePublishTimeDescription?: string;
      publishTime?: string;
    }>;
  };

  return {
    fetchedAt: new Date().toISOString(),
    source: "places-api",
    placeId: data.id || placeId,
    displayName: data.displayName?.text || "Sono-Marin Pest Solutions",
    rating: data.rating ?? 4.9,
    userRatingCount: data.userRatingCount ?? 0,
    googleMapsUri: data.googleMapsUri,
    reviews: (data.reviews || []).map((r) => ({
      author: r.authorAttribution?.displayName || "Google User",
      rating: r.rating ?? 5,
      text: r.text?.text || "",
      relativeTime: r.relativePublishTimeDescription,
      publishTime: r.publishTime ?? null,
    })),
  };
}

export { PLACE_ID };
