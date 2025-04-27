import React, { useState } from 'react';
import './Navbar.css'; // We’ll create this for the underline effect

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        {/* Logo on the left */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img 
            src="/yelogo.png" 
            alt="Youth Engage Logo" 
            style={{ height: '40px', width: 'auto', marginRight: '10px' }} 
          />
          Youth Engage
        </a>

        {/* Toggler */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['Home', 'About Us', 'Team Member', 'Event', 'Session', 'Convener'].map((link) => (
              <li className="nav-item" key={link}>
                <a 
                  href="#"
                  className={`nav-link ${activeLink === link ? 'active-link' : ''}`}
                  onClick={() => handleSetActive(link)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
