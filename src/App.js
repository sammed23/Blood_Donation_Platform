import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import Dashboard from "./pages/Dashboard";
import BloodCamps from "./pages/BloodCamps";
import Guide from "./pages/Guide";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FindDonors from "./pages/FindDonors";
import ScheduleDonations from "./pages/ScheduleDonations";
import TrackImpact from "./pages/TrackImpact";
import Emergency from "./pages/Emergency";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar className="fixed top-0 left-0 w-full bg-white shadow-md z-50" />
        <div className="flex-grow mt-16">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/camps" element={<BloodCamps />} />
            <Route path="/guide" element={<Guide />} />

            {/* Feature Routes */}
            <Route path="/find-donors" element={<FindDonors />} />
            <Route path="/schedule-donations" element={<ScheduleDonations />} />
            <Route path="/track-impact" element={<TrackImpact />} />
            <Route path="/emergency" element={<Emergency />} />

            {/* Information Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;