"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiArrowUpRight, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { navLinks, company } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the drawer on navigation
  useEffect(() => setOpen(false), [pathname]);

  // lock page scroll + close on Escape while the drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex animate-fade-down items-center justify-between px-6 transition-all duration-300 sm:px-11 ${
          scrolled
            ? "bg-black/85 py-1.5 shadow-lg backdrop-blur-md sm:py-2"
            : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-3 sm:py-5"
        }`}
      >
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt={company.name}
            className={`w-auto object-contain transition-all duration-300 [filter:drop-shadow(0_0_2px_rgba(0,0,0,0.85))_drop-shadow(0_2px_10px_rgba(0,0,0,0.6))] ${
              scrolled ? "h-14 sm:h-16" : "h-[72px] sm:h-24"
            }`}
          />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-white/25 p-1 backdrop-blur-md md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`rounded-full px-5 py-2 text-[14px] font-medium transition ${
                isActive(link.href) ? "bg-white text-black" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full bg-brand px-6 py-2.5 text-[14px] font-semibold text-black transition hover:brightness-95 min-[400px]:block"
          >
            Get a Quote
          </Link>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full bg-white/25 text-white backdrop-blur-md transition active:scale-95 md:hidden"
          >
            <FiMenu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-[60] transition-[visibility] md:hidden ${
          open ? "visible" : "invisible delay-[500ms]"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          aria-hidden={!open}
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-[390px] flex-col overflow-y-auto overflow-x-hidden overscroll-contain rounded-l-[32px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-[#141414] text-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-l-[32px]">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/25 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />
          </div>

          {/* top bar */}
          <div className="relative flex items-center justify-between px-6 pb-2 pt-5">
            <img src="/logo.png" alt={company.name} className="h-14 w-auto object-contain" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition active:scale-95 hover:bg-brand hover:text-black"
            >
              <FiX size={22} />
            </button>
          </div>

          {/* links */}
          <nav className="relative mt-2 px-3">
            {navLinks.map((link, i) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${150 + i * 70}ms` : "0ms" }}
                  className={`group flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-500 ${
                    open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  } ${active ? "bg-white/[0.07]" : "hover:bg-white/[0.05]"}`}
                >
                  <span className={`text-[12px] font-semibold ${active ? "text-brand" : "text-white/35"}`}>
                    0{i + 1}
                  </span>
                  <span
                    className={`text-[26px] font-medium leading-none tracking-tight transition ${
                      active ? "text-brand" : "text-white group-hover:text-brand"
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`ml-auto grid h-9 w-9 place-items-center rounded-full border transition duration-300 group-hover:rotate-45 ${
                      active
                        ? "border-brand bg-brand text-black"
                        : "border-white/15 text-white/50 group-hover:border-brand group-hover:text-brand"
                    }`}
                  >
                    <FiArrowUpRight size={16} />
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* contact + CTA */}
          <div
            style={{ transitionDelay: open ? "550ms" : "0ms" }}
            className={`relative mt-auto space-y-3 px-6 pb-6 pt-5 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div className="space-y-2.5 rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-[14px]">
              <a href={`tel:+${company.phone}`} className="flex items-center gap-3 text-white/85 transition hover:text-brand">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-black">
                  <FiPhone size={15} />
                </span>
                {company.phoneDisplay}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 break-all text-white/85 transition hover:text-brand">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-black">
                  <FiMail size={15} />
                </span>
                {company.email}
              </a>
              <p className="flex items-start gap-3 text-white/60">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-brand">
                  <FiMapPin size={15} />
                </span>
                <span className="pt-0.5 leading-snug">{company.address}</span>
              </p>
            </div>

            <div className="flex gap-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-5 py-4 text-[15px] font-semibold text-black transition active:scale-95"
              >
                Get a Quote <FiArrowUpRight />
              </Link>
              <a
                href={`https://wa.me/${company.phone}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-[54px] w-[54px] shrink-0 place-items-center rounded-full border border-white/20 transition hover:bg-white hover:text-black active:scale-95"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
