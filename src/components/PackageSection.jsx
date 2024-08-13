import React, { useEffect } from 'react'
import packageOne from "../assets/img/package-1.jpg";
import packageTwo from "../assets/img/package-2.jpg";
import packageThree from "../assets/img/package-3.jpg";
import { FaLocationDot } from 'react-icons/fa6';
import { FaCalendarAlt, FaStar, FaUser } from 'react-icons/fa';
import './package.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const PackageSection = () => {
    useEffect(() => {
        AOS.init({
            once:true,
        });
        AOS.refresh();

      }, []);
  return (
    <>
    <div className="package-section">
        <div className="package-text">
            <div style={{display:'flex',gap:'13px',alignItems:'center'}}>
                <div style={{display:'flex' ,gap:'6px',flexDirection:'column',alignItems:'end'}}>
                    <div style={{width:'50px',height:'2px',background:'#86b817'}}></div>
                    <div style={{width:'100px',height:'3px',background:'#86b817'}}></div>
                </div>

                  <h6>PACKAGES</h6>

                <div style={{display:'flex' ,gap:'6px',flexDirection:'column',      alignItems:'start'}}>
                        <div style={{width:'50px',height:'2px',background:'#86b817'}}></div>
                        <div style={{width:'100px',height:'3px',background:'#86b817'}}></div>
                    </div>


                </div>   
                     <h1>Awesome Packages</h1>
             </div>

         <div className="package-container" >
            <div className='package-box' data-aos="fade-up" data-aos-duration="800">
                <img src={packageOne} alt="" />
                <div className='package-icon'>
                    <div className='p-icon first-icon'>
                    <FaLocationDot  className='star-icon'/>
                    <p>Thailand</p>
                    </div>
                    <div className='p-icon second-icon'>
                    <FaCalendarAlt className='star-icon'/>
                    <p>3 days</p>
                    </div>
                    <div className='p-icon third-icon'>
                    <FaUser className='star-icon' />
                    <p>2 Person</p>
                    </div>
                </div>
               <div className="pp">
               
                <h3>$149.00</h3>
                <div className="package-star">
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus recusandae, </p>
                <div className="package-btn">
                    <button className='read-btn'>Read More</button>
                    <button className='read '>Book Now</button>
                </div>
               </div>
            </div>
            <div className='package-box' data-aos="fade-up" data-aos-duration="800">
                <img src={packageTwo} alt="" />
                <div className='package-icon'>
                    <div className='p-icon first-icon'>
                    <FaLocationDot  className='star-icon'/>
                    <p>Thailand</p>
                    </div>
                    <div className='p-icon second-icon'>
                    <FaCalendarAlt className='star-icon'/>
                    <p>3 days</p>
                    </div>
                    <div className='p-icon third-icon'>
                    <FaUser className='star-icon' />
                    <p>2 Person</p>
                    </div>
                </div>
               <div className="pp">
               
                <h3>$139.00</h3>
                <div className="package-star">
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus recusandae, </p>
                <div className="package-btn">
                    <button className='read-btn'>Read More</button>
                    <button className='read'>Book Now</button>
                </div>
               </div>
            </div>
            <div className='package-box' data-aos="fade-up" data-aos-duration="800">
                <img src={packageThree} alt="" />
                <div className='package-icon'>
                    <div className='p-icon first-icon'>
                    <FaLocationDot  className='star-icon'/>
                    <p>Thailand</p>
                    </div>
                    <div className='p-icon second-icon'>
                    <FaCalendarAlt className='star-icon'/>
                    <p>3 days</p>
                    </div>
                    <div className='p-icon third-icon'>
                    <FaUser className='star-icon' />
                    <p>2 Person</p>
                    </div>
                </div>
               <div className="pp">
               
                <h3>$189.00</h3>
                <div className="package-star">
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus recusandae, </p>
                <div className="package-btn">
                    <button className='read-btn'>Read More</button>
                    <button className='read'>Book Now</button>
                </div>
               </div>
            </div>        
        </div>  
    </div>
    </>
  )
}

export default PackageSection