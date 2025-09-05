import React from 'react';
import './fiber.css';
import fibreImage from '../Assets/fibreee-cable.png';

const FibreInstallation = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <h1>Fibre Installation Services</h1>
        <div className="image-container">
          <img src={fibreImage} alt="Fibre Optic Installation" className="fibre-image" />
        </div>
        <div className="blocks-container">
          <div className="block left-block">
            <h2>Who We Are</h2>
            <p>
              Multside is a leading provider of high-speed fibre optic installation services, delivering reliable and ultra-fast internet connectivity for homes, businesses, and industrial applications. With a deep understanding of networking and modern telecommunication infrastructure, we offer end-to-end fibre solutions to enhance connectivity, security, and productivity.
            </p>
            <p>
              Our team of highly skilled technicians and engineers ensures that every fibre installation is completed with precision and efficiency. We work with state-of-the-art technology to provide seamless and scalable connectivity solutions that meet the growing demand for high-speed internet in today's digital world.
            </p>
          </div>
          <div className="block middle-block">
            <h2>Our Fibre Installation Services</h2>
            <p>
              We specialize in a range of fibre optic solutions tailored to different industries and needs, including:
            </p>
            <ul>
              <li>
                <strong>Home Fibre Installation:</strong> Upgrade your home with high-speed, low-latency internet for streaming, gaming, and smart home connectivity.
              </li>
              <li>
                <strong>Business & Office Networks:</strong> We provide enterprise-grade fibre solutions for offices, ensuring stable and secure connections for productivity.
              </li>
              <li>
                <strong>FTTH (Fibre to the Home):</strong> We bring fibre optic connectivity directly to residences, eliminating buffering and improving online experiences.
              </li>
              <li>
                <strong>FTTP (Fibre to the Premises):</strong> Our high-performance fibre infrastructure ensures uninterrupted connectivity for large commercial buildings and industrial areas.
              </li>
              <li>
                <strong>Data Centers & Cloud Networks:</strong> We design and install high-speed fibre networks for server farms, cloud storage, and data centers.
              </li>
              <li>
                <strong>Long-Distance Fibre Installation:</strong> We provide underground and aerial fibre cabling solutions, enabling seamless city-wide and inter-city connectivity.
              </li>
            </ul>
            <p>
              Whether you need a new installation, an upgrade, or a network expansion, we deliver top-quality fibre solutions to enhance connectivity and performance.
            </p>
          </div>
          <div className="block right-block">
            <h2>Why Choose Multside?</h2>
            <p>
              When it comes to fibre optic installation, reliability and expertise matter. Here’s why Multside is the preferred choice for fibre installation:
            </p>
            <ul>
              <li>
                <strong>Expert Technicians:</strong> Our team consists of certified professionals trained in fibre optic splicing, termination, and network design.
              </li>
              <li>
                <strong>High-Speed, Reliable Connections:</strong> We use advanced fibre optic cables that offer lightning-fast internet speeds with minimal interference.
              </li>
              <li>
                <strong>Customized Solutions:</strong> We tailor our installations to meet residential, commercial, and industrial needs, ensuring maximum efficiency.
              </li>
              <li>
                <strong>Future-Proof Technology:</strong> Our fibre installations support scalability for future network expansions and technological advancements.
              </li>
              <li>
                <strong>24/7 Support & Maintenance:</strong> We provide ongoing support, troubleshooting, and maintenance to ensure a seamless online experience.
              </li>
              <li>
                <strong>Competitive Pricing:</strong> We offer cost-effective installation packages without compromising on quality and performance.
              </li>
            </ul>
            <p>
              At Multside, we believe that fast and stable internet is the backbone of modern communication. Whether for work, entertainment, or security, our cutting-edge fibre solutions keep you connected.
            </p>
          </div>
        </div>
        <div className="additional-info">
          <h2>Get in Touch for a Free Consultation</h2>
          <p>
            Ready to upgrade to fibre optic connectivity? Contact Multside today for a personalized consultation. Our experts will assess your needs and provide a custom installation plan tailored to your location and requirements.
          </p>
          {/* <p>
            📞 <strong>Call Us:</strong> +123-456-7890  
            ✉️ <strong>Email:</strong> info@multside.com  
            📍 <strong>Visit Us:</strong> 123 Fibre Lane, High-Speed City
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default FibreInstallation;
