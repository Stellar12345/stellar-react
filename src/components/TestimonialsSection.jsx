import React from 'react';

const TestimonialCard = ({ name, role, text }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100 hover:border-primary transition-colors">
        <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-6 text-primary">
            👤
        </div>
        <div className="flex justify-center mb-4 text-yellow-400 text-sm">
            ★★★★★
        </div>
        <p className="text-gray-600 italic mb-6">"{text}"</p>
        <h4 className="font-bold text-dark-blue">{name}</h4>
        <span className="text-sm text-gray-400">{role}</span>
    </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-dark-blue mb-16">
            Voices of <span className="text-blue-500">Satisfaction</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
                name="John Doe" 
                role="CEO, TechCorp" 
                text="Stellar Solutions transformed our digital presence. Their team is professional, creative, and timely."
            />
            <TestimonialCard 
                name="Sarah Smith" 
                role="Marketing Director" 
                text="The best SAP consulting we have ever received. Highly recommended for any business transformation."
            />
            <TestimonialCard 
                name="Michael Brown" 
                role="Founder, StartUp" 
                text="Their cybersecurity solutions gave us peace of mind. Excellent support and very knowledgeable team."
            />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


