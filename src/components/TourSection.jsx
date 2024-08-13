import React, { useEffect } from 'react'
import './tour.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TourSection = () => {
  useEffect(() => {
    AOS.init({
        once:true,
    });
    AOS.refresh();

  }, []);
  return (
    <>
      <div className="tour-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="tour-text-box" >
          <p className="booking">BOOKING</p>
          <h2>Online Booking</h2>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempora itaque, beatae ipsa sit aspernatur dolor architecto in eveniet voluptates?</p>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, officia qui ab sapiente nostrum vero libero quasi maxime dolorem vel.</p>

          <button className='form-text more-btn'>Read More</button>
        </div>

        <div className="tour-form" >
          <h2>Book A Tour</h2>

          <form action="">
            <div className="form-box">
              <div className='display'>
                <input type="text" placeholder='Your Name'  />
                <input type="email" placeholder='Your Email'  />
              </div>

                <div className='display'>
                  <input type="email" placeholder='Date & Time' />
                  
                  <select name="" id="" > 
                    <option value="">Select</option>
                    <option value="">Destination 1</option>
                    <option value="">Destination 2</option>
                    <option value="">Destination 3</option>
                  </select>
                </div>
                <textarea name="" placeholder='Special Request' className='form-text text-form'></textarea>
                
                <button className='form-text btn-now'>Book Now</button>
              </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default TourSection