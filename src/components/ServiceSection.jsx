import React, { useEffect } from 'react'
import  './service.css'
import { FaGlobe, FaHotel, FaUser } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'
import { IoMdSettings } from 'react-icons/io'
import AOS from 'aos';
import 'aos/dist/aos.css';



const ServiceSection = () => {
    useEffect(() => {
        AOS.init({
            once:true,
        });
        AOS.refresh();

      }, []);

  const serviceData = [
    {
      id: 1,
      icon: <FaGlobe className="service-icon" />,
      name: "Worldwide Tours",
      text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia siteos ducimus debitis laborum voluptatum",
    },
    {
      id: 2,
      icon: <FaHotel className="service-icon" />,
      name: "Hotel Reservation",
      text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia siteos ducimus debitis laborum voluptatum",
    },
    {
      id: 3,
      icon: <FaUser className="service-icon" />,
      name: "Travel Guide",
      text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia siteos ducimus debitis laborum voluptatum",
    },
    {
      id: 4,
      icon: <IoMdSettings className="service-icon" />,
      name: "Event Management",
      text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia siteos ducimus debitis laborum voluptatum",
    },
    {
      id: 5,
      icon: <FaGlobe className="service-icon" />,
      name: "Worldwide Tours",
      text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia siteos ducimus debitis laborum voluptatum",
    },
    {
      id: 6,
      icon: <IoHome className="service-icon" />,
      name: "Hotel Reservation",
      text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia siteos ducimus debitis laborum voluptatum",
    },
    {
      id: 7,
      icon: <FaUser className="service-icon" />,
      name: "Travel Guide",
      text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia siteos ducimus debitis laborum voluptatum",
    },

    {
      id: 8,
      icon: <IoMdSettings className="service-icon" />,
      name: "Event Management",
      text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia siteos ducimus debitis laborum voluptatum",
    },
  ];    
  return (
    <>
      <div className="service-section">
        <div style={{ display: "flex", gap: "13px", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              gap: "6px",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <div
              style={{ width: "50px", height: "2px", background: "#86b817" }}
            ></div>
            <div
              style={{ width: "100px", height: "3px", background: "#86b817" }}
            ></div>
          </div>

          <h6>SERVICES</h6>

          <div
            style={{
              display: "flex",
              gap: "6px",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <div
              style={{ width: "50px", height: "2px", background: "#86b817" }}
            ></div>
            <div
              style={{ width: "100px", height: "3px", background: "#86b817" }}
            ></div>
          </div>
        </div>

        <h2>Our Services</h2>
        <div className="service-box">
          {serviceData.map((serve) => (
            <div
              className="service"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="200"
              key={serve.id}
            >
              {serve.icon}
              <h3>{serve.name}</h3>
              <p>{serve.text}</p>
            </div>
          ))}

          {/* <div
            className="service"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <FaHotel className="service-icon" />
            <h3>Hotel Reservation</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia sit
              eos ducimus debitis laborum voluptatum.{" "}
            </p>
          </div>
          <div
            className="service"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <FaUser className="service-icon" />
            <h3>Travel Guide</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia sit
              eos ducimus debitis laborum voluptatum.{" "}
            </p>
          </div>
          <div
            className="service"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-delay="300"
          >
            <IoMdSettings className="service-icon" />
            <h3>Event Management</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia sit
              eos ducimus debitis laborum voluptatum.{" "}
            </p>
          </div>
          <div
            className="service"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <FaGlobe className="service-icon" />
            <h3>Worldwide Tours</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia sit
              eos ducimus debitis laborum voluptatum.{" "}
            </p>
          </div>
          <div
            className="service"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <IoHome className="service-icon" />
            <h3>Hotel Reservation</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia sit
              eos ducimus debitis laborum voluptatum.{" "}
            </p>
          </div>
          <div
            className="service"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <FaUser className="service-icon" />
            <h3>Travel Guide</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia sit
              eos ducimus debitis laborum voluptatum.{" "}
            </p>
          </div>
          <div
            className="service"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <IoMdSettings className="service-icon" />
            <h3>Event Management</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia sit
              eos ducimus debitis laborum voluptatum.{" "}
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ServiceSection