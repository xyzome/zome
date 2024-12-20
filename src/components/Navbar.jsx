import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import scrollToTop from '../hooks/Scroll';

const Dropdown = ({ title, items, isOpen, toggle }) => {
  return (
    <div className="relative">
      <button
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => toggle(!isOpen)}
        className="flex items-center space-x-2 text-white hover:text-gray-300 focus:outline-none"
      >
        <span>{title}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      <ul
        id={`dropdown-${title}`}
        role="menu"
        className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-gray-700 z-50 transition-all duration-200 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'
          }`}
      >
        {items.map((item) => (
          <li key={item.id} role="menuitem">
            <Link
              to={ `/service/${item.route}`}
              state={{ serviceId: item.id }}
              onClick={() => {
                toggle(false);
                scrollToTop();
              }}              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { id: 1, name: 'App Development', route: 'app-development' },
    { id: 2, name: 'Web Development', route: 'web-development' },
    { id: 3, name: 'Cloud Hosting', route: 'cloud-hosting' },
    { id: 4, name: 'Digital Marketing', route: 'digital-marketing' },
    { id: 5, name: 'UI & UX Design', route: 'ui-ux-design' },  // Updated
    { id: 6, name: 'Social Media Marketing', route: 'social-media-marketing' }
  ];


  const handleLinkClick = () => {
    setIsOpen(false);
    scrollToTop();
  };

  return (
    <nav className="bg-gray-900 shadow-lg fixed w-full z-50" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <img
              src={Logo}
              alt="Zome Logo"
              className="h-12 w-auto rounded-full cursor-pointer"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8" role="menu">
            <li>
              <Link to="/" className="text-white hover:text-gray-300" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Dropdown
                title="Services"
                items={services}
                isOpen={isServicesOpen}
                toggle={setIsServicesOpen}
              />
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              aria-label="Toggle Mobile Menu"
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
        <ul className="md:hidden bg-gray-800 z-50" role="menu">
          <li>
            <Link
              to="/"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li>
            <Dropdown
              title="Services"
              items={services}
              isOpen={isServicesOpen}
              toggle={setIsServicesOpen}
            />
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
