import {
  RedirectPage,
  redirectMetadata,
} from "@/components/seo/RedirectPage";

const TO = "/fleas/";
const LABEL = "Flea Control Services";

export function generateMetadata() {
  return redirectMetadata(TO, LABEL);
}

export default function Page() {
  return <RedirectPage to={TO} label={LABEL} />;
}
