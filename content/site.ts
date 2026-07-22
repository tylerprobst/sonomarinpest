export const site = {
  name: "Sono-Marin Pest Solutions",
  shortName: "Sono-Marin Pest",
  legalName: "Sono-Marin Pest Solutions",
  tagline: "Professional pest control for Sonoma & Marin Counties",
  description:
    "Family-owned pest control in Sonoma and Marin Counties. 100+ five-star reviews. Eco-friendly IPM, expert rodent exclusion, and honest service for homes and businesses.",
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
    note: "Licensed, bonded, and insured for general pest control (insects and rodents).",
  },
  social: {
    // Add when available
  },
} as const;

export type SiteConfig = typeof site;
