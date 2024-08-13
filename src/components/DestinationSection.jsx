import React, { useEffect } from 'react'
import destinationOne from "../assets/img/destination-1.jpg";
import destinationFour from "../assets/img/destination-4.jpg";
import destinationTwo from "../assets/img/destination-2.jpg";
import destinationThree from "../assets/img/destination-3.jpg";
import './destination.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const DestinationSection = () => {
    useEffect(() => {
        AOS.init({
            once:true,
        });
        AOS.refresh();

      }, []);
  return (
    <>
        <div className="destination-section">

        <div style={{display:'flex',gap:'13px', alignItems:'center'}}>
                <div style={{display:'flex' ,gap:'6px',flexDirection:'column',alignItems:'end'}}>
                    <div style={{width:'50px',height:'2px',background:'#86b817'}}></div>
                    <div style={{width:'100px',height:'3px',background:'#86b817'}}></div>
                </div>

            <h6>DESTINATION</h6>

            <div style={{display:'flex' ,gap:'6px',flexDirection:'column',alignItems:'start'}}>
                    <div style={{width:'50px',height:'2px',background:'#86b817'}}></div>
                    <div style={{width:'100px',height:'3px',background:'#86b817'}}></div>
                </div>


        </div>
        
            <h1>Popular Destination</h1>

            <div className="destination-box" >
                <div className='left' data-aos="zoom-in" data-aos-duration="800">
                    <img src={destinationOne} alt="" className='desti bigg-img ' />
                    <p className='discount'>30% OFF</p>
                    <p className='country'>Thailand</p>
                    <div className='destination'>
                        <div data-aos="zoom-in" data-aos-duration="800">
                        <img src={destinationTwo} alt=""  className='desti small-bg'/>
                        <p className='dist'>25% OFF</p>
                        <p className='ma'>Malaysia</p>

                        </div>
                        <div data-aos="zoom-in" data-aos-duration="800">
                        <img src={destinationThree} alt=""  className='desti small-bg'/>
                        <p className='dist'>35% OFF</p>
                        <p className='ma'>Australia</p>

                        </div>
                    </div>
                </div>
                <div className='right' data-aos="zoom-in" data-aos-duration="800">
                    <img src={destinationFour} alt="" className='desti  big-img' />
                    <p className='indo-dist'>20% OFF</p>
                    <p className='indo'>Indonesia</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default DestinationSection