"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardSpotlight } from "./ui/CardSpotlight";

// Steps Data with Colors
const stepsData = [
    {
        id: 1,
        title: "Create Your Design",
        description: "Fill out the form and customize your merch",
        colors: [
            [59, 130, 246],
            [139, 92, 246],
        ], // Blue - Purple
    },
    {
        id: 2,
        title: "Review & Approve",
        description: "Get a price quote and mockup before we produce",
        colors: [
            [16, 185, 129],
            [5, 150, 105],
        ], // Green Shades
    },
    {
        id: 3,
        title: "Lock it In",
        description: "Place your order and pay upfront to start production",
        colors: [
            [245, 158, 11],
            [234, 88, 12],
        ], // Orange - Red
    },
    {
        id: 4,
        title: "Delivered to You",
        description: "We handle the rest. Your merch, your way",
        colors: [
            [168, 85, 247],
            [217, 70, 239],
        ], // Purple - Pink
    },
];

// Step Card Component
const ProcessStep = ({ id, title, description }) => {
    return (
        <div className="relative cursor-pointer select-none hover:-translate-y-2 transition">
            <div className="bg-neutral-80 rounded-xl p-6 hover:bg-neutral-70 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-neutral-900 font-bold mx-auto mb-4 mt-2 transition-transform duration-300">
                    {id}
                </div>
                <div className="mt-auto text-center">
                    <h3 className="text-xl font-bold text-white mb-2">
                        {title}
                    </h3>
                    <p className="text-gray-400">{description}</p>
                </div>
            </div>
        </div>
    );
};

// Main How It Works Section
const HowItWorks = () => {
    return (
        <section id="process" className="py-20 bg-neutral-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-raleway font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        How It
                        <span className="block mt-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                            Works
                        </span>
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Line Connector */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neutral-800 via-white to-neutral-800 hidden md:block"></div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-8">
                        {stepsData.map((step, index) => (
                            <CardSpotlight
                                key={step.id}
                                delay={index * 0.2}
                                colors={step.colors} // Pass colors dynamically
                                dotSize={4}
                                animationSpeed={1.5}
                            >
                                <ProcessStep {...step} />
                            </CardSpotlight>
                        ))}
                    </div>

                    {/* Call-to-Action Button */}
                    <motion.div
                        className="mt-8 sm:mt-16 text-center"
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <button className="px-8 py-3 bg-white text-neutral-900 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                            Start Your Journey
                        </button>
                    </motion.div>
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
