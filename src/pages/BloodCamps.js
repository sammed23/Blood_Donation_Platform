import React, { useState } from "react";

const BloodCamps = () => {
  const [camps, setCamps] = useState([
    {
      id: 1,
      name: "Red Cross Blood Camp",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      address: "City Hospital, Mumbai",
      organizer: "Red Cross Society",
      deadline: "March 10, 2024",
      registered: false,
    },
    {
      id: 2,
      name: "Save Life Blood Camp",
      date: "March 22, 2024",
      time: "9:00 AM - 5:00 PM",
      address: "Community Hall, Delhi",
      organizer: "Rotary Club",
      deadline: "March 18, 2024",
      registered: false,
    },
  ]);

  const handleRegister = (id) => {
    setCamps(
      camps.map((camp) =>
        camp.id === id ? { ...camp, registered: true } : camp
      )
    );
    alert("You have successfully registered for the camp!");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-red-500">
        Upcoming Blood Donation Camps
      </h1>

      <div className="max-w-4xl mx-auto mt-6">
        {camps.map((camp) => (
          <div key={camp.id} className="bg-white p-6 mb-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{camp.name}</h2>
            <p className="text-gray-600 mt-2">{camp.organizer}</p>
            <p className="mt-2">📍 <strong>Address:</strong> {camp.address}</p>
            <p>📅 <strong>Date:</strong> {camp.date}</p>
            <p>⏰ <strong>Time:</strong> {camp.time}</p>
            <p>⏳ <strong>Registration Deadline:</strong> {camp.deadline}</p>

            {camp.registered ? (
              <p className="text-green-500 font-bold mt-4">✅ Registered</p>
            ) : (
              <button
                onClick={() => handleRegister(camp.id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-105"
              >
                Register Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodCamps;
