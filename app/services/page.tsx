import type { Metadata } from "next";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MainServices from "@/components/MainServices";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import ServiceGrid from "@/components/ServiceGrid";

export const metadata: Metadata = {
  title: "Pest Control Services in Noida | Termite, Rodent & Bed Bug Control",
  description:
    "Explore Envopure pest control services in Noida including termite control, rodent control, cockroach treatment, mosquito control, and customized AMC plans.",
  keywords: [
    "pest control services noida",
    "termite control noida",
    "rodent control service",
    "bed bug treatment",
    "cockroach pest control",
    "commercial pest control noida",
    "residential pest control",
  ],
  alternates: {
    canonical: "https://www.envopure.in/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <BreadcrumbBanner
        title="Our Services"
        currentPage="Services"
        bgImage="/images/bg/1.jpg"
      />
      <MainServices />
      <ServiceGrid />
      <Process/>
      <CTA />
      <Footer/>
    </>
  );
}
