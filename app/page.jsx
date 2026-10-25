import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import FeaturedHomes from "@/components/FeaturedHomes";
import Testimonials from "@/components/Testimonials";
import JoinCommunity from "@/components/JoinCommunity";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <FeaturedHomes />
      <Testimonials />
      <JoinCommunity />
    </>
  );
}
