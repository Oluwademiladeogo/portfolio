export type AutomationProject = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  screenshot: string;
  youtubeId?: string;
  problem?: string;
  impact?: string;
  stepsLabel?: string;
  imageContain?: boolean;
  liveUrl?: string;
  steps: { title: string; description: string }[];
};

export const automationProjects: AutomationProject[] = [
  {
    slug: "pruun",
    name: "Pruun",
    description:
      "AI voice agent that screens thousands of candidates autonomously — trait-based scoring, real-time transcription, automated report generation.",
    tech: ["NestJS", "Vapi.ai", "PostgreSQL", "BullMQ", "Next.js"],
    screenshot: "/projects/pruun.png",
    liveUrl: "https://app.pruun.xyz",
    problem:
      "Screening candidates at scale is expensive and slow. Recruiters spend 60–70% of their time on initial phone screens — most of which filter out unqualified candidates before a real conversation ever happens.",
    impact:
      "Pruun handles the entire first-round screen autonomously: calls candidates, conducts structured interviews, scores against configurable trait rubrics, and delivers ranked reports — with no recruiter time spent.",
    steps: [
      {
        title: "Round configured",
        description:
          "Hiring teams define the role requirements, trait rubrics, scoring weights, and interview questions. Pruun uses this to drive every conversation in that round.",
      },
      {
        title: "AI-driven interview",
        description:
          "A voice agent conducts a structured interview in real time, dynamically following up on candidate responses while staying within the configured question set.",
      },
      {
        title: "Live transcription",
        description:
          "The entire conversation is transcribed in real time. Transcripts are stored in PostgreSQL and tied to the candidate record for auditability.",
      },
      {
        title: "Trait scoring",
        description:
          "Transcripts are analyzed against the role's trait rubrics using OpenAI — scoring communication clarity, technical depth, role fit, and any custom dimensions the team defined.",
      },
      {
        title: "Report delivered",
        description:
          "A structured candidate report is generated with scores, verbatim highlights, and red flags — pushed to the hiring dashboard for async review. No scheduling required.",
      },
    ],
  },
  {
    slug: "missed-call-recovery",
    name: "Missed Call Recovery System",
    description:
      "End-to-end automation that detects missed calls, texts back in under 60 seconds, qualifies leads via conversational AI, and books appointments — fully autonomous, 24/7.",
    tech: ["n8n", "Twilio", "OpenAI", "Airtable", "Cal.com"],
    screenshot: "/projects/missed-call-recovery.png",
    problem:
      "Service businesses lose 30–50% of potential clients from missed calls. The window to respond is under five minutes — most businesses follow up hours later, after the prospect has already moved on to a competitor.",
    impact:
      "Responds to every missed call in under 60 seconds. Qualifies leads and books appointments 24/7 with zero human involvement — the business wakes up to booked calendars.",
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
          "Qualified leads are automatically booked on the business calendar via Cal.com with all collected details pre-filled.",
      },
      {
        title: "CRM + owner alert",
        description:
          "Lead is logged in Airtable with full conversation transcript and lead score. Owner receives a real-time email notification.",
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
    problem:
      "Writing custom proposals takes 2–4 hours per prospect. Most agencies send barely-modified boilerplate — clients can tell, and it kills conversion rates before the conversation even starts.",
    impact:
      "Generates a fully tailored, ROI-projected proposal in under 3 minutes. Each proposal is genuinely personalized to the client's business context, not a template with names swapped in.",
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
          "Final proposal is formatted into a clean, client-ready document and stored in Airtable for review or auto-delivery.",
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
    liveUrl: "https://demi-lead-gen.pages.dev",
    problem:
      "Manual prospecting is slow, inconsistent, and expensive. Sales reps spend 40% of their time on research that could be automated — and most of that data goes stale before it gets used.",
    impact:
      "Generates a verified, scored prospect list on demand. Qualified leads flow directly into outreach sequences — no manual research, no bad data, no wasted time.",
    steps: [
      {
        title: "Business discovery",
        description:
          "Scrapes Google Maps for businesses matching target criteria — industry, location, rating, and review count.",
      },
      {
        title: "Data extraction",
        description:
          "Pulls business name, phone, website, address, and owner details into a structured, deduplicated dataset.",
      },
      {
        title: "Email verification",
        description:
          "Discovers and verifies business email addresses, filtering out invalid addresses and catch-all domains.",
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
    problem:
      "Cold outreach fails at scale because personalization breaks down past a few dozen contacts. Generic templates get ignored — but writing individual emails doesn't scale.",
    impact:
      "Runs fully personalized multi-step sequences for hundreds of leads simultaneously. Detects replies and pauses sequences automatically — no manual monitoring needed.",
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
          "Scheduled follow-up emails fire at configured intervals — each with varied messaging and framing to avoid fatigue.",
      },
      {
        title: "Reply monitoring",
        description:
          "Inbound replies are detected automatically, pausing the sequence and flagging the lead for manual engagement.",
      },
    ],
  },
  {
    slug: "content-automation",
    name: "Content Automation",
    description:
      "End-to-end content production system — takes a raw idea or URL, researches context, generates platform-optimised content, and publishes on schedule. Zero manual writing.",
    tech: ["n8n", "OpenAI", "Airtable", "React", "Cloudflare Pages"],
    screenshot: "/projects/content-automation.png",
    liveUrl: "https://demi-content-automation.pages.dev",
    problem:
      "Consistent content output is one of the highest-leverage growth levers for founders and operators — and one of the hardest to maintain. Most teams either hire writers (slow, expensive) or post sporadically (ineffective).",
    impact:
      "A full content production workspace: idea to published post in minutes. Handles audience targeting, tone calibration, AI drafting, and scheduling — with a calendar view and team workspace for review.",
    steps: [
      {
        title: "Content seed",
        description:
          "Input a raw idea, topic brief, or source URL. The system accepts multiple input types and routes each through the appropriate generation pipeline.",
      },
      {
        title: "Audience + tone calibration",
        description:
          "Target audience (Founders, C-Suite, SMB owners, etc.) and tone (Authoritative, Conversational, etc.) are configured per piece — shaping the AI output before generation starts.",
      },
      {
        title: "AI research & generation",
        description:
          "OpenAI drafts the full piece — tweet thread, LinkedIn post, or long-form — structured for the target platform and audience. Context from the seed is woven throughout.",
      },
      {
        title: "Quick Polish",
        description:
          "Built-in refinement tool for tightening copy, adjusting tone, or reworking sections before the piece moves to review.",
      },
      {
        title: "Calendar scheduling + publish",
        description:
          "Approved content is slotted into the content calendar and published to target channels on schedule. Full team workspace with role-based access.",
      },
    ],
  },
  {
    slug: "lusic-ai",
    name: "Lusic AI",
    description:
      "Preemptive risk-based vulnerability management for regulated industries — autonomous threat intelligence, real-time AI streaming, multi-tenant SaaS.",
    tech: ["Node.js", "Fastify", "PostgreSQL", "Lambda", "WebSocket"],
    screenshot: "/projects/lusic-ai.png",
    problem:
      "Security teams in regulated industries are drowning in vulnerability alerts with no clear prioritisation. Standard scanners output raw CVE lists — leaving analysts to manually figure out what actually matters to the business before they can act.",
    impact:
      "Lusic maps vulnerabilities to real business impact — financial exposure, customer risk, and security health scores — so teams see what to fix first, not just what's broken. The AI simulation layer lets analysts model scenarios before committing to remediation.",
    steps: [
      {
        title: "Asset and control ingestion",
        description:
          "Lusic ingests the organisation's asset inventory, existing security controls, and compliance posture into a multi-tenant data model scoped per organisation.",
      },
      {
        title: "Threat intelligence mapping",
        description:
          "Vulnerabilities are mapped against live threat intelligence feeds and scored not just by CVSS severity but by business context — financial exposure, customer impact, and organisational capacity.",
      },
      {
        title: "Risk model computation",
        description:
          "The threat model computes a risk landscape across four dimensions: Financial Impact, Customer Impact, Security Health, and Organisational Capacity (KSA). Outputs are plotted on a cybersecurity effectiveness matrix.",
      },
      {
        title: "AI simulation via Lucid",
        description:
          "The built-in AI assistant lets analysts describe scenarios or proposed changes in natural language. Lucid simulates the downstream risk impact before any changes are made — changes are isolated and non-destructive.",
      },
      {
        title: "Prioritised remediation output",
        description:
          "Teams receive a ranked remediation queue ordered by business impact, not raw severity — so effort goes to the vulnerabilities that actually move the risk needle.",
      },
    ],
  },
  {
    slug: "voxpreference",
    name: "VoxPreference",
    description:
      "Fine-tuned Meta's wav2vec2 (94M parameters) on Nigerian English speech — addressing the ASR accuracy gap for West African accented English. Dual-output pipeline: transcription + IPA phonetic notation.",
    tech: ["PyTorch", "HuggingFace", "FastAPI", "wav2vec2", "React"],
    screenshot: "/projects/voxpreference.png",
    problem:
      "Standard ASR systems are trained predominantly on American and British English. Nigerian English — spoken by 220M+ people — has distinct phonological patterns these models consistently mishandle, producing high word error rates on everyday speech.",
    impact:
      "A 94.4M-parameter model fine-tuned on gender-balanced Nigerian English speech. Goes beyond transcription: produces IPA phonetic output for linguistic analysis. Published on HuggingFace, deployed on Spaces with a React frontend.",
    stepsLabel: "How it's built",
    imageContain: true,
    steps: [
      {
        title: "Dataset preparation",
        description:
          "Gender-balanced corpus of Nigerian English speech (male and female speaker files), processed into a 90/10 train/validation split with audio stats tooling built to characterize the corpus.",
      },
      {
        title: "Transfer learning setup",
        description:
          "Base model: facebook/wav2vec2-base-960h (960 hours of LibriSpeech). CNN feature encoder frozen to preserve acoustic representations — only the transformer layers and CTC head were fine-tuned on accent-specific phoneme distributions.",
      },
      {
        title: "CTC training",
        description:
          "10 epochs with fp16 mixed precision, learning rate 1e-4, 500 warmup steps. Character-level CTC decoding. SpecAugment enabled for robustness against recording variation.",
      },
      {
        title: "Inference API",
        description:
          "FastAPI endpoint accepts WAV, MP3, OGG, and FLAC uploads up to 50MB. Audio loaded at 16kHz via librosa, tokenized by Wav2Vec2Processor, argmax decoded from CTC output.",
      },
      {
        title: "IPA phonetic conversion",
        description:
          "Transcriptions are converted to International Phonetic Alphabet notation via phonemizer + espeak backend — enabling downstream linguistic analysis of accent-specific phoneme patterns.",
      },
      {
        title: "Deployment",
        description:
          "Model published on HuggingFace (thebickersteth/wav2vec2-nigerian-english). Full system deployed on HuggingFace Spaces via Docker, with a React + TypeScript frontend for drag-and-drop audio upload.",
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
    problem:
      "Prediction market arbitrage windows are narrow and close in minutes. Monitoring dozens of correlated markets manually isn't viable — by the time you spot the mispricing, it's gone.",
    impact:
      "Catches mispricing windows across all active markets in real time. Surfaces only opportunities above a configurable profit threshold — no noise, no false positives.",
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
          "Flags profitable arbitrage windows in real time so positions can be taken before the market self-corrects.",
      },
    ],
  },
];
