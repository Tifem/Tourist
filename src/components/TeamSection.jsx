import React from 'react'
import teamOne from "../assets/img/team-1.jpg";
import teamTwo from "../assets/img/team-2.jpg";
import teamThree from "../assets/img/team-3.jpg";
import teamFour from "../assets/img/team-4.jpg";
import './about.css'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const TeamSection = () => {
  return (
    <>
      <div className="guide-tour">
      <div style={{display:'flex',gap:'13px', alignItems:'center'}}>
                <div style={{display:'flex' ,gap:'6px',flexDirection:'column',alignItems:'end'}}>
                    <div style={{width:'50px',height:'2px',background:'#86b817'}}></div>
                    <div style={{width:'100px',height:'3px',background:'#86b817'}}></div>
                </div>

            <h6>TRAVEL GUIDE</h6>

              <div style={{display:'flex' ,gap:'6px',flexDirection:'column',alignItems:'start'}}>
                      <div style={{width:'50px',height:'2px',background:'#86b817'}}></div>
                      <div style={{width:'100px',height:'3px',background:'#86b817'}}></div>
                  </div>


        </div>
      <h1>Meet Our Guide</h1>
      <div className="guide-box">
        <div className='team-box'>
          <img src={teamOne} alt="" className='teamm' />
          <div className='team-icons'>
            <div className='fa'><FaFacebookF className='t-icon' /></div>
            <div className='fa'><FaTwitter  className='t-icon'/></div>
            <div className='fa'><FaInstagram className='t-icon' /></div>
          </div>
            <div className='team-text'>
            <h3>Full name </h3>
            <p>Designation</p>
            </div>
        </div>
        <div className='team-box'>
          <img src={teamTwo} alt=""  className='teamm'/>
          <div className='team-icons'>
            <div className='fa'><FaFacebookF className='t-icon' /></div>
            <div className='fa'><FaTwitter  className='t-icon'/></div>
            <div className='fa'><FaInstagram className='t-icon' /></div>
          </div>
          <div className='team-text'>
            <h3>Full name </h3>
            <p>Designation</p>
            </div>
        </div>
        <div className='team-box'>
          <img src={teamThree} alt="" className='teamm'/>
          <div className='team-icons'>
            <div className='fa'><FaFacebookF className='t-icon' /></div>
            <div className='fa'><FaTwitter  className='t-icon'/></div>
            <div className='fa'><FaInstagram className='t-icon' /></div>
          </div>
          <div className='team-text'>
            <h3>Full name </h3>
            <p>Designation</p>
            </div>
        </div>
        <div className='team-box'>
          <img src={teamFour} alt="" className='teamm'/>
          <div className='team-icons'>
            <div className='fa'><FaFacebookF className='t-icon' /></div>
            <div className='fa'><FaTwitter  className='t-icon'/></div>
            <div className='fa'><FaInstagram className='t-icon' /></div>
          </div>
          <div className='team-text'>
            <h3>Full name </h3>
            <p>Designation</p>
            </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default TeamSection