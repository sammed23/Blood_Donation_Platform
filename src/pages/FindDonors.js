import React, { useState } from 'react';

const FindDonors = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [bloodType, setBloodType] = useState('');

  const donors = [
    { id: 1, name: "John Doe", bloodType: "A+", location: "New York", lastDonation: "2024-02-15" },
    { id: 2, name: "Jane Smith", bloodType: "O-", location: "Los Angeles", lastDonation: "2024-03-01" },
    // Add more dummy data as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-8">Find Blood Donors</h1>
        
        {/* Search and Filter Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Search by location..."
              className="p-2 border rounded-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
              className="p-2 border rounded-md"
            >
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
        </div>

        {/* Donors List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donors.map((donor) => (
            <div key={donor.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800">{donor.name}</h3>
              <div className="mt-2 text-gray-600">
                <p>Blood Type: <span className="font-medium text-red-600">{donor.bloodType}</span></p>
                <p>Location: {donor.location}</p>
                <p>Last Donation: {donor.lastDonation}</p>
              </div>
              <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                Contact Donor
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindDonors;