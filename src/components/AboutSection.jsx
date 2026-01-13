import React from 'react';
import GlobeComponent from './GlobeComponent';

const AboutSection = () => {
  return (
    <section className="bg-dark-blue text-white py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* LEFT – CENTERED GLOBE */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-[420px] h-[380px] md:h-[450px] lg:h-[550px] flex items-center justify-center">
              <GlobeComponent />
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div className="w-full md:w-1/2 space-y-6 lg:space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <div className="w-8 h-8 rounded-full bg-orange-400 -ml-4 mix-blend-multiply"></div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              About Us
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Stellar Solutions was founded in 2020. We serve small businesses
              and medium to large enterprises across the Middle East.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We deliver web, mobile, and custom software solutions that empower
              businesses to scale efficiently in a rapidly evolving digital
              landscape.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Our mission is to simplify digital transformation through
              innovative, secure, and user-friendly technology.
            </p>

            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/30">
              READ MORE →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
