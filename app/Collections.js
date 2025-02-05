import React from "react";

const Collections = () => {
  return (
    <section id="collections" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-white mb-6 animate__animated animate__fadeInUp">
            Our Curated
            <span className="block mt-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Collections
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            Explore our thoughtfully curated gift collections, designed to make
            every moment special
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Collection Card 1 --> */}
          <div className="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp">
            <div className="h-48 bg-gradient-to-br from-neutral-700 to-neutral-600 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-4xl text-white/20">01</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Luxury Collection
            </h3>
            <p className="text-gray-400 mb-4">
              Premium gifts for those who appreciate the finer things
            </p>
            <button className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center">
              Explore More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>

          {/* <!-- Collection Card 2 --> */}
          <div className="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="h-48 bg-gradient-to-br from-neutral-700 to-neutral-600 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-4xl text-white/20">02</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Corporate Gifting
            </h3>
            <p className="text-gray-400 mb-4">
              Professional gifts to strengthen business relationships
            </p>
            <button className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center">
              Explore More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>

          {/* <!-- Collection Card 3 --> */}
          <div className="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-2s">
            <div className="h-48 bg-gradient-to-br from-neutral-700 to-neutral-600 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-4xl text-white/20">03</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Personal Touch
            </h3>
            <p className="text-gray-400 mb-4">
              Customizable gifts for personal celebrations
            </p>
            <button className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center">
              Explore More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-16 text-center animate__animated animate__fadeInUp animate__delay-3s">
          <button className="px-8 py-3 bg-white text-neutral-900 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collections;
