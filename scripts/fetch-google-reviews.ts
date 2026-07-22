/**
 * Prebuild script: fetch live Google Place rating + reviews.
 * Requires GOOGLE_MAPS_API_KEY (Places API New enabled).
 * On failure or missing key, keeps existing seed JSON and exits 0.
 */
import { writeFileSync, existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const OUT = resolve(process.cwd(), "content/generated/google-reviews.json");
const PLACE_ID =
  process.env.GOOGLE_PLACE_ID ||
  process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ||
  "ChIJex_ZR6BJhIARRaPfcTxFdgg";
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

async function main() {
  if (!API_KEY) {
    console.log(
      "[fetch-google-reviews] No GOOGLE_MAPS_API_KEY — keeping existing seed data.",
    );
    return;
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`;
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask":
          "id,displayName,rating,userRatingCount,reviews,googleMapsUri",
      },
    });

    if (!res.ok) {
      throw new Error(`${res.status} ${await res.text()}`);
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

    const payload = {
      fetchedAt: new Date().toISOString(),
      source: "places-api",
      placeId: data.id || PLACE_ID,
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

    writeFileSync(OUT, JSON.stringify(payload, null, 2) + "\n", "utf8");
    console.log(
      `[fetch-google-reviews] Updated ${OUT} — ${payload.rating}★ (${payload.userRatingCount} reviews)`,
    );
  } catch (err) {
    console.warn(
      "[fetch-google-reviews] Fetch failed — keeping existing data.",
      err,
    );
    if (!existsSync(OUT)) {
      // Ensure seed exists if somehow missing
      const fallback = {
        fetchedAt: new Date().toISOString(),
        source: "fallback",
        placeId: PLACE_ID,
        displayName: "Sono-Marin Pest Solutions",
        rating: 4.9,
        userRatingCount: 127,
        reviews: [],
      };
      writeFileSync(OUT, JSON.stringify(fallback, null, 2) + "\n", "utf8");
    } else {
      // touch-read to silence unused in some tooling
      readFileSync(OUT, "utf8");
    }
  }
}

main();
