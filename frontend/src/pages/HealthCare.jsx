// // src/pages/HealthCare.jsx

// import React from 'react';

// const HealthCare = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold">Free Health Care Service</h1>
//       <p className="mt-4">Here you can find details about our Free Health Care Service.</p>
//     </div>
//   );
// };

// export default HealthCare;

import React from "react";
import { FaStethoscope, FaHeartbeat, FaClinicMedical } from "react-icons/fa";

const HealthCare = () => {
  return (
    <div className="min-h-screen px-6 py-16 bg-gray-50 md:px-16">
      {/* Header Section */}
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 md:text-5xl">
          Free Health Care Services
        </h1>
        <p className="mt-4 text-lg text-gray-600 md:text-xl">
          Access top-notch health care services without any cost. Your well-being is our priority.
        </p>
      </div>

      {/* Services Cards */}
      <div className="grid gap-8 mt-12 md:grid-cols-3">
        <div className="p-6 text-center transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-2xl">
          <div className="mx-auto text-5xl text-blue-500">
            <FaStethoscope />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            General Checkup
          </h3>
          <p className="mt-2 text-gray-600">
            Comprehensive health checkup to monitor your vital signs and overall health.
          </p>
        </div>

        <div className="p-6 text-center transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-2xl">
          <div className="mx-auto text-5xl text-red-500">
            <FaHeartbeat />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            Heart Care
          </h3>
          <p className="mt-2 text-gray-600">
            Specialized heart checkups and monitoring for a healthy heart.
          </p>
        </div>

        <div className="p-6 text-center transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-2xl">
          <div className="mx-auto text-5xl text-green-500">
            <FaClinicMedical />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            Medical Consultation
          </h3>
          <p className="mt-2 text-gray-600">
            Consult our expert doctors for free medical advice and treatment guidance.
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
        <p className="mt-4 text-lg text-gray-600">
          We provide free, accessible, and reliable health care services with a team of experienced medical professionals. Your health is our mission.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <button className="px-8 py-3 text-lg font-semibold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700">
          Book Your Free Checkup
        </button>
      </div>
    </div>
  );
};

export default HealthCare;

