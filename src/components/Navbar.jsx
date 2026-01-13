import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [designServicesOpen, setDesignServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const designServicesTimeoutRef = useRef(null);

  return (
    <nav className="fixed w-full z-50 top-6 flex justify-center px-4">
      <div className="flex items-center justify-between w-full max-w-7xl h-16 px-6 md:px-10 rounded-full backdrop-blur-xl bg-white/5 border border-white/20 shadow-2xl">
        {/* Logo - Left */}
        <NavLink to="/" className="flex-shrink-0">
          <div className="flex items-center gap-2 group">
            <img 
              src="/home/Stellar_logo.png" 
              alt="Stellar Logo" 
              className="h-10 w-auto brightness-0 invert transition-transform group-hover:scale-105"
            />
          </div>
        </NavLink>

        {/* Centered Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 relative">
          <NavLink 
            to="/about" 
            className="text-white/90 hover:text-white transition-all text-sm font-medium relative group"
          >
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </NavLink>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => {
              if (designServicesTimeoutRef.current) {
                clearTimeout(designServicesTimeoutRef.current);
                designServicesTimeoutRef.current = null;
              }
              setServicesOpen(false);
              setDesignServicesOpen(false);
            }}
          >
            <button className="text-white/90 hover:text-white transition-all text-sm font-medium flex items-center gap-1.5 group relative pb-2">
              Services
              <svg className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            
            {servicesOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 pt-2 w-72 bg-black/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl py-3 overflow-visible z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-2 space-y-1">
                  <Link 
                    to="/services/ecommerce" 
                    className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:translate-x-1"
                  >
                    E-commerce Website Development
                  </Link>
                  <Link 
                    to="/services/website" 
                    className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:translate-x-1"
                  >
                    Website Design and Development
                  </Link>
                  <Link 
                    to="/services/mobile" 
                    className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:translate-x-1"
                  >
                    Mobile App Development
                  </Link>
                  <Link 
                    to="/services/custom-software" 
                    className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:translate-x-1"
                  >
                    Custom Software Development
                  </Link>
                  <Link 
                    to="/services/digital-marketing" 
                    className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:translate-x-1"
                  >
                    Digital Marketing Services
                  </Link>
                  
                  {/* Design Services Sub-dropdown */}
                  <div 
                    className="relative"
                    onMouseEnter={() => {
                      if (designServicesTimeoutRef.current) {
                        clearTimeout(designServicesTimeoutRef.current);
                        designServicesTimeoutRef.current = null;
                      }
                      setDesignServicesOpen(true);
                    }}
                    onMouseLeave={() => {
                      designServicesTimeoutRef.current = setTimeout(() => {
                        setDesignServicesOpen(false);
                      }, 150);
                    }}
                  >
                    <div className="px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 flex items-center justify-between cursor-pointer group">
                      <span>Design Services</span>
                      <svg className={`w-4 h-4 transition-transform duration-200 ${designServicesOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    
                    {designServicesOpen && (
                      <div 
                        className="absolute left-full top-0 ml-0 w-60 bg-black/98 backdrop-blur-2xl border border-white/20 rounded-xl shadow-2xl py-2 z-50"
                        onMouseEnter={() => {
                          if (designServicesTimeoutRef.current) {
                            clearTimeout(designServicesTimeoutRef.current);
                            designServicesTimeoutRef.current = null;
                          }
                          setDesignServicesOpen(true);
                        }}
                        onMouseLeave={() => {
                          designServicesTimeoutRef.current = setTimeout(() => {
                            setDesignServicesOpen(false);
                          }, 150);
                        }}
                      >
                        <Link 
                          to="/services/design/ui-ux" 
                          className="block px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1"
                        >
                          UI/UX Design
                        </Link>
                        <Link 
                          to="/services/design/logo" 
                          className="block px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1"
                        >
                          Logo Design
                        </Link>
                        <Link 
                          to="/services/design/explainer-videos" 
                          className="block px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1"
                        >
                          Explainer Videos
                        </Link>
                        <Link 
                          to="/services/design/animation-videos" 
                          className="block px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1"
                        >
                          Animation Videos
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="text-white/90 hover:text-white transition-all text-sm font-medium flex items-center gap-1.5 group relative pb-2">
              Products
              <svg className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            
            {productsOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 pt-2 w-48 bg-black/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <Link 
                  to="/products/fieldeaze" 
                  className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:translate-x-1"
                >
                  FieldEaze
                </Link>
              </div>
            )}
          </div>

          <NavLink 
            to="/industries" 
            className="text-white/90 hover:text-white transition-all text-sm font-medium relative group"
          >
            Industries
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </NavLink>
          
          <NavLink 
            to="/blog" 
            className="text-white/90 hover:text-white transition-all text-sm font-medium relative group"
          >
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className="text-white/90 hover:text-white transition-all text-sm font-medium relative group"
          >
            Contact Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </NavLink>
        </div>

        {/* Sign In Button - Right */}
        <div className="hidden lg:block">
          <NavLink 
            to="/signin" 
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
          >
            Sign In
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-blue-400 focus:outline-none p-2 transition-colors"
          >
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-28 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md bg-black/95 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden mt-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-6 pb-6 space-y-1">
            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
            >
              About Us
            </Link>
            
            {/* Services Mobile */}
            <div>
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
              >
                <span>Services</span>
                <svg className={`w-5 h-5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="pl-4 mt-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                  <Link to="/services/ecommerce" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                    E-commerce Website Development
                  </Link>
                  <Link to="/services/website" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                    Website Design and Development
                  </Link>
                  <Link to="/services/mobile" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                    Mobile App Development
                  </Link>
                  <Link to="/services/custom-software" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                    Custom Software Development
                  </Link>
                  <Link to="/services/digital-marketing" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                    Digital Marketing Services
                  </Link>
                  <div>
                    <button 
                      onClick={() => setDesignServicesOpen(!designServicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                    >
                      <span>Design Services</span>
                      <svg className={`w-4 h-4 transition-transform duration-200 ${designServicesOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {designServicesOpen && (
                      <div className="pl-4 mt-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                        <Link to="/services/design/ui-ux" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-xs text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                          UI/UX Design
                        </Link>
                        <Link to="/services/design/logo" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-xs text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                          Logo Design
                        </Link>
                        <Link to="/services/design/explainer-videos" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-xs text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                          Explainer Videos
                        </Link>
                        <Link to="/services/design/animation-videos" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-xs text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                          Animation Videos
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Products Mobile */}
            <div>
              <button 
                onClick={() => setProductsOpen(!productsOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
              >
                <span>Products</span>
                <svg className={`w-5 h-5 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productsOpen && (
                <div className="pl-4 mt-1 animate-in slide-in-from-top-2 duration-200">
                  <Link to="/products/fieldeaze" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                    FieldEaze
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/industries" 
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
            >
              Industries
            </Link>
            <Link 
              to="/blog" 
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
            >
              Contact Us
            </Link>
            
            <div className="pt-4 border-t border-white/10 mt-4">
              <Link 
                to="/signin" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white px-6 py-3.5 rounded-full font-semibold shadow-lg shadow-purple-500/30 hover:scale-105 transition-all duration-300"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
