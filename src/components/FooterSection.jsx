import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import './footer.css'
import gallery from "../assets/img/package-1.jpg";
import galleryOne from "../assets/img/package-2.jpg";
import galleryTwo from "../assets/img/package-3.jpg";
import galleryThree from "../assets/img/package-2.jpg";
import galleryFour from "../assets/img/package-3.jpg";
import galleryFive from "../assets/img/package-1.jpg";
import { FaLocationDot } from 'react-icons/fa6';
import { MdLocalPhone } from 'react-icons/md';
import { IoIosArrowForward, IoIosMail } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const FooterSection = () => {
  return (
    <>
        <div className="footer-section">
           <div className='footer-box'>
              <div className='company'>
                <h3>Company</h3>
                <ul>
                    <NavLink to ="/about" className="nav-link"><IoIosArrowForward />About us</NavLink>
                    <NavLink to ="/contact" className="nav-link"><IoIosArrowForward /> Contact us</NavLink>
                    <NavLink to ="/" className="nav-link"> <IoIosArrowForward />Privacy Policy</NavLink>
                    <NavLink to ="/" className="nav-link"> <IoIosArrowForward />Terms & Condition</NavLink>
                    <NavLink to ="/" className="nav-link"> <IoIosArrowForward />FAQs & Help</NavLink>
                </ul>
             </div> 
             <div className='contact-box'>
                <h3>Contact</h3>
                <p><FaLocationDot className='box-icon'/> 123 Street, New York, USA</p>
                <p> <MdLocalPhone  className='box-icon'/>+012 345 67890</p>
                <p><IoIosMail className='box-icon' />info@example.com</p>
                <div className='social-icon'>
                    <div className='icons twiter'><FaTwitter /></div>
                    <div className='icons facebook'><FaFacebookF /></div>
                    <div className='icons youtube'><FaYoutube /></div>
                    <div className='icons linkedin'><FaLinkedinIn/></div>
                </div>
             </div>
             <div className='gallery'>
                <h3>Gallery</h3>
                <div className='gallery-box'>
                    <img src={gallery} alt="" className='gal' />
                    <img src={galleryOne} alt=""  className='gal' />
                    <img src={galleryTwo} alt=""  className='gal' />
                    <img src={galleryThree} alt="" className='gal'  />
                    <img src={galleryFour} alt="" className='gal'  />
                    <img src={galleryFive} alt="" className='gal'  />

                </div>
             </div>
             <div className='news'>
                <h3>Newsletter</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className='email-box'>
                    <input type="text" placeholder='Your Email' className='email'/>
                    <button className='signBtn'>SignUp</button>
                </div>
             </div>
           </div>

           <div className="ft-bottom">
            <div>
                <p>(C) Tife janet, All Right Reserved. Designed by Tife Janet</p>
            </div>
            <div className='ft-links'>
                <p>Home</p>
                <p>Cookies</p>
                <p>Help</p>
                <p>FAQs</p>
            </div>
           </div>
        </div>
    </>
  )
}

export default FooterSection