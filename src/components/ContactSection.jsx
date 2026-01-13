import React from 'react';

const ContactSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-cyan-50 to-blue-50 overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/50 skew-x-12 transform origin-top-right"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-12">
            <h2 className="text-5xl font-bold text-dark-blue mb-4">Let's <br/>Talk !</h2>
            <p className="text-lg text-gray-600 mb-8">
                Got a project in mind? We'd love to hear about it. Send us a message and we'll get back to you as soon as possible.
            </p>
            <div className="flex items-center gap-2 text-primary font-semibold">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">📞</span>
                <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-2 text-primary font-semibold mt-2">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">✉️</span>
                <span>hello@stellarsolutions.com</span>
            </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2">
            <form className="bg-white p-8 rounded-2xl shadow-2xl relative">
                <h3 className="text-2xl font-bold text-dark-blue mb-6">Send us a message</h3>
                <div className="space-y-4">
                    <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                    <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                    <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                    <textarea placeholder="Message" rows="4" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"></textarea>
                    
                    <button className="w-full btn btn-primary py-4 text-lg">
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


