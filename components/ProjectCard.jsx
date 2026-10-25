import Link from "next/link";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

export const PANEL = "#f4f4f4";

/* Concave corner filler so the arrow notch curves smoothly into the image edges */
const fillet = {
  background: `radial-gradient(circle at 0 0, transparent 19px, ${PANEL} 20px)`,
};

export default function ProjectCard({ home, highlighted }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/3.1] overflow-hidden rounded-[20px]">
        <img
          src={home.image}
          alt={home.title}
          className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-110"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-lg bg-white px-3 py-1.5 text-[12px] font-medium leading-none text-black">
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
        <span className="h-3.5 w-px bg-neutral-300" />
        <span>{home.meta[1]}</span>
        <span className="h-3.5 w-px bg-neutral-300" />
        <span>{home.meta[2]}</span>
      </div>
      <h3 className="mt-3 text-[20px] font-semibold leading-tight">{home.title}</h3>
      <p className="mt-1.5 flex items-center gap-1.5 text-[13px] font-medium text-neutral-700">
        <FiMapPin size={13} className="text-brand" />
        {home.location}
      </p>
      <p className="mt-2 max-w-[400px] text-[14px] leading-snug text-neutral-500">{home.desc}</p>
      <p className="mt-3 text-[15px] font-semibold">Budget: {home.price}</p>
    </article>
  );
}
