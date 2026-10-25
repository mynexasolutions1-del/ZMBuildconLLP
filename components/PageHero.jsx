import Link from "next/link";

/* Inner-page banner: same rounded, framed look as the home hero. */
export default function PageHero({ crumb, title, subtitle, image, position = "50% 40%" }) {
  return (
    <section className="bg-white p-2 sm:p-3">
      <div className="relative isolate flex min-h-[440px] items-end overflow-hidden rounded-[22px] bg-neutral-800 sm:min-h-[500px] sm:rounded-[28px]">
        <img
          src={image}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full animate-kenburns object-cover"
          style={{ objectPosition: position }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/55 via-55% to-black/35" />

        <div className="w-full animate-fade-up px-5 pb-10 pt-40 sm:px-10 sm:pb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/45 px-4 py-1.5 text-[13px] text-white backdrop-blur-md">
            <Link href="/" className="transition hover:text-brand">
              Home
            </Link>
            <span className="text-white/50">/</span>
            <span className="text-brand">{crumb}</span>
          </div>
          <h1 className="mt-5 text-[42px] font-light leading-[1.05] tracking-[-0.03em] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.6)] sm:text-[60px] lg:text-[76px]">
            {title}
          </h1>
          <p className="mt-4 max-w-[560px] text-[16px] leading-snug text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.7)] sm:text-[17px]">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
