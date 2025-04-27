import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="about-us-section">
      
      {/* Top Bar: Logo + About Us */}
      <div className="about-header container d-flex align-items-center mb-5" data-aos="fade-down">
        <img src="/yelogo.png" alt="Youth Engage Logo" className="about-logo me-3" />
        <div>
          <h2 className="about-title">About Us</h2>
          <div className="underline"></div>
        </div>
      </div>

      {/* Content Row */}
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-md-6" data-aos="fade-right">
            <h3 className="section-title">About Youth Engage</h3>
            <p className="section-description">
              Youth Engage is a dynamic platform committed to empowering young people through mentorship, leadership development, capacity building, and transformational programs.
            </p>
            <p className="section-description">
              Our goal is to nurture, inspire, and equip youths to maximize their potentials and create sustainable impact wherever they are positioned.
            </p>
          </div>

          <div className="col-md-6 text-center" data-aos="fade-left">
            <img 
              src="/about-image.jpg" 
              alt="About Youth Engage" 
              className="img-fluid about-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
