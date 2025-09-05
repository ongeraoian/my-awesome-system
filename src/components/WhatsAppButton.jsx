import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254727676338', '_blank', 'noopener,noreferrer');
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Expanded State */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                className="mb-4 glass rounded-2xl p-6 max-w-xs border"
                style={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  borderColor: 'hsl(var(--border))',
                  color: 'hsl(var(--card-foreground))'
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold" style={{ color: 'hsl(var(--foreground))' }}>WhatsApp Support</h3>
                      <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>0727676338</p>
                    </div>
                  </div>
                  <button
                    onClick={toggleExpanded}
                    className="p-1 rounded-full transition-colors hover:bg-muted"
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
                
                <p className="text-sm mb-4" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  Hi! How can we help you with your ICT needs today?
                </p>
                
                <div className="space-y-2">
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 text-white"
                    style={{ backgroundColor: 'hsl(var(--secondary))' }}
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Start Chat</span>
                  </button>
                  
                  <button
                    onClick={() => window.open('tel:+254727676338', '_self')}
                    className="w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 hover:bg-muted"
                    style={{ 
                      backgroundColor: 'hsl(var(--muted))', 
                      color: 'hsl(var(--muted-foreground))' 
                    }}
                  >
                    Call Now
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main WhatsApp Button */}
          <motion.button
            onClick={isExpanded ? toggleExpanded : handleWhatsAppClick}
            onMouseEnter={() => setIsExpanded(true)}
            className="relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
                 style={{ backgroundColor: 'hsl(var(--secondary))' }}>
              <MessageCircle className="h-7 w-7 text-white" />
            </div>
            
            {/* Pulse Animation */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: 'hsl(var(--secondary))' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            
            {/* Tooltip */}
            <div className="absolute right-16 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                 style={{ 
                   backgroundColor: 'hsl(var(--popover))',
                   color: 'hsl(var(--popover-foreground))',
                   border: '1px solid hsl(var(--border))'
                 }}>
              Chat with us on WhatsApp
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-t-4 border-t-transparent border-b-4 border-b-transparent"
                   style={{ borderLeftColor: 'hsl(var(--popover))' }}></div>
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
