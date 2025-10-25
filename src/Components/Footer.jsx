import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-12 px-6  border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div>
          <figure className="mb-4">
            <img src={logo} alt="Playora Logo" className="w-28 h-28 rounded-full border-2 border-pink-500 shadow-lg" />
          </figure>
          <p className="text-gray-300 leading-relaxed">
            Playora — your ultimate gaming hub!  
            Explore, play, and track your favorite games all in one place. 
            Level up your gaming experience today 🎮
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white transition-all duration-200 cursor-pointer">Branding</li>
            <li className="hover:text-white transition-all duration-200 cursor-pointer">Design</li>
            <li className="hover:text-white transition-all duration-200 cursor-pointer">Marketing</li>
            <li className="hover:text-white transition-all duration-200 cursor-pointer">Advertisement</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white transition-all duration-200 cursor-pointer">Home</li>
            <li className="hover:text-white transition-all duration-200 cursor-pointer">Features</li>
            <li className="hover:text-white transition-all duration-200 cursor-pointer">Pricing</li>
            <li className="hover:text-white transition-all duration-200 cursor-pointer">Blog</li>
            <li className="hover:text-white transition-all duration-200 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Connect With Us</h3>
          <ul className="space-y-2 text-gray-300 mb-4">
            <li>Email: <span className="text-white">support@playora.com</span></li>
            <li>Phone: <span className="text-white">+880 1776079464</span></li>
            <li>Address: <span className="text-white">Dhaka, Bangladesh</span></li>
          </ul>

          <div className="flex gap-4 mt-4">
            <a href="#" className="p-2 bg-white/10 hover:bg-pink-500 rounded-full transition-all duration-300">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="p-2 bg-white/10 hover:bg-pink-500 rounded-full transition-all duration-300">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="p-2 bg-white/10 hover:bg-pink-500 rounded-full transition-all duration-300">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="#" className="p-2 bg-white/10 hover:bg-pink-500 rounded-full transition-all duration-300">
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>

      </div>

      {/* Footer bottom line */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">
        © 2025 Playora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
