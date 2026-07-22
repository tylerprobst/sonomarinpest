/**
 * Single source of truth for legacy / alias URL → primary URL.
 * Used by RedirectPage routes, public/_redirects, and vercel.json.
 */
export type RedirectRule = {
  from: string;
  to: string;
  /** Human label for the destination (redirect page copy) */
  label: string;
};

export const redirects: RedirectRule[] = [
  // Service aliases (full duplicate pages → primary)
  {
    from: "/ant-control-services/",
    to: "/ants/",
    label: "Ant Control Services",
  },
  {
    from: "/spider-control-services/",
    to: "/spiders/",
    label: "Spider Control Services",
  },
  {
    from: "/cockroach-control-services/",
    to: "/cockroaches/",
    label: "Cockroach Control Services",
  },
  {
    from: "/flea-control-services/",
    to: "/fleas/",
    label: "Flea Control Services",
  },
  {
    from: "/carpenter-bee-control-services/",
    to: "/carpenter-bees/",
    label: "Carpenter Bee Control",
  },
  // Location aliases
  {
    from: "/pest-control-in-santa-rosa/",
    to: "/pest-control-santa-rosa/",
    label: "Pest Control Santa Rosa",
  },
  {
    from: "/pest-control-in-petaluma/",
    to: "/pest-control-petaluma/",
    label: "Pest Control Petaluma",
  },
  // Legacy WordPress brand URLs
  {
    from: "/sono-marin-pest/",
    to: "/",
    label: "Home",
  },
  {
    from: "/sono-marin-pest-solutions/",
    to: "/about-us/",
    label: "About Us",
  },
];

export function getRedirect(fromPath: string): RedirectRule | undefined {
  const normalized = fromPath.endsWith("/") ? fromPath : `${fromPath}/`;
  return redirects.find((r) => r.from === normalized);
}
