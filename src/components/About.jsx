import React from 'react'
import AboutSection from './AboutSection'
import { Link } from 'react-router-dom'
import './about.css'
import FooterSection from './FooterSection'

import TeamSection from './TeamSection'
import Nav from './Nav'


const About = () => {
  return (
    <>
     <Nav/>
     <div className="about-banner">
        <h1>About Us</h1>
        <p><Link to="/">Home</Link>/ <span>About</span></p>
     </div>
     <AboutSection/>
     <TeamSection/>
     <FooterSection/>

    </>
  )
}

export default About