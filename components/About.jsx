import Link from "next/link";
import { FiArrowUpRight, FiCheck, FiClipboard, FiKey } from "react-icons/fi";
import { homes, images } from "@/lib/data";
import Reveal from "@/components/Reveal";

const buildingProjects = homes.filter((h) => h.services);
const scope = ["Planning", "Budget", "Liaisoning", "Supervision"];

const card =
  "group relative overflow-hidden rounded-3xl border border-white/10 bg-[#141414] p-6 transition duration-500 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_30px_60px_-30px_rgba(232,182,40,0.35)]";
const iconBox =
  "grid h-12 w-12 place-items-center rounded-2xl bg-brand text-black transition duration-500 group-hover:rotate-6";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 overflow-hidden px-4 pb-6 pt-16 sm:px-8 sm:pt-24 lg:px-10">
      <Reveal className="mx-auto max-w-[640px] text-center">
        <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[12px] font-medium text-black">
          About Us
        </span>
        <h2 className="mt-5 text-[34px] font-medium leading-[1.1] tracking-tight text-white sm:text-[50px]">
          Building spaces that <span className="text-brand">elevate</span> your life
        </h2>
        <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-relaxed text-neutral-400">
          From the first plan to the final handover, we take care of your project so you do not have to.
        </p>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-[1200px] items-center gap-6 lg:mt-16 lg:grid-cols-[1fr_minmax(0,440px)_1fr] lg:gap-8">
        {/* Left */}
        <div className="order-2 grid gap-4 lg:order-1">
          <Reveal from="left" delay={100}>
            <div className={card}>
              <div aria-hidden className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand/10 blur-2xl" />
              <div className="flex items-end gap-4">
                <div className="text-[56px] font-medium leading-none tracking-tight text-white">
                  {buildingProjects.length}
                  <sup className="ml-0.5 align-top text-2xl text-brand">+</sup>
                </div>
                <div className="pb-1 text-[13px] leading-tight text-neutral-400">
                  Samsara building
                  <br />
                  projects
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal from="left" delay={220}>
            <div className={card}>
              <span className={iconBox}>
                <FiKey size={22} />
              </span>
              <h3 className="mt-5 text-[20px] font-semibold leading-tight text-white">Lock &amp; Key Turnkey Projects</h3>
              <p className="mt-2 text-[14px] leading-snug text-neutral-400">
                From design to construction and interiors, we deliver a ready-to-move-in home.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Center image */}
        <Reveal from="scale" className="relative order-1 mx-auto w-full max-w-[440px] lg:order-2">
          <div aria-hidden className="absolute -inset-3 rounded-[40px] bg-gradient-to-b from-brand/40 via-transparent to-brand/20 blur-xl" />
          <div className="group relative aspect-[5/6] overflow-hidden rounded-[32px] ring-1 ring-white/15">
            <img
              src={images.about}
              alt="Samsara Kalp Vriksh, a project by Z&M Buildcon"
              className="h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-5 right-3 w-[190px] animate-floaty sm:-right-6 sm:w-[210px]">
            <div className="flex flex-col gap-5 rounded-2xl bg-brand p-4 shadow-xl shadow-black/30">
              <p className="text-[17px] font-medium leading-[1.15] text-black">Construction, Made Remarkably Simple.</p>
              <Link
                href="/about"
                aria-label="Learn more about us"
                className="grid h-9 w-9 place-items-center self-end rounded-full bg-white text-black transition duration-300 hover:rotate-45 hover:bg-black hover:text-white"
              >
                <FiArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Right */}
        <div className="order-3 grid gap-4">
          <Reveal from="right" delay={100}>
            <div className={card}>
              <span className={iconBox}>
                <FiClipboard size={22} />
              </span>
              <h3 className="mt-5 text-[20px] font-semibold leading-tight text-white">Expert Project Consultancy</h3>
              <p className="mt-2 text-[14px] leading-snug text-neutral-400">
                From your first plan to the final handover, we guide you at every step.
              </p>
            </div>
          </Reveal>

          <Reveal from="right" delay={220}>
            <div className={card}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-neutral-500">On every project</p>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {scope.map((s) => (
                  <li key={s} className="flex items-center gap-2.5 text-[14px] font-medium text-neutral-200">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-black">
                      <FiCheck size={12} strokeWidth={3} />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-14 text-center sm:mt-16">
        <Link
          href="/about"
          className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-[15px] font-semibold text-white transition-all hover:gap-3 hover:border-brand hover:bg-brand hover:text-black"
        >
          Know more about us <FiArrowUpRight className="transition group-hover:rotate-45" />
        </Link>
      </Reveal>
    </section>
  );
}
