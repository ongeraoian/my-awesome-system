import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      text: "Multside did a very nice job on Camera, Solar and Biometric installation at Ecofrend Cleaning Solution premises. Their professionalism and attention to detail exceeded our expectations.",
      stars: 5,
      author: "Wilson Mwangi",
      company: "Ecofrend Cleaning Solutions",
      image: "/src/Assets/review background.jpg",
    },
    {
      text: "Excellent Customer Services in Installation & Maintenance of Security Systems, Access Control, CCTV Surveillance & Telecom Systems. Highly recommended for any security needs.",
      stars: 5,
      author: "Kevin Otieno",
      company: "Tech Solutions Ltd",
      image: "/src/Assets/review background.jpg",
    },
    {
      text: "Your customer support is the best I have experienced. Thanks for quality services. All your efforts are greatly appreciated on our end. Truly outstanding work!",
      stars: 5,
      author: "Godfrey Ochieng",
      company: "Digital Innovations",
      image: "/src/Assets/review background.jpg",
    },
    {
      text: "Thanks for the top-notch installation and maintenance of our access control systems. Truly reliable services that have significantly improved our security.",
      stars: 5,
      author: "Warren Okumu",
      company: "Secure Enterprises",
      image: "/src/Assets/review background.jpg",
    },
    {
      text: "The team at Multside Technologies delivered exceptional results for our network infrastructure project. Their expertise and professionalism are unmatched.",
      stars: 5,
      author: "Sarah Kimani",
      company: "Modern Business Solutions",
      image: "/src/Assets/review background.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-800">
      <Helmet>
        <title>Client Testimonials - Multside Technologies Reviews</title>
        <meta name="description" content="Read what our clients say about Multside Technologies. 5-star reviews from satisfied customers across Kenya for our ICT and security solutions." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Anybody can do bad work, but not everybody does good work
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Testimonial */}
          <div className="relative bg-white dark:bg-dark-900 rounded-2xl shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500 to-primary-600"></div>
            
            <div className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <Quote className="h-12 w-12 text-primary-500" />
              </div>
              
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
                  "{reviews[currentSlide].text}"
                </p>
                
                {/* Animated Stars */}
                <div className="flex justify-center mb-6">
                  {Array.from({ length: reviews[currentSlide].stars }).map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={reviews[currentSlide].image}
                    alt={reviews[currentSlide].author}
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary-200 dark:border-primary-800"
                  />
                  <div className="text-left">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {reviews[currentSlide].author}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {reviews[currentSlide].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-700"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary-600 scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-700"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </motion.div>

        {/* Additional Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((review, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-700"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: review.stars }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  "{review.text.length > 100 ? review.text.substring(0, 100) + '...' : review.text}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <img
                    src={review.image}
                    alt={review.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {review.author}
                    </h5>
                    <p className="text-primary-600 dark:text-primary-400 text-xs">
                      {review.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Review;
