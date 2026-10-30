import { FiMail, FiPhone, FiMapPin, FiArrowUpRight, FiSend, FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import MapSection from "@/components/MapSection";
import { company, banners } from "@/lib/data";

export const metadata = {
  title: "Contact Us",
  description: `Contact ${company.name} for construction, bungalow, interior, turnkey and consultancy enquiries in Gujarat.`,
};

const rows = [
  { icon: FiPhone, label: "Call us", value: company.phoneDisplay, href: `tel:+${company.phone}` },
  { icon: FaWhatsapp, label: "WhatsApp", value: "Chat with us", href: `https://wa.me/${company.phone}`, external: true },
  { icon: FiMail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: FiMapPin, label: "Office address", value: company.address },
];

const nextSteps = [
  { icon: FiSend, title: "Send your enquiry", desc: "Share your plot, plan and budget using the form or WhatsApp." },
  { icon: FiPhoneCall, title: "We call you back", desc: "Our team understands your needs and answers all your questions." },
  { icon: FiMapPin, title: "Site visit & estimate", desc: "We visit your site and give a clear, transparent estimate." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title={
          <>
            Let&apos;s talk about
            <br />
            your project
          </>
        }
        subtitle="Call, message or send an enquiry. Our team will get back to you with honest advice and a clear estimate."
        image={banners[0]}
      />

      <section className="bg-black p-2 sm:p-3">
        <div
          className="relative overflow-hidden rounded-[22px] bg-[#141414] px-3 py-10 sm:rounded-[28px] sm:px-6 sm:py-16 lg:px-8"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        >
          <div aria-hidden className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand/30 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-brand/25 blur-3xl" />

          <div className="relative mx-auto grid max-w-[1240px] gap-4 lg:grid-cols-12">
            {/* Contact details */}
            <Reveal from="left" className="lg:col-span-5">
              <div className="group relative h-full overflow-hidden rounded-[24px] bg-[#1f1f1f] p-7 text-white shadow-[0_30px_70px_-30px_rgba(0,0,0,0.25)] sm:rounded-[28px] sm:p-10">
                <span className="relative inline-block rounded-full bg-white px-4 py-1.5 text-[12px] font-medium text-black">
                  Get in touch
                </span>
                <h2 className="relative mt-5 text-[34px] font-medium leading-[1.1] tracking-tight sm:text-[42px]">
                  Let&apos;s build your dream together
                </h2>
                <p className="relative mt-4 max-w-[420px] text-[15px] leading-[1.7] text-neutral-400">
                  We love talking about new projects. Reach us on any of these and we will respond quickly.
                </p>

                <ul className="relative mt-8">
                  {rows.map((r) => {
                    const Wrapper = r.href ? "a" : "div";
                    return (
                      <li key={r.label} className="border-t border-white/10">
                        <Wrapper
                          href={r.href}
                          {...(r.external ? { target: "_blank", rel: "noreferrer" } : {})}
                          className="group/row flex items-center gap-4 py-5 transition-all duration-300 hover:pl-2"
                        >
                          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-black text-brand transition duration-300 group-hover/row:scale-110 group-hover/row:bg-brand group-hover/row:text-black">
                            <r.icon size={20} />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-[13px] text-neutral-500">{r.label}</span>
                            <span className="block break-words text-[17px] font-semibold leading-snug">{r.value}</span>
                          </span>
                          {r.href && (
                            <FiArrowUpRight className="ml-auto shrink-0 text-white/30 transition group-hover/row:rotate-45 group-hover/row:text-brand" />
                          )}
                        </Wrapper>
                      </li>
                    );
                  })}
                </ul>

                <div className="relative mt-4 flex items-center gap-3 rounded-2xl bg-[#141414] px-4 py-3.5 text-[14px] text-neutral-300">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  We usually reply within a few hours on working days.
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal from="right" delay={150} className="lg:col-span-7">
              <div className="relative h-full overflow-hidden rounded-[24px] bg-[#1f1f1f] p-6 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.25)] sm:rounded-[28px] sm:p-10">
                <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-amber-300 to-brand" />
                <h2 className="text-[28px] font-semibold tracking-tight sm:text-[34px]">Send us an enquiry</h2>
                <p className="mb-8 mt-2 text-[14px] leading-snug text-neutral-400">
                  Tell us what you need. Your message opens on WhatsApp, ready to send.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>

          {/* What happens next */}
          <div className="relative mx-auto mt-4 grid max-w-[1240px] gap-4 md:grid-cols-3">
            {nextSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <div className="group relative h-full overflow-hidden rounded-3xl bg-[#1f1f1f] p-6 transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]">
                  <span className="pointer-events-none absolute right-5 top-2 text-[72px] font-semibold leading-none text-transparent transition duration-500 [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] group-hover:[-webkit-text-stroke:1px_#e8b628]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-black text-brand transition duration-500 group-hover:rotate-6 group-hover:bg-brand group-hover:text-black">
                    <s.icon size={24} />
                  </span>
                  <h3 className="relative mt-10 text-[20px] font-semibold">{s.title}</h3>
                  <p className="relative mt-2 text-[14px] leading-[1.6] text-neutral-400">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MapSection />
    </>
  );
}
