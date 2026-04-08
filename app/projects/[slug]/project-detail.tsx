"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { AutomationProject } from "@/lib/automation-projects";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function ProjectDetail({
  project,
}: {
  project: AutomationProject;
}) {
  return (
    <motion.main
      className="mx-auto max-w-2xl px-6 py-16 md:py-24"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <motion.div variants={fadeUp} className="flex items-center justify-between">
        <Link
          href="/"
          className="text-sm text-neutral-600 transition-colors hover:text-neutral-400"
        >
          ← Back
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-200 transition-colors hover:border-neutral-500 hover:text-white"
          >
            Try it live
          </a>
        )}
      </motion.div>

      <motion.header variants={fadeUp} className="mt-8">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-100 sm:text-3xl">
          {project.name}
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-neutral-400">
          {project.description}
        </p>
        <p className="mt-3 font-mono text-[11px] text-neutral-600">
          {project.tech.join(" · ")}
        </p>
      </motion.header>

      {/* Screenshot */}
      <motion.div
        variants={fadeUp}
        className={`mt-10 overflow-hidden rounded-lg border border-neutral-800 ${project.imageContain ? "bg-white" : "bg-neutral-900/50"}`}
      >
        <div className="relative aspect-video w-full">
          <Image
            src={`${base}${project.screenshot}`}
            alt={`${project.name} workflow`}
            fill
            className={project.imageContain ? "object-contain p-6" : "object-cover"}
            sizes="(max-width: 672px) 100vw, 672px"
          />
        </div>
      </motion.div>


      {/* Problem + Impact */}
      {(project.problem || project.impact) && (
        <motion.section variants={fadeUp} className="mt-12 space-y-10">
          {project.problem && (
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">
                The Problem
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-400">
                {project.problem}
              </p>
            </div>
          )}
          {project.impact && (
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">
                Impact
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-400">
                {project.impact}
              </p>
            </div>
          )}
        </motion.section>
      )}

      {/* How it works / How it's built */}
      <motion.section variants={fadeUp} className="mt-12">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">
          {project.stepsLabel ?? "How it works"}
        </h2>
        <div className="mt-8 space-y-6">
          {project.steps.map((step, i) => (
            <div key={step.title} className="flex gap-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-800 font-mono text-[11px] text-neutral-600">
                {i + 1}
              </span>
              <div>
                <h3 className="text-[15px] font-medium text-neutral-300">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Video walkthrough */}
      {project.youtubeId && (
        <motion.section variants={fadeUp} className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">
            Walkthrough
          </h2>
          <div className="mt-6 aspect-video overflow-hidden rounded-lg border border-neutral-800">
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}`}
              title={`${project.name} walkthrough`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </motion.section>
      )}

      <motion.footer
        variants={fadeUp}
        className="mt-16 border-t border-neutral-900 pt-6 pb-8"
      >
        <Link
          href="/"
          className="text-sm text-neutral-600 transition-colors hover:text-neutral-400"
        >
          ← Back to home
        </Link>
      </motion.footer>
    </motion.main>
  );
}
