"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import { PANEL } from "@/components/ProjectCard";
import { company, faqs, whatsappLink } from "@/lib/data";

const ASK = `Hello ${company.name}, I have a question about your services. Please get in touch with me.`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-black p-2 sm:p-3">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div
        className="grid gap-10 rounded-[22px] px-4 py-12 sm:rounded-[28px] sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16 lg:px-12"
        style={{ background: PANEL }}
      >
        <Reveal from="left" className="lg:sticky lg:top-28 lg:self-start">
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[12px] font-medium text-black">FAQ</span>
          <h2 className="mt-5 text-[34px] font-medium leading-[1.08] tracking-tight sm:text-[48px]">
            Questions?
            <br />
            We have <span className="text-brand">answers.</span>
          </h2>
          <p className="mt-4 max-w-[340px] text-[15px] leading-relaxed text-neutral-400">
            Quick answers about our services, approvals, cost and how we work. Still unsure? Ask us directly.
          </p>
          <a
            href={whatsappLink(ASK)}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-[15px] font-semibold text-black transition hover:-translate-y-0.5 hover:brightness-95"
          >
            <FaWhatsapp size={20} /> Ask on WhatsApp
          </a>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={(i % 5) * 70}>
                <div
                  className={`overflow-hidden rounded-2xl border transition duration-300 ${
                    isOpen ? "border-brand/50 bg-[#1f1f1f]" : "border-white/10 bg-[#1a1a1a] hover:border-white/25"
                  }`}
                >
                  <h3>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="text-[16px] font-semibold leading-snug sm:text-[17px]">{f.q}</span>
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition duration-300 ${
                          isOpen ? "rotate-45 bg-brand text-black" : "bg-white/10 text-white"
                        }`}
                      >
                        <FiPlus size={18} />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-${i}`}
                    role="region"
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-[15px] leading-[1.7] text-neutral-400 sm:px-6">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
