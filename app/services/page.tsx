import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MainServices from "@/components/MainServices";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import ServiceGrid from "@/components/ServiceGrid";

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
