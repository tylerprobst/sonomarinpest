export type FeaturedReview = {
  id: string;
  author: string;
  rating: 5;
  text: string;
  relativeTime?: string;
};

/** Curated long-form highlights from real Google reviews (fallback + featured). */
export const featuredReviews: FeaturedReview[] = [
  {
    id: "candace-key",
    author: "Candace Key",
    rating: 5,
    relativeTime: "Recent",
    text: "We love Sono-Marin Pest! We switched over from another company several years ago and couldn't be happier. Morgan is so thoughtful and helpful. We always learn something from him about how to keep the pests at bay between services. Everyone we deal with is kind and considerate of our time. We would give them 10 stars if we could.",
  },
  {
    id: "mia-simon",
    author: "Mia Simon",
    rating: 5,
    relativeTime: "Recent",
    text: "Some of the best customer service I've ever encountered. Called and was able to get an appointment within 48 hours. Tyler came out and handled all subsequent visits - super friendly and educational. Properly diagnosed and solved our issue within the week. Reasonable pricing. Did NOT try to upsell. Highly recommend!!",
  },
  {
    id: "amy-arden",
    author: "Amy Arden",
    rating: 5,
    relativeTime: "Recent",
    text: "Sono-Marin Pest Services has been such an excellent company to work with! Tyler, Dylan, and Morgan have all been warm, professional, reliable, and extremely helpful. They offer reasonable rates with detailed quotes, lots of follow-up support after work is done, and keep us updated via text. We feel totally safe with them in our home. I can't recommend them highly enough.",
  },
  {
    id: "daniel-harris",
    author: "Daniel Harris",
    rating: 5,
    relativeTime: "Recent",
    text: "These guys have been so responsive. We had a challenging intrusion problem, they came up with a plan, executed it without any surprises. When we had a recurrence a few months later, they were out quickly with a revised fix. They want to get it right and will stand behind their work. Workers always pleasant and knew exactly what they were doing.",
  },
  {
    id: "jessica-nieto",
    author: "Jessica Nieto",
    rating: 5,
    relativeTime: "Recent",
    text: "Sono-Marin Pest Solutions I would call back in a heartbeat. Their team was so easy to work with - friendly, informative, and hard workers. Thank you for taking care of our rat situation!",
  },
  {
    id: "richard-williams",
    author: "Richard Williams",
    rating: 5,
    relativeTime: "Recent",
    text: "These guys are the best! They're a small personable company that always responds to every phone call or email. My house is rat proof!! Five stars highly recommended!",
  },
  {
    id: "dustin-machado",
    author: "Dustin Machado",
    rating: 5,
    relativeTime: "Recent",
    text: "We have had a very positive experience with Sono-Marin Pest. Thorough in both inspections and options of service. Quality and price that is hard to beat. If you are considering service, make the call. You won't regret it.",
  },
  {
    id: "bonnie-martindale",
    author: "Bonnie Martindale",
    rating: 5,
    relativeTime: "Recent",
    text: "This company and its employees are absolutely fantastic. From Dylan to Richard and Morgan they are competent, knowledgeable, honest and caring. From their expert advice to the work done - bar none the best service we have ever received. We are switching our pest company to Sono-Marin.",
  },
];
