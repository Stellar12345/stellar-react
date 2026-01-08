import React from 'react';

const ChooseCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100">
        <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center text-dark-blue">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-dark-blue mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
    </div>
);

const WhyChooseUs = () => {
  return (
    <section className="bg-dark-blue py-16 text-white relative overflow-hidden">
        {/* Background Overlay or Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Stellar Solutions?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ChooseCard 
                    icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
                    title="Expertise and Experience"
                    description="Years of industry experience delivering top-notch solutions."
                />
                 <ChooseCard 
                    icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>}
                    title="Proven Results"
                    description="We deliver measurable results that drive business growth."
                />
                 <ChooseCard 
                    icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>}
                    title="Comprehensive Services"
                    description="End-to-end digital services under one roof."
                />
            </div>
        </div>
    </section>
  );
};

export default WhyChooseUs;
