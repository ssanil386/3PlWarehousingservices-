import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import { Menu, X, Truck, Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Layout: React.FC = () => {
  const { config } = useSite();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Locations', path: '/locations' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">{config.name}</span>
                <span className="text-xs text-slate-500 font-medium tracking-wide">LOGISTICS INDIA</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActive(link.path) ? 'text-orange-600' : 'text-slate-600 hover:text-orange-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-12 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4 text-white">
                <Truck className="h-6 w-6" />
                <span className="text-lg font-bold">{config.name}</span>
              </div>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                {config.tagline}. Leading the way in Indian supply chain management with cutting-edge technology and expansive warehousing networks.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-orange-500 transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="hover:text-orange-500 transition-colors"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="hover:text-orange-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="hover:text-orange-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-white transition-colors">Warehousing</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Distribution</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Cold Chain</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">E-commerce</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/locations" className="hover:text-white transition-colors">Our Network</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog & Insights</Link></li>
                <li><Link to="/admin" className="hover:text-white transition-colors">Admin Login</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-500 mt-0.5 shrink-0" />
                  <span>HQ: A507, Belantra,<br />Karade, Panvel - 410207</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-500 shrink-0" />
                  <span>{config.contactPhone}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} {config.name}. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;