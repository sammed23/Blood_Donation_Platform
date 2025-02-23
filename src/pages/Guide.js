import React from "react";

const Guide = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-red-500">Blood Donation Guide</h1>

      <div className="max-w-4xl mx-auto mt-6 bg-white p-6 rounded-lg shadow-lg">
        {/* Who Can Donate */}
        <h2 className="text-2xl font-bold text-red-500">Who Can Donate?</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>✅ Age: 18-65 years old</li>
          <li>✅ Weight: At least 50 kg</li>
          <li>✅ No major medical conditions</li>
          <li>✅ Not donated blood in the last 3 months</li>
        </ul>

        {/* Who Cannot Donate */}
        <h2 className="text-2xl font-bold text-red-500 mt-6">Who Cannot Donate?</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>❌ Recent surgery or medical treatment</li>
          <li>❌ Pregnant or breastfeeding women</li>
          <li>❌ History of blood-borne infections</li>
        </ul>

        {/* Benefits of Blood Donation */}
        <h2 className="text-2xl font-bold text-red-500 mt-6">Why Donate Blood?</h2>
        <p className="text-gray-700 mt-2">
          Blood donation helps save lives. It reduces the risk of heart disease, promotes the production of new blood cells, and can even improve mental well-being.
        </p>
      </div>
    </div>
  );
};

export default Guide;
