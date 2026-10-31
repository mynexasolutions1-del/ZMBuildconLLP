import {
  FiAward,
  FiCheck,
  FiEye,
  FiFileText,
  FiHome,
  FiKey,
  FiLayers,
  FiList,
  FiMap,
  FiMaximize,
  FiPackage,
  FiPieChart,
  FiTrendingDown,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";
import Reveal from "@/components/Reveal";
import { projectServiceGroups, serviceEngagement } from "@/lib/data";

const SERVICE_ICONS = {
  "01": FiUsers,
  "02": FiMap,
  "03": FiMaximize,
  "04": FiPieChart,
  "05": FiList,
  "06": FiFileText,
  "07": FiUserCheck,
  "08": FiTrendingDown,
  "09": FiLayers,
  "10": FiEye,
  "11": FiHome,
  "12": FiAward,
  "13": FiKey,
};

// "A, B and C." -> ["A", "B", "C"], so the deliverables read as scannable chips (wording unchanged).
const toChips = (text) => {
  const parts = text.replace(/\.$/, "").split(", ");
  const last = parts.pop();
  const i = last.lastIndexOf(" and ");
  const tail = i > 0 ? [last.slice(0, i), last.slice(i + 5)] : [last];
  return [...parts, ...tail].map((c) => c.charAt(0).toUpperCase() + c.slice(1));
};

/* Project related services: every stage and service is visible at once. Footer links jump to a stage via #group-id. */
export default function ProjectServices() {
  return (
    <div>
      <nav aria-label="Project stages" className="flex flex-wrap justify-center gap-2">
        {projectServiceGroups.map((g, i) => (
          <a
            key={g.id}
            href={`#${g.id}`}
            className="rounded-full bg-white/10 px-4 py-2 text-[13px] font-medium text-white/80 transition hover:bg-brand hover:text-black"
          >
            <span className="mr-1.5 text-brand">{i + 1}</span>
            {g.title}
          </a>
        ))}
      </nav>

      <div className="relative mt-12 space-y-14">
        {/* timeline rail joining the stages (desktop) */}
        <div
          aria-hidden
          className="absolute bottom-0 left-[21px] top-2 hidden w-px bg-gradient-to-b from-brand via-brand/30 to-transparent sm:block"
        />
        {projectServiceGroups.map((g, gi) => (
          <section key={g.id} id={g.id} className="relative scroll-mt-28 sm:pl-16">
            <span
              aria-hidden
              className="absolute left-0 top-0 hidden h-11 w-11 place-items-center rounded-full bg-brand text-[16px] font-semibold text-black ring-8 ring-[#141414] sm:grid"
            >
              {gi + 1}
            </span>
            <Reveal className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand text-[16px] font-semibold text-black sm:hidden">
                {gi + 1}
              </span>
              <div className="min-w-0">
                <h3 className="text-[20px] font-semibold leading-tight tracking-tight sm:text-[24px]">{g.title}</h3>
                <p className="mt-0.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-neutral-500">
                  Services {g.items[0].no} - {g.items[g.items.length - 1].no}
                </p>
              </div>
              <span aria-hidden className="hidden h-px flex-1 bg-white/10 sm:block" />
              <span className="hidden shrink-0 rounded-full bg-white/10 px-3.5 py-1.5 text-[12px] font-semibold text-neutral-300 sm:block">
                {g.items.length} services
              </span>
            </Reveal>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {g.items.map((item, i) => (
                <Reveal key={item.no} delay={(i % 2) * 100}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/5 bg-gradient-to-b from-[#242424] to-[#1c1c1c] p-6 transition duration-500 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] sm:p-7">
                    <span
                      aria-hidden
                      className="absolute bottom-7 left-0 top-7 w-1 rounded-r-full bg-brand/0 transition duration-500 group-hover:bg-brand"
                    />

                    {(() => {
                      const Icon = SERVICE_ICONS[item.no] || FiPackage;
                      return (
                        <div className="flex items-center gap-4">
                          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand ring-1 ring-brand/30 transition duration-500 group-hover:rotate-6 group-hover:bg-brand group-hover:text-black">
                            <Icon size={24} />
                          </span>
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                              Service {item.no}
                            </p>
                            <h4 className="mt-1 text-[18px] font-semibold leading-snug tracking-tight sm:text-[20px]">
                              {item.title}
                            </h4>
                          </div>
                        </div>
                      );
                    })()}

                    <p className="mt-4 max-w-[62ch] text-[14.5px] leading-[1.75] text-neutral-400">{item.desc}</p>

                    <div className="mt-auto pt-6">
                      <div className="border-t border-white/10 pt-4">
                        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
                          <FiPackage size={14} /> Key deliverables
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {toChips(item.deliverables).map((c) => (
                            <li
                              key={c}
                              className="flex items-center gap-1.5 rounded-full bg-black/40 py-1.5 pl-2.5 pr-3.5 text-[13px] font-medium text-neutral-100 ring-1 ring-white/10"
                            >
                              <FiCheck size={13} strokeWidth={3} className="shrink-0 text-brand" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Reveal className="mt-12">
        <div className="rounded-[24px] border border-white/10 bg-[#1a1a1a] p-6 sm:p-8">
          <h3 className="text-[22px] font-semibold tracking-tight sm:text-[26px]">Service Engagement</h3>
          <p className="mt-3 max-w-[900px] text-[15px] leading-[1.65] text-neutral-300">{serviceEngagement.intro}</p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {serviceEngagement.notes.map((n) => (
              <li
                key={n}
                className="flex items-start gap-3 rounded-2xl bg-[#1f1f1f] p-4 text-[14px] leading-snug text-neutral-400"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-black">
                  <FiCheck size={12} strokeWidth={3} />
                </span>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
