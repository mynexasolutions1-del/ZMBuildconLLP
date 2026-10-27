"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiUser, FiPhone, FiCheck } from "react-icons/fi";
import { company, services } from "@/lib/data";

const budgets = ["Under ₹25 Lakh", "₹25 - 50 Lakh", "₹50 Lakh - 1 Cr", "Above ₹1 Cr"];

const input =
  "w-full rounded-2xl border border-white/10 bg-[#1f1f1f] py-4 pl-12 pr-5 text-[15px] text-white outline-none transition placeholder:text-neutral-400 hover:border-white/25 focus:border-brand focus:shadow-[0_0_0_4px_rgba(232,182,40,0.2)]";

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2.5 text-[14px] font-medium transition duration-300 ${
        active
          ? "border-brand bg-brand text-black shadow-lg"
          : "border-white/10 bg-[#1f1f1f] text-neutral-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand/15"
      }`}
    >
      {active && <FiCheck size={14} />}
      {children}
    </button>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", budget: "", message: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const pick = (k, v) => setForm((f) => ({ ...f, [k]: f[k] === v ? "" : v }));

  const text = [
    `Hello ${company.name},`,
    form.name && `My name is ${form.name}.`,
    form.service && `I am interested in: ${form.service}.`,
    form.budget && `My approximate budget: ${form.budget}.`,
    form.message,
    form.phone && `Please call me on ${form.phone}.`,
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappHref = `https://wa.me/${company.phone}?text=${encodeURIComponent(text)}`;
  const mailHref = `mailto:${company.email}?subject=${encodeURIComponent(
    `Enquiry${form.service ? ` - ${form.service}` : ""}`
  )}&body=${encodeURIComponent(text)}`;

  const onSubmit = (e) => {
    e.preventDefault();
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="relative block">
          <FiUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
          <input required value={form.name} onChange={set("name")} placeholder="Your name" className={input} />
        </label>
        <label className="relative block">
          <FiPhone className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
          <input
            required
            type="tel"
            inputMode="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="Phone number"
            className={input}
          />
        </label>
      </div>

      <div>
        <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-neutral-500">
          I am looking for
        </p>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <Chip key={s.key} active={form.service === s.title} onClick={() => pick("service", s.title)}>
              {s.title}
            </Chip>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-neutral-500">
          Approximate budget
        </p>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <Chip key={b} active={form.budget === b} onClick={() => pick("budget", b)}>
              {b}
            </Chip>
          ))}
        </div>
      </div>

      <textarea
        rows={4}
        value={form.message}
        onChange={set("message")}
        placeholder="Tell us about your project (location, plot size, timeline...)"
        className="w-full resize-none rounded-2xl border border-white/10 bg-[#1f1f1f] px-5 py-4 text-white text-[15px] outline-none transition placeholder:text-neutral-400 hover:border-white/25 focus:border-brand focus:shadow-[0_0_0_4px_rgba(232,182,40,0.2)]"
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-[15px] font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-lg hover:brightness-95 active:scale-[0.98]"
        >
          <FaWhatsapp size={19} /> Send on WhatsApp
        </button>
        <a
          href={mailHref}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-[15px] font-semibold transition hover:bg-white hover:text-black"
        >
          <FiMail /> Send by Email
        </a>
      </div>
    </form>
  );
}
