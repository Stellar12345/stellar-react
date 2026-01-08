import React from 'react';

const StatItem = ({ number, label }) => (
    <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-dark-blue mb-2">{number}</div>
        <div className="text-gray-600 font-medium">{label}</div>
    </div>
);

const StatsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-dark-blue mb-12">
            Numbers are telling our story
        </h2>
        
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12 flex flex-col md:flex-row justify-around items-center gap-8">
            <StatItem number="20+" label="Experienced Professionals" />
            <div className="w-full md:w-px h-px md:h-16 bg-gray-200"></div>
            <StatItem number="100+" label="Successful Projects" />
            <div className="w-full md:w-px h-px md:h-16 bg-gray-200"></div>
            <StatItem number="80+" label="Years of Combined Experience" />
            <div className="w-full md:w-px h-px md:h-16 bg-gray-200"></div>
            <StatItem number="15+" label="Customers all over the world" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
