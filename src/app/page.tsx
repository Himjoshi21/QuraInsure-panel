import Hero from "@/components/Hero/Hero";
import Trust from "@/components/Trust/Trust";
import Services from "@/components/Services/Services";
import Process from "@/components/Process/Process";
import Benefits from "@/components/Benefits/Benefits";
import Comparison from "@/components/Comparison/Comparison";
import ImageContent from "@/components/ImageContent/ImageContent";
import Testimonials from "@/components/Testimonials/Testimonials";
import Stats from "@/components/Stats/Stats";
import FAQ from "@/components/FAQ/FAQ";
import CTA from "@/components/CTA/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Process />
      <Benefits />
      <Comparison />
      <ImageContent />
      <Testimonials />
      <Stats />
      <FAQ />
      <CTA />
    </>
  );
}
