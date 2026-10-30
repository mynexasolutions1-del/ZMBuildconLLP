"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

const SWIPE_PX = 50;

/* Full-screen photo viewer: arrows, keyboard, touch swipe. `items` is [{ src, label }]. */
export default function PhotoLightbox({ items, start = 0, onClose }) {
  const [i, setI] = useState(start);
  const touchX = useRef(null);
  const n = items.length;
  const step = (d) => setI((x) => (x + d + n) % n);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [n]);

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > SWIPE_PX) step(dx < 0 ? 1 : -1);
  };

  const item = items[i];
  const arrow =
    "absolute top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-brand hover:text-black sm:h-14 sm:w-14";

  // Portal to <body>: ancestors with transforms (e.g. Reveal) would otherwise trap `fixed`.
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
      className="fixed inset-0 z-[60] grid place-items-center bg-black/95"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white transition hover:bg-brand hover:text-black"
      >
        <FiX size={22} />
      </button>
      <span className="absolute left-4 top-6 z-10 rounded-full bg-white/10 px-3 py-1 text-[13px] text-neutral-200">
        {i + 1} / {n}
      </span>

      {n > 1 && (
        <>
          <button
            onClick={(e) => (e.stopPropagation(), step(-1))}
            aria-label="Previous photo"
            className={`${arrow} left-2 sm:left-6`}
          >
            <FiChevronLeft size={26} />
          </button>
          <button
            onClick={(e) => (e.stopPropagation(), step(1))}
            aria-label="Next photo"
            className={`${arrow} right-2 sm:right-6`}
          >
            <FiChevronRight size={26} />
          </button>
        </>
      )}

      <img
        key={item.src}
        src={item.src}
        alt={item.label}
        onClick={(e) => e.stopPropagation()}
        className="h-[82vh] w-[92vw] select-none object-contain sm:w-[86vw]"
        draggable={false}
      />
      <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-[13px] text-neutral-200 backdrop-blur-md">
        {item.label}
      </span>
    </div>,
    document.body
  );
}
