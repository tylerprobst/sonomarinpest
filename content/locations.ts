export type Location = {
  slug: string;
  path: string;
  name: string;
  county: "Sonoma" | "Marin" | "Both";
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  localNotes: string;
  commonPests: string[];
  faqs: { question: string; answer: string }[];
  nearby: string[];
  priority?: boolean;
};
