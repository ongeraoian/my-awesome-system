import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, MessageCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${section}`;
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 shadow-2xl backdrop-blur-2xl border-b border-white/20 dark:border-gray-700/30' 
          : 'bg-gradient-to-r from-white/10 via-white/5 to-white/10 dark:from-gray-900/10 dark:via-gray-900/5 dark:to-gray-900/10 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <RouterLink to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500 scale-110"></div>
                <div className="relative bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-3 border border-white/30 dark:border-gray-700/30">
                  <img 
                    src="/src/Assets/logo a.png" 
                    alt="Multside Technologies Logo" 
                    className="h-10 w-auto transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <motion.span 
                  className="text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  Multside
                </motion.span>
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 -mt-1 tracking-wider uppercase">
                  Technologies
                </span>
              </div>
            </RouterLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ScrollLink
                  to={item.id}
                  smooth={true}
                  duration={500}
                  onClick={() => handleNavClick(item.id)}
                  className="relative px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-white transition-all duration-500 font-semibold group rounded-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 opacity-0 group-hover:opacity-90 transition-opacity duration-500 blur-sm"></div>
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </ScrollLink>
              </motion.div>
            ))}
            
            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur-lg opacity-60 animate-pulse"></div>
              <a
                href="https://wa.me/254727676338"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center space-x-3 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-500 shadow-2xl hover:shadow-green-500/25 transform hover:scale-110 hover:-translate-y-1 border border-green-400/30"
              >
                <MessageCircle className="h-5 w-5 animate-bounce" />
                <span className="hidden lg:inline text-lg">WhatsApp</span>
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>
            
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.15, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className="ml-6 p-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-500 shadow-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
              aria-label="Toggle dark mode"
            >
              <div className="relative">
                {isDark ? (
                  <Sun className="h-6 w-6 text-yellow-500 animate-spin" style={{ animationDuration: '3s' }} />
                ) : (
                  <Moon className="h-6 w-6 text-blue-600 animate-pulse" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-400/20 rounded-full blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* WhatsApp Button for Mobile */}
            <motion.a
              href="https://wa.me/254727676338"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transition-all duration-300 shadow-lg"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </motion.a>
            
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-md"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-blue-600" />}
            </motion.button>
            <motion.button
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-md"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6 text-red-500" /> : <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/20 shadow-lg"
          >
            <div className="px-6 py-6 space-y-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ScrollLink
                    to={item.id}
                    smooth={true}
                    duration={500}
                    onClick={() => handleNavClick(item.id)}
                    className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-300 font-medium group"
                  >
                    <span className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span>{item.label}</span>
                    </span>
                  </ScrollLink>
                </motion.div>
              ))}
              
              {/* WhatsApp Link in Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <a
                  href="https://wa.me/254727676338"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Support</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
