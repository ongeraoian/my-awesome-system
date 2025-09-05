import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import BrandExperience from './pages/BrandExperience'; // Import the new component
import DoorSecurity from './pages/DoorSecurity'; // Example: Import one service page
import CCTVInstallation from './pages/CCTVInstallation';
import FiberInstallation from './pages/FiberInstallation';
import CarTrackerInstallation from './pages/CarTrackerInstallation';
import FireDetectionInstallation from './pages/FireDetectionInstallation';
import VehicleTrackingServices from './pages/VehicleTrackingServices';
import Fuel from './pages/Fuel';

import './App.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          {/* Main Page with All Sections */}
          <Route
            path="/"
            element={
              <>
                <div id="home" className="section">
                  <Home />
                </div>
                <div id="about" className="section">
                  <About />
                </div>
                <div id="services" className="section">
                  <Services />
                  <BrandExperience />
                </div>
                <div id="reviews" className="section">
                  <Reviews />
                </div>
                <div id="contact" className="section">
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
      </div>
    </Router>
  );
}

export default App;
