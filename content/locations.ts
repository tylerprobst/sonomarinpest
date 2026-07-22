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
    metaTitle: "Pest Control Sonoma County | Family-Owned | Sono-Marin Pest",
    metaDescription:
      "Professional pest control across Sonoma County—Santa Rosa to the coast. Rodent exclusion without poison, IPM maintenance, 100+ five-star reviews.",
    intro: [
      "Sono-Marin Pest Solutions provides professional pest control throughout Sonoma County for homes, farms, wineries, and businesses. From the Santa Rosa plain to coastal communities and wine-country estates, pest pressure changes with weather, irrigation, and building age—and your plan should too.",
      "Our licensed Branch 2 technicians specialize in thorough inspections, eco-conscious Integrated Pest Management (IPM), and rodent exclusion that lasts. We focus on how pests get in and what keeps them coming back, not temporary sprays that ignore the structure.",
      "Whether you need a one-time response for ants or yellowjackets, or a year-round maintenance program for a property with recurring rodent activity, we explain options clearly, price honestly, and stand behind the work.",
      "Homeowners, property managers, and commercial operators across Sonoma County choose us for responsiveness, educational technicians, and poison-free rodent methods that protect pets, wildlife, and the building itself.",
    ],
    localNotes:
      "Wine-country properties often see rodents and ants drawn to outbuildings, irrigation lines, and food storage. Coastal and river-adjacent areas add moisture-loving insects and late-summer stinging insects. Older ranch homes and mid-century neighborhoods frequently need crawl-space and eave exclusion work.",
    commonPests: ["Rodents", "Ants", "Spiders", "Yellowjackets", "Wildlife"],
    faqs: [
      {
        question: "Do you cover all of Sonoma County?",
        answer:
          "We serve most cities and communities in Sonoma County, including Santa Rosa, Petaluma, Rohnert Park, Sebastopol, Windsor, Healdsburg, Sonoma, and surrounding areas. Call 707-604-8188 to confirm your address.",
      },
      {
        question: "What makes Sonoma County pest control different?",
        answer:
          "Agricultural edges, irrigation, older housing stock, and seasonal weather create diverse pest pressure. We customize IPM and exclusion plans to each property instead of using a one-size spray route.",
      },
      {
        question: "Do you offer eco-friendly options countywide?",
        answer:
          "Yes. We emphasize IPM and, for rodents, mechanical trapping and exclusion rather than rodenticides. We’ll discuss product choices before any treatment.",
      },
      {
        question: "How quickly can you schedule service?",
        answer:
          "Many customers are seen within a few days. Urgent stinging-insect and active rodent situations are prioritized—call or text for the next available appointment.",
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
    metaTitle: "Pest Control Marin County | IPM & Rodents | Sono-Marin Pest",
    metaDescription:
      "Trusted pest control in Marin County—Novato, San Rafael, Mill Valley & more. Eco-friendly IPM, rodent exclusion, family-owned service.",
    intro: [
      "From Novato to the southern Marin peninsula, Sono-Marin Pest Solutions helps homeowners and businesses stay ahead of rodents, ants, spiders, and wildlife with careful inspections and quality workmanship.",
      "Marin’s mix of older homes, hillside construction, bay-adjacent moisture, and open-space edges creates unique entry points and harborage. Crawl spaces, decks, and utility penetrations are common pathways we inspect thoroughly.",
      "We design plans that fit your property—not a one-size checklist—and communicate clearly about what we found, what we recommend, and what can wait.",
      "Whether you manage a single-family home in San Rafael or a hillside property near Mill Valley open space, our Branch 2 team brings the same high standards used throughout Sonoma and Marin.",
    ],
    localNotes:
      "Hillside and older homes often need detailed rodent exclusion around crawl spaces, eaves, and utility lines. Coastal humidity can increase insect pressure near foundations. Wildlife corridors near open space make exclusion as important as trapping.",
    commonPests: ["Rodents", "Ants", "Spiders", "Wildlife", "Wasps"],
    faqs: [
      {
        question: "Which Marin cities do you serve?",
        answer:
          "We serve Novato, San Rafael, Greenbrae, San Anselmo, Larkspur, Corte Madera, Fairfax, Mill Valley, Sausalito, Tiburon, Belvedere, and many nearby communities. Contact us to confirm your address.",
      },
      {
        question: "Are your methods safe for hillsides and pets?",
        answer:
          "We prioritize IPM and pet-conscious approaches. For rodents we trap and exclude—we do not use rodenticides that risk non-target animals.",
      },
      {
        question: "Do you handle wildlife in Marin?",
        answer:
          "Yes—raccoons, skunks, and related small mammal issues are assessed case by case with exclusion and humane strategies appropriate to the structure.",
      },
      {
        question: "Can you work with property managers?",
        answer:
          "Absolutely. We support multi-unit and managed properties with scheduled IPM and clear reporting when tenants report pests.",
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
    metaTitle: "Pest Control Santa Rosa CA | 100+ 5-Star Reviews | Sono-Marin",
    metaDescription:
      "Local pest control in Santa Rosa, CA. Family-owned HQ. Rodent inspections, ant control, IPM maintenance. Call 707-604-8188.",
    intro: [
      "Based in Santa Rosa, Sono-Marin Pest Solutions is your neighborhood partner for residential and commercial pest control. We know local housing styles—from mid-century homes and ranch properties to newer developments—and the pest patterns that come with North Bay seasons.",
      "Rats in the attic, ant trails in the kitchen, or perimeter spiders after the first rains are everyday calls here. We start with inspection, explain what we find in plain language, and build a plan that fits your home—not a one-size spray ticket.",
      "Our team is known for thorough rodent exclusion, honest quotes without pressure, and follow-up that stands behind the work. Many neighbors switched to us after years with national chains and never looked back.",
      "From Bennett Valley to Fountaingrove, Roseland to the Junior College area, we schedule quickly and keep you updated by phone or text. Ask about quarterly IPM plans if you want fewer surprises between seasons.",
    ],
    localNotes:
      "Santa Rosa’s mature trees, irrigation, and varied construction mean rodents and ants are year-round concerns. Wildfire-adjacent and rural-edge properties can see increased wildlife pressure. Attics, crawl spaces, and garage corners are frequent inspection focus areas.",
    commonPests: ["Rodents", "Ants", "Spiders", "Cockroaches", "Yellowjackets"],
    faqs: [
      {
        question: "Where is your Santa Rosa office?",
        answer:
          "We’re at 3471 Regional Pkwy #B, Santa Rosa, CA 95403. Call 707-604-8188 or text 707-708-4167 to schedule.",
      },
      {
        question: "Do you offer same-week appointments in Santa Rosa?",
        answer:
          "Often yes. Availability changes with the season—call or text and we’ll give you the soonest option.",
      },
      {
        question: "What is the most common pest issue in Santa Rosa?",
        answer:
          "Rodents and ants are frequent. We also see seasonal spiders and yellowjackets. Inspection identifies the right approach for your property.",
      },
      {
        question: "Do you service commercial properties in Santa Rosa?",
        answer:
          "Yes—offices, retail, food service, and multi-unit properties with discreet scheduling when needed.",
      },
      {
        question: "Can I get a poison-free rodent plan?",
        answer:
          "Yes. Our rodent and ETM programs use inspection, exclusion, and mechanical trapping—no rodenticides.",
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
    metaTitle: "Pest Control Petaluma CA | Rodent Exclusion | Sono-Marin Pest",
    metaDescription:
      "Professional pest control in Petaluma, CA. Historic homes to new builds. Rodent exclusion without poison, eco-friendly IPM.",
    intro: [
      "Petaluma’s historic homes, river-adjacent neighborhoods, and growing business districts deserve pest control that respects both old construction and modern family life. Sono-Marin Pest Solutions delivers careful inspections and lasting fixes.",
      "We’re especially known for rodent work—finding how animals enter older foundations, soft spots under porches, and utility gaps, then sealing them out without relying on poisons.",
      "Downtown commercial spaces, east-side neighborhoods, and rural-edge properties each need a slightly different plan. We customize IPM and exclusion so you’re not paying for a generic route stop.",
      "If you’ve tried DIY traps or a one-time spray and the problem returned, schedule an inspection. We’ll map the issue and give you clear options with fair pricing.",
    ],
    localNotes:
      "Victorian and craftsman homes often have more potential entry points. River and agricultural edges can increase rodent and insect pressure seasonally. Moisture near the Petaluma River corridor can also support certain insect populations.",
    commonPests: ["Rodents", "Ants", "Spiders", "Wildlife"],
    faqs: [
      {
        question: "Do you service downtown and east Petaluma?",
        answer:
          "Yes. We serve Petaluma citywide and nearby communities. Contact us to schedule an inspection.",
      },
      {
        question: "Are older Petaluma homes harder to rodent-proof?",
        answer:
          "They often have more gaps and aging materials, but proper inspection and commercial-grade exclusion still deliver lasting results.",
      },
      {
        question: "Do you work with Petaluma businesses?",
        answer:
          "Yes—retail, offices, and food-related businesses can request discreet scheduling and ongoing IPM.",
      },
      {
        question: "How do I prepare for a rodent inspection?",
        answer:
          "Clear access to attic hatches, garage corners, and under-sink areas if you can. We’ll guide you on anything else after we schedule.",
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
    metaTitle: "Pest Control Rohnert Park | Homes & Rentals | Sono-Marin Pest",
    metaDescription:
      "Reliable pest control in Rohnert Park, CA for homes, apartments, and businesses. IPM maintenance and rodent services.",
    intro: [
      "Rohnert Park residents and property managers trust Sono-Marin Pest Solutions for clear communication, fair pricing, and thorough work. From apartments to single-family homes, we customize treatment plans to your situation.",
      "Our IPM maintenance programs help keep ants, spiders, and seasonal pests from becoming recurring headaches—especially helpful for multi-unit buildings where issues can spread between units.",
      "Students, families, and HOAs all need reliable scheduling and technicians who show up prepared. We text updates when helpful and explain findings without pressure sales tactics.",
      "If you’re comparing pest companies in Rohnert Park, ask about inspection quality and rodent philosophy. We exclude and trap—we don’t rely on poison shortcuts.",
    ],
    localNotes:
      "Multi-unit and HOA communities benefit from scheduled maintenance that catches issues before they spread between units. Landscaping and shared walls can move ants and roaches between residences.",
    commonPests: ["Ants", "Spiders", "Rodents", "Cockroaches"],
    faqs: [
      {
        question: "Can you work with property managers in Rohnert Park?",
        answer:
          "Yes. We support property managers and HOAs with scheduled IPM and responsive service when tenants report pests.",
      },
      {
        question: "Do you service apartments and condos?",
        answer:
          "Yes. We’ll coordinate access and tailor the plan to multi-unit realities.",
      },
      {
        question: "What’s included in a maintenance plan?",
        answer:
          "Regular inspections, targeted treatments as needed, and recommendations on conditions that attract pests—monthly, bi-monthly, or quarterly.",
      },
      {
        question: "How fast can you respond to a tenant complaint?",
        answer:
          "We prioritize active infestations. Call for current availability; many visits can be scheduled within the week.",
      },
    ],
    nearby: ["santa-rosa", "petaluma", "windsor"],
    priority: true,
  },
  {
    slug: "sebastopol",
    path: "/pest-control-sebastopol/",
    name: "Sebastopol",
    county: "Sonoma",
    metaTitle: "Pest Control Sebastopol | Eco-Friendly IPM | Sono-Marin Pest",
    metaDescription:
      "Eco-conscious pest control in Sebastopol, CA. Rodent exclusion without poison, IPM for west county homes and rural lots.",
    intro: [
      "Sebastopol and west county properties often sit among orchards, oaks, and rural edges—beautiful settings that also invite rodents, ants, and wildlife. Sono-Marin Pest Solutions brings eco-minded IPM and careful exclusion work to match local values.",
      "We take time to explain what we find and use methods that protect families, pets, and the environment whenever possible. For rodents, that means trapping and sealing—not rodenticides.",
      "From in-town bungalows to larger parcels with sheds and barns, we inspect structures and surrounding conditions that drive pest activity seasonally.",
      "If you want professional results without a heavy-handed spray-only approach, we’re a strong fit for Sebastopol homeowners and small farms.",
    ],
    localNotes:
      "Rural and semi-rural lots see higher rodent and wildlife pressure. Wood piles, outbuildings, and mature landscaping are common harborage points we inspect carefully. Foggy west-county moisture can also influence insect timing.",
    commonPests: ["Rodents", "Ants", "Wildlife", "Yellowjackets"],
    faqs: [
      {
        question: "Do you use eco-friendly methods in Sebastopol?",
        answer:
          "Yes. We emphasize IPM and, for rodents, mechanical trapping and exclusion rather than rodenticides. We’ll discuss product choices before treating.",
      },
      {
        question: "Can you service rural parcels with outbuildings?",
        answer:
          "Yes. We’ll prioritize primary living structures and advise on sheds, barns, and other buildings as needed.",
      },
      {
        question: "What about yellowjackets in late summer?",
        answer:
          "We treat active nests carefully. Call as soon as you notice heavy traffic near a hole, eave, or ground opening.",
      },
      {
        question: "Do you offer ongoing maintenance?",
        answer:
          "Yes—custom IPM schedules help west county properties stay ahead of seasonal pressure.",
      },
    ],
    nearby: ["forestville", "santa-rosa", "bodega-bay"],
    priority: true,
  },
  {
    slug: "novato",
    path: "/pest-control-novato/",
    name: "Novato",
    county: "Marin",
    metaTitle: "Pest Control Novato CA | Rodents & IPM | Sono-Marin Pest",
    metaDescription:
      "Pest control in Novato, CA. Family-owned service for rodents, ants, spiders, and wildlife across northern Marin.",
    intro: [
      "Novato is one of our core Marin service areas. From hillside homes to family neighborhoods, Sono-Marin Pest Solutions delivers thorough rodent inspections, ant control, and ongoing IPM maintenance.",
      "Customers value our responsiveness—phone answered during office hours, clear quotes, and technicians who explain what they see. No high-pressure sales, just solid plans.",
      "Open space edges, creeks, and hillside crawl spaces make exclusion especially important here. We find entry points and fix the pathway instead of only treating symptoms.",
      "Whether you’re near downtown, Hamilton, or the hills, we schedule with your calendar in mind and keep communication simple by call or text.",
    ],
    localNotes:
      "Open space edges and hillside homes often see rodents and wildlife. Crawl spaces, eaves, and decks are frequent inspection focus points. Seasonal wasps and yellowjackets can become urgent around patios and play areas.",
    commonPests: ["Rodents", "Ants", "Wildlife", "Spiders"],
    faqs: [
      {
        question: "Are you available for emergency stinging insects in Novato?",
        answer:
          "Call us for yellowjackets and wasps—we prioritize active nests that threaten people and pets.",
      },
      {
        question: "Do you handle rodents in hillside homes?",
        answer:
          "Yes. Hillside construction often needs detailed exclusion around crawl spaces and utility penetrations.",
      },
      {
        question: "Can you set up quarterly service in Novato?",
        answer:
          "Yes. IPM maintenance plans are available monthly, bi-monthly, or quarterly.",
      },
      {
        question: "Do you serve commercial properties in Novato?",
        answer:
          "Yes—offices, retail, and other businesses can request tailored plans and scheduling.",
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
    metaTitle: "Pest Control San Rafael CA | Local IPM | Sono-Marin Pest",
    metaDescription:
      "Professional pest control in San Rafael, CA. Rodent exclusion, IPM, residential and commercial. Family-owned North Bay team.",
    intro: [
      "San Rafael homeowners and businesses choose Sono-Marin Pest Solutions for dependable, high-quality pest control. We take time to inspect multi-level homes, older foundations, and commercial kitchens with equal care.",
      "Our goal is long-term relief—especially for rodents and recurring ant issues—through exclusion and smart IPM, not endless spray visits alone.",
      "Dense neighborhoods and mixed-use corridors can share pest pressure between properties. Perimeter conditions and sanitation often matter as much as interior treatment.",
      "From Gerstle Park to Terra Linda and downtown commercial spaces, we provide clear reporting and technicians who treat your property with respect.",
    ],
    localNotes:
      "Dense neighborhoods and mixed-use areas can share pest pressure between properties; perimeter and sanitation recommendations matter. Older foundations and multi-level homes need careful attic and crawl access planning.",
    commonPests: ["Rodents", "Ants", "Cockroaches", "Spiders"],
    faqs: [
      {
        question: "Do you service commercial properties in San Rafael?",
        answer:
          "Yes. We work with restaurants, offices, and retail with discreet scheduling when needed.",
      },
      {
        question: "How do you approach apartment or multi-unit buildings?",
        answer:
          "We coordinate with managers, focus on source units and shared pathways, and recommend schedules that prevent spread.",
      },
      {
        question: "Is rodent exclusion available in San Rafael?",
        answer:
          "Yes—inspection, sealing recommendations, mechanical trapping, and optional ETM maintenance.",
      },
      {
        question: "What are your hours for scheduling?",
        answer:
          "Office hours are Monday–Friday, 8:00am–5:00pm. Call 707-604-8188 or text 707-708-4167.",
      },
    ],
    nearby: ["novato", "larkspur", "san-anselmo", "greenbrae"],
    priority: true,
  },
  {
    slug: "windsor",
    path: "/pest-control-windsor/",
    name: "Windsor",
    county: "Sonoma",
    metaTitle: "Pest Control Windsor | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Windsor, CA—ants, rodents, spiders, and more. Local, licensed technicians.",
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
      {
        question: "Do you offer maintenance plans in Windsor?",
        answer:
          "Yes—monthly, bi-monthly, or quarterly IPM schedules tailored to your property.",
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
      "Professional pest control in Healdsburg for homes, rentals, and hospitality. Rodent & IPM specialists.",
    intro: [
      "Healdsburg’s hospitality and residential mix needs discreet, reliable pest control. We provide thorough inspections and effective plans for homes, guest properties, and small businesses.",
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
      {
        question: "Can you work discreetly for hospitality properties?",
        answer:
          "Yes—we plan visits and communication to minimize guest disruption.",
      },
    ],
    nearby: ["windsor", "cloverdale", "santa-rosa"],
    priority: true,
  },
  {
    slug: "sonoma",
    path: "/pest-control-sonoma/",
    name: "Sonoma",
    county: "Sonoma",
    metaTitle: "Pest Control Sonoma CA | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Sonoma, CA. Rodents, ants, spiders, and eco-friendly maintenance plans.",
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
      {
        question: "Do you treat commercial spaces near the plaza?",
        answer:
          "Yes—we service retail and hospitality with flexible scheduling.",
      },
    ],
    nearby: ["kenwood", "petaluma", "santa-rosa"],
    priority: true,
  },
  {
    slug: "mill-valley",
    path: "/pest-control-mill-valley/",
    name: "Mill Valley",
    county: "Marin",
    metaTitle: "Pest Control Mill Valley | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Mill Valley for hillside homes—rodents, ants, spiders, and wildlife.",
    intro: [
      "Mill Valley’s wooded hillsides and classic homes need pest control that understands moisture, crawl spaces, and wildlife corridors. We bring patient inspections and durable exclusion work.",
      "We’re known for treating your home with respect—clear communication and thorough cleanup.",
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
      {
        question: "Are treatments suitable for wooded lots?",
        answer:
          "We tailor IPM and exclusion to hillside and wooded properties and discuss products before treating.",
      },
    ],
    nearby: ["sausalito", "tiburon", "corte-madera", "larkspur"],
    priority: true,
  },
  {
    slug: "fulton",
    path: "/pest-control-fulton/",
    name: "Fulton",
    county: "Sonoma",
    metaTitle: "Pest Control Fulton | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Fulton near Santa Rosa. Rodent, ant, and IPM services.",
    intro: [
      "Fulton sits close to Santa Rosa with a semi-rural character that often means stronger rodent and insect pressure. We provide the same thorough inspections and quality repairs we deliver throughout Sonoma County.",
    ],
    localNotes:
      "Agricultural edges and outbuildings are common inspection priorities.",
    commonPests: ["Rodents", "Ants", "Spiders"],
    faqs: [
      {
        question: "Is Fulton in your regular service area?",
        answer:
          "Yes. We’re based nearby in Santa Rosa and service Fulton regularly.",
      },
      {
        question: "Can you inspect barns or outbuildings?",
        answer:
          "Yes—tell us about additional structures when you schedule.",
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
      "Coastal pest control for Bodega Bay. Moisture-aware IPM and rodent service for homes and rentals.",
    intro: [
      "Coastal conditions in Bodega Bay bring salt air, moisture, and seasonal tourism—all of which influence pest activity. We help homeowners and rental managers keep properties protected with practical IPM and rodent solutions.",
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
      {
        question: "How does coastal moisture affect pests?",
        answer:
          "Moisture can support certain insects and building conditions that attract pests—we inspect with that in mind.",
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
      "Pest control for Jenner coastal homes—rodents, insects, and wildlife concerns.",
    intro: [
      "Jenner’s coastal and river setting is stunning—and challenging for pest management. We provide careful service for homes that face moisture, wildlife, and seasonal insect pressure.",
    ],
    localNotes:
      "Remote coastal properties may need flexible scheduling; call to plan a visit.",
    commonPests: ["Rodents", "Wildlife", "Spiders"],
    faqs: [
      {
        question: "How do I schedule service in Jenner?",
        answer:
          "Call 707-604-8188 or request service through our contact page.",
      },
      {
        question: "Do you handle wildlife near coastal properties?",
        answer:
          "Yes—we assess small mammal activity and recommend exclusion strategies.",
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
      "Pest control in Forestville. Rodent exclusion and eco-friendly IPM for west Sonoma County.",
    intro: [
      "Forestville’s wooded lots and rural properties often need proactive rodent and insect management. We offer thorough inspections and eco-conscious options suited to west county living.",
    ],
    localNotes:
      "Woodpiles, sheds, and creek-adjacent lots are frequent rodent corridors.",
    commonPests: ["Rodents", "Ants", "Yellowjackets", "Wildlife"],
    faqs: [
      {
        question: "Do you offer poison-free rodent control in Forestville?",
        answer:
          "Yes. We emphasize trapping and exclusion through our rodent and ETM services.",
      },
      {
        question: "Can you service larger rural parcels?",
        answer:
          "Yes—we’ll prioritize living structures and advise on outbuildings.",
      },
    ],
    nearby: ["sebastopol", "santa-rosa"],
  },
  {
    slug: "kenwood",
    path: "/pest-control-kenwood/",
    name: "Kenwood",
    county: "Sonoma",
    metaTitle: "Pest Control Kenwood | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Kenwood for Sonoma Valley homes and estates. IPM and rodent services.",
    intro: [
      "Kenwood and the Sonoma Valley enjoy open space and vineyards that can increase wildlife and rodent activity. We provide discreet, professional pest control for homes and estates.",
    ],
    localNotes:
      "Larger lots often need perimeter focus and outbuilding inspections.",
    commonPests: ["Rodents", "Ants", "Wildlife", "Wasps"],
    faqs: [
      {
        question: "Can you service larger Kenwood properties?",
        answer:
          "Yes. We’ll scope structures and key outbuildings and quote a plan that fits the property.",
      },
      {
        question: "Do you offer seasonal maintenance?",
        answer:
          "Yes—IPM schedules can be aligned with peak pest seasons.",
      },
    ],
    nearby: ["sonoma", "santa-rosa"],
  },
  {
    slug: "cloverdale",
    path: "/pest-control-cloverdale/",
    name: "Cloverdale",
    county: "Sonoma",
    metaTitle: "Pest Control Cloverdale | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Cloverdale. Northern Sonoma County service for rodents, ants, and more.",
    intro: [
      "Cloverdale sits at the north end of our Sonoma County coverage. We bring the same high standards for inspection, exclusion, and IPM that customers rely on throughout the region.",
    ],
    localNotes:
      "Rural edges and older structures are common sources of rodent entry.",
    commonPests: ["Rodents", "Ants", "Spiders", "Yellowjackets"],
    faqs: [
      {
        question: "Is Cloverdale in range?",
        answer:
          "Yes. Contact us to schedule a visit for your Cloverdale property.",
      },
      {
        question: "How do I request an estimate?",
        answer:
          "Call 707-604-8188, text 707-708-4167, or use the form on our contact page.",
      },
    ],
    nearby: ["healdsburg"],
  },
  {
    slug: "greenbrae",
    path: "/pest-control-greenbrae/",
    name: "Greenbrae",
    county: "Marin",
    metaTitle: "Pest Control Greenbrae | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Greenbrae. Trusted Marin service for homes—rodents, ants, spiders, IPM.",
    intro: [
      "Greenbrae homeowners count on Sono-Marin Pest Solutions for careful, professional pest control. We address rodents, ants, and seasonal insects with clear plans and quality follow-through.",
    ],
    localNotes:
      "Multi-level homes near canyons benefit from detailed exterior inspections.",
    commonPests: ["Rodents", "Ants", "Spiders"],
    faqs: [
      {
        question: "Do you serve Greenbrae and Kentfield?",
        answer:
          "Yes—Greenbrae and nearby central Marin communities.",
      },
      {
        question: "Do you offer quarterly service?",
        answer:
          "Yes—IPM maintenance plans are available on flexible schedules.",
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
      "Pest control in San Anselmo. Local IPM and rodent specialists for Ross Valley homes.",
    intro: [
      "San Anselmo’s charming neighborhoods and hillside streets need pest control that fits older homes and tight lots. We inspect thoroughly and treat with respect for your family and neighbors.",
    ],
    localNotes:
      "Creek-adjacent and hillside homes may see elevated rodent and ant pressure.",
    commonPests: ["Rodents", "Ants", "Spiders", "Wildlife"],
    faqs: [
      {
        question: "Can you work around school and commute schedules?",
        answer:
          "Yes. We’re flexible with scheduling and keep you updated by text when helpful.",
      },
      {
        question: "Do you handle wildlife under decks?",
        answer:
          "Contact us—we assess small mammal activity and recommend exclusion.",
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
      "Pest control in Larkspur. Professional rodent, ant, and IPM services for southern Marin.",
    intro: [
      "Larkspur residents trust Sono-Marin Pest Solutions for reliable pest control with a personal touch. From ferry-adjacent neighborhoods to hillside streets, we deliver inspections that find root causes.",
    ],
    localNotes:
      "Moisture near the bay can increase insect pressure around foundations.",
    commonPests: ["Ants", "Spiders", "Rodents", "Wasps"],
    faqs: [
      {
        question: "Do you serve Corte Madera and Larkspur Landing areas?",
        answer:
          "Yes. We cover Larkspur and neighboring southern Marin communities.",
      },
      {
        question: "Can businesses request service?",
        answer:
          "Yes—commercial plans are available with flexible scheduling.",
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
      "Pest control in Corte Madera for homes and local businesses. Family-owned service.",
    intro: [
      "Corte Madera’s residential neighborhoods and shopping areas benefit from proactive pest management. We offer residential and commercial service with clear communication and quality results.",
    ],
    localNotes:
      "Commercial and multi-family properties can request discreet scheduling.",
    commonPests: ["Ants", "Rodents", "Spiders", "Cockroaches"],
    faqs: [
      {
        question: "Do you offer commercial pest control in Corte Madera?",
        answer:
          "Yes—offices, retail, and food service with tailored plans.",
      },
      {
        question: "Do you offer ongoing maintenance?",
        answer:
          "Yes—IPM programs on monthly, bi-monthly, or quarterly schedules.",
      },
    ],
    nearby: ["larkspur", "mill-valley", "san-rafael"],
  },
  {
    slug: "fairfax",
    path: "/pest-control-fairfax/",
    name: "Fairfax",
    county: "Marin",
    metaTitle: "Pest Control Fairfax | Eco-Minded | Sono-Marin Pest",
    metaDescription:
      "Pest control in Fairfax. Eco-minded IPM and rodent control for wooded Marin homes.",
    intro: [
      "Fairfax’s wooded setting is part of its charm—and a reason rodents, ants, and wildlife stay active. We provide thoughtful IPM and exclusion that fits the community’s outdoor lifestyle.",
    ],
    localNotes:
      "Tree cover and open space edges increase wildlife and spider pressure.",
    commonPests: ["Rodents", "Wildlife", "Ants", "Spiders"],
    faqs: [
      {
        question: "Do you use eco-friendly options in Fairfax?",
        answer:
          "Yes. IPM is our framework, and we discuss product choices before treating.",
      },
      {
        question: "Can you help with rodents near open space?",
        answer:
          "Yes—exclusion and trapping are core strengths for edge properties.",
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
      "Pest control in Woodacre for San Geronimo Valley homes—rodents, insects, wildlife.",
    intro: [
      "Woodacre and the San Geronimo Valley’s rural homes often face higher wildlife and rodent pressure. We provide thorough inspections and practical exclusion strategies.",
    ],
    localNotes:
      "Septic areas, sheds, and wooded lots are common inspection points.",
    commonPests: ["Rodents", "Wildlife", "Ants", "Yellowjackets"],
    faqs: [
      {
        question: "Is Woodacre in your service area?",
        answer:
          "Yes. Call to schedule service for Woodacre and nearby valley communities.",
      },
      {
        question: "Do you treat yellowjackets on rural lots?",
        answer:
          "Yes—call for active nests, especially late summer.",
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
      "Pest control in Sausalito. Discreet, professional service for hillside and waterfront homes.",
    intro: [
      "Sausalito’s hillside and waterfront homes need careful pest control that respects dense neighborhoods and premium properties. We provide discreet service, clear reporting, and durable results.",
    ],
    localNotes:
      "Steep lots and multi-level construction require thorough exterior and crawl inspections.",
    commonPests: ["Rodents", "Ants", "Spiders", "Wildlife"],
    faqs: [
      {
        question: "Do you service houseboats or only on-land homes?",
        answer:
          "Contact us about your situation—we primarily service standard residential and commercial structures.",
      },
      {
        question: "Can you schedule around HOA rules?",
        answer:
          "Yes—we’ll work with your access and timing requirements.",
      },
    ],
    nearby: ["mill-valley", "tiburon"],
  },
  {
    slug: "tiburon",
    path: "/pest-control-tiburon/",
    name: "Tiburon",
    county: "Marin",
    metaTitle: "Pest Control Tiburon | Sono-Marin Pest Solutions",
    metaDescription:
      "Pest control in Tiburon for peninsula homes—rodents, ants, IPM maintenance.",
    intro: [
      "Tiburon peninsula properties deserve pest control that matches high standards of care. We offer meticulous inspections and effective treatment for homes facing bay weather and hillside wildlife.",
    ],
    localNotes:
      "Wind-exposed and hillside homes still need sealing around utilities and eaves.",
    commonPests: ["Rodents", "Ants", "Spiders", "Wasps"],
    faqs: [
      {
        question: "Do you serve Belvedere as well?",
        answer:
          "Yes—Tiburon, Belvedere, and nearby peninsula communities.",
      },
      {
        question: "Do you offer maintenance plans?",
        answer:
          "Yes—custom IPM schedules are available.",
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
      "Pest control in Belvedere. Professional, discreet service for peninsula residences.",
    intro: [
      "Belvedere homes receive careful, professional attention—thorough inspections, honest recommendations, and quality workmanship from licensed technicians.",
    ],
    localNotes:
      "Premium properties benefit from proactive IPM and clear communication with owners or managers.",
    commonPests: ["Rodents", "Ants", "Spiders"],
    faqs: [
      {
        question: "Can you coordinate with property managers?",
        answer:
          "Yes. We’re happy to work with managers and provide clear service notes.",
      },
      {
        question: "How do I request service?",
        answer:
          "Call 707-604-8188 or use our contact form.",
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
      "Pest control near Tomales. Rural and coastal Marin service for rodents, insects, and wildlife.",
    intro: [
      "Tomales and west Marin’s rural character means farms, open space, and coastal weather—all factors in pest pressure. We provide practical rodent and insect solutions for country properties.",
    ],
    localNotes:
      "Agricultural and rural structures need customized exclusion plans.",
    commonPests: ["Rodents", "Wildlife", "Ants", "Yellowjackets"],
    faqs: [
      {
        question: "How far west do you service in Marin?",
        answer:
          "We serve many west Marin communities including Tomales, Point Reyes area, and Stinson Beach. Call to confirm.",
      },
      {
        question: "Can you service ranch buildings?",
        answer:
          "Tell us about the structures involved—we’ll scope what makes sense.",
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
      "Coastal pest control for Stinson Beach. Moisture-aware service for homes and rentals.",
    intro: [
      "Stinson Beach properties face coastal moisture, wildlife corridors, and seasonal occupancy patterns. We help protect homes and rentals with thoughtful IPM and rodent strategies.",
    ],
    localNotes:
      "Vacation rentals benefit from service windows between guest stays.",
    commonPests: ["Rodents", "Ants", "Spiders", "Wildlife"],
    faqs: [
      {
        question: "Can you service short-term rentals?",
        answer:
          "Yes—coordinate with us for timing that fits your calendar.",
      },
      {
        question: "Do coastal conditions change treatment plans?",
        answer:
          "We account for moisture and building exposure when recommending IPM and exclusion.",
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
      "Pest control for Point Reyes Station and nearby west Marin. Rodents, wildlife, and IPM.",
    intro: [
      "Point Reyes area properties sit among ranchland, fog, and open space. We provide practical pest control focused on rodents, wildlife pressure, and durable exclusion for coastal Marin living.",
    ],
    localNotes:
      "Rural construction and outbuildings are frequent rodent harborage—inspection is essential.",
    commonPests: ["Rodents", "Wildlife", "Ants", "Spiders"],
    faqs: [
      {
        question: "Do you cover Point Reyes Station?",
        answer:
          "Yes. Contact us to schedule service for Point Reyes area addresses.",
      },
      {
        question: "Can you help with rodents in older ranch homes?",
        answer:
          "Yes—exclusion and trapping are core services for rural structures.",
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
