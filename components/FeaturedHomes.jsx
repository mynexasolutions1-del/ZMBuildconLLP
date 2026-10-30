"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { homes, SEARCH_EVENT, OTHER_CITY } from "@/lib/data";
import Reveal from "@/components/Reveal";
import ProjectCard, { PANEL } from "@/components/ProjectCard";

const NO_FILTERS = { city: null, type: null, category: null };
const HOME_LIMIT = 3;

const matchesCity = (home, city) => !city || (city === OTHER_CITY ? !home.city : home.city === city);

export default function FeaturedHomes() {
  const [filters, setFilters] = useState(NO_FILTERS);

  useEffect(() => {
    const onSearch = (e) => setFilters({ ...NO_FILTERS, ...e.detail });
    window.addEventListener(SEARCH_EVENT, onSearch);
    return () => window.removeEventListener(SEARCH_EVENT, onSearch);
  }, []);

  const filtered = filters.city || filters.type || filters.category;
  const matches = homes.filter(
    (h) =>
      matchesCity(h, filters.city) &&
      (!filters.type || h.type === filters.type) &&
      (!filters.category || h.meta[0] === filters.category)
  );
  // Home page only teases a few projects; a search shows every match, the full list lives on /projects.
  const visible = filtered ? matches : matches.slice(0, HOME_LIMIT);

  return (
    <section id="properties" className="scroll-mt-20 bg-black p-2 sm:p-3">
      <div className="rounded-[22px] px-4 py-8 sm:rounded-[28px] sm:px-6 sm:py-10 lg:px-8" style={{ background: PANEL }}>
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-[30px] font-semibold tracking-tight sm:text-[38px]">Discover Our Featured Projects</h2>
            <p className="mt-3 max-w-[480px] text-[14px] leading-snug text-neutral-400">
              Explore bungalows, interiors and turnkey projects built by Z&amp;M Buildcon LLP with quality
              materials, honest pricing and on-time delivery.
            </p>
          </div>
          <Link
            href="/projects"
            className="self-start rounded-full bg-brand px-5 py-2.5 text-[14px] font-semibold text-black transition hover:brightness-95 sm:self-end"
          >
            See all Projects
          </Link>
        </Reveal>

        {filtered && (
          <div className="mt-6 flex flex-wrap items-center gap-3 text-[14px] text-neutral-400">
            <span>
              Showing <b className="text-white">{visible.length}</b> of {homes.length} projects
            </span>
            <button onClick={() => setFilters(NO_FILTERS)} className="font-semibold text-white underline underline-offset-4">
              Clear filters
            </button>
          </div>
        )}

        {visible.length ? (
          <div className="mt-8 grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((home, i) => (
              <Reveal key={home.title} delay={(i % 3) * 130}>
                <ProjectCard home={home} highlighted={i === 1} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl bg-[#1f1f1f] px-6 py-14 text-center">
            <p className="text-[20px] font-semibold">No projects match your search</p>
            <p className="mt-2 text-[14px] text-neutral-500">
              Try a different city, project type or a higher budget.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
