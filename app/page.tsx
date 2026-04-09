"use client";

import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

// ── Types ──────────────────────────────────────────────────────────────────────

type Category = "products" | "automations" | "research";

type Project = {
  name: string;
  description: string;
  tech: string[];
  href: string;
  internal?: boolean;
  screenshot?: string;
  category: Category;
};

// ── Data ───────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    name: "Pruun",
    description:
      "AI voice agent that screens thousands of candidates autonomously — trait-based scoring, real-time transcription, automated report generation.",
    tech: ["NestJS", "Vapi.ai", "PostgreSQL", "BullMQ", "Next.js"],
    href: "/projects/pruun",
    internal: true,
    screenshot: "/projects/pruun.png",
    category: "products",
  },
  {
    name: "Lusic AI",
    description:
      "Preemptive risk-based vulnerability management for regulated industries — autonomous threat intelligence, real-time AI streaming, multi-tenant SaaS.",
    tech: ["Node.js", "Fastify", "PostgreSQL", "Lambda", "WebSocket"],
    href: "/projects/lusic-ai",
    internal: true,
    screenshot: "/projects/lusic-ai.png",
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
      "Full-stack lead gen platform — define a target role and industry, get back scored, email-verified, LinkedIn-confirmed prospects ready for outreach.",
    tech: ["n8n", "Google Maps API", "Email Verification", "React", "Cloudflare Pages"],
    href: "/projects/lead-enrichment",
    internal: true,
    screenshot: "/projects/lead-enrichment.png",
    category: "automations",
  },
  {
    name: "Content Automation",
    description:
      "End-to-end content production system — raw idea to published post. Handles research, audience targeting, AI drafting, and calendar scheduling.",
    tech: ["n8n", "OpenAI", "Airtable", "React", "Cloudflare Pages"],
    href: "/projects/content-automation",
    internal: true,
    screenshot: "/projects/content-automation.png",
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
      "Fine-tuned Meta's wav2vec2 (94M parameters) on Nigerian English speech — addresses the ASR gap for West African accented English. Dual-output: transcription + IPA phonetic notation.",
    tech: ["PyTorch", "HuggingFace", "FastAPI", "wav2vec2", "React"],
    href: "/projects/voxpreference",
    internal: true,
    screenshot: "/projects/voxpreference.png",
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

const categories: { key: Category; label: string }[] = [
  { key: "products", label: "Products" },
  { key: "automations", label: "Automations" },
  { key: "research", label: "Research" },
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

const STATS: (
  | { value: number; suffix: string; display?: never; label: string }
  | { display: string; value?: never; suffix?: never; label: string }
)[] = [
  { value: 8, suffix: "", label: "projects shipped" },
  { value: 3, suffix: "", label: "in production" },
  { display: "24/7", label: "autonomous runtime" },
];

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// ── Count Up ───────────────────────────────────────────────────────────────────

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  useEffect(() => {
    if (!inView) return;
    const steps = 36;
    const duration = 900;
    let step = 0;
    const tick = setInterval(() => {
      step++;
      const progress = step / steps;
      // ease out quart
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * to));
      if (step >= steps) clearInterval(tick);
    }, duration / steps);
    return () => clearInterval(tick);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ── Project Row ────────────────────────────────────────────────────────────────

function ProjectRow({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  // Position preview to avoid going off-screen
  const getPreviewStyle = () => {
    if (typeof window === "undefined") return { left: 0, top: 0 };
    const previewW = 240;
    const previewH = 150;
    const margin = 20;
    const left =
      mouse.x + margin + previewW > window.innerWidth
        ? mouse.x - previewW - margin
        : mouse.x + margin;
    const top = Math.max(
      margin,
      Math.min(mouse.y - previewH / 2, window.innerHeight - previewH - margin)
    );
    return { left, top };
  };

  const inner = (
    <div
      className="group -mx-3 rounded-lg px-3 py-4 transition-colors hover:bg-white/[0.025]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-[15px] font-medium text-neutral-300 transition-colors group-hover:text-white">
              {project.name}
            </h3>
            <motion.span
              className="shrink-0 font-mono text-xs text-neutral-800 transition-colors group-hover:text-amber-500"
              animate={hovered ? { x: 1, y: -1 } : { x: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {project.internal ? "→" : "↗"}
            </motion.span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-neutral-600 transition-colors group-hover:text-neutral-500">
            {project.description}
          </p>
          <p className="mt-2 font-mono text-[11px] text-neutral-800 transition-colors group-hover:text-neutral-600">
            {project.tech.join(" · ")}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {project.internal ? (
        <Link href={project.href} className="block">
          {inner}
        </Link>
      ) : (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {inner}
        </a>
      )}

      {/* Floating preview — fixed-positioned, follows cursor */}
      <AnimatePresence>
        {hovered && project.screenshot && (
          <motion.div
            className="pointer-events-none fixed z-50 w-60 overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black"
            style={getPreviewStyle()}
            initial={{ opacity: 0, scale: 0.94, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 6 }}
            transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative aspect-[16/10] w-full bg-neutral-900">
              <Image
                src={`${base}${project.screenshot}`}
                alt=""
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ── Hero Lines ─────────────────────────────────────────────────────────────────

const heroLines = [
  { text: "I build AI systems", dim: false },
  { text: "that replace what most", dim: true },
  { text: "companies hire people for.", dim: true },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>("products");

  const copyEmail = () => {
    navigator.clipboard.writeText("bickerstethdemilade@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="mx-auto max-w-2xl px-6">
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="pb-16 pt-20 md:pb-20 md:pt-28">
          {/* Identity chip */}
          <motion.div
            className="mb-10 flex items-center gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full border border-neutral-800">
              <Image
                src={`${base}/avatar.png`}
                alt="Demilade Bickersteth"
                width={28}
                height={28}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-mono text-[11px] text-neutral-600">
              Demilade Bickersteth
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/[0.07] px-2 py-0.5 font-mono text-[9px] tracking-wide text-amber-500">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-500" />
              </span>
              Open to work
            </span>
          </motion.div>

          {/* Headline — line-by-line slide up from clip */}
          <div>
            {heroLines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  className={`text-[2rem] font-bold leading-[1.15] tracking-tight sm:text-[2.6rem] md:text-[3rem] ${
                    line.dim ? "text-neutral-600" : "text-white"
                  }`}
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.08 + i * 0.11,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line.text}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Sub-tagline */}
          <motion.p
            className="mt-6 max-w-md text-[13.5px] leading-relaxed text-neutral-500"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.48, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Voice agents, workflow automations, and autonomous business
            systems. No oversight. No downtime. No extra headcount.
          </motion.p>

          {/* Nav links */}
          <motion.nav
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.62 }}
          >
            {[
              { label: "GitHub", href: "https://github.com/Oluwademiladeogo" },
              { label: "LinkedIn", href: "https://linkedin.com/in/bickersteth" },
              {
                label: "HuggingFace",
                href: "https://huggingface.co/thebickersteth",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 transition-colors hover:text-neutral-300"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={copyEmail}
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-300"
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
          </motion.nav>
        </section>

        {/* ── Stats ─────────────────────────────────────────────────────────── */}
        <motion.section
          className="border-y border-neutral-900 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-3 gap-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-2xl font-bold tabular-nums text-white md:text-3xl">
                  {stat.display ?? (
                    <CountUp to={stat.value!} suffix={stat.suffix!} />
                  )}
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-700">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Projects ──────────────────────────────────────────────────────── */}
        <section className="mt-16 md:mt-20">
          {/* Animated category tabs */}
          <div className="mb-6 flex items-center gap-0.5">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative rounded-md px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors ${
                  activeCategory === cat.key
                    ? "text-white"
                    : "text-neutral-700 hover:text-neutral-400"
                }`}
              >
                {activeCategory === cat.key && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-md border border-neutral-800 bg-neutral-900"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <span className="relative">{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Project list with AnimatePresence for tab switching */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="space-y-0.5"
            >
              {projects
                .filter((p) => p.category === activeCategory)
                .map((project) => (
                  <ProjectRow key={project.name} project={project} />
                ))}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ── Work ──────────────────────────────────────────────────────────── */}
        <motion.section
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-700">
            Work
          </p>
          <div className="mt-8 space-y-5">
            {work.map((item, i) => (
              <motion.div
                key={item.role + item.company}
                className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <p className="text-sm">
                  <span className="font-medium text-neutral-300">
                    {item.role}
                  </span>
                  <span className="text-neutral-800">, </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 transition-colors hover:text-neutral-300"
                    >
                      {item.company}
                    </a>
                  ) : (
                    <span className="text-neutral-600">{item.company}</span>
                  )}
                </p>
                <span className="shrink-0 font-mono text-xs text-neutral-700">
                  {item.period}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Footer CTA ────────────────────────────────────────────────────── */}
        <motion.section
          className="mt-20 pb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="border-t border-neutral-900 pt-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-700">
              Let&apos;s work together
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Have a process to automate?
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Open to contracts, AI automation, and senior engineering roles.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={copyEmail}
                className="inline-flex h-9 items-center rounded-md bg-white px-4 text-sm font-medium text-black transition-opacity hover:opacity-85 active:opacity-75"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? "copied" : "cta"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.12 }}
                    className="block"
                  >
                    {copied ? "Copied!" : "Copy email"}
                  </motion.span>
                </AnimatePresence>
              </button>
              <a
                href="https://linkedin.com/in/bickersteth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 transition-colors hover:text-neutral-300"
              >
                LinkedIn →
              </a>
            </div>
          </div>

          <p className="mt-14 font-mono text-[10px] text-neutral-800">
            &copy; {new Date().getFullYear()} Demilade Bickersteth
          </p>
        </motion.section>
      </main>
  );
}
