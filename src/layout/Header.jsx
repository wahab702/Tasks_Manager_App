import { Link } from "react-router-dom";

const Header = ({ login }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b">
      
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        
        
        <h1 className="text-3xl font-extrabold text-blue-600 tracking-wide cursor-pointer">
          Task Manager App
        </h1>

        
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <Link
            to="/"
            className="hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-blue-600 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/services"
            className="hover:text-blue-600 transition duration-300"
          >
            Services
          </Link>

          <Link
            to="/contact"
            className="hover:text-blue-600 transition duration-300"
          >
            Contact
          </Link>

          <Link
            to="/task"
            className="hover:text-blue-600 transition duration-300"
          >
            Tasks
          </Link>

          <Link
            to="/profile"
            className="hover:text-blue-600 transition duration-300"
          >
            Profile
          </Link>

        </nav>

        
        <div className="hidden md:block">

          {login && (
            <Link to="/signIn">
              <button className="bg-gradient from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-xl transition duration-300">
                Get Started
              </button>
            </Link>
          )}

        </div>

      </div>

    </header>
  );
};

export default Header;