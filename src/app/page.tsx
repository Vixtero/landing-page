"use client";
import Hero from "@/app/components/Hero";
import VisionMission from "@/app/components/VisionMission";
import AboutUs from "@/app/components/AboutUs";
import OurProducts from "@/app/components/OurProducts";
import ContactUs from "@/app/components/ContactUs";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <VisionMission />
      <AboutUs />
      <OurProducts />
      <ContactUs />
    </>
  );
}
