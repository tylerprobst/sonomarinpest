import { notFound } from "next/navigation";
import { getLocationBySlug } from "@/content/locations";
import { createMetadata } from "@/lib/seo";
import { LocationPageView } from "@/components/pages/LocationPageView";

const SLUG = "petaluma";

export function generateMetadata() {
  const location = getLocationBySlug(SLUG);
  if (!location) return {};
  return createMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: location.path,
  });
}

export default function Page() {
  const location = getLocationBySlug(SLUG);
  if (!location) notFound();
  return <LocationPageView location={location} />;
}
