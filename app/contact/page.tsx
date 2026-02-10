import BreadcrumbBanner from '@/components/BreadcrumbBanner'
import Contact from '@/components/Contact'
import ContacUsPage from '@/components/ContactUsPage'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
     <Navbar />
     
        <ContacUsPage/>    
        <Footer/>
    </>
  )
}

export default page