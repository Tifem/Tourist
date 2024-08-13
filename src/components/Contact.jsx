import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import './contact.css'
import ContactSection from './ContactSection'
import FooterSection from './FooterSection'

const Contact = () => {
  return (
    <>
      <Nav/>
      <div className="contact-banner">
      <h1>Contact Us</h1>
     <div className="contact-link">
     <p><Link to="/">Home /</Link></p>
      <p><Link to="/">Pages /</Link></p>
      <p><Link to="/">Contact</Link></p>
     </div>
      </div>

      <ContactSection/>
      <FooterSection/>
    </>
  )
}

export default Contact