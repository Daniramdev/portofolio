import React, { useState} from "react";
import MagneticButton from "./MagneticButton";
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';


function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Fungsi untuk membuka/tutup sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="navbar bg-white z-50 text-black border-b border-gray-200 px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="logo text-xl font-bold flex gap-3">
      <img src="/images/logordark.png" alt="logo"  className="h-6"></img>
      <p>Dani.</p>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className={`hamburger lg:hidden flex flex-col gap-1 cursor-pointer ${
          isSidebarOpen ? "open" : ""
        }`}
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close Menu" : "Open Menu"}
      >
        <span
          className={`w-6 h-0.5 bg-gray-900 transition-transform duration-300 ${
            isSidebarOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-gray-900 transition-opacity duration-300 ${
            isSidebarOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-gray-900 transition-transform duration-300 ${
            isSidebarOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      {/* Navigation Menu */}
      <nav className="nav-menu hidden lg:flex space-x-4">
        <MagneticButton>
          <a href="#about" className="hover:text-gray-600 text-black">
            About
          </a>
        </MagneticButton>
        <MagneticButton>
          <a href="#projects" className="hover:text-gray-600 text-black">
            Projects
          </a>
        </MagneticButton>
        <MagneticButton>
          <a href="#contact" className="hover:text-gray-600 text-black">
            Contact
          </a>
        </MagneticButton>
      
      </nav>

      {/* Sidebar for Mobile */}
      <nav
        className={`sidebar fixed top-0 right-0 w-80 h-full bg-gray-900 shadow-lg z-50 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="close-btn absolute top-4 right-4 hover:bg-blue-600 py-1 px-3 text-4xl text-gray-400"
          onClick={toggleSidebar}
          aria-label="Close Menu"
        >
          &times;
        </button>
        <ul className="p-16 text-xl">
          <li>
            <MagneticButton>
              <a href="#about" className="hover:text-gray-600 text-gray-400 block text-4xl">
                About
              </a>
            </MagneticButton>
          </li>
          <li>
            <MagneticButton>
              <a href="#projects" className="hover:text-gray-600 text-gray-400 block text-4xl">
                Projects
              </a>
            </MagneticButton>
          </li>
          <li>
            <MagneticButton>
              <a href="#contact" className="hover:text-gray-600 text-gray-400 block text-4xl">
                Contact
              </a>
            </MagneticButton>
          </li>
        
        </ul>
           {/* Social Media Icons */}
            <div className="social-icons flex gap-8 justify-center p-4">
          <a href="https://github.com" className="text-3xl text-gray-400 hover:text-gray-700">
            <FaGithub />
          </a>
          <a href="https://facebook.com" className="text-3xl text-blue-600 hover:text-blue-400">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" className="text-3xl text-pink-500 hover:text-pink-300">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;