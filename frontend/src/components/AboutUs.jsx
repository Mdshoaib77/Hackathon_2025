// src/components/AboutUs.jsx

import React from 'react';
import img from '../assets/about-1.jpg';
import helpimg from '../assets/about-2.jpg';

const AboutUs = () => {
  return (
    <section className="flex items-center justify-between p-8">
      <div className="flex flex-col items-center w-full lg:flex-row">
        <div className="w-full lg:w-1/2">
          <img 
            src={img}  // Replace with the actual image URL or uploaded image
            alt="Donation"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="w-full mt-8 lg:w-1/2 lg:pl-10 lg:mt-0">
          <h2 className="mb-4 text-4xl font-semibold text-blue-900">We Help People In Need Around The World</h2>
          <p className="mb-6 text-lg text-gray-700">
            HandsTogether unites us all in kindness, creating a community where each helping hand makes a difference.
          </p>
          <div className="mb-6 text-sm text-orange-600">
            <strong>Ahmadullah, Founder</strong>
          </div>
          <p className="mb-6 text-lg text-gray-600">
            There was a time of hardship and solitude. Pain lingered, but with unity and resilience, strength emerged from shared challenges, bringing hope for a brighter future.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-2 text-white transition bg-orange-500 rounded-lg shadow-md hover:bg-orange-600">
              Learn More
            </button>
            <button className="px-6 py-2 text-orange-500 transition border-2 border-orange-500 rounded-lg shadow-md hover:bg-orange-100">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
