import React from "react";

const Convert = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-neutral-900 mb-6 animate__animated animate__fadeInUp">
              Crafting Memorable
              <span className="block mt-2 bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                Gift Experiences
              </span>
            </h2>

            <div className="space-y-6">
              <p className="text-neutral-700 animate__animated animate__fadeInUp animate__delay-1s">
                At Future Culture, we believe in the power of thoughtful gifting
                to strengthen relationships and create lasting memories. Our
                carefully curated collections blend contemporary design with
                timeless elegance.
              </p>

              <div className="grid grid-cols-2 gap-6 animate__animated animate__fadeInUp animate__delay-2s">
                <div className="p-4 bg-neutral-50 rounded-lg hover:shadow-lg transition-all duration-300">
                  <h3 className="font-bold text-neutral-900 mb-2">
                    Curated Selection
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Handpicked items that meet our quality standards
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg hover:shadow-lg transition-all duration-300">
                  <h3 className="font-bold text-neutral-900 mb-2">
                    Custom Design
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Personalized gifting solutions for every occasion
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 animate__animated animate__fadeInUp animate__delay-3s">
              <button className="px-6 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-all duration-300 transform hover:scale-105">
                Discover Our Story
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-300 relative overflow-hidden animate__animated animate__fadeInRight">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-neutral-900/10 rounded-full blur-3xl absolute animate-pulse"></div>
                <div className="text-4xl font-bold text-neutral-900/20">
                  <div className="flex-shrink-0">
                    <div className="font-raleway text-5xl font-bold">
                      <div className="raleway mb-6">Future</div>
                      <div className="raleway mb-6">Culture.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-full blur-3xl opacity-10 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Convert;
