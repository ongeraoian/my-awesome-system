import React from 'react';
import './cctv.css';
import cameraImage from '../Assets/cameeee.png';

const CCTVInstallation = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <h1>CCTV Camera Installation</h1>
        <div className="image-container">
          <img src={cameraImage} alt="CCTV Installation" className="security-image" />
        </div>
        <div className="blocks-container">
          <div className="block left-block">
            <h2>Who We Are</h2>
            <p>
              Multside is a leading provider of advanced surveillance solutions, specializing in the installation of high-quality CCTV camera systems. With years of experience in the security industry, we have successfully helped homeowners, businesses, and organizations enhance their security and monitoring systems. Our mission is to deliver reliable, innovative, and cost-effective security solutions that ensure 24/7 protection for your property.
            </p>
            <p>
              Our team of skilled professionals is dedicated to ensuring seamless CCTV installations, using the latest technologies to help prevent security threats, theft, and unauthorized access. Whether you need a single-camera setup for your home or a complex security network for a business, we’ve got you covered.
            </p>
          </div>
          <div className="block middle-block">
            <h2>Our CCTV Solutions</h2>
            <p>
              We offer a comprehensive range of CCTV camera systems designed to meet different security needs. Our services include:
            </p>
            <ul>
              <li>
                <strong>IP Cameras:</strong> High-definition cameras that provide crystal-clear video with remote access via cloud-based storage.
              </li>
              <li>
                <strong>Wireless CCTV Systems:</strong> No messy cables, easy setup, and smart connectivity to your phone or computer.
              </li>
              <li>
                <strong>Night Vision Cameras:</strong> Advanced infrared technology allows for monitoring in complete darkness.
              </li>
              <li>
                <strong>Motion Detection & Alerts:</strong> Get instant notifications on your phone when unusual movement is detected.
              </li>
              <li>
                <strong>Facial Recognition & AI Surveillance:</strong> Use artificial intelligence to recognize faces and identify potential threats.
              </li>
              <li>
                <strong>360-Degree Coverage:</strong> Panoramic cameras that eliminate blind spots and provide full coverage of an area.
              </li>
            </ul>
            <p>
              Our solutions are tailored to fit residential homes, retail stores, offices, warehouses, and industrial spaces. Whether you're looking for basic home monitoring or a multi-camera security network, we have the right solution for you.
            </p>
          </div>
          <div className="block right-block">
            <h2>Why Choose Multside?</h2>
            <p>
              Choosing the right security provider is crucial for ensuring maximum protection. Here’s why Multside is the preferred choice for CCTV installation:
            </p>
            <ul>
              <li>
                <strong>Expert Installation:</strong> Our technicians ensure that every camera is strategically placed for maximum coverage.
              </li>
              <li>
                <strong>Remote Monitoring:</strong> Our systems allow you to watch live feeds from your CCTV cameras anywhere in the world using mobile apps.
              </li>
              <li>
                <strong>24/7 Support & Maintenance:</strong> We provide continuous technical support and troubleshooting to keep your system running smoothly.
              </li>
              <li>
                <strong>Data Storage & Cloud Backup:</strong> Never lose important footage. Our solutions offer secure storage options both locally and in the cloud.
              </li>
              <li>
                <strong>Scalable Security Solutions:</strong> Whether you need a single-camera setup or a multi-site surveillance system, we can scale our solutions to meet your needs.
              </li>
            </ul>
            <p>
              At Multside, we believe that security should never be compromised. Our CCTV solutions are designed to offer peace of mind, reduce risks, and ensure that your property is fully protected at all times.
            </p>
          </div>
        </div>
        <div className="additional-info">
          <h2>Contact Us for a Free Consultation</h2>
          <p>
            Looking for a professional CCTV installation service? Contact Multside today! Our team will help assess your security needs and recommend the best surveillance solution for your home or business.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default CCTVInstallation;
