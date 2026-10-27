import { stats } from "@/lib/data";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

export default function Stats() {
  return (
    <section className="px-4 pb-14 pt-8 sm:px-8 sm:pb-16 sm:pt-14 lg:px-10">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 120} className="flex justify-center">
            <div className="group relative flex flex-col items-center sm:inline-block sm:pr-12">
              {/* number + plus */}
              <div className="relative inline-block pr-7 sm:pr-0">
                <span className="text-[64px] font-light leading-none tracking-tighter text-neutral-700 transition-colors duration-500 group-hover:text-neutral-500 sm:text-[96px] lg:text-[110px]">
                  <CountUp to={parseInt(s.value, 10)} suffix={s.value.replace(/[0-9]/g, "")} />
                </span>
                <sup className="absolute right-0 top-1 text-2xl font-medium leading-none text-brand sm:-right-6 sm:top-2 sm:text-3xl">
                  +
                </sup>
              </div>
              {/* label: under the number on mobile, overlapping it from sm up */}
              <span className="mt-2 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-[12px] font-medium text-black transition duration-300 group-hover:-translate-y-1 sm:absolute sm:-right-16 sm:bottom-2 sm:mt-0 sm:text-[13px]">
                {s.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
