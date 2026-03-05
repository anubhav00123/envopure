import type { Metadata } from "next";
import About from "@/components/About";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import React from "react";

export const metadata: Metadata = {
  title: "About Envopure | Trusted Pest Control Company in Noida",
  description:
    "Learn about Envopure, a trusted pest control company in Noida offering eco-friendly and effective pest management solutions for homes and commercial spaces.",
  keywords: [
    "about envopure",
    "pest control company noida",
    "trusted exterminator noida",
    "eco friendly pest management",
    "professional pest experts",
  ],
  alternates: {
    canonical: "https://www.envopure.in/about",
  },
};

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
