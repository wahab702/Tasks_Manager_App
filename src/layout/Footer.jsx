import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">YourBrand</h2>
          <p className="text-sm">
            Building modern and responsive web applications with
            professional UI and clean architecture.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Web Development</li>
            <li className="hover:text-white cursor-pointer">UI/UX Design</li>
            <li className="hover:text-white cursor-pointer">SEO</li>
            <li className="hover:text-white cursor-pointer">Consulting</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <FaFacebook className="hover:text-white cursor-pointer text-xl" />
            <FaTwitter className="hover:text-white cursor-pointer text-xl" />
            <FaInstagram className="hover:text-white cursor-pointer text-xl" />
            <FaLinkedin className="hover:text-white cursor-pointer text-xl" />
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;