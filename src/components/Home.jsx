import React from 'react'
import './home.css'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ServiceSection from './ServiceSection'
import DestinationSection from './DestinationSection'
import PackageSection from './PackageSection'
import FooterSection from './FooterSection'
import TourSection from './TourSection'
import ClientSection from './ClientSection'
import TeamSection from './TeamSection'
import ProcessSection from './ProcessSection'
import Nav from './Nav'

const Home = () => {
  return (

    <>
     {/* <Navbar/> */}
     <Nav/>
     <HeroSection/>
     <AboutSection/>
     <ServiceSection/>
     <DestinationSection/>
     <PackageSection/>
     <TourSection/>
     <ProcessSection/>
     <TeamSection/>
     <ClientSection/>
     <FooterSection/>
  
    </>
  )
}

export default Home