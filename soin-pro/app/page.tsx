import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import Practitioners from "@/components/Practitioners";
import About from "@/components/About";
import ConsultationProcess from "@/components/ConsultationProcess";
import Testimonials from "@/components/Testimonials";
import OpeningHours from "@/components/OpeningHours";
import Booking from "@/components/Booking";
import PracticalInfo from "@/components/PracticalInfo";
import Location from "@/components/Location";
import EmergencyNotice from "@/components/EmergencyNotice";
import Contact from "@/components/Contact";
import CtaFinal from "@/components/CtaFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <Specialties />
      <Practitioners />
      <About />
      <ConsultationProcess />
      <Testimonials />
      <OpeningHours />
      <Booking />
      <PracticalInfo />
      <Location />
      <EmergencyNotice />
      <Contact />
      <CtaFinal />
    </>
  );
}