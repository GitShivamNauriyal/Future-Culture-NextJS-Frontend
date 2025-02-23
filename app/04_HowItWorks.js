import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const stepsData = [
    {
        id: 1,
        title: "Create Your Design",
        description: "Fill out the form and customize your merch",
    },
    {
        id: 2,
        title: "Review & Approve",
        description: "Get a price quote and mockup before we produce",
    },
    {
        id: 3,
        title: "Lock it In",
        description: "Place your order and pay upfront to start production",
    },
    {
        id: 4,
        title: "Delivered to You",
        description: "We handle the rest. Your merch, your way",
    },
];

const ProcessStep = ({ id, title, description, delay }) => {
    return (
        <div className="relative" data-aos="fade-up" data-aos-delay={delay}>
            <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-neutral-900 font-bold mx-auto mb-4 mt-2 group-hover:scale-110 transition-transform duration-300">
                    {id}
                </div>
                <div className="mt-auto text-center">
                    <h3 className="text-xl font-bold text-white mb-3">
                        {title}
                    </h3>
                    <p className="text-gray-400">{description}</p>
                </div>
            </div>
        </div>
    );
};

const HowItWorks = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
    }, []);

    return (
        <section id="process" className="py-20 bg-neutral-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-raleway font-bold text-white mb-6">
                        How It
                        <span className="block mt-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                            Works
                        </span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Line Connector (for desktop view) */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neutral-800 via-white to-neutral-800 hidden md:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {stepsData.map((step, index) => (
                            <ProcessStep
                                key={step.id}
                                {...step}
                                delay={index * 300}
                            />
                        ))}
                    </div>

                    {/* Call-to-Action Button */}
                    <div
                        className="mt-16 text-center"
                        data-aos="fade-up"
                        data-aos-delay="1200"
                    >
                        <button className="px-8 py-3 bg-white text-neutral-900 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                            Start Your Journey
                        </button>
                    </div>
                </div>
            </div>

            {/* Background Visual Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-white/5 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-white/5 rounded-full filter blur-3xl"></div>
            </div>
        </section>
    );
};

export default HowItWorks;
