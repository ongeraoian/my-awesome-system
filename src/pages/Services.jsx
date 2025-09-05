import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Camera, Wifi, Car, Flame, Fuel, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'ICT Solutions',
      description: 'Comprehensive information and communication technology solutions including network infrastructure, cloud services, and digital transformation consulting.',
      icon: Wifi,
      link: '/services/ict-solutions',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'CCTV & Security Systems',
      description: 'Expert installation of high-resolution CCTV systems for round-the-clock monitoring, enhancing security with real-time surveillance and remote access.',
      icon: Camera,
      link: '/services/cctv-installation',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Networking Solutions',
      description: 'Specialized fiber optic cable installation delivering high-speed, reliable internet and network connectivity tailored for modern digital requirements.',
      icon: Wifi,
      link: '/services/fiber-installation',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Software Development',
      description: 'Custom software development services including web applications, mobile apps, and enterprise solutions tailored to your business needs.',
      icon: Shield,
      link: '/services/software-development',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      title: 'Web Hosting',
      description: 'Reliable web hosting services with 99.9% uptime guarantee, SSL certificates, and 24/7 technical support for your online presence.',
      icon: Shield,
      link: '/services/web-hosting',
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced cybersecurity solutions including threat detection, data protection, and security audits to safeguard your digital assets.',
      icon: Shield,
      link: '/services/cybersecurity',
      color: 'from-red-500 to-red-600',
    },
    {
      title: 'Vehicle Tracking',
      description: 'Comprehensive vehicle tracking solutions to monitor, manage, and secure fleets effectively, enabling businesses to optimize performance.',
      icon: Car,
      link: '/services/vehicle-tracking-services',
      color: 'from-teal-500 to-teal-600',
    },
    {
      title: 'Fire Detection',
      description: 'Cutting-edge fire detection systems designed to provide rapid alerts, minimize risks, and safeguard lives and property from fire hazards.',
      icon: Flame,
      link: '/services/fire-detection-installation',
      color: 'from-yellow-500 to-yellow-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive ICT, networking, and security solutions designed to meet your business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link to={service.link} className="block">
                <div className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-dark-700 h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Our team of experts can design and implement tailored ICT solutions that perfectly fit your business requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
