import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: {
    default: "Z&M Buildcon LLP | Construction, Bungalows, Interior & Turnkey Projects in Gujarat",
    template: "%s | Z&M Buildcon LLP",
  },
  description:
    "Z&M Buildcon LLP builds bungalows, interiors and complete lock and key projects in Gujarat. Construction and project consultancy you can trust.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="w-full overflow-hidden bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
