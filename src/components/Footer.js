import React from 'react';
import styles from './Footer.module.css';
import logo from '../Assets/logo a.png'; // Import the logo image
import facebookIcon from '../Assets/Facebook.png'; // Import Facebook icon
import tiktokIcon from '../Assets/Tiktok.png'; // Import TikTok icon
import instagramIcon from '../Assets/Linkedin2.png'; // Import Instagram icon

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.logoSection}>
          <img src={logo} alt="MULT-SIDE Logo" className={styles.logo} />
          <p>Keeping you safe and secure</p>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Center Section */}
        <div className={styles.linksSection}>
          <h3>Quick links</h3>
          <ul>
            <li><a href="#digital-marketing">Digital Marketing</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
            <li><a href="#developers">Developers</a></li>
            <li><a href="#services">Our Services</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className={styles.contactSection}>
          <h3>Contact Us</h3>
          <p>KE NAIROBI, KENYA</p>
          <p>K-MALL,</p>
          <p>Kiambu Rd, Nairobi</p>
          <p>0727676338</p>
        </div>
      </div>

      {/* Social Links */}
      <div className={styles.socialSection}>
        <h3>Follow Us</h3>
        <div className={styles.socialIcons}>
          <a
            href="https://www.facebook.com/profile.php?id=100063642215604&rdid=9y94MqA0q9rDqZ3n&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19uAMXoLeh%2F#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <img src={facebookIcon} alt="Facebook" className={styles.socialImage} />
          </a>
          <a
            href="https://www.tiktok.com/search?q=multi%20side%20technologies&t=1737968678917"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <img src={tiktokIcon} alt="TikTok" className={styles.socialImage} />
          </a>
          <a
            href="https://www.linkedin.com/company/multside-technologies/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <img src={instagramIcon} alt="Instagram" className={styles.socialImage} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyright}>
        <p>
          © 2025 | All Rights Reserved &nbsp;
          <a href="#privacy-policy">Privacy Policy</a> | 
          <a href="#terms-conditions">Terms & Conditions</a> | 
          <a href="#cookies-policy">Cookies Policy</a> | 
          <a href="#sla">Service Level Agreement</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
