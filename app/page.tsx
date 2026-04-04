"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    name: "Pruun",
    description:
      "AI voice agent that screens thousands of candidates autonomously — trait-based scoring, real-time transcription, automated report generation.",
    tech: ["NestJS", "Vapi.ai", "PostgreSQL", "BullMQ", "Next.js"],
    href: "https://pruun.xyz",
  },
  {
    name: "Missed Call Recovery System",
    description:
      "End-to-end automation that detects missed calls, texts back in under 60 seconds, qualifies leads via conversational AI, and books appointments — fully autonomous, 24/7.",
    tech: ["n8n", "Twilio", "OpenAI", "Airtable", "Cal.com"],
    href: "/projects/missed-call-recovery",
    internal: true,
  },
  {
    name: "Turin",
    description:
      "Governed AI employees that execute tasks across 3,000+ business tools with configurable autonomy and full audit trails.",
    tech: ["Next.js", "AI Agents", "3000+ Integrations"],
    href: "https://turin.cc",
  },
  {
    name: "AI Proposal Generator",
    description:
      "Generates tailored client proposals with ROI projections, service breakdowns, and pricing — built on structured data extraction and templated AI output.",
    tech: ["n8n", "OpenAI", "Airtable"],
    href: "/projects/proposal-generator",
    internal: true,
  },
  {
    name: "Lead Enrichment Pipeline",
    description:
      "Scrapes business listings, verifies emails, scores leads, and pushes qualified prospects into outreach sequences — fully automated prospecting.",
    tech: ["n8n", "Google Maps API", "Email Verification", "Airtable"],
    href: "/projects/lead-enrichment",
    internal: true,
  },
  {
    name: "Outreach Dispatcher",
    description:
      "Automated multi-step cold email sequences with personalization, follow-up scheduling, and reply monitoring — hands-off lead nurturing.",
    tech: ["n8n", "Gmail API", "OpenAI", "Airtable"],
    href: "/projects/outreach-dispatcher",
    internal: true,
  },
  {
    name: "Lusic AI",
    description:
      "Preemptive risk-based vulnerability management for regulated industries — autonomous threat intelligence, real-time AI streaming, multi-tenant SaaS.",
    tech: ["Node.js", "Fastify", "PostgreSQL", "Lambda", "WebSocket"],
    href: "https://lusic.ai",
  },
  {
    name: "VoxPreference",
    description:
      "Fine-tuned wav2vec2 for Nigerian English ASR — 3,454 curated samples, published on HuggingFace, deployed via FastAPI.",
    tech: ["PyTorch", "HuggingFace", "FastAPI", "wav2vec2"],
    href: "https://huggingface.co/thebickersteth/wav2vec2-nigerian-english",
  },
  {
    name: "Polymarket Bot",
    description:
      "Real-time arbitrage detection across binary prediction markets — scans every 45s for pricing inefficiencies.",
    tech: ["Node.js", "Polymarket API"],
    href: "/projects/polymarket-bot",
    internal: true,
  },
];

const work: Array<{
  role: string;
  company: string;
  period: string;
  href?: string;
}> = [
  {
    role: "Cybersecurity Engineer → Engineering Lead",
    company: "Covenda Labs",
    period: "2024 — 2026",
    href: "https://covenda.ai",
  },
  {
    role: "DevOps Engineer",
    company: "HNG Tech",
    period: "2025",
    href: "https://hng.tech",
  },
  {
    role: "Engineering Lead",
    company: "Hebron Startup Labs",
    period: "2022 — 2025",
    href: "https://hebronstartup.com",
  },
  {
    role: "Backend Lead",
    company: "GDG Covenant University",
    period: "2023 — 2024",
    href: "https://gdg.community.dev/gdg-on-campus-covenant-university-ota-nigeria/",
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/Oluwademiladeogo" },
  { label: "LinkedIn", href: "https://linkedin.com/in/bickersteth" },
  {
    label: "HuggingFace",
    href: "https://huggingface.co/thebickersteth",
  },
  { label: "Email", href: "mailto:bickerstethdemilade@gmail.com" },
];

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Home() {
  return (
    <motion.main
      className="mx-auto max-w-2xl px-6 py-16 md:py-24"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      {/* Hero */}
      <motion.header variants={fadeUp}>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-100 sm:text-3xl">
          Demilade Bickersteth
        </h1>
        <p className="mt-1.5 font-mono text-sm text-neutral-500">
          AI Automation Specialist
        </p>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-neutral-400">
          I build AI systems that automate real business workflows — voice
          agents screening thousands of candidates, missed-call recovery
          that books appointments 24/7, and lead pipelines that run
          themselves end to end.
        </p>
        <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.header>

      {/* Projects */}
      <motion.section variants={fadeUp} className="mt-16 md:mt-20">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">
          Projects
        </h2>
        <div className="mt-8 space-y-1">
          {projects.map((project) => {
            const content = (
              <>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-[15px] font-medium text-neutral-300 transition-colors group-hover:text-neutral-100">
                    {project.name}
                  </h3>
                  {project.href && (
                    <span className="shrink-0 text-xs text-neutral-700 transition-colors group-hover:text-neutral-400">
                      ↗
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                  {project.description}
                </p>
                <p className="mt-2 font-mono text-[11px] text-neutral-700 transition-colors group-hover:text-neutral-600">
                  {project.tech.join(" · ")}
                </p>
              </>
            );

            const cls =
              "group block -mx-3 px-3 py-4 rounded-lg transition-colors hover:bg-neutral-900/50";

            return project.href ? (
              project.internal ? (
                <Link
                  key={project.name}
                  href={project.href}
                  className={cls}
                >
                  {content}
                </Link>
              ) : (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls}
                >
                  {content}
                </a>
              )
            ) : (
              <div key={project.name} className={cls}>
                {content}
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Work */}
      <motion.section variants={fadeUp} className="mt-16 md:mt-20">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">
          Work
        </h2>
        <div className="mt-8 space-y-4">
          {work.map((item) => (
            <div
              key={item.role + item.company}
              className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
            >
              <p className="text-sm text-neutral-400">
                <span className="font-medium text-neutral-200">
                  {item.role}
                </span>
                <span className="text-neutral-600">, </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 transition-colors hover:text-neutral-200"
                  >
                    {item.company}
                  </a>
                ) : (
                  <span>{item.company}</span>
                )}
              </p>
              <span className="shrink-0 font-mono text-xs text-neutral-700">
                {item.period}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        variants={fadeUp}
        className="mt-16 border-t border-neutral-900 pt-6 pb-8 md:mt-20"
      >
        <p className="text-xs text-neutral-700">
          &copy; {new Date().getFullYear()} Demilade Bickersteth
        </p>
      </motion.footer>
    </motion.main>
  );
}
