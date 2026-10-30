"use client";

import { useState } from "react";
import Link from "next/link";
import { FiArrowUpRight, FiImage, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import PhotoLightbox from "@/components/PhotoLightbox";
import { whatsappLink } from "@/lib/data";

export const PANEL = "#141414";

/* Concave corner filler so the arrow notch curves smoothly into the image edges */
const fillet = {
  background: `radial-gradient(circle at 0 0, transparent 19px, ${PANEL} 20px)`,
};

export default function ProjectCard({ home, highlighted }) {
  const [viewing, setViewing] = useState(false);
  const photos = [home.image, ...(home.photos || [])].map((src) => ({ src, label: home.title }));

  const enquiry =
    `Hello Z&M Buildcon LLP,

I saw *${home.title}* (${home.type}) on your website and I am interested in a similar project. ` +
    `Please share more details about the planning, budget and timeline.

Thank you.`;

  return (
    <article className="group">
      <div className="relative aspect-[4/3.1] overflow-hidden rounded-[20px]">
        <img
          src={home.image}
          alt={home.title}
          className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-110"
          loading="lazy"
        />
        <button
          onClick={() => setViewing(true)}
          aria-label={`View photos of ${home.title}`}
          className="absolute inset-0 cursor-zoom-in"
        />
        {photos.length > 1 && (
          <span className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-md">
            <FiImage size={13} />
            {photos.length} photos
          </span>
        )}
        <span className="pointer-events-none absolute left-3 top-3 rounded-lg bg-white px-3 py-1.5 text-[12px] font-medium leading-none text-black">
          {home.type}
        </span>

        <div className="absolute bottom-0 right-0 rounded-tl-[24px] pl-2.5 pt-2.5" style={{ background: PANEL }}>
          <span aria-hidden className="absolute bottom-0 right-full h-5 w-5" style={fillet} />
          <span aria-hidden className="absolute bottom-full right-0 h-5 w-5" style={fillet} />
          <Link
            href="/contact"
            aria-label={`Enquire about ${home.title}`}
            className={`grid h-12 w-12 place-items-center rounded-full transition duration-300 hover:rotate-45 ${
              highlighted ? "bg-brand text-black" : "bg-white text-black hover:bg-brand"
            }`}
          >
            <FiArrowUpRight size={18} />
          </Link>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2.5 text-[13px] text-neutral-500">
        <span>{home.meta[0]}</span>
        <span className="h-3.5 w-px bg-white/20" />
        <span>{home.meta[1]}</span>
        <span className="h-3.5 w-px bg-white/20" />
        <span>{home.meta[2]}</span>
      </div>
      <h3 className="mt-3 text-[20px] font-semibold leading-tight">{home.title}</h3>
      <p className="mt-1.5 flex items-center gap-1.5 text-[13px] font-medium text-neutral-300">
        <FiMapPin size={13} className="text-brand" />
        {home.location}
      </p>
      <p className="mt-2 max-w-[400px] text-[14px] leading-snug text-neutral-400">{home.desc}</p>
      {home.services ? (
        <div className="mt-3">
          <p className="text-[13px] font-medium text-neutral-500">Our Services</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {home.services.map((s) => (
              <span key={s} className="rounded-full bg-[#262626] px-3 py-1 text-[12px] font-medium text-neutral-200">
                {s}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <p className="mt-3 text-[15px] font-semibold">Budget: {home.price}</p>
      )}
      <a
        href={whatsappLink(enquiry)}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-[14px] font-semibold text-black transition hover:-translate-y-0.5 hover:brightness-95"
      >
        <FaWhatsapp size={18} /> Enquire on WhatsApp
      </a>
      {viewing && <PhotoLightbox items={photos} onClose={() => setViewing(false)} />}
    </article>
  );
}
