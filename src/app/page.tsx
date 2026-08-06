import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    
    <main className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Contact />
    </main>
  );
}