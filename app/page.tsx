"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Project = {
  name: string;
  description: string;
  tech: string[];
  href: string;
  internal?: boolean;
  screenshot?: string;
  category: "products" | "automations" | "research";
};

const projects: Project[] = [
  {
    name: "Pruun",
    description:
      "AI voice agent that screens thousands of candidates autonomously — trait-based scoring, real-time transcription, automated report generation.",
    tech: ["NestJS", "Vapi.ai", "PostgreSQL", "BullMQ", "Next.js"],
    href: "https://pruun.xyz",
    category: "products",
  },
  {
    name: "Turin",
    description:
      "Governed AI employees that execute tasks across 3,000+ business tools with configurable autonomy levels and full audit trails.",
    tech: ["Next.js", "AI Agents", "3000+ Integrations"],
    href: "https://turin.cc",
    category: "products",
  },
  {
    name: "Lusic AI",
    description:
      "Preemptive risk-based vulnerability management for regulated industries — autonomous threat intelligence, real-time AI streaming, multi-tenant SaaS.",
    tech: ["Node.js", "Fastify", "PostgreSQL", "Lambda", "WebSocket"],
    href: "https://lusic.ai",
    category: "products",
  },
  {
    name: "Missed Call Recovery System",
    description:
      "Missed call → AI-qualified SMS conversation → booked appointment. Responds in under 60 seconds, runs 24/7, zero human involvement.",
    tech: ["n8n", "Twilio", "OpenAI", "Airtable", "Cal.com"],
    href: "/projects/missed-call-recovery",
    internal: true,
    screenshot: "/projects/missed-call-recovery.png",
    category: "automations",
  },
  {
    name: "Lead Enrichment Pipeline",
    description:
      "Scrapes listings, verifies emails, scores by fit, and pushes qualified prospects directly into outreach sequences. No manual research.",
    tech: ["n8n", "Google Maps API", "Email Verification", "Airtable"],
    href: "/projects/lead-enrichment",
    internal: true,
    screenshot: "/projects/lead-enrichment.png",
    category: "automations",
  },
  {
    name: "Outreach Dispatcher",
    description:
      "Personalized multi-step cold email sequences that adapt to reply behavior and pause on engagement — hands-off nurturing at scale.",
    tech: ["n8n", "Gmail API", "OpenAI", "Airtable"],
    href: "/projects/outreach-dispatcher",
    internal: true,
    screenshot: "/projects/outreach-dispatcher.png",
    category: "automations",
  },
  {
    name: "AI Proposal Generator",
    description:
      "Generates tailored client proposals with ROI projections and service breakdowns in under 3 minutes — genuinely personalized, not templated.",
    tech: ["n8n", "OpenAI", "Airtable"],
    href: "/projects/proposal-generator",
    internal: true,
    screenshot: "/projects/proposal-generator.png",
    category: "automations",
  },
  {
    name: "VoxPreference",
    description:
      "Fine-tuned wav2vec2 on 3,454 curated Nigerian English samples — published on HuggingFace, deployed via FastAPI.",
    tech: ["PyTorch", "HuggingFace", "FastAPI", "wav2vec2"],
    href: "https://huggingface.co/thebickersteth/wav2vec2-nigerian-english",
    category: "research",
  },
  {
    name: "Polymarket Bot",
    description:
      "Scans all active binary prediction markets every 45 seconds for pricing inefficiencies. Surfaces arbitrage windows above a configurable profit threshold.",
    tech: ["Node.js", "Polymarket API"],
    href: "/projects/polymarket-bot",
    internal: true,
    screenshot: "/projects/polymarket-bot.png",
    category: "research",
  },
];

const categories = [
  { key: "products" as const, label: "Products" },
  { key: "automations" as const, label: "Automations" },
  { key: "research" as const, label: "Research" },
];

const work: {
  role: string;
  company: string;
  period: string;
  href?: string;
}[] = [
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

const stagger = {
  animate: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function Avatar() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 font-mono text-sm text-neutral-600">
        DB
      </div>
    );
  }

  return (
    <div className="h-16 w-16 overflow-hidden rounded-full border border-neutral-800">
      <Image
        src="/avatar.jpg"
        alt="Demilade Bickersteth"
        width={64}
        height={64}
        className="h-full w-full object-cover"
        onError={() => setError(true)}
      />
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const cls =
    "group flex items-start gap-4 -mx-3 px-3 py-4 rounded-lg transition-colors hover:bg-white/[0.03]";

  const content = (
    <>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-[15px] font-medium text-neutral-200 transition-colors group-hover:text-white">
            {project.name}
          </h3>
          <span className="shrink-0 text-xs text-neutral-700 transition-colors group-hover:text-neutral-400">
            {project.internal ? "→" : "↗"}
          </span>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-neutral-500">
          {project.description}
        </p>
        <p className="mt-2 font-mono text-[11px] text-neutral-700 transition-colors group-hover:text-neutral-500">
          {project.tech.join(" · ")}
        </p>
      </div>

      <div className="relative hidden h-12 w-20 shrink-0 overflow-hidden rounded border border-neutral-800/80 opacity-40 transition-opacity group-hover:opacity-90 sm:block">
        {project.screenshot ? (
          <Image
            src={project.screenshot}
            alt=""
            fill
            className="object-cover"
            sizes="80px"
          />
        ) : (
          <div className="h-full w-full bg-neutral-900" />
        )}
      </div>
    </>
  );

  if (project.internal) {
    return (
      <Link href={project.href} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cls}
    >
      {content}
    </a>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("bickerstethdemilade@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.main
      className="mx-auto max-w-2xl px-6 py-16 md:py-24"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      {/* Hero */}
      <motion.header variants={fadeUp}>
        <Avatar />

        <div className="mt-5 mb-3 flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-xs text-neutral-500">
            Available for work &middot; Building{" "}
            <a
              href="https://pruun.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-neutral-300"
            >
              pruun.xyz
            </a>
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Demilade Bickersteth
        </h1>
        <p className="mt-2 font-mono text-sm text-neutral-500">
          AI Automation Engineer
        </p>

        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-neutral-400">
          I&apos;m building{" "}
          <a
            href="https://pruun.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 transition-colors hover:text-white"
          >
            Pruun
          </a>{" "}
          — AI that screens thousands of job candidates by voice, autonomously.
          Beyond that, I build the systems that make businesses run without
          headcount: lead pipelines, voice agents, and orchestration layers that
          compound value over time.
        </p>

        <nav className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href="https://github.com/Oluwademiladeogo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/bickersteth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-200"
          >
            LinkedIn
          </a>
          <a
            href="https://huggingface.co/thebickersteth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-200"
          >
            HuggingFace
          </a>
          <button
            onClick={copyEmail}
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={copied ? "copied" : "email"}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                {copied ? "Copied" : "Email"}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Projects by category */}
      <motion.section variants={fadeUp} className="mt-16 md:mt-20">
        {categories.map((cat, ci) => {
          const catProjects = projects.filter((p) => p.category === cat.key);
          return (
            <div key={cat.key} className={ci > 0 ? "mt-14" : ""}>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">
                {cat.label}
              </h2>
              <div className="mt-5 space-y-1">
                {catProjects.map((project) => (
                  <ProjectRow key={project.name} project={project} />
                ))}
              </div>
            </div>
          );
        })}
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
                <span className="text-neutral-700">, </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 transition-colors hover:text-neutral-200"
                  >
                    {item.company}
                  </a>
                ) : (
                  <span className="text-neutral-500">{item.company}</span>
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
        className="mt-16 border-t border-white/5 pt-6 pb-8 md:mt-20"
      >
        <p className="text-xs text-neutral-700">
          &copy; {new Date().getFullYear()} Demilade Bickersteth
        </p>
      </motion.footer>
    </motion.main>
  );
}
