import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Absolute URL is needed so WhatsApp/Facebook can fetch the share image. Set NEXT_PUBLIC_SITE_URL to your live domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  process.env.URL ||
  "http://localhost:3000";

const title = "Z&M Buildcon LLP | Construction, Bungalows, Interior & Turnkey Projects in Gujarat";
const description =
  "Z&M Buildcon LLP builds bungalows, interiors and complete lock and key projects in Gujarat. Construction and project consultancy you can trust.";
const ogImage = { url: "/og-image.png", width: 1200, height: 630, alt: "Z&M Buildcon logo" };

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Z&M Buildcon LLP",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "Z&M Buildcon LLP",
    locale: "en_IN",
    title,
    description,
    url: "/",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.url],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="w-full overflow-hidden bg-black">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
