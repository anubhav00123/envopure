import type { Metadata } from "next";
import ContacUsPage from '@/components/ContactUsPage'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export const metadata: Metadata = {
  title: "Contact Envopure | Book Pest Control Service in Noida",
  description:
    "Contact Envopure for fast and reliable pest control services in Noida NCR. Book termite treatment, cockroach control, and emergency pest inspection.",
  keywords: [
    "contact pest control noida",
    "book pest control service",
    "envopure contact number",
    "emergency pest control noida",
    "termite inspection booking",
  ],
  alternates: {
    canonical: "https://www.envopure.in/contact",
  },
};

const page = () => {
  return (
    <>
     <Navbar />
     
        <ContacUsPage titleAs="h1" />    
        <Footer/>
    </>
  )
}

export default page