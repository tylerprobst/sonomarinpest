export type Service = {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  summary: string;
  problem: string;
  approach: string;
  includes: string[];
  faqs: { question: string; answer: string }[];
  featured?: boolean;
  icon: "rodent" | "ant" | "spider" | "roach" | "flea" | "bee" | "wasp" | "wildlife" | "ipm" | "etm" | "hoa";
  relatedSlugs?: string[];
};

export const services: Service[] = [
  {
    slug: "rodents",
    path: "/rodents/",
    title: "Rodent Inspections, Exclusion & Control",
    shortTitle: "Rodents",
    navLabel: "Rodents",
    metaTitle: "Rodent Control & Exclusion | Sonoma & Marin | Sono-Marin Pest",
    metaDescription:
      "Expert rodent inspections, exclusion repairs, and long-term protection in Sonoma & Marin Counties. No rodenticides—trap and seal for lasting results.",
    heroHeadline: "Rodent Inspections, Repairs & Long-Term Protection",
    summary:
      "Eviction notice served—expert rodent control that seals them out for good.",
    problem:
      "Rodents are clever and relentless. They squeeze through openings as small as a quarter (rats) or a dime (mice), chew through wood, plastic, and soft materials, and can damage insulation, wiring, and stored goods. Traps alone rarely solve the problem if entry points stay open.",
    approach:
      "We start with a thorough inspection to find active and potential entry points, nesting signs, and conditions attracting rodents. Then we exclude them with commercial-grade sealing, use mechanical trapping (never rodenticides), and recommend ongoing monitoring so new gaps don’t become new infestations.",
    includes: [
      "Detailed structure and property inspection",
      "Identification of species and entry points",
      "Exclusion repairs and sealing recommendations",
      "Mechanical trapping—no rodenticides",
      "Optional ETM maintenance for ongoing protection",
      "Clear reporting and honest repair guidance",
    ],
    faqs: [
      {
        question: "Do you use rat poison?",
        answer:
          "No. We do not use rodenticides. Poison can cause rodents to die in walls, create secondary wildlife risks, and fails to fix how they got in. We trap and exclude.",
      },
      {
        question: "How small of a gap can rodents use?",
        answer:
          "Rats can enter through openings about the size of a quarter; mice through gaps as small as a dime. Proper exclusion is the foundation of lasting control.",
      },
      {
        question: "Will one visit solve a rodent problem?",
        answer:
          "Many homes need inspection, exclusion work, and a short trapping period. Severe or reoccurring issues often benefit from our ETM (Exclude–Trap–Manage) maintenance plan.",
      },
    ],
    featured: true,
    icon: "rodent",
    relatedSlugs: ["maintenance", "ipm-services"],
  },
  {
    slug: "ants",
    path: "/ants/",
    title: "Ant Control Services",
    shortTitle: "Ants",
    navLabel: "Ants",
    metaTitle: "Ant Control Services | Sonoma & Marin | Sono-Marin Pest",
    metaDescription:
      "Fast, effective ant control for homes and businesses in Sonoma and Marin Counties. Nest-focused treatments that keep trails from coming back.",
    heroHeadline: "Ant Control That Stops Trails for Good",
    summary:
      "Say goodbye to stubborn ant trails with targeted treatments that keep them out.",
    problem:
      "Argentine and other common ants form large colonies and follow scent trails into kitchens, bathrooms, and pet areas. Surface sprays alone often scatter colonies without eliminating the nest.",
    approach:
      "We identify the species, locate trails and nest sites, and apply targeted treatments—including eco-friendlier options when appropriate—so we reduce activity at the source and along entry routes.",
    includes: [
      "Species identification and trail inspection",
      "Interior and exterior treatment as needed",
      "Nest and entry-point focus",
      "Prevention tips for kitchens and landscaping",
      "Optional ongoing IPM maintenance",
    ],
    faqs: [
      {
        question: "Why do ants keep coming back?",
        answer:
          "If the colony and outdoor food/water sources aren’t addressed, foragers return. We treat strategically and help you reduce attractants.",
      },
      {
        question: "Are treatments safe for pets?",
        answer:
          "We prioritize methods that are appropriate for family homes and explain any precautions. Many plans use low-impact products as part of IPM.",
      },
    ],
    featured: true,
    icon: "ant",
  },
  {
    slug: "spiders",
    path: "/spiders/",
    title: "Spider Control Services",
    shortTitle: "Spiders",
    navLabel: "Spiders",
    metaTitle: "Spider Control | Sonoma & Marin | Sono-Marin Pest",
    metaDescription:
      "Professional spider control for homes in Sonoma and Marin Counties. Reduce webs, harborage, and the insects that attract spiders.",
    heroHeadline: "Spider Control—Fewer Webs, More Peace of Mind",
    summary: "We stop creepy crawlies in their tracks—no webs, no worries.",
    problem:
      "Spiders follow prey. Webs around eaves, windows, and garages often mean other insects are present. Some species also concern homeowners for bites or appearance.",
    approach:
      "We reduce spider populations and the insects they feed on, treat harborage areas, and recommend exclusion and lighting/landscape tweaks that make your property less inviting.",
    includes: [
      "Inspection of common harborage areas",
      "Targeted treatment of webs and entry zones",
      "Related insect pressure reduction",
      "Exclusion and prevention recommendations",
    ],
    faqs: [
      {
        question: "Will spiders go away permanently after one visit?",
        answer:
          "One treatment helps, but outdoor pressure returns seasonally. Quarterly IPM plans keep spider and insect activity lower year-round.",
      },
    ],
    icon: "spider",
  },
  {
    slug: "cockroaches",
    path: "/cockroaches/",
    title: "Cockroach Control Services",
    shortTitle: "Cockroaches",
    navLabel: "Cockroaches",
    metaTitle: "Cockroach Control | Sonoma & Marin | Sono-Marin Pest",
    metaDescription:
      "Targeted cockroach control for kitchens, bathrooms, and commercial spaces in Sonoma and Marin Counties. Fast, discreet, effective treatment.",
    heroHeadline: "Cockroach Control—Because One Is Too Many",
    summary:
      "Targeted control for roaches of all kinds—fast and thorough.",
    problem:
      "Cockroaches thrive in kitchens, appliances, bathrooms, and basements. They spread quickly, contaminate surfaces, and can trigger allergies. DIY sprays often push them deeper into voids.",
    approach:
      "We inspect likely harborage (under appliances, sink voids, utility areas), apply targeted baits and treatments, and advise on sanitation and moisture issues that fuel infestations.",
    includes: [
      "Thorough inspection of harborage sites",
      "Targeted baiting and treatment plans",
      "Follow-up guidance for kitchens and storage",
      "Commercial-sensitive scheduling when needed",
    ],
    faqs: [
      {
        question: "How quickly will I see results?",
        answer:
          "Activity often drops within days, but complete control can take multiple visits depending on species and how established the infestation is.",
      },
    ],
    icon: "roach",
  },
  {
    slug: "fleas",
    path: "/fleas/",
    title: "Flea Control Services",
    shortTitle: "Fleas",
    navLabel: "Fleas",
    metaTitle: "Flea Control | Sonoma & Marin | Sono-Marin Pest",
    metaDescription:
      "Thorough flea elimination for homes and pets’ environments in Sonoma and Marin Counties. Break the life cycle for lasting relief.",
    heroHeadline: "Flea Control That Protects Home and Pets",
    summary:
      "Protect your home and pets with thorough flea elimination that lasts.",
    problem:
      "Fleas jump from pets to carpets, furniture, and yard areas. Eggs and pupae hide in fibers, so surface sprays alone leave the next generation ready to hatch.",
    approach:
      "We treat indoor environments carefully, coordinate with your pet care plan (vet products), and address outdoor hotspots when needed so the full life cycle is interrupted.",
    includes: [
      "Indoor inspection and treatment",
      "Life-cycle focused approach",
      "Guidance on pet and laundry prep",
      "Yard treatment when appropriate",
    ],
    faqs: [
      {
        question: "Do I need to treat my pets too?",
        answer:
          "Yes—effective flea control usually requires treating pets through your veterinarian while we treat the environment. We coordinate so both parts work together.",
      },
    ],
    icon: "flea",
  },
  {
    slug: "carpenter-bees",
    path: "/carpenter-bees/",
    title: "Carpenter Bee Control",
    shortTitle: "Carpenter Bees",
    navLabel: "Carpenter Bees",
    metaTitle: "Carpenter Bee Control | Sonoma & Marin | Sono-Marin Pest",
    metaDescription:
      "Protect decks, eaves, and wood structures from carpenter bee damage in Sonoma and Marin Counties.",
    heroHeadline: "Carpenter Bee Control—Stop the Buzz and the Damage",
    summary:
      "We handle the buzz and the damage—protect your wood structures today.",
    problem:
      "Carpenter bees bore into untreated or soft wood on decks, fascia, and eaves. Holes expand year after year and can attract woodpeckers, accelerating damage.",
    approach:
      "We treat active galleries, reduce re-infestation pressure, and advise on sealing and wood protection so repairs last.",
    includes: [
      "Inspection of decks, eaves, and outbuildings",
      "Treatment of active galleries",
      "Prevention and sealing recommendations",
    ],
    faqs: [
      {
        question: "Are carpenter bees the same as bumble bees?",
        answer:
          "They look similar, but carpenter bees have shiny abdomens and nest in wood. Correct identification matters for the right treatment approach.",
      },
    ],
    icon: "bee",
  },
  {
    slug: "wasps-hornets",
    path: "/wasp-hornet/",
    title: "Wasp & Hornet Control",
    shortTitle: "Wasps & Hornets",
    navLabel: "Wasps & Hornets",
    metaTitle: "Wasp & Hornet Removal | Sonoma & Marin | Sono-Marin Pest",
    metaDescription:
      "Safe, swift removal of wasps and hornets around homes and businesses in Sonoma and Marin Counties.",
    heroHeadline: "Wasp & Hornet Removal—Reclaim Your Yard",
    summary:
      "Safe, swift removal of stinging threats so you can enjoy your outdoor space.",
    problem:
      "Wasps and hornets nest in eaves, trees, wall voids, and ground cavities. They become aggressive near nests—especially in late summer—posing risks to family and guests.",
    approach:
      "We locate nests, treat safely with the right equipment, and remove or neutralize activity so you can use patios and play areas again.",
    includes: [
      "Nest location and risk assessment",
      "Professional treatment and removal as appropriate",
      "Advice on deterring rebuilds near high-use areas",
    ],
    faqs: [
      {
        question: "Can I remove a wasp nest myself?",
        answer:
          "We don’t recommend DIY on active nests—stings can be severe. Our technicians are equipped for safe treatment.",
      },
    ],
    icon: "wasp",
    relatedSlugs: ["yellowjackets"],
  },
  {
    slug: "yellowjackets",
    path: "/yellowjackets/",
    title: "Yellowjacket Control",
    shortTitle: "Yellowjackets",
    navLabel: "Yellowjackets",
    metaTitle: "Yellowjacket Control | Sonoma & Marin | Sono-Marin Pest",
    metaDescription:
      "Aggressive yellowjacket nest control for Sonoma and Marin properties. Fast response for ground and structure nests.",
    heroHeadline: "Yellowjacket Nest Control",
    summary:
      "Aggressive stingers need professional handling—especially ground and wall nests.",
    problem:
      "Yellowjackets are often mistaken for wasps but can be more aggressive, especially late in the season. Ground nests and wall nests surprise homeowners during mowing or outdoor dining.",
    approach:
      "We identify nest locations carefully and treat with methods suited to ground vs. structure nests, prioritizing safety for people and pets.",
    includes: [
      "Nest identification (ground, structure, aerial)",
      "Professional treatment",
      "Follow-up if satellite activity continues",
    ],
    faqs: [
      {
        question: "When are yellowjackets worst?",
        answer:
          "Late summer and early fall, when colonies peak and food competition increases. Call early if you see heavy traffic near a hole or eave.",
      },
    ],
    icon: "wasp",
    relatedSlugs: ["wasps-hornets"],
  },
  {
    slug: "wildlife",
    path: "/raccoons-skunks/",
    title: "Raccoon, Skunk & Small Mammal Removal",
    shortTitle: "Wildlife",
    navLabel: "Raccoons & Skunks",
    metaTitle: "Raccoon & Skunk Removal | Sonoma & Marin | Sono-Marin Pest",
    metaDescription:
      "Humane wildlife control for raccoons, skunks, opossums, and squirrels in Sonoma and Marin Counties.",
    heroHeadline: "Small Mammal Removal Specialists",
    summary:
      "Humane wildlife control for messy, smelly, or mischievous intruders.",
    problem:
      "Raccoons, skunks, opossums, and squirrels damage attics, decks, and gardens. They leave droppings, odors, and entry holes that invite more pests.",
    approach:
      "We assess activity, use appropriate exclusion and removal methods, and help secure structures so animals don’t return. Night-active species need careful timing and follow-through.",
    includes: [
      "Activity and entry assessment",
      "Humane removal strategies",
      "Exclusion recommendations",
      "Cleanup guidance for contaminated areas",
    ],
    faqs: [
      {
        question: "Do you handle bats?",
        answer:
          "Contact us about your situation—wildlife needs vary. We’ll advise on the right approach for your property and local regulations.",
      },
    ],
    icon: "wildlife",
  },
  {
    slug: "ipm-services",
    path: "/ipm-services/",
    title: "Integrated Pest Management (IPM)",
    shortTitle: "IPM Maintenance",
    navLabel: "IPM Services",
    metaTitle: "IPM Pest Maintenance | Eco-Friendly | Sono-Marin Pest",
    metaDescription:
      "Eco-friendly Integrated Pest Management for homes and businesses in Sonoma and Marin. Monthly, bi-monthly, or quarterly protection.",
    heroHeadline: "IPM Maintenance—Year-Round Protection",
    summary:
      "Eco-friendly management for residential and commercial properties.",
    problem:
      "Pests change with the seasons. One-time treatments don’t address new pressures from weather, landscaping, or neighboring properties.",
    approach:
      "Integrated Pest Management starts with inspection and identification, then uses the least-impact effective tools—including botanical and pet-conscious options when suitable—plus monitoring so problems are caught early.",
    includes: [
      "Regular property inspections",
      "Customized treatment plans",
      "Reduced reliance on blanket pesticides",
      "Monthly, bi-monthly, or quarterly schedules",
      "Recommendations on conducive conditions",
    ],
    faqs: [
      {
        question: "What is IPM?",
        answer:
          "Integrated Pest Management combines inspection, identification, exclusion, sanitation advice, and targeted treatments—using pesticides only when needed and in a measured way.",
      },
      {
        question: "How often should I schedule service?",
        answer:
          "Many homes do well quarterly; high-pressure properties may need monthly or bi-monthly. We’ll recommend a schedule based on your history and environment.",
      },
    ],
    featured: true,
    icon: "ipm",
  },
  {
    slug: "maintenance",
    path: "/maintenance/",
    title: "ETM Rodent Service",
    shortTitle: "ETM Rodent Service",
    navLabel: "ETM Rodent Service",
    metaTitle: "ETM Rodent Service | Exclude Trap Manage | Sono-Marin Pest",
    metaDescription:
      "Exclude–Trap–Manage rodent service without poisons. Monthly or bi-monthly monitoring and exclusion for Sonoma & Marin properties.",
    heroHeadline: "E.T.M. Rodent Service—Exclude, Trap, Manage",
    summary:
      "Ongoing rodent protection without rodenticides—inspection, exclusion, and mechanical trapping.",
    problem:
      "Rodents keep testing buildings. One-time trapping without sealing and monitoring often leads to re-entry and costly surprises in attics or walls.",
    approach:
      "Our Exclude–Trap–Manage program starts with inspection, coordinates exclusion repairs, places mechanical traps in and around the structure (tamper-resistant exterior stations), and returns on a schedule to check, adjust, and prevent re-infestation—without poison baits.",
    includes: [
      "Initial inspection and plan",
      "Exclusion repair quotes and work as needed",
      "Interior/exterior mechanical trapping",
      "Tamper-resistant exterior stations",
      "Monthly or bi-monthly service visits",
      "Guarantee on company repair work when on plan",
    ],
    faqs: [
      {
        question: "Why avoid rodenticides?",
        answer:
          "Poisons can kill rodents in unreachable voids (odor, insects, costly removal), risk non-target animals, and don’t fix entry points. California has also restricted many second-generation rodenticides. We trap and exclude instead.",
      },
      {
        question: "Who is ETM for?",
        answer:
          "Homes and businesses with current rodent pressure, history of re-entry, or properties that need proactive perimeter and structure monitoring year-round.",
      },
    ],
    featured: true,
    icon: "etm",
    relatedSlugs: ["rodents"],
  },
  {
    slug: "hoa",
    path: "/homeowners-association/",
    title: "HOA & Property Management Pest Services",
    shortTitle: "HOAs & Property Managers",
    navLabel: "HOA Services",
    metaTitle: "HOA Pest Control | Property Management | Sono-Marin Pest",
    metaDescription:
      "Customizable IPM and rodent programs for HOAs and property managers in Sonoma and Marin Counties.",
    heroHeadline: "Pest Solutions for HOAs & Property Managers",
    summary:
      "Custom maintenance plans that stop issues before tenants and owners escalate them.",
    problem:
      "Pest issues in multi-unit and managed properties spread between units, create liability, and generate after-hours complaints. Reactive-only service is expensive and stressful.",
    approach:
      "We build IPM and rodent programs around your portfolio—regular inspections, clear reporting, and rapid response when new issues appear—so managers stay ahead of problems.",
    includes: [
      "Customizable maintenance schedules",
      "Rodent inspection and exclusion expertise",
      "IPM-focused treatments",
      "Clear communication for managers and boards",
    ],
    faqs: [
      {
        question: "Can you service multiple buildings?",
        answer:
          "Yes. We’ll design routes and schedules that fit your association or portfolio and keep reporting consistent for your team.",
      },
    ],
    icon: "hoa",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceByPath(path: string): Service | undefined {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return services.find((s) => s.path === normalized);
}

/** Primary services shown in main nav and homepage grid */
export const primaryServiceSlugs = [
  "rodents",
  "ants",
  "spiders",
  "cockroaches",
  "fleas",
  "carpenter-bees",
  "wasps-hornets",
  "yellowjackets",
  "wildlife",
  "ipm-services",
  "maintenance",
] as const;
