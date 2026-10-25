"use client";

import { useEffect, useState } from "react";
import { homes, SEARCH_EVENT } from "@/lib/data";
import Reveal from "@/components/Reveal";
import ProjectCard, { PANEL } from "@/components/ProjectCard";

const NO_FILTERS = { city: null, type: null, maxCr: null };

const matchesCity = (home, city) =>
  !city || home.city === city || (city === "Delhi NCR" && home.city === "Gurugram");

export default function FeaturedHomes() {
  const [filters, setFilters] = useState(NO_FILTERS);

  useEffect(() => {
    const onSearch = (e) => setFilters({ ...NO_FILTERS, ...e.detail });
    window.addEventListener(SEARCH_EVENT, onSearch);
    return () => window.removeEventListener(SEARCH_EVENT, onSearch);
  }, []);

  const visible = homes.filter(
    (h) =>
      matchesCity(h, filters.city) &&
      (!filters.type || h.type === filters.type) &&
      (!filters.maxCr || h.priceCr <= filters.maxCr)
  );
  const filtered = filters.city || filters.type || filters.maxCr;

  return (
    <section id="properties" className="scroll-mt-20 bg-white p-2 sm:p-3">
      <div className="rounded-[22px] px-4 py-8 sm:rounded-[28px] sm:px-6 sm:py-10 lg:px-8" style={{ background: PANEL }}>
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-[30px] font-semibold tracking-tight sm:text-[38px]">Discover Our Featured Projects</h2>
            <p className="mt-3 max-w-[480px] text-[14px] leading-snug text-neutral-600">
              Explore bungalows, interiors and turnkey projects built by Z&amp;M Buildcon LLP with quality
              materials, honest pricing and on-time delivery.
            </p>
          </div>
          <button
            onClick={() => setFilters(NO_FILTERS)}
            className="self-start rounded-full bg-brand px-5 py-2.5 text-[14px] font-semibold text-black transition hover:brightness-95 sm:self-end"
          >
            See all Projects
          </button>
        </Reveal>

        {filtered && (
          <div className="mt-6 flex flex-wrap items-center gap-3 text-[14px] text-neutral-600">
            <span>
              Showing <b className="text-black">{visible.length}</b> of {homes.length} projects
            </span>
            <button onClick={() => setFilters(NO_FILTERS)} className="font-semibold text-black underline underline-offset-4">
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
          <div className="mt-8 rounded-2xl bg-white px-6 py-14 text-center">
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
