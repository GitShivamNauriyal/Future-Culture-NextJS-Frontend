import React from "react";

const HowItWorks = () => {
    return (
        <section id="process" className="py-20 bg-neutral-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-raleway font-bold text-white mb-6 animate__animated animate__fadeInUp">
                        How It
                        <span className="block mt-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                            Works
                        </span>
                    </h2>
                </div>

                <div className="relative">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neutral-800 via-white to-neutral-800 hidden md:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="relative group animate__animated animate__fadeInUp">
                            <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-all duration-300 h-full">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-neutral-900 font-bold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    1
                                </div>
                                <h3 className="text-xl font-bold text-white text-center mb-4">
                                    Create Your Design
                                </h3>
                                <p className="text-gray-400 text-center">
                                    Fill out the form and customize your merch
                                </p>
                            </div>
                        </div>

                        <div className="relative group animate__animated animate__fadeInUp animate__delay-1s">
                            <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-all duration-300 h-full">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-neutral-900 font-bold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    2
                                </div>
                                <h3 className="text-xl font-bold text-white text-center mb-4">
                                    Customize
                                </h3>
                                <p className="text-gray-400 text-center">
                                    Personalize your selection with custom
                                    options and messages
                                </p>
                            </div>
                        </div>

                        <div className="relative group animate__animated animate__fadeInUp animate__delay-2s">
                            <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-all duration-300 h-full">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-neutral-900 font-bold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    3
                                </div>
                                <h3 className="text-xl font-bold text-white text-center mb-4">
                                    Review
                                </h3>
                                <p className="text-gray-400 text-center">
                                    Confirm your selection and review all
                                    customization details
                                </p>
                            </div>
                        </div>

                        <div className="relative group animate__animated animate__fadeInUp animate__delay-3s">
                            <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-all duration-300 h-full">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-neutral-900 font-bold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    4
                                </div>
                                <h3 className="text-xl font-bold text-white text-center mb-4">
                                    Delivery
                                </h3>
                                <p className="text-gray-400 text-center">
                                    We handle the packaging and delivery to your
                                    specified location
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center animate__animated animate__fadeInUp animate__delay-4s">
                        <button className="px-8 py-3 bg-white text-neutral-900 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                            Start Your Journey
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-white/5 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-white/5 rounded-full filter blur-3xl"></div>
            </div>
        </section>
    );
};

export default HowItWorks;
