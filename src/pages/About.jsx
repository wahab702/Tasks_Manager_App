import React from "react";
import { FaUsers, FaBullseye, FaLightbulb } from "react-icons/fa";
import Sidebar from "../layout/Sidebar";

const About = () => {
  return (
    <div>
     
    <div className="min-h-screen bg-gradient from-gray-100 to-gray-200 w-full m-auto">
 {/* About Company Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        
        
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4">
            We specialize in web development, mobile applications, UI/UX design,
            and digital marketing. Our goal is to provide scalable, high-quality,
            and innovative solutions.
          </p>
          <p className="text-gray-600">
            With a strong focus on user experience and performance, we deliver
            products that not only look great but also perform exceptionally.
          </p>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Our Strength
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li>✔ Professional Team</li>
            <li>✔ Modern Technologies</li>
            <li>✔ Clean & Scalable Code</li>
            <li>✔ Client Satisfaction Focus</li>
          </ul>
        </div>

      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaBullseye className="text-blue-600 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver innovative and reliable digital solutions that empower businesses worldwide.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaLightbulb className="text-yellow-500 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become a global leader in digital transformation and technology services.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaUsers className="text-green-600 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p className="text-gray-600">
              A dedicated team of developers, designers, and strategists working together.
            </p>
          </div>

        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4"></div>
              <h4 className="font-semibold text-lg">John Doe</h4>
              <p className="text-gray-600">Frontend Developer</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4"></div>
              <h4 className="font-semibold text-lg">Jane Smith</h4>
              <p className="text-gray-600">UI/UX Designer</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4"></div>
              <h4 className="font-semibold text-lg">Alex Khan</h4>
              <p className="text-gray-600">Backend Developer</p>
            </div>

          </div>
        </div>
      </div>
      

    </div>
    </div>
  );
};

export default About;