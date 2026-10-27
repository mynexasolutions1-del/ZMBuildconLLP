import { FiMapPin, FiNavigation, FiPhone } from "react-icons/fi";
import { company } from "@/lib/data";
import Reveal from "@/components/Reveal";

const query = "Ratanpur Kheda 387570 Gujarat India";
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=14&output=embed`;
const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;

/* Full-colour Google map with a gold pin. Google's own place card is cropped out.
   Mobile: map on top, info card below. sm and up: the card floats over the map. */
export default function MapSection() {
  return (
    <section className="bg-black p-2 sm:p-3">
      <Reveal className="relative isolate overflow-hidden rounded-[22px] bg-[#141414] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.3)] sm:h-[560px] sm:rounded-[28px]">
        {/* Map */}
        <div className="relative h-[320px] overflow-hidden sm:absolute sm:inset-0 sm:h-full">
          <iframe
            title={`${company.name} office location`}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-x-0 -top-[160px] block h-[calc(100%+160px)] w-full border-0"
          />

          {/* Animated pin (map is centred on the office) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[calc(50%-80px)] -translate-x-1/2 -translate-y-1/2"
          >
            <span className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-brand/30" />
            <span className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/30" />
            <span className="relative grid h-11 w-11 place-items-center rounded-full bg-brand text-black shadow-[0_0_0_5px_rgba(255,255,255,0.9),0_8px_20px_rgba(0,0,0,0.3)] sm:h-12 sm:w-12">
              <FiMapPin size={20} />
            </span>
          </div>
        </div>

        {/* Info card */}
        <div className="relative p-3 sm:pointer-events-none sm:absolute sm:inset-auto sm:bottom-6 sm:left-6 sm:p-0">
          <div className="pointer-events-auto w-full rounded-3xl border border-white/10 bg-[#141414] p-5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] sm:w-[360px] sm:p-6">
            <span className="inline-block rounded-full bg-brand px-3 py-1 text-[12px] font-semibold text-black">
              Head Office
            </span>
            <h3 className="mt-3 text-[20px] font-semibold leading-tight sm:text-[22px]">{company.name}</h3>
            <p className="mt-2 flex items-start gap-2 text-[14px] leading-snug text-neutral-400">
              <FiMapPin className="mt-0.5 shrink-0 text-brand" />
              {company.address}
            </p>

            <div className="mt-5 flex gap-2">
              <a
                href={directionsHref}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-[14px] font-semibold text-black transition hover:brightness-95 sm:flex-none sm:px-5"
              >
                <FiNavigation className="transition group-hover:rotate-12" /> Get Directions
              </a>
              <a
                href={`tel:+${company.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-[14px] font-semibold transition hover:bg-white hover:text-black"
              >
                <FiPhone /> Call
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
