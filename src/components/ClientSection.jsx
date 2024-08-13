import React from 'react'
import teamOne from "../assets/img/testimonial-1.jpg";
import teamTwo from "../assets/img/testimonial-4.jpg";
import teamThree from "../assets/img/testimonial-2.jpg";
import './service.css'


const ClientSection = () => {
  return (
    <>
        <div className="client-section">
        <div style={{display:'flex',gap:'13px', alignItems:'center'}}>
                <div style={{display:'flex' ,gap:'6px',flexDirection:'column',alignItems:'end'}}>
                    <div style={{width:'50px',height:'2px',background:'#86b817'}}></div>
                    <div style={{width:'100px',height:'3px',background:'#86b817'}}></div>
                </div>

            <h6>TESTIMONIAL</h6>

              <div style={{display:'flex' ,gap:'6px',flexDirection:'column',alignItems:'start'}}>
                      <div style={{width:'50px',height:'2px',background:'#86b817'}}></div>
                      <div style={{width:'100px',height:'3px',background:'#86b817'}}></div>
                  </div>


        </div>
            <h1>Our Client Says!!!</h1>

            <div className='client-container'>
                <div className='client-box'>
                    <img src={teamOne} alt=""  className='team'/>
                    <div className='client-text'>
                    <h3>Mary John</h3>
                    <span>New York, USA</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetu adipisicing elit. Unde nulla quaerat ad non, autem soluta Lorem ipsum dolor sit amet .  </p>
                </div>
                <div className='client-box'>
                  <img src={teamTwo} alt="" className='team'/>
                   <div className='client-text'>
                   <h3>Alex Sophia</h3>
                   <span>New York, USA</span>
                   </div>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla quaerat ad non, autem soluta Lorem ipsum dolor sit amet .  </p>
                </div>
                <div className='client-box'>
                    <img src={teamThree} alt="" className='team'/>
                  <div className='client-text'>
                  <h3>John Doe</h3>
                  <span>New York, USA</span>
                  </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla quaerat ad non, autem soluta Lorem ipsum dolor sit amet .  </p>
                </div>
                <div className='client-box'>
                    <img src={teamThree} alt="" className='team'/>
                  <div className='client-text'>
                  <h3>John Doe</h3>
                  <span>New York, USA</span>
                  </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla quaerat ad non, autem soluta Lorem ipsum dolor sit amet .  </p>
                </div>
               
            </div>
        </div>
    </>
  )
}

export default ClientSection