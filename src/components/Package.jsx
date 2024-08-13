import React from 'react'
import Nav from './Nav'
import FooterSection from './FooterSection'
import PackageSection from './PackageSection'
import TourSection from './TourSection'
import { Link } from 'react-router-dom'

import './package.css'
import ProcessSection from './ProcessSection'


const Package = () => {
  return (
    <>
    <Nav/>
    <div className="package-banner">
      <h1>Packages</h1>
     <div className="package-link">
     <p><Link to="/">Home /</Link></p>
      <p><Link to="/">Pages /</Link></p>
      <p><Link to="/">Packages</Link></p>
     </div>
    </div>
    <PackageSection/>
    <TourSection/>
    <ProcessSection/>
    <FooterSection/>
    </>
  )
}

export default Package