"use client";

import { useEffect, useRef, useState } from "react";

const FROM = {
  up: "translate-y-10",
  left: "-translate-x-12",
  right: "translate-x-12",
  scale: "scale-95",
  none: "",
};

/* Fades/slides its children in the first time they scroll into view. */
export default function Reveal({ children, className = "", delay = 0, from = "up", as: Tag = "div" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out ${
        shown ? "translate-x-0 translate-y-0 scale-100 opacity-100" : `opacity-0 ${FROM[from]}`
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
