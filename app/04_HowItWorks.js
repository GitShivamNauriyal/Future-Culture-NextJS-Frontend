"use client";

import React from "react";
import { motion } from "framer-motion";
import { TracingBeam } from "./ui/TracingBeam";

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

const ProcessStep = ({ id, title, description }) => (
    <motion.div
        className="relative flex items-center gap-6 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
    >
        {/* Step Number (Fixed Left-Aligned Position) */}
        <div className="relative z-10 flex items-center justify-center w-12 h-12 text-lg font-bold text-white bg-neutral-900 rounded-full border border-white shadow-lg">
            {id}
        </div>

        {/* Step Details */}
        <div className="relative z-10">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
                {title}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">{description}</p>
        </div>
    </motion.div>
);

const HowItWorks = () => {
    return (
        <div className="relative w-full overflow-hidden bg-neutral-900 px-4 sm:px-6 md:px-12 lg:px-20">
            {/* ✅ Background from Aceternity UI */}
            <div className="absolute inset-0 bg-grid-white/[0.1] pointer-events-none"></div>

            <section
                id="process"
                className="relative py-20 flex flex-col items-center"
            >
                {/* <TracingBeam className="absolute inset-0 z-0 opacity-70 blur-xl" width={6} /> */}

                {/* Section Title */}
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    How It Works
                </motion.h2>

                {/* Steps List */}
                <div className="relative flex flex-col gap-12 sm:gap-16 max-w-xl mx-auto border-l-2 border-white/30 pl-6 sm:pl-12">
                    {stepsData?.length > 0 &&
                        stepsData.map((step) => (
                            <ProcessStep key={step.id} {...step} />
                        ))}
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
