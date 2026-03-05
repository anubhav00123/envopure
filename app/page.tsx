import type { Metadata } from "next";
import About from "@/components/About";
// import Contact from "@/components/Contact";
import ContactUsPage from "@/components/ContactUsPage";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhoWeAre from "@/components/WhoWeAre";

export const metadata: Metadata = {
  title: "Best Pest Control Services in Noida NCR | Envopure",
  description:
    "Envopure provides professional pest control in Noida NCR with termite treatment, cockroach control, bed bug treatment, and rodent management for homes and businesses.",
  keywords: [
    "pest control services noida",
    "best pest control noida ncr",
    "termite treatment noida",
    "cockroach control services",
    "bed bug treatment noida",
    "rodent control noida",
    "envopure pest control",
  ],
  alternates: {
    canonical: "https://www.envopure.in",
  },
};

export default function EnvopurePage() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Services />

      <Features />
      <WhoWeAre />

      <Process />
      <FAQ />
      <Testimonials />
      <ContactUsPage titleAs="h2" />
      <Footer />
    </main>
  );
}
