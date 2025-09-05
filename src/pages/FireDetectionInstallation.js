import React from 'react';
import './fire.css';
import fireDetectionImage from '../Assets/fire_detection.png';

const FireDetection = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <h1>Fire Detection & Prevention Systems</h1>
        <div className="image-container">
          <img src={fireDetectionImage} alt="Fire Detection System" className="security-image" />
        </div>
        <div className="blocks-container">
          <div className="block left-block">
            <h2>Who We Are</h2>
            <p>
              At Multside, we are dedicated to providing advanced fire detection and prevention solutions to safeguard lives and property. 
              Our systems are designed to detect fire threats at the earliest stages, reducing the risk of severe damage and ensuring quick 
              response times. With years of expertise in fire safety technology, we offer innovative, reliable, and cost-effective solutions 
              tailored to residential, commercial, and industrial needs.
            </p>
            <p>
              Our commitment to safety, compliance, and technological advancement has made us a trusted partner in fire protection. 
              We work closely with building owners, businesses, and facility managers to implement the best fire safety measures 
              suited to their specific requirements.
            </p>
          </div>
          <div className="block middle-block">
            <h2>Our Fire Detection Solutions</h2>
            <p>
              We offer a comprehensive range of fire detection and prevention solutions, ensuring the highest levels of safety for homes, 
              offices, warehouses, and other properties. Our services include:
            </p>
            <ul>
              <li>
                <strong>Smoke Detectors:</strong> Our high-sensitivity smoke detectors provide early warnings, detecting smoke particles before a fire fully ignites.
              </li>
              <li>
                <strong>Heat Sensors:</strong> Designed to sense rapid temperature rises, our heat sensors trigger alarms before fire outbreaks become uncontrollable.
              </li>
              <li>
                <strong>Fire Alarm Systems:</strong> These integrated alarms notify occupants and emergency responders immediately upon fire detection.
              </li>
              <li>
                <strong>Gas Leak Detectors:</strong> Early detection of flammable gas leaks can prevent fires and explosions in industrial and commercial spaces.
              </li>
              <li>
                <strong>Automatic Sprinkler Systems:</strong> These systems respond automatically to suppress fires in their initial stages.
              </li>
              <li>
                <strong>24/7 Monitoring Services:</strong> Our monitoring team ensures that fire alerts are promptly addressed and emergency response teams are notified.
              </li>
            </ul>
          </div>
          <div className="block right-block">
            <h2>Why Choose Multside?</h2>
            <p>
              Choosing the right fire detection provider is crucial to ensuring the safety of your property and the lives of those inside. Here’s why Multside 
              is a leading choice in fire protection solutions:
            </p>
            <ul>
              <li>
                <strong>Cutting-Edge Technology:</strong> Our fire detection systems use the latest innovations, ensuring accuracy and reliability in detecting fire threats.
              </li>
              <li>
                <strong>Fast Response Times:</strong> Our alarm and monitoring systems are designed to alert emergency services immediately, minimizing potential damage.
              </li>
              <li>
                <strong>Scalable Solutions:</strong> Whether you need fire detection for a single home, an office building, or an entire industrial facility, 
                we provide scalable solutions tailored to your needs.
              </li>
              <li>
                <strong>Compliance & Safety Standards:</strong> Our products and installations comply with the highest fire safety regulations to ensure reliability 
                and legal compliance.
              </li>
              <li>
                <strong>Expert Installation & Maintenance:</strong> We provide professional installation and regular maintenance services to keep your fire detection 
                system functioning optimally.
              </li>
            </ul>
            <p>
              Fire safety is not just an option—it is a necessity. Don’t wait for an emergency to take action. Contact Multside today to learn how our 
              fire detection and prevention solutions can safeguard your property and save lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireDetection;
