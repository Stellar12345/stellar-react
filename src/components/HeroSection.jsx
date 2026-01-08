import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: "Empowering Your Digital Journey",
    subtitle: "Innovative Solutions | Reliable Services",
    description: "Bring your ideas to life with stunning, responsive Digital Solutions. Let's create a digital presence that makes an impact!",
  },
  {
    id: 2,
    title: "Transform Your Business with Expert SAP Consulting",
    subtitle: "Optimize | Integrate | Innovate",
    description: "Unlock the full potential of SAP solutions tailored to your business needs.",
  },
  {
    id: 3,
    title: "Protecting Your Business from Digital Threats",
    subtitle: "Proactive Protection | Real-time Monitoring",
    description: "Stay ahead of cyber risks with our cutting-edge cybersecurity solutions.",
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full bg-[#0f1021] font-sans overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')", backgroundSize: '100% 100%' }}
      >
      </div>

      {/* Corner Gradient */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-10"
        style={{ background: 'radial-gradient(circle, rgba(43, 255, 255, 0.24) 0%, rgba(43, 255, 255, 0) 70%)' }}
      ></div>

      {/* Main Grid Container */}
      <div className="relative z-20 w-[100%] max-w-[95rem] mx-auto px-6 h-full grid grid-cols-1 lg:grid-cols-12">
        
        {/* LEFT COLUMN: Title, Subtitle, Buttons */}
        <div className="lg:col-span-5 h-full flex flex-col justify-center relative lg:pl-16 order-1 lg:order-1 pt-20 lg:pt-0">
          {slides.map((slide, index) => (
             <div
              key={slide.id}
              className={`transition-all duration-1000 ease-in-out absolute left-0 lg:left-16 w-full lg:w-[90%] flex flex-col items-center lg:items-start space-y-6 ${
                index === currentSlide ? "opacity-100 z-20" : "opacity-0 pointer-events-none z-10"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-relaxed text-center lg:text-left drop-shadow-lg line-height-[2.1]">
                {slide.title.split(' ').map((word, i) => (
                   <span key={i} className={i === 1 || i === 2 ? "text-transparent bg-clip-text bg-gradient-to-r from-[#2BFFFF] to-blue-500" : ""}>
                     {word} {' '}
                   </span>
                ))}
              </h1>
              
              {slide.subtitle && (
                <p className="text-lg md:text-xl font-medium text-gray-300 tracking-wide border-l-0 lg:border-l-4 border-[#2BFFFF] lg:pl-4 text-center lg:text-left">
                  {slide.subtitle}
                </p>
              )}

              <div className="hidden lg:flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER COLUMN: Hand Image - Anchored Bottom */}
        <div className="lg:col-span-4 h-full flex items-end justify-center relative order-2 lg:order-2 z-30">
           {/* Center Glow */}
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
           
           <img 
             src="/hand-front-herobanner.png" 
             alt="Showcase" 
             className="relative z-10 w-auto h-[65vh] lg:h-[85vh] object-contain object-bottom drop-shadow-2xl"
           />
        </div>

        {/* RIGHT COLUMN: Description */}
        <div className="lg:col-span-3 h-full flex flex-col justify-center relative lg:pr-16 order-3 lg:order-3">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-1000 ease-in-out absolute right-0 lg:right-16 w-full lg:w-full flex flex-col items-center lg:items-start ${
                index === currentSlide ? "opacity-100 translate-x-0 z-20" : "opacity-0 translate-x-10 pointer-events-none z-10"
              }`}
            >
              <p className="text-gray-400 text-base md:text-lg leading-relaxed text-center lg:text-left">
                {slide.description}
              </p>
              
              {/* Mobile Button */}
              <div className="lg:hidden flex flex-wrap gap-4 pt-6 justify-center">
                 <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg shadow-blue-500/30">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === index ? 'w-8 bg-[#2BFFFF]' : 'w-2 bg-gray-600 hover:bg-gray-400'} focus:outline-none`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
