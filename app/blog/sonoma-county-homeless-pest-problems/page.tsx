import {
  RedirectPage,
  redirectMetadata,
} from "@/components/seo/RedirectPage";

const TO = "/blog/community-pest-challenges-in-sonoma-county/";
const LABEL = "Community Pest Challenges in Sonoma County";

export function generateMetadata() {
  return redirectMetadata(TO, LABEL);
}

export default function Page() {
  return <RedirectPage to={TO} label={LABEL} />;
}
