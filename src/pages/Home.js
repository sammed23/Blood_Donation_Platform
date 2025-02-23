import React from "react";
import { Link } from "react-router-dom";
import bloodDonationImage from "../assets/blood-donation.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center p-6 pt-20">
        <div className="max-w-5xl">
          <h1 className="text-5xl font-extrabold text-red-600 drop-shadow-lg animate-pulse tracking-wide">
            Donate Blood, Save Lives ❤️
          </h1>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed max-w-3xl mx-auto">
            Your donation can make a huge difference! Every drop counts. Join us in saving lives and making the world a better place.
          </p>

          {/* Image Section with Glow Effect */}
          <div className="flex justify-center mt-6">
            <img
              src={bloodDonationImage}
              alt="Blood Donation"
              className="rounded-lg shadow-lg w-80 h-70 object-contain border-2 border-red-500 hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Key Features Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/find-donors" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-red-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-500">Find Donors Easily</h3>
              <p className="text-gray-600 mt-2">Quickly connect with available blood donors in your area.</p>
            </Link>

            <Link to="/schedule-donations" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-red-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-500">Schedule Donations</h3>
              <p className="text-gray-600 mt-2">Plan your donations and help save lives regularly.</p>
            </Link>

            <Link to="/track-impact" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-red-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-500">Track Your Impact</h3>
              <p className="text-gray-600 mt-2">See how your contributions are making a difference.</p>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 space-y-4 md:space-y-0 md:space-x-4">
            <Link
              to="/login"
              className="inline-block bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold uppercase tracking-wide transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
            >
              Become a Donor
            </Link>
            <Link
              to="/emergency"
              className="inline-block bg-white text-red-600 border-2 border-red-600 px-8 py-3 rounded-full shadow-lg text-lg font-semibold uppercase tracking-wide transition-transform duration-300 hover:scale-110 hover:shadow-2xl ml-4"
            >
              Emergency Request
            </Link>
          </div>

          {/* Statistics Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-3xl font-bold text-red-600">1000+</h4>
              <p className="text-gray-600">Active Donors</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-3xl font-bold text-red-600">500+</h4>
              <p className="text-gray-600">Lives Saved</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-3xl font-bold text-red-600">50+</h4>
              <p className="text-gray-600">Partner Hospitals</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-3xl font-bold text-red-600">24/7</h4>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 mt-20 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-600">© 2025 Blood Donation Platform. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link to="/about" className="text-red-600 hover:text-red-700">About Us</Link>
            <Link to="/contact" className="text-red-600 hover:text-red-700">Contact</Link>
            <Link to="/privacy" className="text-red-600 hover:text-red-700">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;