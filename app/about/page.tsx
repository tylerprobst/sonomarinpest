import {
  RedirectPage,
  redirectMetadata,
} from "@/components/seo/RedirectPage";

const TO = "/about-us/";
const LABEL = "About Us";

export function generateMetadata() {
  return redirectMetadata(TO, LABEL);
}

export default function Page() {
  return <RedirectPage to={TO} label={LABEL} />;
}
