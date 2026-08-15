export type FeaturedReview = {
  id: string;
  author: string;
  rating: 5;
  text: string;
  relativeTime?: string;
};

/** Newest Google reviews first. Hitmen-switcher and no-upsell still earn a slot. */
export const featuredReviews: FeaturedReview[] = [
  {
    id: "linda-strout",
    author: "Linda Strout",
    rating: 5,
    relativeTime: "22 hours ago",
    text: "So nice to have such respectful, dedicated technicians. The tech got our job done very professionally and it took care of our problem.",
  },
  {
    id: "ross-townsend",
    author: "Ross Townsend",
    rating: 5,
    relativeTime: "2 weeks ago",
    text: "Fantastic service. I've had positive experiences with both Richard and Morgan. Morgan in particular is extremely knowledgable, helpful, and personable. The type of guy that a lot of home service companies are missing: Someone who's passion for the work leads to great results for the customer.",
  },
  {
    id: "kathy-hotchkiss",
    author: "Kathy Hotchkiss",
    rating: 5,
    relativeTime: "3 weeks ago",
    text: "Dillon and trainee came out today for an inspection and were very friendly and helpful. They explained my situation and gave me good advice and attention. After going though inspections with several companies I would definitely recommend Sono-Marin over the others. Both the office staff, Kitty, and the technicians were knowledgeable and helpful.",
  },
  {
    id: "avery-mcginn",
    author: "Avery McGinn",
    rating: 5,
    relativeTime: "2 months ago",
    text: "I got 3 quotes from different pest control companies for rodent exclusion and clean up in the crawl space under my house and in the attic. Sono-Marin was the third company to come and do an inspection. Dylan, one of the owners, immediately impressed me with his knowledge, his professionalism, his communication skills, his proposed solutions, his pricing, and his meticulously clean service truck. I had confidence that he would take care of the problem and stand behind his work. My confidence was rewarded. The office staff have also been great; their email and text updates make everything clear and keep things on track. Sono-Marin's work was thorough, timely, and fairly priced. I have highly recommended the company to friends and neighbors, as well as to my general contractor. Call them first!!",
  },
  {
    id: "candace-key",
    author: "Candace Key",
    rating: 5,
    relativeTime: "11 months ago",
    text: "We love Sono-Marin Pest! We switched over from Hitmen several years ago and couldn't be happier with the service we now receive. Morgan is so thoughtful and helpful. We always learn something from him about how to keep the pests at bay between services. Everyone we deal with at Sono-Marin is kind and considerate of our time. We would give them 10 stars if we could.",
  },
  {
    id: "mia-simon",
    author: "mia simon",
    rating: 5,
    relativeTime: "a year ago",
    text: "Some of the best customer service I've ever encountered. Called and was able to get an appointment within 48 hours. Tyler came out and handled all subsequent visits. Super friendly and educational. Properly diagnosed and solved our issue within the week. Scheduling/rescheduling platform is a breeze. Front office always answered the phone during office hours - a rare occurrence nowadays. Reasonable pricing. Did NOT try to upsell/oversell. Highly recommend!!",
  },
  {
    id: "jessica-nieto",
    author: "Jessica Nieto",
    rating: 5,
    relativeTime: "2 weeks ago",
    text: "Sono-Marin Pest Solutions I would call back in a heartbeat. There team was so easy to work with. Friendly informative and hard workers. Thank you for taking care of our rat situation!",
  },
  {
    id: "christina-de-zafra",
    author: "Christina de Zafra",
    rating: 5,
    relativeTime: "4 months ago",
    text: "5-star customer service all around! Communication was fantastic, from the booking call through the reminder emails and the text confirming the time of the tech's arrival. Morgan provided service and he couldn't have been more professional, knowledgeable, or personable. I highly recommend Sono-Marin Pest!",
  },
];
