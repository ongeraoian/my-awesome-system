import React from 'react';
import './vehicle.css';
import vehicleTrackingImage from '../Assets/managementm.png';

const VehicleTracking = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <h1>Vehicle Tracking & Fuel Management</h1>
        <div className="image-container">
          <img src={vehicleTrackingImage} alt="Vehicle Tracking System" className="security-image" />
        </div>
        <div className="blocks-container">
          <div className="block left-block">
            <h2>Who We Are</h2>
            <p>
              At Multside, we specialize in cutting-edge vehicle tracking and fleet management solutions that provide real-time monitoring, 
              enhanced security, and cost-saving fuel management. With years of expertise in GPS tracking technology, we offer businesses and individuals 
              reliable and efficient solutions to optimize vehicle usage and improve overall fleet performance.
            </p>
            <p>
              Whether you own a small business with a few vehicles or manage a large fleet, our smart tracking systems ensure better control, 
              increased efficiency, and reduced operational costs.
            </p>
          </div>
          <div className="block middle-block">
            <h2>Our Vehicle Tracking Solutions</h2>
            <p>
              We provide a comprehensive range of vehicle tracking and fleet management services, including:
            </p>
            <ul>
              <li>
                <strong>Real-Time GPS Tracking:</strong> Monitor your vehicles' exact locations and movements in real-time using our advanced GPS tracking system.
              </li>
              <li>
                <strong>Fuel Monitoring & Management:</strong> Our system tracks fuel consumption, prevents fuel theft, and helps optimize fuel efficiency.
              </li>
              <li>
                <strong>Driver Behavior Analysis:</strong> Get insights into driver habits, such as harsh braking, rapid acceleration, and excessive idling, to improve safety and efficiency.
              </li>
              <li>
                <strong>Route Optimization:</strong> Our system suggests the best routes based on live traffic updates, reducing fuel costs and delivery times.
              </li>
              <li>
                <strong>Geo-Fencing Alerts:</strong> Set virtual boundaries and receive instant alerts when a vehicle enters or exits a designated area.
              </li>
              <li>
                <strong>Anti-Theft & Immobilization:</strong> In case of theft, remotely disable the vehicle's engine and track its location for recovery.
              </li>
              <li>
                <strong>Maintenance Scheduling:</strong> Keep track of service schedules, tire replacements, and engine diagnostics to ensure smooth fleet operations.
              </li>
              <li>
                <strong>Fleet Reports & Analytics:</strong> Access detailed reports on vehicle performance, fuel usage, and trip history to make data-driven decisions.
              </li>
            </ul>
          </div>
          <div className="block right-block">
            <h2>Why Choose Multside?</h2>
            <p>
              Managing a fleet effectively requires advanced technology and expert solutions. Here's why Multside is the best choice for your vehicle tracking and fuel management needs:
            </p>
            <ul>
              <li>
                <strong>Advanced Tracking Technology:</strong> Our GPS and fuel monitoring systems use the latest technology to deliver accurate and reliable data.
              </li>
              <li>
                <strong>Cost-Effective Solutions:</strong> Reduce fuel expenses, prevent unauthorized use, and increase overall efficiency with our intelligent tracking services.
              </li>
              <li>
                <strong>Easy Integration:</strong> Our systems seamlessly integrate with existing fleet management software for smooth operations.
              </li>
              <li>
                <strong>Real-Time Alerts:</strong> Get instant notifications about fuel theft, unauthorized vehicle movement, or excessive idling.
              </li>
              <li>
                <strong>24/7 Customer Support:</strong> Our dedicated support team is available round the clock to assist with any tracking or fleet management issues.
              </li>
            </ul>
            <p>
              Optimize your fleet operations, reduce costs, and enhance security with Multside's vehicle tracking solutions. Contact us today to learn 
              how we can help improve your business efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleTracking;
