import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Courses from "@/components/Courses";
import Program from "@/components/Program";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Financing from "@/components/Financing";
import Registration from "@/components/Registration";
import InfoRequest from "@/components/InfoRequest";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import CtaFinal from "@/components/CtaFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Courses />
      <Program />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Financing />
      <Registration />
      <InfoRequest />
      <Contact />
      <Location />
      <CtaFinal />
    </>
  );
}