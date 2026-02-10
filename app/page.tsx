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
      <ContactUsPage />
      <Footer />
    </main>
  );
}
