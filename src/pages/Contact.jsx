import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient from-gray-100 to-gray-200 w-full m-auto">

      
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Send Message</h2>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">

          <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4 hover:shadow-lg transition">
            <FaEnvelope className="text-blue-600 text-2xl" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">support@example.com</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4 hover:shadow-lg transition">
            <FaPhoneAlt className="text-green-600 text-2xl" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+92 300 1234567</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4 hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-red-600 text-2xl" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">Karachi, Pakistan</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;