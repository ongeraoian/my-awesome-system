import React from 'react';
import { motion } from 'framer-motion';
import styles from './about.module.css';

const About = () => {
  const waveRevealVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.17, 0.67, 0.83, 0.67], // Ease-in-out curve
      },
    },
  };

  return (
    <div className={styles.aboutContainer}>
      <motion.div
        className={styles.content}
        initial="hidden"
        animate="visible"
        variants={waveRevealVariants}
      >
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.paragraph}>
          Multside Technologies, established in October 2016, is dedicated to
          delivering comprehensive and integrated business solutions that prioritize
          quality, security, and reliability. Our mission is to empower businesses
          to innovate and grow through advanced computing and communication
          technologies.
        </p>
        <p className={styles.paragraph}>
          We are committed to organizational excellence by fostering a knowledgeable
          and trusted workforce, strategically investing in skills, modern tools, and
          cutting-edge technology to meet the evolving needs of our clients. Whether
          supporting small businesses, medium enterprises, or large corporations, we
          provide tailored solutions that address current challenges while preparing
          for future opportunities.
        </p>
        <p className={styles.paragraph}>
          Our collaborative approach combines diverse expertise to deliver comprehensive
          answers, ensuring the highest levels of service and satisfaction for our clients
          worldwide.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
