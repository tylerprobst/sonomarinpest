export const site = {
  name: "Sono-Marin Pest Solutions",
  shortName: "Sono-Marin Pest",
  legalName: "Sono-Marin Pest Solutions",
  tagline: "Rodent exclusion and pest control for Sonoma & Marin Counties",
  description:
    "Family-owned pest control in Sonoma and Marin Counties. 4.9 from 139 Google reviews. We inspect first, explain the options, and don’t upsell. Especially strong on rodent exclusion — find the entry, seal it, no rodenticides.",
  url: "https://sonomarinpest.com",
  phone: "707-604-8188",
  phoneTel: "tel:+17076048188",
  text: "707-708-4167",
  textTel: "sms:+17077084167",
  email: "info@sonomarinpest.com",
  emailMailto: "mailto:info@sonomarinpest.com",
  hours: {
    display: "Monday - Friday: 8:00am - 5:00pm",
    weekdays: "Mo-Fr 08:00-17:00",
  },
  address: {
    street: "3471 Regional Pkwy #B",
    city: "Santa Rosa",
    state: "CA",
    zip: "95403",
    country: "US",
    full: "3471 Regional Pkwy #B, Santa Rosa, CA 95403",
  },
  geo: {
    latitude: 38.4404,
    longitude: -122.7141,
  },
  googlePlaceId: "ChIJex_ZR6BJhIARRaPfcTxFdgg",
  googleMapsUrl:
    "https://www.google.com/maps?cid=609750925466116933",
  googleWriteReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJex_ZR6BJhIARRaPfcTxFdgg",
  license: {
    type: "Branch 2",
    board: "California Structural Pest Control Board",
    note: "Licensed, bonded, and insured for general pest control (insects and rodents). We don’t do termites.",
  },
  social: {
    // Add when available
  },
} as const;

export type SiteConfig = typeof site;
