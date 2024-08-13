import React from 'react'
import Nav from './Nav'
import ServiceSection from './ServiceSection'
import './service.css'
import ClientSection from './ClientSection'
import FooterSection from './FooterSection'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
     <Nav/>
     <div className="service-banner">
        <h1>Services</h1>
        <div className="service-link">
        <p><Link to="/">Home /</Link></p> 
        <p><Link to="/">Pages /</Link></p> 
        <p><Link to="/">Services</Link></p> 

        </div>
     </div>
     <ServiceSection/>
     <ClientSection/>
     <FooterSection/>
    </>
  )
}

export default Services