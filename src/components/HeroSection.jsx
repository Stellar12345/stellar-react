import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0a0b1a] font-sans overflow-hidden">
      
      {/* Background Image - From Bottom to Half of Screen */}
      <div 
        className="absolute bottom-0 left-0 w-full h-1/2 z-0 opacity-20"
        style={{ 
          backgroundImage: "url('/home/hero-bg.png')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'left bottom',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Background Wave Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle blue glow from top-left */}
        <div 
          className="absolute top-[-5%] left-[-3%] w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0) 70%)' }}
        ></div>
        
        {/* Dark black base at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-black via-[#020617] to-transparent opacity-95"></div>

        {/* Very subtle dark wave shapes */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[40%] opacity-35"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.4) 40%, rgba(3, 7, 18, 0.9) 100%)',
            clipPath: 'ellipse(125% 60% at 50% 100%)',
          }}
        ></div>
        
        {/* Soft dark accent layer */}
        <div 
          className="absolute bottom-[-2%] right-[-5%] w-[80%] h-[32%] opacity-25"
          style={{
            background: 'radial-gradient(ellipse at 60% 100%, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.3) 45%, transparent 75%)',
            clipPath: 'ellipse(90% 50% at 60% 100%)',
          }}
        ></div>
        
        {/* Slight purple edge highlight */}
        <div 
          className="absolute bottom-0 left-[20%] w-[60%] h-[28%] opacity-25"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(88, 28, 135, 0.4) 60%, rgba(24, 24, 27, 0.9) 100%)',
            clipPath: 'ellipse(80% 45% at 50% 100%)',
            transform: 'rotate(-2deg)',
          }}
        ></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-10rem)]">
          
          {/* Left Column: Headline, Description, and CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight">
              <span className="block">Empowering Your</span>
              <span className="block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">Digital</span>
                <span className="text-white"> Journey</span>
              </span>
            </h1>
            
 
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="w-fit px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 text-white font-semibold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Column: Hand with Phone Image */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end relative">
            {/* Glow effect behind hand */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-[100px]"></div>
            </div>
            
            {/* Hand Image */}
            <div className="relative z-10">
              <img 
                src="/home/hand-front-herobanner.png" 
                alt="Digital Solutions Showcase" 
                className="w-auto h-[50vh] sm:h-[60vh] lg:h-[70vh] max-h-[650px] object-contain drop-shadow-2xl"
              />
              
              {/* Description Text - Positioned to the right of phone on desktop */}
              <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 max-w-[280px]">
                <p className="text-white text-base leading-relaxed">
                  Stellar Solutions seamlessly bridges innovative digital solutions with your everyday business needs.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
