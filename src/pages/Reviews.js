import React from 'react';
import Slider from 'react-slick'; // Import the Slider component
import styles from './Review.module.css'; // Import your CSS module

import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles

const Review = () => {
  const reviews = [
    {
      text: "Multiside did a very nice job on Camera, Solar and Biometric installation at Ecofrend Cleaning Solution premises.",
      stars: 5,
      author: "Wilson Mwangi",
     
    },
    {
      text: "“Excellent Customer Services in Installation & Maintenance of Security Systems, Access Control, CCTV Surveillance & Telecom Systems.”",
      stars: 5,
      author: "Kevin Otieno",
      
    },
    {
      text: "“Your customer support is the best I have experienced. Thanks for quality services. All your efforts are greatly appreciated on our end.”",
      stars: 5,
      author: "Godfrey Ochieng",
     
    },
    {
      text: "“Thanks for the top-notch installation and maintenance of our access control systems. Truly reliable services.”",
      stars: 5,
      author: "Warren Okumu",
      
    },
  ];

  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Allow infinite looping of slides
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Show three slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 5000, // 5 seconds per slide
    arrows: false, // Remove navigation arrows
    responsive: [
      {
        breakpoint: 1024, // For devices below 1024px width
        settings: {
          slidesToShow: 2, // Show two slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For devices below 768px width
        settings: {
          slidesToShow: 1, // Show one slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What Our Clients Say</h1>
      <p className={styles.subtitle}>
      Anybody can do bad work, but not everybody does good work
      </p>
      <Slider {...settings} className={styles.slider}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <div className={styles.stars}>
              {Array.from({ length: review.stars }).map((_, starIndex) => (
                <span key={starIndex} className={styles.star}>★</span>
              ))}
            </div>
            <p className={styles.reviewText}>"{review.text}"</p>
            <div className={styles.authorSection}>
              {/* <img
                src={`https://via.placeholder.com/50`} // Placeholder for profile picture
                alt={review.author}
                className={styles.authorImage}
              /> */}
              <div>
                <p className={styles.author}>{review.author}</p>
                <p className={styles.title}>{review.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
