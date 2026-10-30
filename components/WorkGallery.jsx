"use client";

import { useEffect, useState } from "react";
import { FiMaximize2, FiPlay, FiX } from "react-icons/fi";
import { workGallery, workVideo } from "@/lib/data";
import Reveal from "@/components/Reveal";
import PhotoLightbox from "@/components/PhotoLightbox";
import { PANEL } from "@/components/ProjectCard";

const allItems = workGallery.flatMap((g) => g.images.map((src) => ({ src, label: g.title })));
const tabs = [
  { key: "all", label: "All", count: allItems.length },
  ...workGallery.map((g, i) => ({ key: i, label: g.tab, count: g.images.length })),
];
const summary = [
  { value: allItems.length, label: "Photos" },
  { value: workGallery.length, label: "Categories" },
  { value: "1", label: "Site Video" },
];

export default function WorkGallery() {
  const [open, setOpen] = useState(null); // index into the visible list
  const [tab, setTab] = useState("all");
  const [videoOpen, setVideoOpen] = useState(false);
  const groups = tab === "all" ? workGallery : [workGallery[tab]];
  const sections = groups.map((g) => ({ title: g.title, items: allItems.filter((it) => it.label === g.title) }));
  const visible = sections.flatMap((sec) => sec.items);

  useEffect(() => {
    if (!videoOpen) return;
    const onKey = (e) => e.key === "Escape" && setVideoOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [videoOpen]);

  return (
    <section className="bg-black p-2 sm:p-3">
      <div className="rounded-[22px] px-4 py-10 sm:rounded-[28px] sm:px-6 sm:py-14 lg:px-8" style={{ background: PANEL }}>
        {/* Intro + showreel */}
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-14">
          <Reveal>
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[12px] font-medium text-black">
              Portfolio
            </span>
            <h2 className="mt-5 text-[40px] font-semibold leading-[1.02] tracking-tight sm:text-[56px]">
              Built to be
              <br />
              <span className="text-brand">seen.</span>
            </h2>
            <p className="mt-5 max-w-[420px] text-[15px] leading-relaxed text-neutral-400">
              Real photos, aerial views and a site walkthrough from the buildings, bungalows and interiors we have
              planned and delivered.
            </p>
            <div className="mt-8 grid max-w-[420px] grid-cols-3 gap-3">
              {summary.map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                  <div className="text-[28px] font-semibold leading-none tracking-tight">{s.value}</div>
                  <div className="mt-1.5 text-[12px] text-neutral-500">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} from="scale">
            <div className="relative overflow-hidden rounded-[24px] bg-black shadow-[0_30px_80px_-30px_rgba(232,182,40,0.35)] ring-1 ring-brand/30">
              {/* Preview frame only; the real player opens in the modal below. */}
              <video
                src={`${workVideo}#t=0.1`}
                muted
                playsInline
                preload="metadata"
                className="aspect-video w-full bg-black object-cover"
              />
              <button
                onClick={() => setVideoOpen(true)}
                aria-label="Play video full screen"
                className="group absolute inset-0 grid place-items-center bg-gradient-to-t from-black/70 via-black/10 to-black/30 transition hover:from-black/55"
              >
                <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3.5 py-1.5 text-[12px] font-medium text-white backdrop-blur-md">
                  Site Walkthrough
                </span>
                <span className="relative grid h-20 w-20 place-items-center sm:h-24 sm:w-24">
                  <span className="absolute inset-0 animate-ping rounded-full bg-brand/50" />
                  <span className="relative grid h-full w-full place-items-center rounded-full bg-brand text-black shadow-2xl transition duration-300 group-hover:scale-110">
                    <FiPlay size={34} className="ml-1" fill="currentColor" />
                  </span>
                </span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Category tabs */}
        <div className="sticky top-[76px] z-30 -mx-4 mt-14 bg-[#141414]/85 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div
            className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Work categories"
          >
            {tabs.map((t) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={tab === t.key}
                onClick={() => setTab(t.key)}
                className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-[13px] font-medium transition duration-300 ${
                  tab === t.key
                    ? "bg-brand text-black shadow-[0_8px_24px_-8px_rgba(232,182,40,0.7)]"
                    : "bg-[#262626] text-neutral-300 hover:-translate-y-0.5 hover:bg-[#333]"
                }`}
              >
                {t.label}
                <span className={`ml-2 text-[12px] ${tab === t.key ? "text-black/60" : "text-neutral-500"}`}>
                  {t.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Photo grid: re-keyed per tab so the tiles animate in again. "All" is split category-wise. */}
        <div key={tab}>
          {sections.map((sec, si) => {
            const base = sections.slice(0, si).reduce((n, x) => n + x.items.length, 0);
            return (
              <div key={sec.title} className={si === 0 ? "mt-6" : "mt-12"}>
                {tab === "all" && (
                  <div className="mb-4 flex items-baseline gap-3">
                    <h3 className="text-[20px] font-semibold tracking-tight">{sec.title}</h3>
                    <span className="text-[13px] text-neutral-500">{sec.items.length} photos</span>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                )}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                  {sec.items.map((it, j) => (
                    <button
                      key={it.src}
                      onClick={() => setOpen(base + j)}
                      aria-label={`View photo: ${it.label}`}
                      style={{ animationDelay: `${Math.min(j, 12) * 45}ms` }}
                      className="tile-in group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#1f1f1f]"
                    >
                      <img
                        src={it.src}
                        alt={it.label}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-110"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                      <span className="absolute inset-x-3 bottom-3 translate-y-2 text-left text-[12px] font-medium leading-tight text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        {it.label}
                      </span>
                      <span className="absolute right-3 top-3 grid h-9 w-9 scale-75 place-items-center rounded-full bg-brand text-black opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                        <FiMaximize2 size={15} />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {videoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site walkthrough video"
          onClick={() => setVideoOpen(false)}
          className="fixed inset-0 z-[60] grid place-items-center bg-black/95 p-3 sm:p-8"
        >
          <button
            onClick={() => setVideoOpen(false)}
            aria-label="Close video"
            className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white transition hover:bg-brand hover:text-black"
          >
            <FiX size={22} />
          </button>
          <video
            src={workVideo}
            autoPlay
            controls
            playsInline
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-full max-w-[1400px] rounded-2xl bg-black shadow-[0_30px_100px_-20px_rgba(232,182,40,0.25)]"
          />
        </div>
      )}

      {open !== null && <PhotoLightbox items={visible} start={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
