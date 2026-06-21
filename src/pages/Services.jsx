import React from "react";
import { FaCode, FaMobileAlt, FaPaintBrush, FaChartLine } from "react-icons/fa";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient from-gray-100 to-gray-200">

      

      {/* Services Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Web Development */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <FaCode className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">
              Modern and responsive websites built with the latest technologies.
            </p>
          </div>

          {/* Mobile App Development */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <FaMobileAlt className="text-green-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
            <p className="text-gray-600">
              High-performance mobile applications for Android and iOS platforms.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <FaPaintBrush className="text-purple-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">
              Clean and user-friendly designs focused on user experience.
            </p>
          </div>

          {/* Digital Marketing */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <FaChartLine className="text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
            <p className="text-gray-600">
              Strategies to grow your brand visibility and online presence.
            </p>
          </div>

        </div>
      </div>

     
    </div>
  );
};

export default Services;