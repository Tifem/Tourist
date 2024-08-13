import React from 'react'
import './about.css'
import about from '../assets/img/about.jpg'
import { FaArrowRight } from 'react-icons/fa'


const AboutSection = () => {
  return (
    <>
        <div className="about-section">
            <div className='about-img'>
                <img src={about} alt="" />
            </div>
            <div className='about-text'>
              <span className='abt'>ABOUT US</span>
                <h2>Welcome to <span className='tour'>Tourist</span></h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aliquam officiis esse ea sit quae modi labore veniam velit, minima cum quidem odit accusamus delectus?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aliquam officiis esse ea sit quae modi labore veniam velit, minima cum quidem odit accusamus delectus?</p>

                <div className='about-list'>
                    <div className='list-one'>
                      <p><FaArrowRight  className='icon'/>First Class Flights</p>
                      <p> <FaArrowRight className='icon'/>5 Star Accomodations</p>
                      <p> <FaArrowRight className='icon' />150 Premium City Tours</p>
                    </div>
                    <div className='list-two'>
                      <p> <FaArrowRight className='icon'/>Handpicked Hotels</p>
                      <p> <FaArrowRight className='icon'/>Latest Model Vehicles</p>
                      <p> <FaArrowRight className='icon'/>24/7 Service</p>
                    </div>
                </div>

                <button className='btn-more'>Read More</button>
            </div>
        </div>
        
    </>
  )
}

export default AboutSection