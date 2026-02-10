import About from "@/components/About";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <BreadcrumbBanner
        title="About Us"
        currentPage="About"
        bgImage="/images/bg/2.jpg"
      />
      <About/>
      <Features />
      <Services />
      <CTA />
      <Footer/>
    </>
  );
};

export default page;
