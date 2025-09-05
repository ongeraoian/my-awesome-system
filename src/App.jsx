import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext.js';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Reviews from './pages/Reviews.jsx';
import Contact from './pages/Contact.jsx';
import BrandExperience from './pages/BrandExperience.jsx';
import DoorSecurity from './pages/DoorSecurity.jsx';
import CCTVInstallation from './pages/CCTVInstallation.jsx';
import FiberInstallation from './pages/FiberInstallation.jsx';
import CarTrackerInstallation from './pages/CarTrackerInstallation.jsx';
import FireDetectionInstallation from './pages/FireDetectionInstallation.jsx';
import VehicleTrackingServices from './pages/VehicleTrackingServices.jsx';
import Fuel from './pages/Fuel.jsx';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
            <Navbar />
            <Routes>
              {/* Main Page with All Sections */}
              <Route
                path="/"
                element={
                  <>
                    <div id="home">
                      <Home />
                    </div>
                    <div id="about">
                      <About />
                    </div>
                    <div id="services">
                      <Services />
                      <BrandExperience />
                    </div>
                    <div id="reviews">
                      <Reviews />
                    </div>
                    <div id="contact">
                      <Contact />
                    </div>
                  </>
                }
              />

              {/* Individual Service Pages */}
              <Route path="/services/door-security" element={<DoorSecurity />} />
              <Route path="/services/cctv-installation" element={<CCTVInstallation />} />
              <Route path="/services/fiber-installation" element={<FiberInstallation />} />
              <Route path="/services/car-tracker-installation" element={<CarTrackerInstallation />} />
              <Route path="/services/fire-detection-installation" element={<FireDetectionInstallation />} />
              <Route path="/services/vehicle-tracking-services" element={<VehicleTrackingServices />} />
              <Route path="/services/fuel" element={<Fuel />} />
            </Routes>
            <Footer />
            <WhatsAppButton />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
