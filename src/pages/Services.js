import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Service.module.css';

// Import images
import doorSecurityPic from '../Assets/door_system.png';
import cctvPic from '../Assets/CCtv_pic.png';
import fiberPic from '../Assets/fibreee-cable.png';
import carTrackerPic from '../Assets/car_tracker.png';
import fireDetectionPic from '../Assets/fire_detection.png';
import vehicleTrackingPic from '../Assets/managementm.png';
import fuelpic from '../Assets/fuel-monitor.png'

const Services = () => {
  const services = [
    {
      title: 'Door Security',
      description: 'Implement advanced door security systems designed to safeguard homes and businesses with cutting-edge technology, ensuring uncompromised protection and seamless access control for peace of mind.',
      image: doorSecurityPic,
      link: '/services/door-security',
    },
    {
      title: 'CCTV Installation',
      description: 'Expert installation of high-resolution CCTV systems for round-the-clock monitoring, enhancing security with real-time surveillance, remote access, and reliable protection for your property and assets.',
      image: cctvPic,
      link: '/services/cctv-installation',
    },
    {
      title: 'Fiber Installation',
      description: 'Specialized fiber optic cable installation delivering high-speed, reliable internet and network connectivity tailored for modern digital requirements and long-term operational efficiency.',
      image: fiberPic,
      link: '/services/fiber-installation',
    },
    {
      title: 'Car Tracker Installation',
      description: 'Equipping vehicles with state-of-the-art tracking devices to ensure real-time location monitoring, theft prevention, and optimal fleet management for personal and business use.',
      image: carTrackerPic,
      link: '/services/car-tracker-installation',
    },
    {
      title: 'Fire Detection Installation',
      description: 'Install cutting-edge fire detection systems designed to provide rapid alerts, minimize risks, and safeguard lives and property from potential fire hazards with unmatched reliability.',
      image: fireDetectionPic,
      link: '/services/fire-detection-installation',
    },
    {
      title: 'Fuel management',
      description: 'Implement advanced fuel monitoring systems designed to optimize fuel usage, enhance efficiency, and reduce operational costs. These cutting-edge solutions provide real-time insights into fuel levels, consumption patterns, and potential leaks, ensuring better fleet management and safeguarding your assets with unmatched reliability.',
      image: fuelpic,
      link: '/services/Fuel',
    },
    {
      title: 'Vehicle Tracking Services',
      description: 'Delivering comprehensive vehicle tracking solutions to monitor, manage, and secure fleets effectively, enabling businesses to optimize performance and reduce operational risks.',
      image: vehicleTrackingPic,
      link: '/services/vehicle-tracking-services',
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Services</h1>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <Link key={index} to={service.link} className={styles.cardLink}>
            <div className={styles.card}>
              <img src={service.image} alt={service.title} className={styles.cardImage} />
              <h2 className={styles.cardTitle}>{service.title}</h2>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
