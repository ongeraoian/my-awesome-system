import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './home.module.css';
import backgroundVideo from '../Assets/backgroundvid.mp4'; // Import the video

const Home = () => {
  return (
    <div className={styles.banner}>
      {/* Manage the head section */}
      <Helmet>
        <link
          rel="preload"
          href="https://multside.co.ke/assets/animation.gif"
          as="image"
          type="image/gif"
        />
      </Helmet>

      {/* Video Background */}
      <video autoPlay loop muted className={styles.videoBackground}>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.gradientText}>MULT-SIDE TECHNOLOGIES</h1>
          <p className={styles.tagline}>Keeping You Safe and Secure</p>

          {/* Preloaded Image */}
          {/* <img
            src="https://multside.co.ke/assets/animation.gif"
            alt="Animated GIF"
            width="300"
            height="200"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
