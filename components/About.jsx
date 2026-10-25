import { FiArrowUpRight } from "react-icons/fi";
import { images } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 overflow-hidden px-4 pb-4 pt-14 sm:px-8 sm:pt-20 lg:px-10">
      <Reveal>
        <h2 className="mx-auto max-w-lg text-center text-[32px] font-medium leading-[1.15] tracking-tight sm:text-[40px]">
          Building spaces
          <br />
          that elevate your life
        </h2>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-[1200px] gap-8 md:grid-cols-[1fr_minmax(0,440px)_1fr] md:gap-6 lg:mt-14">
        {/* Left */}
        <Reveal
          from="left"
          delay={150}
          className="order-2 flex items-end justify-between gap-6 md:order-1 md:flex-col md:items-start md:justify-between md:py-1"
        >
          <div className="grid h-[120px] w-[120px] shrink-0 place-items-center rounded-2xl border border-neutral-200 bg-white text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl md:ml-16 lg:ml-24">
            <div>
              <div className="text-[44px] font-medium leading-none tracking-tight">
                10<sup className="ml-0.5 align-top text-base text-brand">+</sup>
              </div>
              <div className="mt-1 text-[12px] leading-tight text-neutral-700">
                Year
                <br />
                of Expertise
              </div>
            </div>
          </div>
          <div className="max-w-[260px] md:mb-4">
            <h3 className="text-[20px] font-semibold leading-tight">
              Lock &amp; Key
              <br />
              Turnkey Projects
            </h3>
            <p className="mt-2 text-[14px] leading-snug text-neutral-600">
              From design to construction and interiors, we deliver a ready-to-move-in home.
            </p>
          </div>
        </Reveal>

        {/* Center image */}
        <Reveal from="scale" className="relative order-1 md:order-2">
          <div className="group aspect-[5/6] overflow-hidden rounded-3xl">
            <img
              src={images.about}
              alt="Modern architecture"
              className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-105"
            />
          </div>

          <div className="absolute bottom-6 right-4 w-[180px] animate-floaty sm:w-[200px] md:-right-16 lg:-right-20">
            <div className="flex flex-col gap-6 rounded-2xl bg-brand p-4 shadow-xl shadow-black/10">
              <p className="text-[18px] font-medium leading-[1.15] text-black">
                Construction, Made Remarkably Simple.
              </p>
              <button
                aria-label="Learn more"
                className="grid h-9 w-9 place-items-center self-end rounded-full bg-white text-black transition duration-300 hover:rotate-45 hover:bg-black hover:text-white"
              >
                <FiArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Right */}
        <Reveal from="right" delay={150} className="order-3 md:mt-10 md:self-start md:pl-10 lg:pl-16">
          <h3 className="text-[20px] font-semibold leading-tight">
            Expert Project
            <br />
            Consultancy
          </h3>
          <p className="mt-2 max-w-[260px] text-[14px] leading-snug text-neutral-600">
            From your first plan to the final handover, we guide you at every step.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
