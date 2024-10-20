// Navbar.jsx
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-white text-black p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Portfolio Title */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80} // Adjusted offset for smooth scroll
          className="text-xl font-medium hover:text-red-600 transition duration-300 cursor-pointer" // Added cursor-pointer
        >
          Jaideep's Portfolio
        </Link>
        
        {/* Navbar Links */}
        <div className="flex space-x-6">
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            offset={-80} 
            className="text-lg hover:text-red-600 transition duration-300 transform hover:scale-105 cursor-pointer" // Added scale effect
          >
            Projects
          </Link>
          <Link 
            to="skills" 
            smooth={true} 
            duration={500} 
            offset={-80} 
            className="text-lg hover:text-red-600 transition duration-300 transform hover:scale-105 cursor-pointer" // Added scale effect
          >
            Skills
          </Link>
          <Link 
            to="certificates" 
            smooth={true} 
            duration={500} 
            offset={-80} 
            className="text-lg hover:text-red-600 transition duration-300 transform hover:scale-105 cursor-pointer" // Added scale effect
          >
            Certificates
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            offset={-80} 
            className="text-lg hover:text-red-600 transition duration-300 transform hover:scale-105 cursor-pointer" // Added scale effect
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
