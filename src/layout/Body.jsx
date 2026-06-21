
import { FaUsers, FaChartLine, FaDollarSign } from "react-icons/fa";

const Body = () => {
  return (
    <div className="min-h-screen bg-gradient from-gray-100 to-gray-200 m-auto w-full">

      

      
      <div className="max-w-7xl mx-auto px-6 py-12">

      
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome Back 👋
          </h2>
          <p className="text-gray-600">
            Here is a quick overview of your platform performance.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

         
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Total Users
              </h3>
              <FaUsers className="text-blue-600 text-2xl" />
            </div>
            <p className="text-4xl font-bold text-blue-600">1,245</p>
          </div>

          
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Active Sessions
              </h3>
              <FaChartLine className="text-green-600 text-2xl" />
            </div>
            <p className="text-4xl font-bold text-green-600">312</p>
          </div>

          
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Revenue
              </h3>
              <FaDollarSign className="text-purple-600 text-2xl" />
            </div>
            <p className="text-4xl font-bold text-purple-600">$8,450</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Body;