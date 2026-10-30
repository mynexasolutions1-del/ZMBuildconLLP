"use client";

import { useEffect, useRef, useState } from "react";
import { FiSearch, FiMapPin, FiHome, FiGrid } from "react-icons/fi";
import { heroSlides, cityOptions, typeOptions, categoryOptions, SEARCH_EVENT } from "@/lib/data";
import SearchSelect from "@/components/SearchSelect";

/* Concave corner filler: makes the black search notch curve smoothly into the hero edges */
const fillet = {
  background: "radial-gradient(circle at 0 0, transparent 27px, #000 28px)",
};

const SLIDE_MS = 5000;
const SWIPE_PX = 50;

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const paused = useRef(false);
  const touchX = useRef(null);
  const go = (d) => setSlide((i) => (i + d + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) go(1);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > SWIPE_PX) go(dx < 0 ? 1 : -1);
  };

  const [city, setCity] = useState(null);
  const [type, setType] = useState(null);
  const [category, setCategory] = useState(null);

  const handleSearch = () => {
    window.dispatchEvent(new CustomEvent(SEARCH_EVENT, { detail: { city, type, category } }));
    document.getElementById("properties")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-black p-2 sm:p-3">
      <div
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
        className="relative isolate min-h-[720px] overflow-hidden rounded-[22px] bg-neutral-800 sm:min-h-[680px] sm:rounded-[28px] lg:min-h-[780px]"
      >
        {heroSlides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt=""
            aria-hidden={i !== slide}
            loading={i === 0 ? "eager" : "lazy"}
            style={{ objectPosition: s.position }}
            className={`absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
              i === slide ? "animate-kenburns opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/55 via-50% to-black/25 sm:from-black/65 sm:via-black/10 sm:via-60% sm:to-black/25" />

        {/* Slide dots */}
        <div className="absolute right-3 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-2.5 sm:right-5">
          {heroSlides.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setSlide(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === slide}
              className={`w-1.5 rounded-full transition-all duration-500 ${
                i === slide ? "h-8 bg-brand" : "h-1.5 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* Headline */}
        <div
          className="absolute inset-x-0 bottom-0 animate-fade-up px-4 pb-[225px] sm:px-8 sm:pb-[130px] lg:pb-10"
          style={{ animationDelay: "0.25s" }}
        >
          <h1 className="text-[36px] font-light leading-[1.08] tracking-[-0.03em] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.6)] sm:text-[60px] lg:text-[76px]">
            Your Dream Project
            <br className="hidden sm:block" /> Made Easy &amp; Transparent
          </h1>
          <p className="mt-4 max-w-[340px] text-[14px] leading-snug text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.7)] lg:hidden">
            Bungalows, interiors and complete lock and key construction. Z&amp;M Buildcon LLP takes care of
            planning, building and handover, all in one place.
          </p>
        </div>

        {/* Desktop paragraph, sits above the search notch */}
        <p
          className="absolute bottom-[130px] right-10 hidden max-w-[360px] animate-fade-up text-[14px] leading-snug text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.7)] lg:block"
          style={{ animationDelay: "0.55s" }}
        >
          Bungalows, interiors and complete lock and key construction. Z&amp;M Buildcon LLP takes care of
          planning, building and handover, all in one place.
        </p>

        {/* Search */}
        <div
          className="absolute inset-x-3 bottom-3 animate-fade-up sm:inset-x-auto sm:bottom-0 sm:right-0 sm:w-[640px] sm:max-w-full sm:rounded-tl-[28px] sm:bg-black sm:pl-3 sm:pt-3 lg:w-[600px]"
          style={{ animationDelay: "0.8s" }}
        >
          <span aria-hidden className="absolute bottom-0 right-full hidden h-7 w-7 sm:block" style={fillet} />
          <span aria-hidden className="absolute bottom-full right-0 hidden h-7 w-7 sm:block" style={fillet} />
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 rounded-[22px] bg-[#141414] px-5 py-5 sm:flex sm:items-center sm:gap-5 sm:rounded-none sm:rounded-tl-[22px] sm:px-7 sm:py-6">
            <SearchSelect
              icon={FiMapPin}
              label="Location"
              placeholder="All locations"
              options={cityOptions}
              value={city}
              onChange={setCity}
              align="left"
            />
            <SearchSelect
              icon={FiHome}
              label="Project type"
              placeholder="Any type"
              options={typeOptions}
              value={type}
              onChange={setType}
              align="center"
            />
            <SearchSelect
              icon={FiGrid}
              label="Category"
              placeholder="Any category"
              options={categoryOptions}
              value={category}
              onChange={setCategory}
              align="right"
            />
            <button
              onClick={handleSearch}
              aria-label="Search"
              className="flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-brand text-[15px] font-semibold text-black transition hover:brightness-95 sm:h-14 sm:w-14"
            >
              <FiSearch size={20} />
              <span className="sm:hidden">Search</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
