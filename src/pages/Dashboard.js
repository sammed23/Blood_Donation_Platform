import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 opacity-0 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
          <p className="mt-2">Manage blood donations and track statistics easily.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-xl font-bold">Total Donations</h2>
            <p className="text-3xl text-red-500 font-semibold">120</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-xl font-bold">Active Donors</h2>
            <p className="text-3xl text-green-500 font-semibold">85</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-xl font-bold">Pending Requests</h2>
            <p className="text-3xl text-blue-500 font-semibold">18</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
