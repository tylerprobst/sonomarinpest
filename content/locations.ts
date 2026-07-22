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

export const locations: Location[] = [
  {
    slug: "sonoma-county",
    path: "/pest-control-sonoma-county/",
    name: "Sonoma County",
    county: "Sonoma",
    metaTitle: "Pest Control Sonoma County | Sono-Marin Pest Solutions",
    metaDescription:
      "Family-owned pest control across Sonoma County—Santa Rosa, Petaluma, Sebastopol, Windsor, Healdsburg & more. Rodent exclusion, IPM, 100+ five-star reviews.",
    intro: [
      "Sono-Marin Pest Solutions provides professional pest control throughout Sonoma County for homes, farms, wineries, and businesses. From the Santa Rosa plain to coastal communities, we tailor service to how local weather, older housing stock, and agricultural surroundings influence pest pressure.",
      "Our licensed Branch 2 technicians specialize in thorough inspections, eco-conscious IPM, and rodent exclusion that lasts—not temporary sprays that ignore how pests get in.",
    ],
    localNotes:
      "Wine country properties often see rodents and ants drawn to outbuildings, irrigation, and food storage. Coastal and river-adjacent areas add moisture-loving insects and seasonal stinging insects.",
    commonPests: ["Rodents", "Ants", "Spiders", "Yellowjackets", "Wildlife"],
    faqs: [
      {
        question: "Do you cover all of Sonoma County?",
        answer:
          "We serve most cities and communities in Sonoma County, including Santa Rosa, Petaluma, Rohnert Park, Sebastopol, Windsor, Healdsburg, Sonoma, and surrounding areas. Call to confirm your address.",
      },
    ],
    nearby: ["santa-rosa", "petaluma", "sebastopol", "windsor", "healdsburg"],
    priority: true,
  },
  {
    slug: "marin-county",
    path: "/pest-control-marin-county/",
    name: "Marin County",
    county: "Marin",
    metaTitle: "Pest Control Marin County | Sono-Marin Pest Solutions",
    metaDescription:
      "Trusted pest control in Marin County—Novato, San Rafael, Mill Valley, Sausalito & more. Eco-friendly IPM and expert rodent control.",
    intro: [
      "From Novato to the southern Marin peninsula, Sono-Marin Pest Solutions helps homeowners and businesses stay ahead of rodents, ants, spiders, and wildlife with careful inspections and quality workmanship.",
      "Marin’s mix of older homes, hillside construction, and bay-adjacent moisture creates unique entry points and harborage. We design plans that fit your property—not a one-size checklist.",
    ],
    localNotes:
      "Hillside and older homes often need detailed rodent exclusion around crawl spaces, eaves, and utility penetrations. Coastal humidity can increase insect pressure near foundations.",
    commonPests: ["Rodents", "Ants", "Spiders", "Wildlife", "Wasps"],
    faqs: [
      {
        question: "Which Marin cities do you serve?",
        answer:
          "We serve Novato, San Rafael, Greenbrae, San Anselmo, Larkspur, Corte Madera, Fairfax, Mill Valley, Sausalito, Tiburon, Belvedere, and many nearby communities.",
      },
    ],
    nearby: ["novato", "san-rafael", "mill-valley", "sausalito"],
    priority: true,
  },
  {
    slug: "santa-rosa",
    path: "/pest-control-santa-rosa/",
    name: "Santa Rosa",
    county: "Sonoma",
    metaTitle: "Pest Control Santa Rosa | Sono-Marin Pest Solutions",
    metaDescription:
      "Local pest control in Santa Rosa, CA. Family-owned, licensed, and highly reviewed. Rodent inspections, ant control, IPM maintenance.",
    intro: [
      "Based in Santa Rosa, Sono-Marin Pest Solutions is your neighborhood partner for residential and commercial pest control. We know local housing styles—from mid-century homes to newer developments—and the pest patterns that come with North Bay seasons.",
      "Whether you’re dealing with rats in the attic, ant trails in the kitchen, or want a proactive maintenance plan, we inspect thoroughly, explain options clearly, and stand behind our work.",
    ],
    localNotes:
      "Santa Rosa’s mix of mature trees, irrigation, and varied construction means rodents and ants are year-round concerns. Wildfire-adjacent and rural-edge properties can also see increased wildlife pressure.",
    commonPests: ["Rodents", "Ants", "Spiders", "Cockroaches", "Yellowjackets"],
    faqs: [
      {
        question: "Where is your Santa Rosa office?",
        answer:
          "We’re at 3471 Regional Pkwy #B, Santa Rosa, CA 95403. Call 707-604-8188 or text 707-708-4167 to schedule.",
      },
    ],
    nearby: ["rohnert-park", "windsor", "sebastopol", "fulton"],
    priority: true,
  },
  {
    slug: "petaluma",
    path: "/pest-control-petaluma/",
    name: "Petaluma",
    county: "Sonoma",
    metaTitle: "Pest Control Petaluma | Sono-Marin Pest Solutions",
    metaDescription:
      "Professional pest control in Petaluma, CA. Rodent exclusion, eco-friendly IPM, and honest service for homes and businesses.",
    intro: [
      "Petaluma’s historic homes, river-adjacent neighborhoods, and growing business districts deserve pest control that respects both old construction and modern family life. Sono-Marin Pest Solutions delivers careful inspections and lasting fixes.",
      "We’re especially known for rodent work—finding how animals enter older foundations and sealing them out without relying on poisons.",
    ],
    localNotes:
      "Older Victorian and craftsman homes often have more potential entry points. River and agricultural edges can increase rodent and insect pressure seasonally.",
    commonPests: ["Rodents", "Ants", "Spiders", "Wildlife"],
    faqs: [
      {
        question: "Do you service downtown and east Petaluma?",
        answer:
          "Yes. We serve Petaluma citywide and nearby communities. Contact us to schedule an inspection.",
      },
    ],
    nearby: ["rohnert-park", "novato", "sonoma", "santa-rosa"],
    priority: true,
  },
  {
    slug: "rohnert-park",
    path: "/pest-control-rohnert-park/",
    name: "Rohnert Park",
    county: "Sonoma",
    metaTitle: "Pest Control Rohnert Park | Sono-Marin Pest Solutions",
    metaDescription:
      "Reliable pest control in Rohnert Park, CA. Family-owned IPM and rodent services for homes, rentals, and businesses.",
    intro: [
      "Rohnert Park residents and property managers trust Sono-Marin Pest Solutions for clear communication, fair pricing, and thorough work. From apartments to single-family homes, we customize treatment plans to your situation.",
      "Our IPM maintenance programs help keep ants, spiders, and seasonal pests from becoming recurring headaches.",
    ],
    localNotes:
      "Multi-unit and HOA communities benefit from scheduled maintenance that catches issues before they spread between units.",
    commonPests: ["Ants", "Spiders", "Rodents", "Cockroaches"],
    faqs: [
      {
        question: "Can you work with property managers in Rohnert Park?",
        answer:
          "Yes. We support property managers and HOAs with scheduled IPM and responsive service when tenants report pests.",
      },
    ],
    nearby: ["santa-rosa", "petaluma", "cotati", "windsor"],
    priority: true,
  },
  {
    slug: "sebastopol",
    path: "/pest-control-sebastopol/",
    name: "Sebastopol",
    county: "Sonoma",
    metaTitle: "Pest Control Sebastopol | Sono-Marin Pest Solutions",
    metaDescription:
      "Eco-conscious pest control in Sebastopol, CA. Rodent exclusion, IPM, and quality service for west county homes.",
    intro: [
      "Sebastopol and west county properties often sit among orchards, oaks, and rural edges—beautiful settings that also invite rodents, ants, and wildlife. Sono-Marin Pest Solutions brings eco-minded IPM and careful exclusion work to match local values.",
      "We take time to explain what we find and use methods that protect families, pets, and the environment whenever possible.",
    ],
    localNotes:
      "Rural and semi-rural lots see higher rodent and wildlife pressure. Wood piles, outbuildings, and mature landscaping are common harborage points we inspect carefully.",
    commonPests: ["Rodents", "Ants", "Wildlife", "Yellowjackets"],
    faqs: [
      {
        question: "Do you use eco-friendly methods in Sebastopol?",
        answer:
          "Yes. We emphasize IPM and, for rodents, mechanical trapping and exclusion rather than rodenticides. We’ll discuss product choices before treating.",
      },
    ],
    nearby: ["forestville", "santa-rosa", "bodega-bay", "graton"],
    priority: true,
  },
  {
    slug: "windsor",
    path: "/pest-control-windsor/",
    name: "Windsor",
    county: "Sonoma",
    metaTitle: "Pest Control Windsor | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Windsor, CA—ants, rodents, spiders, and more. Local, licensed, highly reviewed technicians.",
    intro: [
      "Windsor families choose Sono-Marin Pest Solutions for responsive service and results that last. Whether you’re in a newer subdivision or an established neighborhood, we inspect for the entry points and conditions driving your pest issues.",
      "Ask about quarterly IPM plans to stay ahead of seasonal ants, spiders, and perimeter pests.",
    ],
    localNotes:
      "Newer construction still faces utility penetrations and landscaping that guide ants and rodents to the structure—inspection still matters.",
    commonPests: ["Ants", "Spiders", "Rodents", "Wasps"],
    faqs: [
      {
        question: "How soon can you come to Windsor?",
        answer:
          "We often schedule quickly—many customers are seen within a few days. Call or text for the next available appointment.",
      },
    ],
    nearby: ["santa-rosa", "healdsburg", "fulton"],
    priority: true,
  },
  {
    slug: "healdsburg",
    path: "/pest-control-healdsburg/",
    name: "Healdsburg",
    county: "Sonoma",
    metaTitle: "Pest Control Healdsburg | Sono-Marin Pest Solutions",
    metaDescription:
      "Professional pest control in Healdsburg, CA for homes, rentals, and hospitality properties. Rodent & IPM specialists.",
    intro: [
      "Healdsburg’s hospitality and residential mix needs discreet, reliable pest control. Sono-Marin Pest Solutions provides thorough inspections and effective treatment plans for homes, guest properties, and small businesses.",
      "Rodent pressure near creeks and agricultural edges is common—we focus on exclusion and monitoring, not temporary bait shortcuts.",
    ],
    localNotes:
      "Vacation rentals and wine-country properties benefit from proactive maintenance before peak guest seasons.",
    commonPests: ["Rodents", "Ants", "Spiders", "Yellowjackets"],
    faqs: [
      {
        question: "Do you service vacation rentals in Healdsburg?",
        answer:
          "Yes. We can schedule around guest turnovers and help property managers keep units pest-free.",
      },
    ],
    nearby: ["windsor", "cloverdale", "grawn", "santa-rosa"],
    priority: true,
  },
  {
    slug: "sonoma",
    path: "/pest-control-sonoma/",
    name: "Sonoma",
    county: "Sonoma",
    metaTitle: "Pest Control Sonoma | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Sonoma, CA. Local technicians for rodents, ants, spiders, and eco-friendly maintenance plans.",
    intro: [
      "The city of Sonoma and surrounding valley communities rely on Sono-Marin Pest Solutions for honest recommendations and quality workmanship. Historic homes and plaza-area businesses need careful, professional service.",
      "We combine Branch 2 expertise with clear communication so you always know what we found and how we’ll fix it.",
    ],
    localNotes:
      "Adobe, older wood construction, and landscaped courtyards create classic North Bay pest pathways we address with exclusion and IPM.",
    commonPests: ["Rodents", "Ants", "Spiders", "Wildlife"],
    faqs: [
      {
        question: "Do you cover the Sonoma Valley?",
        answer:
          "Yes—Sonoma and nearby valley communities. Contact us to confirm service for your address.",
      },
    ],
    nearby: ["kenwood", "petaluma", "santa-rosa"],
    priority: true,
  },
  {
    slug: "novato",
    path: "/pest-control-novato/",
    name: "Novato",
    county: "Marin",
    metaTitle: "Pest Control Novato | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Novato, CA. Family-owned service for rodents, ants, spiders, and wildlife across northern Marin.",
    intro: [
      "Novato is one of our core Marin service areas. From hillside homes to family neighborhoods, Sono-Marin Pest Solutions delivers thorough rodent inspections, ant control, and ongoing IPM maintenance.",
      "Customers value our responsiveness—phone answered during office hours, clear quotes, and technicians who explain what they see.",
    ],
    localNotes:
      "Open space edges and hillside homes often see rodents and wildlife. We inspect crawl spaces, eaves, and decks carefully.",
    commonPests: ["Rodents", "Ants", "Wildlife", "Spiders"],
    faqs: [
      {
        question: "Are you available for emergency stinging insects in Novato?",
        answer:
          "Call us for yellowjackets and wasps—we prioritize active nests that threaten people and pets.",
      },
    ],
    nearby: ["san-rafael", "petaluma", "san-anselmo"],
    priority: true,
  },
  {
    slug: "san-rafael",
    path: "/pest-control-san-rafael/",
    name: "San Rafael",
    county: "Marin",
    metaTitle: "Pest Control San Rafael | Sono-Marin Pest Solutions",
    metaDescription:
      "Professional pest control in San Rafael, CA. Rodent exclusion, IPM, and quality service for homes and businesses.",
    intro: [
      "San Rafael homeowners and businesses choose Sono-Marin Pest Solutions for dependable, high-quality pest control. We take time to inspect multi-level homes, older foundations, and commercial kitchens with equal care.",
      "Our goal is long-term relief—especially for rodents and recurring ant issues—through exclusion and smart IPM, not endless spray visits alone.",
    ],
    localNotes:
      "Dense neighborhoods and mixed-use areas can share pest pressure between properties; perimeter and sanitation recommendations matter.",
    commonPests: ["Rodents", "Ants", "Cockroaches", "Spiders"],
    faqs: [
      {
        question: "Do you service commercial properties in San Rafael?",
        answer:
          "Yes. We work with restaurants, offices, and retail with discreet scheduling when needed.",
      },
    ],
    nearby: ["novato", "larkspur", "san-anselmo", "greenbrae"],
    priority: true,
  },
  {
    slug: "mill-valley",
    path: "/pest-control-mill-valley/",
    name: "Mill Valley",
    county: "Marin",
    metaTitle: "Pest Control Mill Valley | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Mill Valley, CA. Careful service for hillside homes—rodents, ants, spiders, and wildlife.",
    intro: [
      "Mill Valley’s wooded hillsides and classic homes need pest control that understands moisture, crawl spaces, and wildlife corridors. Sono-Marin Pest Solutions brings patient inspections and durable exclusion work.",
      "We’re known for treating your home with respect—shoe covers, clear communication, and thorough cleanup.",
    ],
    localNotes:
      "Tree cover and hillside construction increase spider, ant, and rodent harborage. Wildlife exclusion is a frequent need near open space.",
    commonPests: ["Rodents", "Spiders", "Ants", "Wildlife"],
    faqs: [
      {
        question: "Can you help with attic wildlife in Mill Valley?",
        answer:
          "Yes—contact us about raccoons, squirrels, and related activity. We’ll assess and recommend a plan that secures the structure.",
      },
    ],
    nearby: ["sausalito", "tiburon", "corte-madera", "larkspur"],
    priority: true,
  },
  // Additional towns — solid unique intros
  {
    slug: "fulton",
    path: "/pest-control-fulton/",
    name: "Fulton",
    county: "Sonoma",
    metaTitle: "Pest Control Fulton | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Fulton, CA near Santa Rosa. Rodent, ant, and IPM services from a local family-owned company.",
    intro: [
      "Fulton sits close to Santa Rosa with a semi-rural character that often means stronger rodent and insect pressure. Sono-Marin Pest Solutions provides the same thorough inspections and quality repairs we deliver throughout Sonoma County.",
    ],
    localNotes:
      "Agricultural edges and outbuildings are common inspection priorities.",
    commonPests: ["Rodents", "Ants", "Spiders"],
    faqs: [
      {
        question: "Is Fulton in your regular service area?",
        answer: "Yes. We’re based nearby in Santa Rosa and service Fulton regularly.",
      },
    ],
    nearby: ["santa-rosa", "windsor"],
  },
  {
    slug: "bodega-bay",
    path: "/pest-control-bodega-bay/",
    name: "Bodega Bay",
    county: "Sonoma",
    metaTitle: "Pest Control Bodega Bay | Sono-Marin Pest Solutions",
    metaDescription:
      "Coastal pest control for Bodega Bay, CA. Moisture-aware IPM, rodents, and quality service for homes and rentals.",
    intro: [
      "Coastal conditions in Bodega Bay bring salt air, moisture, and seasonal tourism—all of which influence pest activity. Sono-Marin Pest Solutions helps homeowners and rental managers keep properties protected with practical IPM and rodent solutions.",
    ],
    localNotes:
      "Moisture and second homes/rentals benefit from scheduled maintenance between guest stays.",
    commonPests: ["Rodents", "Ants", "Spiders", "Wildlife"],
    faqs: [
      {
        question: "Do you service vacation homes in Bodega Bay?",
        answer:
          "Yes. We can coordinate visits when properties are vacant between rentals.",
      },
    ],
    nearby: ["jenner", "sebastopol", "forestville"],
  },
  {
    slug: "jenner",
    path: "/pest-control-jenner/",
    name: "Jenner",
    county: "Sonoma",
    metaTitle: "Pest Control Jenner | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control for Jenner, CA. Local technicians for coastal homes—rodents, insects, and wildlife concerns.",
    intro: [
      "Jenner’s coastal and river setting is stunning—and challenging for pest management. We provide careful service for homes that face moisture, wildlife, and seasonal insect pressure.",
    ],
    localNotes: "Remote coastal properties may need flexible scheduling; call to plan a visit.",
    commonPests: ["Rodents", "Wildlife", "Spiders"],
    faqs: [
      {
        question: "How do I schedule service in Jenner?",
        answer: "Call 707-604-8188 or request service through our contact page.",
      },
    ],
    nearby: ["bodega-bay", "forestville"],
  },
  {
    slug: "forestville",
    path: "/pest-control-forestville/",
    name: "Forestville",
    county: "Sonoma",
    metaTitle: "Pest Control Forestville | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Forestville, CA. Rodent exclusion and eco-friendly IPM for west Sonoma County homes.",
    intro: [
      "Forestville’s wooded lots and rural properties often need proactive rodent and insect management. Sono-Marin Pest Solutions offers thorough inspections and eco-conscious options suited to west county living.",
    ],
    localNotes: "Woodpiles, sheds, and creek-adjacent lots are frequent rodent corridors.",
    commonPests: ["Rodents", "Ants", "Yellowjackets", "Wildlife"],
    faqs: [
      {
        question: "Do you offer poison-free rodent control in Forestville?",
        answer:
          "Yes. We emphasize trapping and exclusion through our rodent and ETM services.",
      },
    ],
    nearby: ["sebastopol", "guerneville", "santa-rosa"],
  },
  {
    slug: "kenwood",
    path: "/pest-control-kenwood/",
    name: "Kenwood",
    county: "Sonoma",
    metaTitle: "Pest Control Kenwood | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Kenwood, CA. Quality IPM and rodent services for Sonoma Valley homes and estates.",
    intro: [
      "Kenwood and the Sonoma Valley enjoy open space and vineyards that can increase wildlife and rodent activity. We provide discreet, professional pest control for homes and estates.",
    ],
    localNotes: "Larger lots often need perimeter focus and outbuilding inspections.",
    commonPests: ["Rodents", "Ants", "Wildlife", "Wasps"],
    faqs: [
      {
        question: "Can you service larger Kenwood properties?",
        answer:
          "Yes. We’ll scope structures and key outbuildings and quote a plan that fits the property.",
      },
    ],
    nearby: ["sonoma", "santa-rosa", "glen-ellen"],
  },
  {
    slug: "cloverdale",
    path: "/pest-control-cloverdale/",
    name: "Cloverdale",
    county: "Sonoma",
    metaTitle: "Pest Control Cloverdale | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Cloverdale, CA. Northern Sonoma County service for rodents, ants, and more.",
    intro: [
      "Cloverdale sits at the north end of our Sonoma County coverage. Sono-Marin Pest Solutions brings the same high standards for inspection, exclusion, and IPM that customers rely on throughout the region.",
    ],
    localNotes: "Rural edges and older structures are common sources of rodent entry.",
    commonPests: ["Rodents", "Ants", "Spiders", "Yellowjackets"],
    faqs: [
      {
        question: "Is Cloverdale in range?",
        answer: "Yes. Contact us to schedule a visit for your Cloverdale property.",
      },
    ],
    nearby: ["healdsburg", "grawn"],
  },
  {
    slug: "greenbrae",
    path: "/pest-control-greenbrae/",
    name: "Greenbrae",
    county: "Marin",
    metaTitle: "Pest Control Greenbrae | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Greenbrae, CA. Trusted Marin service for homes—rodents, ants, spiders, IPM.",
    intro: [
      "Greenbrae homeowners count on Sono-Marin Pest Solutions for careful, professional pest control. We address rodents, ants, and seasonal insects with clear plans and quality follow-through.",
    ],
    localNotes: "Multi-level homes near canyons benefit from detailed exterior inspections.",
    commonPests: ["Rodents", "Ants", "Spiders"],
    faqs: [
      {
        question: "Do you serve Greenbrae and Kentfield?",
        answer: "Yes—Greenbrae and nearby central Marin communities.",
      },
    ],
    nearby: ["san-rafael", "larkspur", "san-anselmo"],
  },
  {
    slug: "san-anselmo",
    path: "/pest-control-san-anselmo/",
    name: "San Anselmo",
    county: "Marin",
    metaTitle: "Pest Control San Anselmo | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in San Anselmo, CA. Local IPM and rodent specialists for Ross Valley homes.",
    intro: [
      "San Anselmo’s charming neighborhoods and hillside streets need pest control that fits older homes and tight lots. We inspect thoroughly and treat with respect for your family and neighbors.",
    ],
    localNotes: "Creek-adjacent and hillside homes may see elevated rodent and ant pressure.",
    commonPests: ["Rodents", "Ants", "Spiders", "Wildlife"],
    faqs: [
      {
        question: "Can you work around school and commute schedules?",
        answer:
          "Yes. We’re flexible with scheduling and keep you updated by text when helpful.",
      },
    ],
    nearby: ["fairfax", "san-rafael", "larkspur"],
  },
  {
    slug: "larkspur",
    path: "/pest-control-larkspur/",
    name: "Larkspur",
    county: "Marin",
    metaTitle: "Pest Control Larkspur | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Larkspur, CA. Professional rodent, ant, and IPM services for southern Marin.",
    intro: [
      "Larkspur residents trust Sono-Marin Pest Solutions for reliable pest control with a personal touch. From ferry-adjacent neighborhoods to hillside streets, we deliver inspections that find root causes.",
    ],
    localNotes: "Moisture near the bay can increase insect pressure around foundations.",
    commonPests: ["Ants", "Spiders", "Rodents", "Wasps"],
    faqs: [
      {
        question: "Do you serve Corte Madera and Larkspur Landing areas?",
        answer: "Yes. We cover Larkspur and neighboring southern Marin communities.",
      },
    ],
    nearby: ["corte-madera", "greenbrae", "mill-valley"],
  },
  {
    slug: "corte-madera",
    path: "/pest-control-corte-madera/",
    name: "Corte Madera",
    county: "Marin",
    metaTitle: "Pest Control Corte Madera | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Corte Madera, CA. Family-owned service for homes and local businesses.",
    intro: [
      "Corte Madera’s residential neighborhoods and shopping areas benefit from proactive pest management. Sono-Marin Pest Solutions offers residential and commercial service with clear communication and quality results.",
    ],
    localNotes: "Commercial and multi-family properties can request discreet scheduling.",
    commonPests: ["Ants", "Rodents", "Spiders", "Cockroaches"],
    faqs: [
      {
        question: "Do you offer commercial pest control in Corte Madera?",
        answer: "Yes—offices, retail, and food service with tailored plans.",
      },
    ],
    nearby: ["larkspur", "mill-valley", "san-rafael"],
  },
  {
    slug: "fairfax",
    path: "/pest-control-fairfax/",
    name: "Fairfax",
    county: "Marin",
    metaTitle: "Pest Control Fairfax | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Fairfax, CA. Eco-minded IPM and rodent control for wooded Marin homes.",
    intro: [
      "Fairfax’s wooded setting is part of its charm—and a reason rodents, ants, and wildlife stay active. We provide thoughtful IPM and exclusion that fits the community’s outdoor lifestyle.",
    ],
    localNotes: "Tree cover and open space edges increase wildlife and spider pressure.",
    commonPests: ["Rodents", "Wildlife", "Ants", "Spiders"],
    faqs: [
      {
        question: "Do you use eco-friendly options in Fairfax?",
        answer:
          "Yes. IPM is our framework, and we discuss product choices before treating.",
      },
    ],
    nearby: ["san-anselmo", "woodacre", "san-rafael"],
  },
  {
    slug: "woodacre",
    path: "/pest-control-woodacre/",
    name: "Woodacre",
    county: "Marin",
    metaTitle: "Pest Control Woodacre | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Woodacre, CA. Service for San Geronimo Valley homes—rodents, insects, wildlife.",
    intro: [
      "Woodacre and the San Geronimo Valley’s rural homes often face higher wildlife and rodent pressure. Sono-Marin Pest Solutions provides thorough inspections and practical exclusion strategies.",
    ],
    localNotes: "Septic, sheds, and wooded lots are common inspection points.",
    commonPests: ["Rodents", "Wildlife", "Ants", "Yellowjackets"],
    faqs: [
      {
        question: "Is Woodacre in your service area?",
        answer: "Yes. Call to schedule service for Woodacre and nearby valley communities.",
      },
    ],
    nearby: ["fairfax", "san-anselmo"],
  },
  {
    slug: "sausalito",
    path: "/pest-control-sausalito/",
    name: "Sausalito",
    county: "Marin",
    metaTitle: "Pest Control Sausalito | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Sausalito, CA. Discreet, professional service for hillside and waterfront homes.",
    intro: [
      "Sausalito’s hillside and waterfront homes need careful pest control that respects dense neighborhoods and premium properties. We provide discreet service, clear reporting, and durable results.",
    ],
    localNotes: "Steep lots and multi-level construction require thorough exterior and crawl inspections.",
    commonPests: ["Rodents", "Ants", "Spiders", "Wildlife"],
    faqs: [
      {
        question: "Do you service houseboats or only on-land homes?",
        answer:
          "Contact us about your situation—we primarily service standard residential and commercial structures.",
      },
    ],
    nearby: ["mill-valley", "tiburon", "marin-city"],
  },
  {
    slug: "tiburon",
    path: "/pest-control-tiburon/",
    name: "Tiburon",
    county: "Marin",
    metaTitle: "Pest Control Tiburon | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Tiburon, CA. Quality service for peninsula homes—rodents, ants, IPM maintenance.",
    intro: [
      "Tiburon peninsula properties deserve pest control that matches high standards of care. Sono-Marin Pest Solutions offers meticulous inspections and effective treatment for homes facing bay weather and hillside wildlife.",
    ],
    localNotes: "Wind-exposed and hillside homes still need sealing around utilities and eaves.",
    commonPests: ["Rodents", "Ants", "Spiders", "Wasps"],
    faqs: [
      {
        question: "Do you serve Belvedere as well?",
        answer: "Yes—Tiburon, Belvedere, and nearby peninsula communities.",
      },
    ],
    nearby: ["belvedere", "mill-valley", "sausalito"],
  },
  {
    slug: "belvedere",
    path: "/pest-control-belvedere/",
    name: "Belvedere",
    county: "Marin",
    metaTitle: "Pest Control Belvedere | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Belvedere, CA. Professional, discreet service for peninsula residences.",
    intro: [
      "Belvedere homes receive the same careful, professional attention we give every property—thorough inspections, honest recommendations, and quality workmanship from licensed technicians.",
    ],
    localNotes: "Premium properties benefit from proactive IPM and clear communication with owners or managers.",
    commonPests: ["Rodents", "Ants", "Spiders"],
    faqs: [
      {
        question: "Can you coordinate with property managers?",
        answer: "Yes. We’re happy to work with managers and provide clear service notes.",
      },
    ],
    nearby: ["tiburon", "sausalito"],
  },
  {
    slug: "tomales",
    path: "/pest-control-tomales/",
    name: "Tomales",
    county: "Marin",
    metaTitle: "Pest Control Tomales | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control near Tomales, CA. Rural and coastal Marin service for rodents, insects, and wildlife.",
    intro: [
      "Tomales and west Marin’s rural character means farms, open space, and coastal weather—all factors in pest pressure. We provide practical rodent and insect solutions for country properties.",
    ],
    localNotes: "Agricultural and rural structures need customized exclusion plans.",
    commonPests: ["Rodents", "Wildlife", "Ants", "Yellowjackets"],
    faqs: [
      {
        question: "How far west do you service in Marin?",
        answer:
          "We serve many west Marin communities including Tomales, Point Reyes area, and Stinson Beach. Call to confirm.",
      },
    ],
    nearby: ["point-reyes", "petaluma"],
  },
  {
    slug: "stinson-beach",
    path: "/pest-control-stinson-beach/",
    name: "Stinson Beach",
    county: "Marin",
    metaTitle: "Pest Control Stinson Beach | Sono-Marin Pest Solutions",
    metaDescription:
      "Coastal pest control for Stinson Beach, CA. Moisture-aware service for homes and rentals.",
    intro: [
      "Stinson Beach properties face coastal moisture, wildlife corridors, and seasonal occupancy patterns. Sono-Marin Pest Solutions helps protect homes and rentals with thoughtful IPM and rodent strategies.",
    ],
    localNotes: "Vacation rentals benefit from service windows between guest stays.",
    commonPests: ["Rodents", "Ants", "Spiders", "Wildlife"],
    faqs: [
      {
        question: "Can you service short-term rentals?",
        answer: "Yes—coordinate with us for timing that fits your calendar.",
      },
    ],
    nearby: ["mill-valley", "point-reyes"],
  },
  {
    slug: "point-reyes",
    path: "/pest-control-point-reyes/",
    name: "Point Reyes",
    county: "Marin",
    metaTitle: "Pest Control Point Reyes | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control for Point Reyes Station and nearby west Marin. Rodents, wildlife, and IPM for coastal properties.",
    intro: [
      "Point Reyes area properties sit among ranchland, fog, and open space. We provide practical pest control focused on rodents, wildlife pressure, and durable exclusion for coastal Marin living.",
    ],
    localNotes: "Rural construction and outbuildings are frequent rodent harborage—inspection is essential.",
    commonPests: ["Rodents", "Wildlife", "Ants", "Spiders"],
    faqs: [
      {
        question: "Do you cover Point Reyes Station?",
        answer: "Yes. Contact us to schedule service for Point Reyes area addresses.",
      },
    ],
    nearby: ["tomales", "stinson-beach"],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationByPath(path: string): Location | undefined {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return locations.find((l) => l.path === normalized);
}

export const priorityLocations = locations.filter((l) => l.priority);
