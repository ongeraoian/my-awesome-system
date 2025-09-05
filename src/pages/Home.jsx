import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Users, MessageCircle, Star, Trophy, CheckCircle } from 'lucide-react';
import heroImage from '../assets/hero-africa-tech.jpg';

const Home = () => {
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

  const stats = [
    { icon: Users, value: '500+', label: 'Satisfied Clients', subtitle: 'Across East Africa' },
    { icon: Shield, value: '15+', label: 'Years of Excellence', subtitle: 'In ICT Solutions' },
    { icon: Zap, value: '24/7', label: 'Technical Support', subtitle: 'Always Available' },
    { icon: Trophy, value: '99%', label: 'Success Rate', subtitle: 'Project Completion' },
  ];

  const achievements = [
    { icon: Star, text: 'Kenya\'s Leading ICT Solutions Provider' },
    { icon: CheckCircle, text: 'ISO 9001:2015 Certified Company' },
    { icon: Trophy, text: 'Award-Winning Security Systems' },
    { icon: Shield, text: 'Trusted by 500+ Organizations' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Helmet>
        <title>Multside Technologies - Leading ICT & Security Solutions Provider in Kenya</title>
        <meta name="description" content="East Africa's premier ICT solutions provider. Specializing in CCTV surveillance, cybersecurity, networking, and digital transformation. Serving 500+ clients across Kenya with 15+ years of excellence." />
        <meta name="keywords" content="ICT solutions Kenya, CCTV installation Nairobi, cybersecurity East Africa, network infrastructure, digital transformation, security systems Kenya, fiber optic installation" />
        <meta property="og:title" content="Multside Technologies - Leading ICT & Security Solutions Provider in Kenya" />
        <meta property="og:description" content="East Africa's premier ICT solutions provider with 15+ years of excellence serving 500+ clients." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.multside.co.ke" />
        <meta property="og:image" content="/logo.png" />
      </Helmet>

      {/* Hero Background */}
      <div 
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient z-10"></div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
            <span className="block">Multside Technologies</span>
            <span className="block text-gradient">
              Transforming Africa's Digital Future
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            East Africa's premier ICT solutions provider, delivering cutting-edge technology and security systems 
            that empower businesses and protect communities across Kenya and beyond.
          </p>
        </motion.div>

        {/* Achievements Banner */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="glass rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 text-white">
                  <achievement.icon className="h-5 w-5 text-accent-DEFAULT flex-shrink-0" />
                  <span className="text-sm font-medium">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-4"
          >
            <span>Explore Solutions</span>
          </motion.button>
          <motion.a
            href="https://wa.me/254727676338?text=Hello%20Multside%20Technologies!%20I'm%20interested%20in%20your%20ICT%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-whatsapp flex items-center justify-center space-x-2 text-lg px-8 py-4"
          >
            <MessageCircle className="h-5 w-5" />
            <span>WhatsApp Now</span>
          </motion.a>
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass text-center p-8 rounded-2xl hover-lift"
            >
              <stat.icon className="h-12 w-12 mx-auto mb-4 text-accent-DEFAULT" />
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-200 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.subtitle}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div variants={itemVariants} className="mt-16">
          <p className="text-lg text-gray-300 mb-6">Trusted by Leading Organizations Across Kenya</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-white font-semibold">Victoria Commercial Bank</div>
            <div className="text-white font-semibold">InterConsult Limited</div>
            <div className="text-white font-semibold">Xylem Inc</div>
            <div className="text-white font-semibold">LendPlus Kenya</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
