import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import FeaturedHomes from "@/components/FeaturedHomes";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import JoinCommunity from "@/components/JoinCommunity";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <FeaturedHomes />
      <Testimonials />
      <Faq />
      <JoinCommunity />
    </>
  );
}
