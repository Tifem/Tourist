import React from 'react'
import './process.css'
import { FaDollarSign, FaGlobe, FaPlane } from 'react-icons/fa'

const ProcessSection = () => {
  return (
    <>
        <div className="process-section">
           <div className='process-text'>
           <div style={{display:'flex',gap:'13px', alignItems:'center'}}>
                <div style={{display:'flex' ,gap:'6px',flexDirection:'column',alignItems:'end'}}>
                    <div style={{width:'50px',height:'2px',background:'#86b817'}}></div>
                    <div style={{width:'100px',height:'3px',background:'#86b817'}}></div>
                </div>

            <h6>PROCESS</h6>

              <div style={{display:'flex' ,gap:'6px',flexDirection:'column',alignItems:'start'}}>
                      <div style={{width:'50px',height:'2px',background:'#86b817'}}></div>
                      <div style={{width:'100px',height:'3px',background:'#86b817'}}></div>
                  </div>


        </div>
           <h1>3 Easy Steps</h1>
           </div>

            <div className="process-container">
              <div className='process-box'>
                <div className='process-icon'><FaGlobe className='pro-icon'/></div>
                <h3>Choose A Destination</h3>

                <div style={{display:'flex',flexDirection:'column',gap:'5px',     alignItems:'center'}}>
                  <div style={{width:'70px',height:'1px',background:'#86b817'}}></div>
                  <div style={{width:'120px',height:'2px',background:'#86b817'}}></div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas culpa aperiam, a itaque delectus veritatis voluptatibus ea. Saepe, ipsum minima?</p>
              </div>

              <div className='process-box'>
                <div className='process-icon'><FaDollarSign className='pro-icon'/></div>
                <h3>Pay Online</h3>

                <div style={{display:'flex',flexDirection:'column',gap:'5px',alignItems:'center'}}>
                  <div style={{width:'70px',height:'1px',background:'#86b817'}}></div>
                  <div style={{width:'120px',height:'2px',background:'#86b817'}}></div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas culpa aperiam, a itaque delectus veritatis voluptatibus ea. Saepe, ipsum minima?</p>
              </div>

              <div className='process-box'>
                <div className='process-icon'><FaPlane  className='pro-icon'/></div>
                <h3>Fly Today</h3>

                <div style={{display:'flex',flexDirection:'column',gap:'5px',alignItems:'center'}}>
                  <div style={{width:'70px',height:'1px',background:'#86b817'}}></div>
                  <div style={{width:'120px',height:'2px',background:'#86b817'}}></div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas culpa aperiam, a itaque delectus veritatis voluptatibus ea. Saepe, ipsum minima?</p>
              </div>
            </div>
        </div>
    </>
  )
}

export default ProcessSection