import Link from "next/link";
import { FiTarget, FiEye, FiShield, FiDollarSign, FiClock, FiHeart, FiArrowUpRight, FiCheck, FiMapPin, FiPhoneCall } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { images, sampleHomes, values, company } from "@/lib/data";

export const metadata = {
  title: "About Us",
  description:
    "Z&M Buildcon LLP is a construction and project consultancy company from Ratanpur Kheda, Gujarat, building bungalows, interiors and turnkey projects.",
};

const VALUE_ICONS = [FiShield, FiDollarSign, FiClock, FiHeart];

const VALUE_STYLES = [
  {
    card: "bg-[#1f1f1f] text-white",
    desc: "text-white/65",
    badge: "bg-brand text-black",
    num: "[-webkit-text-stroke:1px_rgba(255,255,255,0.15)] group-hover:[-webkit-text-stroke:1px_#e8b628]",
    arrow: "border-white/25 text-white/60 group-hover:border-brand group-hover:bg-brand group-hover:text-black",
  },
  {
    card: "bg-black text-white ring-1 ring-white/10",
    desc: "text-white/65",
    badge: "bg-brand text-black",
    num: "[-webkit-text-stroke:1px_rgba(255,255,255,0.2)] group-hover:[-webkit-text-stroke:1px_#e8b628]",
    arrow: "border-white/25 text-white/60 group-hover:border-brand group-hover:bg-brand group-hover:text-black",
  },
  {
    card: "bg-brand text-black",
    desc: "text-black/75",
    badge: "bg-black text-brand",
    num: "[-webkit-text-stroke:1px_rgba(0,0,0,0.25)] group-hover:[-webkit-text-stroke:1px_#000]",
    arrow: "border-black/30 text-black/70 group-hover:border-black group-hover:bg-black group-hover:text-brand",
  },
  {
    card: "bg-[#1f1f1f] text-white",
    desc: "text-white/65",
    badge: "bg-brand text-black",
    num: "[-webkit-text-stroke:1px_rgba(255,255,255,0.15)] group-hover:[-webkit-text-stroke:1px_#e8b628]",
    arrow: "border-white/25 text-white/60 group-hover:border-brand group-hover:bg-brand group-hover:text-black",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        title={
          <>
            Building trust,
            <br />
            one project at a time
          </>
        }
        subtitle="Z&M Buildcon LLP is a Gujarat-based construction and project consultancy company."
        image={images.hero}
        position="50% 28%"
      />

      {/* Story */}
      <section className="px-4 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1240px] items-center gap-16 lg:grid-cols-[minmax(0,560px)_1fr] lg:gap-20">
          {/* Image collage */}
          <Reveal from="left" className="relative mx-auto w-full max-w-[560px]">
            <div className="relative pb-10 pl-8">
              <div aria-hidden className="absolute bottom-0 left-0 top-10 w-[82%] rounded-[32px] bg-brand" />
              <div
                aria-hidden
                className="absolute -left-4 top-24 h-24 w-24 rounded-full border-2 border-dashed border-white/30"
              />
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.5)]">
                <img
                  src={images.about}
                  alt="Bungalow built by Z&M Buildcon"
                  className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>

              {/* location badge */}
              <div className="absolute left-0 top-16 flex animate-floaty items-center gap-3 rounded-2xl border border-white/10 bg-[#141414] px-4 py-3 shadow-xl">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-black">
                  <FiMapPin size={18} />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.1em] text-neutral-400">Based in</span>
                  <span className="block text-[14px] font-semibold leading-tight">Ratanpur Kheda, Gujarat</span>
                </span>
              </div>

              {/* secondary image */}
              <div className="absolute -right-2 bottom-2 hidden h-40 w-40 overflow-hidden rounded-3xl border-[6px] border-black shadow-xl sm:block">
                <img src={sampleHomes[0].image} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>

              {/* stat badge */}
              <div className="absolute bottom-0 left-12 rounded-2xl border border-white/20 bg-black px-6 py-4 text-white shadow-xl">
                <div className="text-[34px] font-medium leading-none text-brand">100%</div>
                <div className="mt-1 text-[12px] text-white/75">Transparent pricing</div>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal from="right">
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[12px] font-medium text-black">
              Who we are
            </span>
            <h2 className="mt-5 text-[34px] font-medium leading-[1.1] tracking-tight text-white sm:text-[50px]">
              We build homes and spaces that{" "}
              last
            </h2>
            <p className="mt-6 text-[16px] leading-[1.75] text-neutral-400">
              {company.name} is based in Ratanpur Kheda, Gujarat. We design and build bungalows, interiors and
              complete lock and key projects, and we also guide clients as project consultants before they start
              building.
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-neutral-400">
              Our approach is simple: honest advice, clear cost, quality material and a team that stays with you
              from the first plan until the day you receive the keys.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Turnkey delivery", "Vastu-friendly design", "Quality materials", "Clear, fair pricing"].map((f, i) => (
                <div
                  key={f}
                  className="group flex items-center gap-3 rounded-2xl bg-[#1f1f1f] px-4 py-3.5 transition duration-300 hover:-translate-y-0.5 hover:bg-brand hover:text-black"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-black transition group-hover:bg-black group-hover:text-brand">
                    <FiCheck size={16} strokeWidth={3} />
                  </span>
                  <span className="text-[15px] font-semibold">{f}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-black transition-all hover:gap-3"
              >
                Talk to our team <FiArrowUpRight className="transition group-hover:rotate-45" />
              </Link>
              <a
                href={`tel:+${company.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-[15px] font-semibold text-white transition hover:border-brand hover:bg-brand hover:text-black"
              >
                <FiPhoneCall /> {company.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-black p-2 sm:p-3">
        <div className="grid gap-3 lg:grid-cols-12">
          {/* Mission */}
          <Reveal from="left" className="lg:col-span-5">
            <div className="group relative flex h-full min-h-[560px] flex-col justify-between overflow-hidden rounded-[22px] bg-[#141414] p-7 text-white sm:rounded-[28px] sm:p-10">
              <div aria-hidden className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
              {/* concentric rings */}
              <div aria-hidden className="pointer-events-none absolute -right-28 -top-28 transition duration-700 group-hover:rotate-12 group-hover:scale-105">
                <div className="grid h-[380px] w-[380px] place-items-center rounded-full border border-white/10">
                  <div className="grid h-[280px] w-[280px] place-items-center rounded-full border border-white/10">
                    <div className="grid h-[180px] w-[180px] place-items-center rounded-full border border-brand/40">
                      <div className="h-[80px] w-[80px] rounded-full bg-brand/30" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-black transition duration-500 group-hover:rotate-6">
                  <FiTarget size={22} />
                </span>
                <span className="rounded-full border border-white/20 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/80">
                  Our Mission
                </span>
              </div>

              <div className="relative mt-24">
                <h3 className="text-[34px] font-medium leading-[1.08] tracking-tight sm:text-[46px]">
                  Build with <span className="text-brand">honesty</span>, deliver on time
                </h3>
                <p className="mt-5 max-w-[460px] text-[15px] leading-[1.7] text-white/65">
                  To make building a home simple, transparent and stress-free by delivering quality
                  construction, honest pricing and on-time handover to every client.
                </p>

                <ol className="mt-8">
                  {["Quality construction", "Honest pricing", "On-time handover"].map((pt, i) => (
                    <li
                      key={pt}
                      className="group/item flex items-center gap-4 border-t border-white/10 py-4 transition-all duration-300 hover:pl-3"
                    >
                      <span className="text-[13px] font-semibold text-brand">0{i + 1}</span>
                      <span className="text-[16px] font-medium">{pt}</span>
                      <FiArrowUpRight className="ml-auto text-white/30 transition group-hover/item:rotate-45 group-hover/item:text-brand" />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>

          {/* Vision + promise */}
          <div className="grid gap-3 lg:col-span-7 lg:grid-rows-[1fr_auto]">
            <Reveal from="right" delay={120}>
              <div className="group relative h-full overflow-hidden rounded-[22px] bg-brand p-7 text-black sm:rounded-[28px] sm:p-10">
                <div aria-hidden className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/40 blur-3xl" />
                {/* eye graphic */}
                <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-20 transition duration-700 group-hover:scale-110">
                  <div className="grid h-[340px] w-[340px] place-items-center rounded-full border border-black/10">
                    <div className="grid h-[240px] w-[240px] place-items-center rounded-full border border-black/15">
                      <div className="grid h-[140px] w-[140px] place-items-center rounded-full bg-black/10">
                        <FiEye className="h-14 w-14 text-black/40" strokeWidth={1.3} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-black text-brand transition duration-500 group-hover:rotate-6">
                    <FiEye size={22} />
                  </span>
                  <span className="rounded-full border border-black/25 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em]">
                    Our Vision
                  </span>
                </div>

                <h3 className="relative mt-10 max-w-[520px] text-[34px] font-medium leading-[1.08] tracking-tight sm:text-[46px]">
                  Gujarat&apos;s most trusted builder
                </h3>
                <p className="relative mt-5 max-w-[480px] text-[15px] leading-[1.7] text-black/75">
                  To become Gujarat&apos;s most trusted name in construction and turnkey projects, known for
                  quality work and long-term relationships with our clients.
                </p>

                <div className="relative mt-7 flex flex-wrap gap-2">
                  {["Trusted name", "Quality-first work", "Lifelong relationships"].map((pt) => (
                    <span
                      key={pt}
                      className="rounded-full bg-black px-4 py-2 text-[13px] font-medium text-white transition hover:-translate-y-0.5"
                    >
                      {pt}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal from="right" delay={240}>
              <Link
                href="/contact"
                className="group relative flex items-center justify-between gap-6 overflow-hidden rounded-[22px] bg-[#1f1f1f] p-6 transition duration-500 hover:bg-[#262626] sm:rounded-[28px] sm:p-8"
              >
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-neutral-500">
                    Our promise
                  </p>
                  <p className="mt-2 text-[22px] font-medium leading-tight tracking-tight sm:text-[28px]">
                    Quality you can see.
                    <br />
                    Prices you can trust.
                  </p>
                </div>
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-black transition duration-500 group-hover:rotate-45 group-hover:bg-brand group-hover:text-black">
                  <FiArrowUpRight size={26} />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-black p-2 sm:p-3">
        <div
          className="relative overflow-hidden rounded-[22px] bg-[#141414] px-4 py-12 sm:rounded-[28px] sm:px-8 sm:py-20 lg:px-12"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        >
          <div aria-hidden className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand/30 blur-3xl" />

          <div className="relative mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-14">
            {/* Heading column */}
            <Reveal from="left" className="lg:sticky lg:top-28 lg:self-start">
              <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[12px] font-medium text-black">
                Our Values
              </span>
              <h2 className="mt-5 text-[36px] font-medium leading-[1.08] tracking-tight sm:text-[52px]">
                Why clients{" "}
                choose{" "}
                us
              </h2>
              <p className="mt-5 max-w-[360px] text-[15px] leading-[1.7] text-neutral-400">
                The values that guide every site, every drawing and every conversation, from the first call
                to the day we hand over your keys.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-black transition-all hover:gap-3"
              >
                Talk to our team <FiArrowUpRight className="transition group-hover:rotate-45" />
              </Link>
            </Reveal>

            {/* Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((v, i) => {
                const Icon = VALUE_ICONS[i];
                const st = VALUE_STYLES[i];
                return (
                  <Reveal key={v.title} delay={i * 120} from={i % 2 ? "right" : "up"}>
                    <div
                      className={`group relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-[24px] p-7 transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.3)] ${st.card}`}
                    >
                      <span
                        className={`pointer-events-none absolute right-5 top-3 text-[76px] font-semibold leading-none text-transparent transition duration-500 ${st.num}`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`relative grid h-14 w-14 place-items-center rounded-2xl transition duration-500 group-hover:rotate-6 ${st.badge}`}
                      >
                        <Icon size={24} />
                      </span>

                      <div className="relative mt-12 flex items-end justify-between gap-4">
                        <div>
                          <h3 className="text-[24px] font-semibold leading-tight tracking-tight">{v.title}</h3>
                          <p className={`mt-3 text-[14px] leading-[1.65] ${st.desc}`}>{v.desc}</p>
                        </div>
                        <span
                          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition duration-500 group-hover:rotate-45 ${st.arrow}`}
                        >
                          <FiArrowUpRight size={18} />
                        </span>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Testimonials />
      <CtaBand />
    </>
  );
}
