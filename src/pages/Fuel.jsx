import React from 'react';
import './fuel.css';
import fuelMonitorImage from '../Assets/fuel-monitor.png';

const Fuel = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <h1>Fuel Management Solutions</h1>
        <div className="image-container">
          <img src={fuelMonitorImage} alt="Fuel Monitoring System" className="fuel-image" />
        </div>
        <div className="blocks-container">
          <div className="block left-block">
            <h2>Who We Are</h2>
            <p>
              Multside is a leading provider of advanced fuel management systems, delivering reliable and efficient solutions for fleet operators, logistics companies, and industrial applications. With a deep understanding of fuel efficiency and modern monitoring technologies, we offer end-to-end fuel management solutions to optimize consumption, reduce costs, and enhance operational performance.
            </p>
            <p>
              Our team of highly skilled technicians and engineers ensures that every fuel monitoring system is installed with precision and efficiency. We work with state-of-the-art technology to provide seamless and scalable solutions that meet the growing demand for fuel efficiency in today's competitive market.
            </p>
          </div>
          <div className="block middle-block">
            <h2>Our Fuel Management Services</h2>
            <p>
              We specialize in a range of fuel management solutions tailored to different industries and needs, including:
            </p>
            <ul>
              <li>
                <strong>Fuel Monitoring Systems:</strong> Real-time tracking of fuel levels, consumption, and usage patterns to optimize efficiency.
              </li>
              <li>
                <strong>Fleet Fuel Management:</strong> Comprehensive solutions for fleet operators to monitor and manage fuel usage across multiple vehicles.
              </li>
              <li>
                <strong>Fuel Leak Detection:</strong> Advanced sensors to detect and alert potential fuel leaks, preventing losses and hazards.
              </li>
              <li>
                <strong>Fuel Efficiency Analytics:</strong> Data-driven insights to identify inefficiencies and improve fuel consumption.
              </li>
              <li>
                <strong>Custom Fuel Solutions:</strong> Tailored systems for industrial, commercial, and agricultural applications to meet specific fuel management needs.
              </li>
              <li>
                <strong>Maintenance & Support:</strong> Ongoing maintenance and technical support to ensure your fuel management systems operate at peak performance.
              </li>
            </ul>
            <p>
              Whether you need a new installation, an upgrade, or a system expansion, we deliver top-quality fuel management solutions to enhance efficiency and reduce costs.
            </p>
          </div>
          <div className="block right-block">
            <h2>Why Choose Multside?</h2>
            <p>
              When it comes to fuel management, reliability and expertise matter. Here’s why Multside is the preferred choice for fuel monitoring solutions:
            </p>
            <ul>
              <li>
                <strong>Expert Technicians:</strong> Our team consists of certified professionals trained in fuel system installation, calibration, and maintenance.
              </li>
              <li>
                <strong>Real-Time Monitoring:</strong> Our systems provide accurate, real-time data to help you make informed decisions about fuel usage.
              </li>
              <li>
                <strong>Customized Solutions:</strong> We tailor our systems to meet the unique needs of your fleet or operation, ensuring maximum efficiency.
              </li>
              <li>
                <strong>Cost Savings:</strong> By optimizing fuel consumption, our solutions help you reduce operational costs and improve profitability.
              </li>
              <li>
                <strong>24/7 Support & Maintenance:</strong> We provide ongoing support, troubleshooting, and maintenance to ensure uninterrupted performance.
              </li>
              <li>
                <strong>Competitive Pricing:</strong> We offer cost-effective solutions without compromising on quality and reliability.
              </li>
            </ul>
            <p>
              At Multside, we believe that efficient fuel management is the key to operational success. Whether for logistics, transportation, or industrial applications, our cutting-edge solutions keep your operations running smoothly.
            </p>
          </div>
        </div>
        <div className="additional-info">
          <h2>Get in Touch for a Free Consultation</h2>
          <p>
            Ready to optimize your fuel management? Contact Multside today for a personalized consultation. Our experts will assess your needs and provide a custom solution tailored to your operation.
          </p>
          {/* <p>
            📞 <strong>Call Us:</strong> +123-456-7890  
            ✉️ <strong>Email:</strong> info@multside.com  
            📍 <strong>Visit Us:</strong> 123 Fuel Lane, Efficiency City
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Fuel;