"use client";

import { useState } from "react";
import { FiSearch, FiMapPin, FiHome } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";
import { images, cityOptions, typeOptions, priceOptions, SEARCH_EVENT } from "@/lib/data";
import SearchSelect from "@/components/SearchSelect";

/* Concave corner filler: makes the black search notch curve smoothly into the hero edges */
const fillet = {
  background: "radial-gradient(circle at 0 0, transparent 27px, #000 28px)",
};

export default function Hero() {
  const [city, setCity] = useState(null);
  const [type, setType] = useState(null);
  const [maxCr, setMaxCr] = useState(null);

  const handleSearch = () => {
    window.dispatchEvent(new CustomEvent(SEARCH_EVENT, { detail: { city, type, maxCr } }));
    document.getElementById("properties")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-black p-2 sm:p-3">
      <div className="relative isolate min-h-[720px] overflow-hidden rounded-[22px] bg-neutral-800 sm:min-h-[680px] sm:rounded-[28px] lg:min-h-[780px]">
        <img
          src={images.hero}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full animate-kenburns object-cover object-[50%_28%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/55 via-50% to-black/25 sm:from-black/65 sm:via-black/10 sm:via-60% sm:to-black/25" />

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
              placeholder="Select city"
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
              icon={FaRupeeSign}
              label="Max budget"
              placeholder="Any budget"
              options={priceOptions}
              value={maxCr}
              onChange={setMaxCr}
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
