"use client";

import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { images, testimonials } from "@/lib/data";
import Reveal from "@/components/Reveal";

const initials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

function ArrowTab({ side, onClick }) {
  const left = side === "left";
  return (
    <div
      className={`absolute top-1/2 z-10 hidden h-28 w-12 -translate-y-1/2 items-center justify-center bg-white md:flex ${
        left ? "left-0 rounded-r-full pr-2" : "right-0 rounded-l-full pl-2"
      }`}
    >
      <button
        onClick={onClick}
        aria-label={left ? "Previous reviews" : "Next reviews"}
        className="grid h-7 w-7 place-items-center rounded-full bg-brand text-black transition hover:brightness-95"
      >
        {left ? <FiChevronLeft size={16} /> : <FiChevronRight size={16} />}
      </button>
    </div>
  );
}

export default function Testimonials() {
  const track = useRef(null);

  const scroll = (dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("article");
    const step = card ? card.offsetWidth + 16 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="scroll-mt-20 bg-white p-2 sm:p-3">
      <div className="relative isolate overflow-hidden rounded-[22px] px-4 py-14 sm:rounded-[28px] sm:px-8 lg:px-20">
        <img src={images.testimonialBg} alt="" className="absolute inset-0 -z-20 h-full w-full scale-105 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/60 to-black/40" />

        <Reveal className="text-center">
          <h2 className="text-[32px] font-medium tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.6)] sm:text-[42px]">
            What Our Clients Are Saying
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] text-[16px] leading-snug text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">
            Real words from families and business owners across Gujarat who trusted Z&M Buildcon with their projects.
          </p>
        </Reveal>

        <div
          ref={track}
          className="mx-auto mt-10 flex max-w-[960px] snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex w-full shrink-0 snap-start flex-col justify-between rounded-2xl bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:w-[calc(50%-8px)]"
            >
              <div>
                <h3 className="text-[16px] font-bold leading-snug">{t.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-neutral-600">{t.text}</p>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-4">
                {t.avatar ? (
                  <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-lg object-cover" />
                ) : (
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-brand/20 text-[15px] font-bold text-neutral-800">
                    {initials(t.name)}
                  </span>
                )}
                <div>
                  <div className="text-[14px] font-bold">{t.name}</div>
                  <div className="text-[13px] text-neutral-500">{t.role}</div>
                </div>
                <FaQuoteRight className="ml-auto text-neutral-200" size={36} />
              </div>
            </article>
          ))}
        </div>

        <ArrowTab side="left" onClick={() => scroll(-1)} />
        <ArrowTab side="right" onClick={() => scroll(1)} />

        {/* Mobile arrows */}
        <div className="mt-6 flex justify-center gap-3 md:hidden">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous review"
            className="grid h-10 w-10 place-items-center rounded-full bg-brand text-black"
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next review"
            className="grid h-10 w-10 place-items-center rounded-full bg-brand text-black"
          >
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
