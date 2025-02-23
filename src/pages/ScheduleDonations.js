import React, { useState } from 'react';

const ScheduleDonations = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ selectedDate, selectedTime, location });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-8">Schedule Your Donation</h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Select Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Select Time</label>
              <input
                type="time"
                className="w-full p-2 border rounded-md"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Donation Center</label>
              <select
                className="w-full p-2 border rounded-md"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              >
                <option value="">Select a donation center</option>
                <option value="center1">City Hospital Blood Bank</option>
                <option value="center2">Red Cross Donation Center</option>
                <option value="center3">Community Blood Center</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors font-medium"
            >
              Schedule Appointment
            </button>
          </form>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Important Information</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Please bring a valid ID</li>
              <li>Eat well and stay hydrated before donation</li>
              <li>Get adequate rest the night before</li>
              <li>Wear comfortable clothing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDonations;