"use client";

import { useState } from "react";
import { homes, typeOptions } from "@/lib/data";
import Reveal from "@/components/Reveal";
import ProjectCard, { PANEL } from "@/components/ProjectCard";

// Only types that have at least one project get a tab, so a new category never shows an empty grid.
const tabs = [
  { value: null, label: "All Projects" },
  ...typeOptions.filter((o) => o.value && homes.some((h) => h.type === o.value)),
];

export default function ProjectsGrid() {
  const [active, setActive] = useState(null);
  const visible = homes.filter((h) => !active || h.type === active);

  return (
    <section className="bg-black p-2 sm:p-3">
      <div className="rounded-[22px] px-4 py-8 sm:rounded-[28px] sm:px-6 sm:py-10 lg:px-8" style={{ background: PANEL }}>
        <Reveal className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={String(t.value)}
              onClick={() => setActive(t.value)}
              className={`rounded-full px-5 py-2.5 text-[14px] font-semibold transition duration-300 ${
                active === t.value
                  ? "bg-brand text-black shadow-lg"
                  : "bg-[#262626] text-neutral-300 hover:-translate-y-0.5 hover:bg-brand hover:text-black"
              }`}
            >
              {t.label}
            </button>
          ))}
        </Reveal>

        <p className="mt-6 text-[14px] text-neutral-400">
          Showing <b className="text-white">{visible.length}</b> of {homes.length} projects
        </p>

        <div className="mt-6 grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((home, i) => (
            <Reveal key={home.title} delay={(i % 3) * 130}>
              <ProjectCard home={home} highlighted={i === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
