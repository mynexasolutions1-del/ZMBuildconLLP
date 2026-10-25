import Link from "next/link";
import { FiPhoneCall, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { company } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function CtaBand({
  title = "Ready to build your dream project?",
  text = "Tell us about your plot, budget and plan. Our team will get back to you with honest advice and a clear estimate.",
}) {
  return (
    <section className="bg-white p-2 sm:p-3">
      <Reveal className="relative overflow-hidden rounded-[22px] bg-[#141414] px-6 py-12 text-white sm:rounded-[28px] sm:px-12 sm:py-16">
        <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
        <div aria-hidden className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[640px]">
            <h2 className="text-[32px] font-medium leading-[1.1] tracking-tight sm:text-[44px]">{title}</h2>
            <p className="mt-4 text-[16px] leading-snug text-white/65">{text}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:+${company.phone}`}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-[15px] font-semibold text-black transition hover:brightness-95"
            >
              <FiPhoneCall /> Call {company.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${company.phone}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-[15px] font-semibold transition hover:bg-white hover:text-black"
            >
              <FaWhatsapp size={18} /> WhatsApp us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1 rounded-full px-5 py-4 text-[15px] font-semibold text-white/80 transition hover:text-brand"
            >
              Send enquiry <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
