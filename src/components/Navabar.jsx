import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navabar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', to: '/home' },
    
    { name: 'ABOUT', to: '/about' },
    { name: 'PORTOFOLIO', to: '/portfolio' },
    { name: 'SERVICES', to: '/service' },
    { name: 'WHY RWANDA', to: '/whyrwanda' },
   
   
  ];

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-4 fixed top-0 left-0 z-50 font-poppins">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-blue-600 tracking-wider">
            IBUYE<span className="text-black">DEVELOPERS</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 font-semibold text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`hover:text-blue-600 transition ${
                link.alwaysRed || location.pathname === link.to
                  ? 'text-blue-600'
                  : 'text-black'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Plan a Meeting Button */}
        <div className="hidden md:flex items-center bg-gray-900 text-white px-4 py-2 rounded">
          <Link to="/meeting" className="text-sm font-medium">
            PLAN A MEETING
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800">
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2 px-4 font-semibold text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`block py-2 hover:text-blue-600 transition ${
                link.alwaysRed || location.pathname === link.to
                  ? 'text-blue-600'
                  : 'text-black'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/meeting"
            className="block bg-blue-500 text-white text-center px-4 py-2 rounded mt-2"
            onClick={() => setMenuOpen(false)}
          >
            PLAN A MEETING
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navabar;
