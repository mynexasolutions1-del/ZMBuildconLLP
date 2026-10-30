import Link from "next/link";
import { FiArrowUpRight, FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import { company, whatsappLink } from "@/lib/data";

const MESSAGE = `Hello ${company.name}, I would like to join your community and know more about your projects. Please get in touch with me.`;

export default function JoinCommunity() {
  return (
    <section className="overflow-hidden bg-black px-4 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-20 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="text-[12.5vw] font-medium uppercase leading-[0.92] tracking-[-0.05em] text-white min-[1500px]:text-[188px]">
          <div className="flex items-center justify-between">
            <Reveal from="left">
              <h2>Join Our</h2>
            </Reveal>
            <Reveal from="scale" delay={350}>
              <a
                href={whatsappLink(MESSAGE)}
                target="_blank"
                rel="noreferrer"
                aria-label="Join our community on WhatsApp"
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

        <Reveal delay={300} className="mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[460px] text-[15px] leading-relaxed text-neutral-400 sm:text-[16px]">
            Talk to the {company.name} team about your plot, planning and budget. Message us on WhatsApp and we will
            get back to you.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappLink(MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-[15px] font-semibold text-black transition hover:-translate-y-0.5 hover:brightness-95"
            >
              <FaWhatsapp size={20} /> Join on WhatsApp
            </a>
            <a
              href={`tel:+${company.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-[15px] font-semibold text-white transition hover:border-brand hover:bg-brand hover:text-black"
            >
              <FiPhoneCall /> {company.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-[15px] font-semibold text-white transition-all hover:gap-3 hover:bg-white hover:text-black"
            >
              Contact us <FiArrowUpRight className="transition group-hover:rotate-45" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
