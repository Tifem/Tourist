import React from 'react'
import './home.css'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <>
     
        <div className="hero-section">
          {/* <Navbar/> */}
            <h1>Enjoy Your Vacation With Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. .</p>
            <div className="search">
                <input type="text" placeholder='E.g: Thialand'  className='search-box'/>
                <button className='btn'>Search</button>
            </div>
        </div>
    </>
  )
}

export default HeroSection