import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/data";

export default function JoinCommunity() {
  return (
    <section className="overflow-hidden bg-black px-4 pb-6 pt-12 sm:px-8 sm:pb-10 sm:pt-20 lg:px-12">
      <div className="mx-auto max-w-[1500px] text-[12.5vw] font-medium uppercase leading-[0.92] tracking-[-0.05em] text-white min-[1500px]:text-[188px]">
        <div className="flex items-center justify-between">
          <Reveal from="left">
            <h2>Join Our</h2>
          </Reveal>
          <Reveal from="scale" delay={350}>
            <a
              href={`https://wa.me/${company.phone}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Join our community"
              className="group grid h-[0.72em] w-[0.72em] place-items-center rounded-[0.14em] bg-brand text-black transition duration-300 hover:scale-105 hover:rounded-[0.36em] hover:brightness-95"
            >
              <FiArrowUpRight
                className="h-[0.36em] w-[0.36em] transition-transform duration-300 group-hover:rotate-45"
                strokeWidth={1.8}
              />
            </a>
          </Reveal>
        </div>
        <Reveal from="right" delay={200}>
          <h2>Community</h2>
        </Reveal>
      </div>
    </section>
  );
}
