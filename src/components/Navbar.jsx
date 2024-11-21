import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';

const Dropdown = ({ title, items, isOpen, toggle }) => {
  return (
    <div className="relative">
      <button
        onClick={() => toggle(!isOpen)}
        className="flex items-center space-x-2 text-white hover:text-gray-300 focus:outline-none"
      >
        <span>{title}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      <div
        className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-gray-700 z-50 transition-all duration-200 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'
          }`}
      >
        <div className="py-2">
          {items.map((item) => (
            <Link
              key={item.id}
              to="/service"
              state={{ serviceId: item.id }}
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { id: 1, name: 'App Development', link: 'Homepage' },
    { id: 2, name: 'Web Development', link: 'Homepage' },
    { id: 3, name: 'Cloud Hosting', link: 'Homepage' },
    { id: 4, name: 'Digital Marketing', link: 'Homepage' },
    { id: 5, name: 'UI & UX Design', link: 'Homepage' },
    { id: 6, name: 'Social Media Marketing', link: 'Homepage' },
  ];

  return (
    <nav className="bg-gray-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <img
              src={Logo}
              alt="Zome Logo"
              className="h-10 w-auto rounded-full"
            />
            <span className="text-white text-xl font-semibold">ZOME</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
            <Dropdown
              title="Services"
              items={services}
              isOpen={isServicesOpen}
              toggle={setIsServicesOpen}
            />
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 z-50">
          <div className="space-y-1 px-4 py-2">
            <Link
              to="/"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Dropdown
              title="Services"
              items={services}
              isOpen={isServicesOpen}
              toggle={setIsServicesOpen}
            />
            <Link
              to="/contact"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

