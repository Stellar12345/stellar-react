import React from 'react';

const PortfolioItem = ({ title, image, category }) => (
    <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
        <img 
            src={image} 
            alt={title} 
            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-primary font-bold text-sm mb-1">{category}</span>
            <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>
    </div>
);

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-blue">
                Our <span className="text-blue-500">Portfolio</span>
            </h2>
            <p className="text-gray-500 mt-2">Check out some of our recent work and success stories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PortfolioItem 
                title="Green Earth Initiative" 
                category="Web Design"
                image="https://img.freepik.com/free-photo/nature-design-concept-with-green-leaves_23-2149103673.jpg" 
            />
            <PortfolioItem 
                title="TechGrow Solutions" 
                category="Branding"
                image="https://img.freepik.com/free-vector/gradient-technology-background_23-2148884155.jpg" 
            />
            <PortfolioItem 
                title="Urban Smart City" 
                category="App Development"
                image="https://img.freepik.com/free-vector/smart-city-illustration_23-2148899884.jpg" 
            />
        </div>
        
        <div className="text-center mt-12">
            <a href="/portfolio" className="btn btn-primary inline-flex items-center">
                Review More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
