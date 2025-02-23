import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-8">About Us</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              We are dedicated to connecting blood donors with those in need, making the process of blood donation more accessible and efficient for everyone.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To create a world where no one dies due to lack of blood availability, by building a strong community of regular blood donors.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Commitment to saving lives</li>
              <li>Community engagement</li>
              <li>Transparency and trust</li>
              <li>Innovation in healthcare</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;