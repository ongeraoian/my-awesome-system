import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Globe, Heart, Target, Lightbulb, Shield, Zap } from 'lucide-react';

const About = () => {
  const metrics = [
    { icon: Users, value: '100+', label: 'Happy Clients', color: 'from-blue-500 to-blue-600' },
    { icon: Award, value: '10+', label: 'Years Experience', color: 'from-green-500 to-green-600' },
    { icon: Globe, value: '50+', label: 'Projects Completed', color: 'from-purple-500 to-purple-600' },
    { icon: Heart, value: '99%', label: 'Client Satisfaction', color: 'from-red-500 to-red-600' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower businesses to innovate and grow through advanced computing and communication technologies.',
    },
    {
      icon: Lightbulb,
      title: 'Vision',
      description: 'To be the leading provider of integrated ICT solutions that drive digital transformation across Kenya.',
    },
    {
      icon: Shield,
      title: 'Values',
      description: 'Quality, security, reliability, and excellence in every solution we deliver to our clients.',
    },
  ];

  const team = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: '/src/Assets/about_us.jpg',
      description: 'Visionary leader with 15+ years in ICT industry',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: '/src/Assets/about_us.jpg',
      description: 'Technology expert specializing in security solutions',
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Engineer',
      image: '/src/Assets/about_us.jpg',
      description: 'Network infrastructure specialist with 10+ years experience',
    },
    {
      name: 'Sarah Wilson',
      role: 'Project Manager',
      image: '/src/Assets/about_us.jpg',
      description: 'Ensures seamless project delivery and client satisfaction',
    },
  ];

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
    <section className="py-20 bg-white dark:bg-dark-900">
      <Helmet>
        <title>About Multside Technologies - Leading ICT Solutions Provider in Kenya</title>
        <meta name="description" content="Learn about Multside Technologies, established in 2016, delivering comprehensive ICT solutions with 100+ happy clients and 10+ years of experience in Kenya." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-gradient">Multside Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Empowering businesses through innovative ICT solutions since 2016
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Multside Technologies, established in October 2016, is dedicated to delivering 
                  comprehensive and integrated business solutions that prioritize quality, security, 
                  and reliability. Our mission is to empower businesses to innovate and grow through 
                  advanced computing and communication technologies.
                </p>
                <p>
                  We are committed to organizational excellence by fostering a knowledgeable and trusted 
                  workforce, strategically investing in skills, modern tools, and cutting-edge technology 
                  to meet the evolving needs of our clients.
                </p>
                <p>
                  Whether supporting small businesses, medium enterprises, or large corporations, we 
                  provide tailored solutions that address current challenges while preparing for future 
                  opportunities.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/src/Assets/about_us.jpg"
                alt="Multside Technologies Office"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </motion.div>

        {/* Animated Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-dark-800 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our dedicated team of experts brings together diverse skills and experience 
              to deliver exceptional ICT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
