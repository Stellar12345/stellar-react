import React from 'react';

const ServiceCard = ({ icon, title, description, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
    <div className={`w-14 h-14 rounded-lg flex items-center justify-center text-2xl mb-4 ${color} text-white group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-dark-blue mb-2">{title}</h3>
    <p className="text-gray-600 text-sm mb-4">{description}</p>
    <a href="#" className="text-primary font-semibold text-sm group-hover:underline">Know More →</a>
  </div>
);

const ServicesSection = () => {
    // Divided into sections as per design: IT Services, SAP Services, Products
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="bg-dark-blue text-white inline-block px-12 py-3 text-2xl font-bold rounded-r-full rounded-l-full shadow-lg">
                What We Serve ?
            </h2>
        </div>

        {/* IT Services */}
        <div className="mb-16">
            <h3 className="text-center text-primary text-xl font-bold mb-8">IT <span className="text-blue-500">Services</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <ServiceCard 
                    color="bg-blue-500"
                    icon="💻"
                    title="Web Design & Development" 
                    description="Creating stunning, responsive websites tailored to your brand." 
                 />
                 <ServiceCard 
                    color="bg-indigo-500"
                    icon="📱"
                    title="Mobile App Development" 
                    description="Native and cross-platform apps for iOS and Android." 
                 />
                 <ServiceCard 
                    color="bg-purple-500"
                    icon="🛒"
                    title="E-commerce Website Design" 
                    description="Robust online stores to drive sales and growth." 
                 />
                 <ServiceCard 
                    color="bg-teal-500"
                    icon="⚙️"
                    title="Custom Software Development" 
                    description="Tailored software solutions to streamline operations." 
                 />
                 <ServiceCard 
                    color="bg-orange-500"
                    icon="📣"
                    title="Digital Marketing" 
                    description="SEO, SEM, and social strategies to boost visibility." 
                 />
                 <ServiceCard 
                    color="bg-pink-500"
                    icon="🎨"
                    title="Design Services" 
                    description="Graphic design, branding, and UI/UX services." 
                 />
            </div>
        </div>

        {/* SAP Services */}
        <div className="mb-16">
            <h3 className="text-center text-primary text-xl font-bold mb-8">SAP <span className="text-blue-500">Services</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceCard color="bg-blue-600" icon="🔧" title="SAP Functional" description="Expert consultancy in SAP modules." />
                <ServiceCard color="bg-blue-700" icon="☁️" title="SAP Technical Services" description="ABAP, Fiori, and system integration." />
                <ServiceCard color="bg-blue-800" icon="📊" title="SAP Technology" description="HANA, Basis, and infrastructure support." />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
