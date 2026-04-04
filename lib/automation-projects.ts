export type AutomationProject = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  screenshot: string;
  steps: { title: string; description: string }[];
};

export const automationProjects: AutomationProject[] = [
  {
    slug: "missed-call-recovery",
    name: "Missed Call Recovery System",
    description:
      "End-to-end automation that detects missed calls, texts back in under 60 seconds, qualifies leads via conversational AI, and books appointments — fully autonomous, 24/7.",
    tech: ["n8n", "Twilio", "OpenAI", "Airtable", "Cal.com"],
    screenshot: "/projects/missed-call-recovery.png",
    steps: [
      {
        title: "Missed call detected",
        description:
          "Twilio webhook fires the moment an inbound call goes unanswered, triggering the workflow instantly.",
      },
      {
        title: "Instant text-back",
        description:
          "An SMS is sent from the business number within 60 seconds — \"Sorry we missed your call. How can we help?\"",
      },
      {
        title: "AI qualification",
        description:
          "A conversational AI agent collects service needed, location, urgency, and contact details over SMS — no human involvement.",
      },
      {
        title: "Appointment booked",
        description:
          "Qualified leads are automatically booked on the business calendar via Cal.com with all collected details.",
      },
      {
        title: "CRM + owner alert",
        description:
          "Lead is logged in Airtable with full transcript and scoring. Owner gets a real-time email notification.",
      },
    ],
  },
  {
    slug: "proposal-generator",
    name: "AI Proposal Generator",
    description:
      "Generates tailored client proposals with ROI projections, service breakdowns, and pricing — built on structured data extraction and templated AI output.",
    tech: ["n8n", "OpenAI", "Airtable"],
    screenshot: "/projects/proposal-generator.png",
    steps: [
      {
        title: "Client data intake",
        description:
          "Pulls structured client information — business type, size, current pain points, and service requirements from Airtable.",
      },
      {
        title: "ROI calculation",
        description:
          "Computes projected revenue recovery and cost savings based on industry benchmarks and client-specific inputs.",
      },
      {
        title: "AI-generated proposal",
        description:
          "OpenAI generates a tailored proposal with personalized service breakdown, timeline, pricing tiers, and ROI projections.",
      },
      {
        title: "Formatted output",
        description:
          "Final proposal is formatted into a clean, client-ready document and stored for review or auto-delivery.",
      },
    ],
  },
  {
    slug: "lead-enrichment",
    name: "Lead Enrichment Pipeline",
    description:
      "Scrapes business listings, verifies emails, scores leads, and pushes qualified prospects into outreach sequences — fully automated prospecting.",
    tech: ["n8n", "Google Maps API", "Email Verification", "Airtable"],
    screenshot: "/projects/lead-enrichment.png",
    steps: [
      {
        title: "Business discovery",
        description:
          "Scrapes Google Maps for businesses matching target criteria — industry, location, rating, and review count.",
      },
      {
        title: "Data extraction",
        description:
          "Pulls business name, phone, website, address, and owner details into a structured dataset.",
      },
      {
        title: "Email verification",
        description:
          "Discovers and verifies business email addresses, filtering out invalid or catch-all domains.",
      },
      {
        title: "Lead scoring + CRM push",
        description:
          "Scores each lead based on business size, online presence, and responsiveness signals — qualified leads flow directly into outreach sequences.",
      },
    ],
  },
  {
    slug: "outreach-dispatcher",
    name: "Outreach Dispatcher",
    description:
      "Automated multi-step cold email sequences with personalization, follow-up scheduling, and reply monitoring — hands-off lead nurturing.",
    tech: ["n8n", "Gmail API", "OpenAI", "Airtable"],
    screenshot: "/projects/outreach-dispatcher.png",
    steps: [
      {
        title: "Sequence triggered",
        description:
          "New qualified leads from the enrichment pipeline automatically enter a multi-step email sequence.",
      },
      {
        title: "Personalized first touch",
        description:
          "OpenAI generates a personalized cold email using the lead's business details, pain points, and industry context.",
      },
      {
        title: "Automated follow-ups",
        description:
          "Scheduled follow-up emails fire at configured intervals — each with varied messaging to avoid fatigue.",
      },
      {
        title: "Reply monitoring",
        description:
          "Inbound replies are detected automatically, pausing the sequence and flagging the lead for manual engagement.",
      },
    ],
  },
  {
    slug: "polymarket-bot",
    name: "Polymarket Bot",
    description:
      "Real-time arbitrage detection across binary prediction markets — scans every 45s for pricing inefficiencies.",
    tech: ["Node.js", "Polymarket API"],
    screenshot: "/projects/polymarket-bot.png",
    steps: [
      {
        title: "Market scanning",
        description:
          "Polls Polymarket's API every 45 seconds, pulling live prices across all active binary prediction markets.",
      },
      {
        title: "Inefficiency detection",
        description:
          "Compares YES/NO prices across correlated markets to identify mispricings where combined probabilities deviate from 100%.",
      },
      {
        title: "Arbitrage calculation",
        description:
          "Calculates expected profit margins accounting for fees and slippage — only surfaces opportunities above a configurable threshold.",
      },
      {
        title: "Alert dispatch",
        description:
          "Flags profitable arbitrage windows in real time so positions can be taken before the market corrects.",
      },
    ],
  },
];
