import React from 'react';

const ClientsSection = () => {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
         <h3 className="text-2xl font-bold text-dark-blue mb-8">Our Clients</h3>
         <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos */}
            <div className="text-xl font-bold text-gray-400 hover:text-primary transition-colors">COMPAN A</div>
            <div className="text-xl font-bold text-gray-400 hover:text-primary transition-colors">BUSINESS B</div>
            <div className="text-xl font-bold text-gray-400 hover:text-primary transition-colors">ENTERPRISE C</div>
            <div className="text-xl font-bold text-gray-400 hover:text-primary transition-colors">STARTUP D</div>
            <div className="text-xl font-bold text-gray-400 hover:text-primary transition-colors">PARTNER E</div>
         </div>
      </div>
    </section>
  );
};

export default ClientsSection;


