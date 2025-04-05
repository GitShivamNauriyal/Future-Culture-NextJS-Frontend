"use client";

import React from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import BottomGradient from "./ui/BottomGradient";

const stepsData = [
    {
        id: 1,
        title: "Create Your Design",
        description: "Fill out the form and customize your merch",
        animation: "/animated_svgs/create_your_design.lottie",
    },
    {
        id: 2,
        title: "Review & Approve",
        description: "Get a price quote and mockup before we produce",
        animation: "/animated_svgs/review_and_approve.lottie",
    },
    {
        id: 3,
        title: "Lock it In",
        description: "Place your order and pay upfront to start production",
        animation: "/animated_svgs/lock_it_in.lottie",
    },
    {
        id: 4,
        title: "Delivered to You",
        description: "We handle the rest. Your merch, your way",
        animation: "/animated_svgs/delivered_to_you.lottie",
    },
];

const ProcessStep = ({ id, title, description, animation, isReversed }) => (
    <motion.div
        className={`flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 w-full ${
            isReversed ? "md:flex-row-reverse" : ""
        }`}
        initial={{
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
        }}
        whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
        }}
        transition={{ duration: 0.5 }}
    >
        {/* Animation with glow */}
        <div className="flex-shrink-0 w-full md:w-1/2 max-w-md relative">
            <div className="absolute inset-0 rounded-3xl blur-2xl bg-white/10 z-0" />
            <DotLottieReact
                src={animation}
                loop
                autoplay
                className="relative z-10 w-full h-auto"
            />
        </div>

        {/* Step Info */}
        <div className="flex flex-col items-start md:items-start text-left max-w-[80%] md:w-1/4 gap-2">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-900 text-white font-bold border border-white shadow-md">
                {id}
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {title}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">{description}</p>
        </div>
    </motion.div>
);

const HowItWorks = () => {
    return (
        <div className="relative w-full overflow-hidden bg-neutral-900 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="absolute inset-0 bg-grid-white/[0.1] pointer-events-none"></div>

            <section
                id="process"
                className="relative py-16 flex flex-col items-center"
            >
                {/* Section Title */}
                <motion.h2
                    className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center"
                    initial={{
                        opacity: 0,
                        y: 50,
                        filter: "blur(10px)",
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    How It Works
                    <BottomGradient />
                    <p className="text-lg font-thin text-white/70 mt-1">
                        Simple steps to follow through.
                    </p>
                </motion.h2>

                {/* Steps List */}
                <div className="flex flex-col items-center gap-8 w-full">
                    {stepsData.map((step) => (
                        <ProcessStep key={step.id} {...step} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
