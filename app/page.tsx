import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Pillars from "@/components/Pillars";
import Gallery from "@/components/Gallery";
import SponsorCTA from "@/components/SponsorCTA";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
   

      <main>
        <Hero />
        <About />
        <Schedule />
        <Pillars />
        <Gallery />
        <SponsorCTA/>
        <Sponsors/>
      </main>
      
    </>
  );
}