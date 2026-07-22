import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/content/services";
import { createMetadata } from "@/lib/seo";
import { ServicePageView } from "@/components/pages/ServicePageView";

const SLUG = "spiders";

export function generateMetadata() {
  const service = getServiceBySlug(SLUG);
  if (!service) return {};
  return createMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: service.path,
  });
}

export default function Page() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  return <ServicePageView service={service} />;
}
