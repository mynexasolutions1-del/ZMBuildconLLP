import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { footerColumns, company } from "@/lib/data";
import Reveal from "@/components/Reveal";

const SOCIAL_ICONS = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
};

function ContactRow({ icon: Icon, label, children, href }) {
  const Wrapper = href ? "a" : "div";
  return (
    <li>
      <Wrapper href={href} className="group flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-black transition duration-300 group-hover:scale-110">
          <Icon size={16} />
        </span>
        <span>
          <span className="block text-[14px] text-white/50">{label}</span>
          <span className="block text-[16px] leading-snug">{children}</span>
        </span>
      </Wrapper>
    </li>
  );
}

export default function Footer() {
  const socials = company.socials.filter((s) => SOCIAL_ICONS[s.name]);

  return (
    <footer id="contact" className="scroll-mt-20 bg-black p-2 sm:p-3">
      <Reveal className="rounded-[22px] bg-[#141414] px-5 pb-6 pt-10 text-white sm:rounded-[28px] sm:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_1fr_1.5fr]">
          <div>
            <img src="/logo.png" alt={company.name} className="h-24 w-auto object-contain" />
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[18px] font-semibold">{col.title}</h4>
              <ul className="mt-5 space-y-4">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[16px] text-white/60 transition hover:text-brand">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-[18px] font-semibold">Contact Us</h4>
            <ul className="mt-5 space-y-4">
              <ContactRow icon={FiMail} label="Email" href={`mailto:${company.email}`}>
                {company.email}
              </ContactRow>
              <ContactRow icon={FiPhone} label="Phone" href={`tel:+${company.phone}`}>
                {company.phoneDisplay}
              </ContactRow>
              <ContactRow icon={FiMapPin} label="Office Address">
                {company.address}
              </ContactRow>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
          {socials.length > 0 && (
            <div className="flex gap-2">
              {socials.map(({ name, href }) => {
                const Icon = SOCIAL_ICONS[name];
                return (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-[15px] text-white transition duration-300 hover:-translate-y-1 hover:bg-brand hover:text-black"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          )}
          <p className="text-[14px] text-white/50">
            Copyright © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
