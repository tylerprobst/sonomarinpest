import {
  RedirectPage,
  redirectMetadata,
} from "@/components/seo/RedirectPage";

const TO = "/pest-control-petaluma/";
const LABEL = "Pest Control Petaluma";

export function generateMetadata() {
  return redirectMetadata(TO, LABEL);
}

export default function Page() {
  return <RedirectPage to={TO} label={LABEL} />;
}
