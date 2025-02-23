import React from 'react';

const TrackImpact = () => {
  const donationHistory = [
    { id: 1, date: "2024-03-01", location: "City Hospital", livesImpacted: 3 },
    { id: 2, date: "2023-12-15", location: "Red Cross Center", livesImpacted: 3 },
    // Add more dummy data as needed
  ];

  const stats = {
    totalDonations: donationHistory.length,
    livesImpacted: donationHistory.reduce((acc, curr) => acc + curr.livesImpacted, 0),
    lastDonation: donationHistory[0]?.date || "No donations yet",
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-8">Your Impact</h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700">Total Donations</h3>
            <p className="text-3xl font-bold text-red-600 mt-2">{stats.totalDonations}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700">Lives Impacted</h3>
            <p className="text-3xl font-bold text-red-600 mt-2">{stats.livesImpacted}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700">Last Donation</h3>
            <p className="text-3xl font-bold text-red-600 mt-2">
              {new Date(stats.lastDonation).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Donation History */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h2 className="text-2xl font-semibold p-6 bg-gray-50 border-b">Donation History</h2>
          <div className="divide-y">
            {donationHistory.map((donation) => (
              <div key={donation.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-medium text-gray-800">
                      {new Date(donation.date).toLocaleDateString()}
                    </p>
                    <p className="text-gray-600">{donation.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Lives Impacted</p>
                    <p className="text-xl font-semibold text-red-600">{donation.livesImpacted}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackImpact;