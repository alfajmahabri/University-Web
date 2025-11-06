import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Earn Bachelor's in Engineering, and get ready to help solve the world's greatest challenges</h1>
        <p>Roll up your sleeves and work alongside with brightest students, recognized teachers and expert industry partners.</p>
        
        <div className="credentials">
          <div className="dte-code">
            <h2>DTE CODE : 6250</h2>
            <h3>D.Y. Patil College of Engineering & Technology</h3>
            <h4>Kasaba Bawada, Kolhapur.</h4>
            <h3>An Autonomous Institute</h3>
          </div>
          <p className="approval">Approved by AICTE, DTE-Govt of Maharashtra and affiliated to Shivaji University</p>
        </div>

        <div className="features">
          <div className="feature">
            <img src="/icons/wifi.svg" alt="Internet" />
            <span>Internet Wifi</span>
          </div>
          <div className="feature">
            <img src="/icons/hostel.svg" alt="Hostel" />
            <span>Hostel</span>
          </div>
          <div className="feature">
            <img src="/icons/staff.svg" alt="Staff" />
            <span>Qualified Staff</span>
          </div>
          <div className="feature">
            <img src="/icons/placement.svg" alt="Placement" />
            <span>100% Placement</span>
          </div>
          <div className="feature">
            <img src="/icons/toppers.svg" alt="Toppers" />
            <span>University Toppers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
