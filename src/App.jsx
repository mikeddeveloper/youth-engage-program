import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import './App.css';

const App = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Empowering Youth", "Building Leaders", "Creating Impact"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <Navbar />

      {/* Background Video Section */}
      <div className="video-section">
        <video autoPlay muted loop className="background-video">
          <source src="/ye video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay-text">
          <h1>{texts[currentText]}</h1>
        </div>
      </div>

      {/* About Us Section */}
      <AboutUs />
    </div>
  );
};

export default App;
