"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { AutomationProject } from "@/lib/automation-projects";

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
      <motion.div variants={fadeUp}>
        <Link
          href="/"
          className="text-sm text-neutral-600 transition-colors hover:text-neutral-400"
        >
          &larr; Back
        </Link>
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

      {/* Workflow screenshot */}
      <motion.div
        variants={fadeUp}
        className="mt-12 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/50"
      >
        <div className="relative aspect-video w-full">
          <Image
            src={project.screenshot}
            alt={`${project.name} workflow`}
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 672px"
          />
        </div>
      </motion.div>

      {/* How it works */}
      <motion.section variants={fadeUp} className="mt-12">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">
          How it works
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

      <motion.footer
        variants={fadeUp}
        className="mt-16 border-t border-neutral-900 pt-6 pb-8"
      >
        <Link
          href="/"
          className="text-sm text-neutral-600 transition-colors hover:text-neutral-400"
        >
          &larr; Back to home
        </Link>
      </motion.footer>
    </motion.main>
  );
}
