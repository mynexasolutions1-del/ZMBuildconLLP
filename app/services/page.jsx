import Link from "next/link";
import {
  FiKey,
  FiHome,
  FiLayout,
  FiTool,
  FiClipboard,
  FiCheck,
  FiArrowUpRight,
  FiPhoneCall,
  FiMessageCircle,
  FiChevronRight,
  FiPenTool,
} from "react-icons/fi";
import { FaBuilding, FaPlaceOfWorship } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { services, processSteps, banners, company, homes } from "@/lib/data";

export const metadata = {
  title: "Our Services",
  description:
    "Turnkey projects, bungalows, interior, construction and project consultancy by Z&M Buildcon LLP in Gujarat.",
};

const ICONS = {
  turnkey: FiKey,
  bungalow: FiHome,
  building: FaBuilding,
  temple: FaPlaceOfWorship,
  interior: FiLayout,
  construction: FiTool,
  consultancy: FiClipboard,
};

const STEP_ICONS = [FiMessageCircle, FiPenTool, FiTool, FiLayout, FiKey];

// Projects where we provide planning, budgeting, liaisoning and supervision (cards that carry a `services` list).
const servedProjects = homes.filter((h) => h.services);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title={
          <>
            Everything you need,
            <br />
            under one roof
          </>
        }
        subtitle="From the first plan to the final handover, we design, build and finish your space with care."
        image={banners[1]}
      />

      <section className="bg-black p-2 sm:p-3">
        <div className="rounded-[22px] bg-[#141414] px-3 py-10 sm:rounded-[28px] sm:px-6 sm:py-14 lg:px-8">
          <Reveal className="mx-auto max-w-[620px] text-center">
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[12px] font-medium text-black">
              Our Services
            </span>
            <h2 className="mt-4 text-[32px] font-medium leading-[1.15] tracking-tight sm:text-[44px]">
              What we do best
            </h2>
            <p className="mt-3 text-[15px] leading-snug text-neutral-400">
              Five services, one trusted team. Choose one, or let us handle your whole project.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {services.map((s, i) => {
              const Icon = ICONS[s.key];
              return (
                <Reveal key={s.key} delay={(i % 3) * 120} className="w-full md:w-[calc(50%-8px)] lg:w-[calc((100%-32px)/3)]">
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] bg-[#1f1f1f] p-7 transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]">
                    <span className="pointer-events-none absolute right-6 top-4 text-[64px] font-light leading-none text-white/10 transition-colors duration-500 group-hover:text-brand/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-1 flex-col">
                      <span className="relative z-10 mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-black text-brand transition duration-500 group-hover:rotate-6 group-hover:bg-brand group-hover:text-black">
                        <Icon size={26} />
                      </span>

                      <h3 className="text-[24px] font-semibold leading-tight tracking-tight">{s.title}</h3>
                      <p className="mt-2 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-neutral-500">
                        <span className="h-0.5 w-6 rounded-full bg-brand transition-all duration-500 group-hover:w-10" />
                        {s.short}
                      </p>
                      <p className="mt-4 text-[15px] leading-[1.65] text-neutral-400">{s.desc}</p>

                      <ul className="mt-5 space-y-3 border-t border-white/10 pt-5">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-start gap-3 text-[14px] font-medium text-neutral-200">
                            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-black">
                              <FiCheck size={12} strokeWidth={3} />
                            </span>
                            {p}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact"
                        className="mt-6 inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold transition-all group-hover:gap-3 group-hover:text-brand"
                      >
                        <span className="border-b-2 border-brand pb-0.5">Enquire now</span>
                        <FiArrowUpRight className="transition duration-300 group-hover:rotate-45" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}

            <Reveal delay={240} className="w-full md:w-[calc(50%-8px)] lg:w-[calc((100%-32px)/3)]">
              <div className="relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-[28px] bg-brand p-8 text-black">
                <div aria-hidden className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-white/25" />
                <div aria-hidden className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-black/10" />

                <div className="relative">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-black text-brand">
                    <FiMessageCircle size={24} />
                  </span>
                  <h3 className="mt-6 text-[32px] font-semibold leading-[1.1] tracking-tight">
                    Not sure where to start?
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.6] text-black/75">
                    Talk to our experts. The first consultation is simple, honest and without any pressure.
                  </p>
                </div>

                <div className="relative mt-8 space-y-4">
                  <a
                    href={`tel:+${company.phone}`}
                    className="flex items-center gap-2 text-[18px] font-semibold"
                  >
                    <FiPhoneCall /> {company.phoneDisplay}
                  </a>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 text-[15px] font-semibold text-white transition-all hover:gap-3"
                  >
                    Talk to us <FiArrowUpRight className="transition group-hover:rotate-45" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-black p-2 sm:p-3">
        <div className="rounded-[22px] bg-[#141414] px-3 py-10 sm:rounded-[28px] sm:px-6 sm:py-14 lg:px-8">
          <Reveal className="mx-auto max-w-[620px] text-center">
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[12px] font-medium text-black">
              Our Projects
            </span>
            <h2 className="mt-4 text-[32px] font-medium leading-[1.15] tracking-tight sm:text-[44px]">
              Services we deliver on every project
            </h2>
            <p className="mt-3 text-[15px] leading-snug text-neutral-400">
              From the first plan to the final handover, here is what we take care of on these projects.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {servedProjects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 110}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-[#1f1f1f] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.4)]">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-[20px] font-semibold leading-tight">{p.title}</h3>
                    <p className="mt-1.5 text-[13px] text-neutral-500">{p.meta[0]} · {p.meta[1]}</p>
                    <ul className="mt-4 space-y-2.5 border-t border-white/10 pt-4">
                      {p.services.map((sv) => (
                        <li key={sv} className="flex items-center gap-3 text-[14px] font-medium text-neutral-200">
                          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-black">
                            <FiCheck size={12} strokeWidth={3} />
                          </span>
                          {sv}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black p-2 sm:p-3">
        <div
          className="relative overflow-hidden rounded-[22px] bg-[#141414] px-4 py-14 text-white sm:rounded-[28px] sm:px-8 sm:py-20 lg:px-10"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        >
          <div aria-hidden className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand/30 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-brand/25 blur-3xl" />

          <Reveal className="relative mx-auto max-w-[620px] text-center">
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[12px] font-medium text-black">
              Our Process
            </span>
            <h2 className="mt-4 text-[34px] font-medium leading-[1.15] tracking-tight sm:text-[48px]">
              How we{" "}
              work
            </h2>
            <p className="mt-3 text-[15px] leading-snug text-neutral-400">
              A simple, transparent process so you always know what happens next.
            </p>
          </Reveal>

          <div className="relative mx-auto mt-14 grid max-w-[1240px] gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {/* timeline line (desktop) */}
            <div
              aria-hidden
              className="absolute left-[10%] right-[10%] top-[22px] hidden h-0.5 rounded-full bg-gradient-to-r from-brand/20 via-brand to-brand/20 lg:block"
            />

            {processSteps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <Reveal key={step.title} delay={i * 120} className="group flex flex-col">
                  {/* node + connector (desktop) */}
                  <div className="hidden flex-col items-center lg:flex">
                    <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full bg-brand text-[15px] font-semibold text-black ring-8 ring-[#141414] transition duration-500 group-hover:scale-125 group-hover:bg-black group-hover:text-brand">
                      {i + 1}
                    </span>
                    <span
                      className={`w-0 border-l-2 border-dotted border-brand/70 ${i % 2 ? "h-14" : "h-6"}`}
                    />
                  </div>

                  <div className="relative flex-1 overflow-hidden rounded-3xl bg-[#1f1f1f] p-6 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.25)] transition duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.3)]">
                    <span className="pointer-events-none absolute right-4 top-2 text-[72px] font-semibold leading-none text-transparent transition duration-500 [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] group-hover:[-webkit-text-stroke:1px_#e8b628]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-black text-brand transition duration-500 group-hover:rotate-6 group-hover:bg-brand group-hover:text-black">
                      <Icon size={24} />
                    </span>
                    <h3 className="relative mt-12 text-[20px] font-semibold leading-tight">{step.title}</h3>
                    <p className="relative mt-3 text-[14px] leading-[1.6] text-neutral-400">{step.desc}</p>
                    <span className="mt-5 block h-0.5 w-8 rounded-full bg-brand transition-all duration-500 group-hover:w-full" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
