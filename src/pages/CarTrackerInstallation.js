import React from 'react';
import './cartracker.css';
import carTrackerImage from '../Assets/car_tracker.png';

const CarTracking = () => {
  return (
    <div className="carTracking-page-container">
      <div className="carTracking-content-container">
        <h1 className="carTracking-title">Car Tracking Installation</h1>
        <div className="carTracking-image-container">
          <img src={carTrackerImage} alt="Car Tracking" className="carTracking-image" />
        </div>
        <div className="carTracking-blocks-container">
          <div className="carTracking-block carTracking-left-block">
            <h2>Who We Are</h2>
            <p>
              Multside is a trusted provider of vehicle security solutions, specializing in GPS car tracking installations.
              With years of experience in the industry, we offer state-of-the-art tracking systems that ensure your vehicle
              remains secure and within your control. Whether you're an individual car owner, fleet manager, or business owner,
              our tracking solutions provide the reliability and security you need.
            </p>
          </div>
          <div className="carTracking-block carTracking-middle-block">
            <h2>Our Car Tracking Solutions</h2>
            <p>Our advanced car tracking services include:</p>
            <ul>
              <li><strong>GPS Tracking:</strong> Get real-time location updates, ensuring you always know where your vehicle is.</li>
              <li><strong>Geo-Fencing:</strong> Set virtual boundaries and receive instant alerts if your vehicle leaves a designated area.</li>
              <li><strong>Anti-Theft Solutions:</strong> Remotely shut down your vehicle’s engine in case of unauthorized access.</li>
              <li><strong>Historical Route Playback:</strong> Review past trips and monitor vehicle usage.</li>
              <li><strong>Speed Monitoring:</strong> Ensure your drivers maintain safe speeds, reducing accidents and fuel costs.</li>
              <li><strong>24/7 Monitoring:</strong> Our system runs round the clock, providing live updates and emergency alerts.</li>
            </ul>
          </div>
          <div className="carTracking-block carTracking-right-block">
            <h2>Why Choose Multside?</h2>
            <p>
              At Multside, we prioritize security, convenience, and efficiency. Here’s why you should trust us:
            </p>
            <ul>
              <li><strong>Advanced Technology:</strong> Our tracking devices are equipped with the latest GPS technology for high accuracy.</li>
              <li><strong>Easy Installation:</strong> Our expert team installs tracking systems seamlessly, with minimal disruption.</li>
              <li><strong>Reliable Customer Support:</strong> We offer 24/7 assistance to ensure you always have peace of mind.</li>
              <li><strong>Affordable Pricing:</strong> We provide cost-effective tracking solutions with no hidden fees.</li>
              <li><strong>Customized Solutions:</strong> Whether for personal use or fleet management, we tailor our services to your needs.</li>
            </ul>
            <p>
              Secure your vehicle today with Multside’s premium car tracking solutions. Stay in control, reduce theft risk, and
              enhance vehicle safety with our top-tier services. Contact us now to get started!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarTracking;
