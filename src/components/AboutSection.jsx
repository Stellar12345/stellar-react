import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-dark-blue text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Illustration Side (Left/Top) - Based on design, image is usually on one side. 
            Design shows text right, image left or vice versa? 
            Image shows Text Left? No, actually Text Right in some designs, but let's follow the uploaded image.
            Uploaded image: Text Right "About Us", Image Left.
        */}
        <div className="w-full md:w-1/2 flex justify-center">
            {/* Placeholder for the illustration */}
            <img 
              src="https://img.freepik.com/free-vector/team-checklist-concept-illustration_114360-10087.jpg" 
              alt="About Us Team" 
              className="w-full max-w-md rounded-lg shadow-xl"
            />
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="flex items-center gap-2">
             <div className="w-4 h-4 rounded-full bg-orange-500"></div>
             <div className="w-8 h-8 rounded-full bg-orange-400 -ml-4 mix-blend-multiply"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">About Us</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Stellar Solutions was founded in 2020. We satisfy both small businesses and large and medium in the Middle East.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We provide comprehensive services including web design, mobile, and custom software solutions. Our goal is to empower businesses with the digital tools they need to succeed in a rapidly evolving landscape.
          </p>
          <button className="btn btn-primary mt-4">
             READ MORE →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
