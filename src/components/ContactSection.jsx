import React, { useEffect } from "react";
import "./contact.css";
import { MdCall, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="contact-section">
        <div className="contact-text">
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

            <h6>CONTACT US</h6>

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
          <h1>Contact For Any Query</h1>
        </div>

        <div className="query-box">
          <div
            className="query-card query-text"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <h3>Get In Touch</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              consectetur.
            </p>
            <div className="office-card">
              <div className="office-box">
                <div className="off-card">
                  <FaLocationDot className="office-icon" />
                </div>
                <div className="off-text">
                  <p>Office</p>
                  <span>123 Street, New York, USA</span>
                </div>
              </div>
              <div className="office-box">
                <div className="off-card">
                  <MdCall className="office-icon" />
                </div>
                <div className="off-text">
                  <p>Mobile</p>
                  <span>+012 3456 7890</span>
                </div>
              </div>
              <div className="office-box">
                <div className="off-card">
                  <MdEmail className="office-icon" />
                </div>
                <div className="off-text">
                  <p>Email</p>
                  <span>info@example.com</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="query-card"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6000623.759652719!2d-75.770041!3d42.74622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1722966616834!5m2!1sen!2sbd"
              allowfullscreen=""
              loading="lazy"
              className="mapp"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div
            className="query-card"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <div className="form">
              <div className="form-container">
                <input type="text" placeholder="Your  Name" />
                <input type="email" placeholder="Your  Email" />
              </div>

              <input type="text" placeholder="Subject" />

              <textarea name="" placeholder="Message"></textarea>

              <button className="Message">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
