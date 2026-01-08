import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (menu) => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }
  };

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  // Glassmorphism classes
  const navClasses = `fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
    scrolled 
      ? 'bg-[#0f1021]/70 backdrop-blur-md shadow-lg border-b border-white/10' 
      : 'bg-transparent'
  }`;

  const dropdownClasses = "absolute left-0 mt-2 w-64 bg-[#1a1b2e]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden py-2 text-gray-200 animate-fadeIn";
  const linkClasses = "block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200";
  const navLinkClasses = "text-gray-300 hover:text-white font-medium transition-colors duration-200";

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src="/Stellar_logo.png" alt="Stellar Logo" className="h-16 w-auto brightness-0 invert" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <Link to="/about" className={navLinkClasses}>About Us</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`${navLinkClasses} flex items-center focus:outline-none`}>
                Services
                <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              {activeDropdown === 'services' && (
                <div className={dropdownClasses}>
                  <Link to="/services/ecommerce" className={linkClasses}>E-commerce Website Development</Link>
                  <Link to="/services/web-design" className={linkClasses}>Website Design and Development</Link>
                  <Link to="/services/mobile-app" className={linkClasses}>Mobile App Development</Link>
                  <Link to="/services/custom-software" className={linkClasses}>Custom Software Development</Link>
                  <Link to="/services/digital-marketing" className={linkClasses}>Digital Marketing Services</Link>
                  
                  {/* Nested Design Services */}
                  <div 
                    className="relative group/sub"
                    onMouseEnter={() => setActiveSubDropdown('design')}
                    onMouseLeave={() => setActiveSubDropdown(null)}
                  >
                     <button className={`w-full flex justify-between items-center px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white text-left`}>
                      Design Services
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
             <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`${navLinkClasses} flex items-center focus:outline-none`}>
                Our Products
                <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
               {activeDropdown === 'products' && (
                <div className={`${dropdownClasses} w-48`}>
                  <Link to="/products/fieldeaze" className={linkClasses}>FieldEaze</Link>
                </div>
              )}
            </div>

            <Link to="/industries" className={navLinkClasses}>Industries</Link>

            {/* Blog Dropdown */}
             <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('blog')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`${navLinkClasses} flex items-center focus:outline-none`}>
                Blog
                <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
               {activeDropdown === 'blog' && (
                <div className={`${dropdownClasses} w-48`}>
                  <Link to="/blog/case-studies" className={linkClasses}>Case Studies</Link>
                </div>
              )}
            </div>

            <Link to="/contact" className={navLinkClasses}>Contact Us</Link>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/enquire" className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-white transition duration-300 ease-out border border-white/20 rounded-full shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-600 group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">ENQUIRE US</span>
              <span className="relative invisible">ENQUIRE US</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white hover:text-blue-400 focus:outline-none bg-white/10 p-2 rounded-lg backdrop-blur-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-[#0f1021]/95 backdrop-blur-xl border-t border-white/10 overflow-y-auto max-h-[80vh] shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link to="/about" className="block px-3 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded-lg">About Us</Link>
            
            <button onClick={() => toggleDropdown('services')} className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded-lg">
              Services
              <svg className={`w-4 h-4 transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {activeDropdown === 'services' && (
              <div className="pl-4 space-y-1 border-l-2 border-white/10 ml-3">
                <Link to="/services/ecommerce" className="block px-3 py-2 text-sm text-gray-400 hover:text-white">E-commerce</Link>
                <Link to="/services/web-design" className="block px-3 py-2 text-sm text-gray-400 hover:text-white">Web Design</Link>
                <Link to="/services/mobile-app" className="block px-3 py-2 text-sm text-gray-400 hover:text-white">Mobile App</Link>
                <Link to="/services/custom-software" className="block px-3 py-2 text-sm text-gray-400 hover:text-white">Custom Software</Link>
                <Link to="/services/digital-marketing" className="block px-3 py-2 text-sm text-gray-400 hover:text-white">Digital Marketing</Link>
                <Link to="/services/design-services" className="block px-3 py-2 text-sm text-gray-400 hover:text-white">Design Services</Link>
              </div>
            )}

            <button onClick={() => toggleDropdown('products')} className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded-lg">
              Our Products
               <svg className={`w-4 h-4 transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
             {activeDropdown === 'products' && (
              <div className="pl-4 space-y-1 border-l-2 border-white/10 ml-3">
                <Link to="/products/fieldeaze" className="block px-3 py-2 text-sm text-gray-400 hover:text-white">FieldEaze</Link>
              </div>
            )}

            <Link to="/industries" className="block px-3 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded-lg">Industries</Link>

             <button onClick={() => toggleDropdown('blog')} className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded-lg">
              Blog
               <svg className={`w-4 h-4 transform ${activeDropdown === 'blog' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
             {activeDropdown === 'blog' && (
              <div className="pl-4 space-y-1 border-l-2 border-white/10 ml-3">
                <Link to="/blog/case-studies" className="block px-3 py-2 text-sm text-gray-400 hover:text-white">Case Studies</Link>
              </div>
            )}

            <Link to="/contact" className="block px-3 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded-lg">Contact Us</Link>
            
            <div className="mt-6 px-3">
               <Link to="/enquire" className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 font-semibold shadow-lg shadow-blue-500/30">
                ENQUIRE US
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
