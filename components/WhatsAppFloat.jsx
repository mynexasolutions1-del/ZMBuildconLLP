import { FaWhatsapp } from "react-icons/fa";
import { company, whatsappLink } from "@/lib/data";

const MESSAGE = `Hello ${company.name}, I visited your website and would like to know more about your services. Please get in touch with me.`;

/* Floating WhatsApp button, shown on every page. */
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(MESSAGE)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
        <FaWhatsapp size={32} />
      </span>
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-black opacity-0 shadow-lg transition duration-300 group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
