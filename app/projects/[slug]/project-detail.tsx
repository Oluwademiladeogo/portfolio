"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { AutomationProject } from "@/lib/automation-projects";
import { automationProjects } from "@/lib/automation-projects";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// ── Helpers ────────────────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-700">
      {children}
    </p>
  );
}

// ── Step item — each one reveals independently on scroll ──────────────────────

function StepItem({
  step,
  index,
  isLast,
}: {
  step: { title: string; description: string };
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-[2.25rem_1fr] gap-4"
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Step number + connecting line */}
      <div className="flex flex-col items-center gap-2 pt-0.5">
        <span className="font-mono text-[11px] tabular-nums text-neutral-600">
          {String(index + 1).padStart(2, "0")}
        </span>
        {!isLast && (
          <motion.div
            className="w-px flex-1 bg-neutral-800"
            style={{ minHeight: "1.75rem" }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.07 + 0.25 }}
          />
        )}
      </div>

      {/* Content */}
      <div className={!isLast ? "pb-8" : ""}>
        <h3 className="text-[15px] font-medium text-neutral-200">
          {step.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

// ── Main ───────────────────────────────────────────────────────────────────────

export default function ProjectDetail({
  project,
}: {
  project: AutomationProject;
}) {
  const currentIndex = automationProjects.findIndex(
    (p) => p.slug === project.slug
  );
  const nextProject =
    automationProjects[(currentIndex + 1) % automationProjects.length];

  return (
    <main className="mx-auto max-w-2xl px-6">
      {/* ── Top nav ──────────────────────────────────────────────────────────── */}
      <motion.div
        className="flex items-center justify-between pt-8"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Link
          href="/"
          className="font-mono text-[11px] text-neutral-700 transition-colors hover:text-neutral-400"
        >
          ← Home
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center rounded-md bg-white px-3.5 font-mono text-[11px] font-medium text-black transition-opacity hover:opacity-85"
          >
            Try it live →
          </a>
        )}
      </motion.div>

      {/* ── Header ───────────────────────────────────────────────────────────── */}
      <header className="mt-14 md:mt-16">
        {/* Title — clip reveal matching home hero */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem]"
            initial={{ y: "106%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.72, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            {project.name}
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          className="mt-5 max-w-lg text-[15px] leading-relaxed text-neutral-400"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {project.description}
        </motion.p>

        {/* Tech stack pills */}
        <motion.div
          className="mt-4 flex flex-wrap gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.38 }}
        >
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded border border-neutral-800 bg-neutral-900/80 px-2 py-0.5 font-mono text-[10px] text-neutral-500"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </header>

      {/* ── Screenshot ───────────────────────────────────────────────────────── */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className={`overflow-hidden rounded-xl ring-1 ring-white/[0.06] ${
            project.imageContain ? "bg-white" : "bg-neutral-900"
          }`}
        >
          <div className="relative aspect-video w-full">
            <Image
              src={`${base}${project.screenshot}`}
              alt={`${project.name} screenshot`}
              fill
              className={
                project.imageContain ? "object-contain p-8" : "object-cover"
              }
              sizes="(max-width: 672px) 100vw, 672px"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* ── Problem + Impact ─────────────────────────────────────────────────── */}
      {(project.problem || project.impact) && (
        <div className="mt-14 space-y-7">
          {project.problem && (
            <motion.div
              className="border-l-2 border-neutral-800 pl-5"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45 }}
            >
              <Label>The Problem</Label>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-400">
                {project.problem}
              </p>
            </motion.div>
          )}

          {project.impact && (
            <motion.div
              className="border-l-2 border-amber-500/25 pl-5"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Label>Impact</Label>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-400">
                {project.impact}
              </p>
            </motion.div>
          )}
        </div>
      )}

      {/* ── How it works ─────────────────────────────────────────────────────── */}
      <section className="mt-14">
        <Label>{project.stepsLabel ?? "How it works"}</Label>
        <div className="mt-8">
          {project.steps.map((step, i) => (
            <StepItem
              key={step.title}
              step={step}
              index={i}
              isLast={i === project.steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* ── Video walkthrough ────────────────────────────────────────────────── */}
      {project.youtubeId && (
        <motion.section
          className="mt-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Label>Walkthrough</Label>
          <div className="mt-6 overflow-hidden rounded-xl ring-1 ring-white/[0.06]">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                title={`${project.name} walkthrough`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </motion.section>
      )}

      {/* ── Footer: next project ─────────────────────────────────────────────── */}
      <motion.footer
        className="mt-20 pb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="border-t border-neutral-900 pt-12">
          <Label>Next project</Label>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group mt-4 flex items-center justify-between rounded-xl border border-neutral-900 px-5 py-4 transition-colors hover:border-neutral-800 hover:bg-white/[0.02]"
          >
            <div className="min-w-0">
              <p className="text-[15px] font-medium text-neutral-300 transition-colors group-hover:text-white">
                {nextProject.name}
              </p>
              <p className="mt-0.5 truncate text-sm text-neutral-600">
                {nextProject.description}
              </p>
            </div>
            <motion.span
              className="ml-5 shrink-0 font-mono text-sm text-neutral-700 transition-colors group-hover:text-amber-500"
              initial={false}
              whileHover={{ x: 3 }}
            >
              →
            </motion.span>
          </Link>

          <Link
            href="/"
            className="mt-6 inline-block font-mono text-[11px] text-neutral-700 transition-colors hover:text-neutral-400"
          >
            ← Back to home
          </Link>
        </div>
      </motion.footer>
    </main>
  );
}
