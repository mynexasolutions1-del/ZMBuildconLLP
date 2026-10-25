"use client";

import { useEffect, useRef, useState } from "react";
import { FiCheck } from "react-icons/fi";

// On mobile the fields sit in a 2-column grid (location | type / budget), so alignment differs below `sm`.
const ALIGN = {
  left: "left-0",
  center: "right-0 sm:left-1/2 sm:right-auto sm:-translate-x-1/2",
  right: "left-0 sm:left-auto sm:right-0",
};

export default function SearchSelect({ icon: Icon, label, placeholder, options, value, onChange, align = "left" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const selected = options.find((o) => o.value === value);
  const hasValue = value !== null && value !== undefined && value !== "";

  return (
    <div ref={ref} className="relative min-w-0 flex-1">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="block w-full min-w-0 text-left"
      >
        <span className="flex items-center gap-1 text-[13px] font-semibold text-white sm:text-[14px]">
          {label}
          <svg
            width="9"
            height="6"
            viewBox="0 0 8 5"
            fill="none"
            className={`ml-auto shrink-0 transition-transform duration-200 sm:ml-3 ${open ? "rotate-180" : ""}`}
          >
            <path d="M1 1l3 3 3-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </span>
        <span
          className={`mt-1 flex items-center gap-1 text-[12px] sm:text-[13px] ${
            hasValue ? "text-brand" : "text-white/40"
          }`}
        >
          <Icon className="shrink-0 sm:hidden" size={12} />
          <span className="truncate">{hasValue ? selected?.label : placeholder}</span>
        </span>
      </button>

      <div
        role="listbox"
        className={`absolute bottom-full z-30 mb-5 w-[220px] origin-bottom overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/95 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-200 ${
          ALIGN[align]
        } ${open ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"}`}
      >
        <div className="max-h-[260px] overflow-y-auto [scrollbar-width:thin]">
          {options.map((o) => {
            const active = o.value === value;
            return (
              <button
                key={String(o.value)}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => {
                  onChange(o.value);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-left text-[14px] transition ${
                  active ? "bg-brand/15 text-brand" : "text-white/85 hover:bg-white/10 hover:text-white"
                }`}
              >
                {o.label}
                {active && <FiCheck size={15} />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
