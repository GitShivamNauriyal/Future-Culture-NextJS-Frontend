import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[70vh] bg-neutral-900 flex items-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mt-36 mb-28">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-raleway font-bold text-white mb-6 animate__animated animate__fadeInUp">
            Curated Gifts for
            <span className="block mt-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent pb-3">
              Meaningful Moments
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10 animate__animated animate__fadeInUp animate__delay-1s">
            Discover thoughtfully curated gift collections that create lasting
            impressions and strengthen relationships.
          </p>

          <div className="flex justify-center space-x-4 animate__animated animate__fadeInUp animate__delay-2s">
            <button className="px-8 py-3 bg-white text-neutral-900 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
              Explore Collections
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-neutral-900 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Animated background elements --> */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-gradient-to-l from-white/5 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
      </div>
    </section>
  );
};

export default Hero;
