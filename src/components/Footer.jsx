import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Brand Column */}
        <div>
            <div className="mb-6">
                 {/* Placeholder for Logo - white version if needed */}
                <h2 className="text-2xl font-bold text-white">STELLAR</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Transforming businesses with innovative digital solutions. We are your partners in growth and success.
            </p>
            <div className="flex space-x-4">
                {/* Social Icons */}
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">📘</a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">👔</a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">📷</a>
            </div>
        </div>

        {/* Quick Links */}
        <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/services/web-design" className="hover:text-white transition-colors">Web Design</Link></li>
                <li><Link to="/services/mobile-app" className="hover:text-white transition-colors">Mobile App Dev</Link></li>
                <li><Link to="/services/sap" className="hover:text-white transition-colors">SAP Solutions</Link></li>
                <li><Link to="/services/digital-marketing" className="hover:text-white transition-colors">Digital Marketing</Link></li>
            </ul>
        </div>

        {/* Quick Links */}
        <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
        </div>

        {/* Contact Info */}
        <div>
            <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                    <span className="mt-1">📍</span>
                    <span>123 Business Avenue, Top Floor,<br/>Tech District, City 10001</span>
                </li>
                <li className="flex items-center gap-3">
                    <span>📞</span>
                    <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                    <span>✉️</span>
                    <span>info@stellarsolutions.com</span>
                </li>
            </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Stellar Solutions. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
      
      {/* WhatsApp Float Button */}
      <a href="https://wa.me/yournumber" className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center text-white text-3xl z-50 transition-transform hover:scale-110">
        💬
      </a>
    </footer>
  );
};

export default Footer;
