"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import BottomGradientHover from "./ui/BottomGradientHover";

const statsData = [
    {
        target: 10000,
        label: "Happy Customers",
        delay: 0,
    },
    {
        target: 500,
        label: "Corporate Partners",
        delay: 0.2,
    },
    {
        target: 50,
        label: "Gift Collections",
        delay: 0.4,
    },
    {
        target: 25000,
        label: "Gifts Delivered",
        delay: 0.6,
    },
];

const StatBox = ({ target, label, delay }) => {
    // useInView will trigger once the element is at least 10% visible
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            className="relative group bg-neutral-600/30 backdrop-blur-sm p-8 rounded-2xl text-center transform hover:-translate-y-1 transition-transform duration-300"
            style={{ animationDelay: `${delay}s` }}
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.4, delay }}
        >
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 opacity-20 rounded-full -top-8 -left-8 blur-2xl 
                    transition-all duration-500 transform group-hover:-translate-x-4 group-hover:-translate-y-8 group-hover:scale-110"
                />
                <div
                    className="absolute w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-500 opacity-30 rounded-full bottom-6 right-6 blur-2xl 
                    transition-all duration-500 transform group-hover:translate-x-8 group-hover:translate-y-4 group-hover:scale-110"
                />
            </div>
            <div className="counter font-raleway text-4xl font-bold mb-2">
                {inView ? (
                    <CountUp end={target} duration={2} separator="," />
                ) : (
                    "0"
                )}
            </div>
            <div className="h-1 w-10 bg-white mx-auto mb-4"></div>
            <p className="font-raleway text-gray-300">{label}</p>
            <BottomGradientHover />
        </motion.div>
    );
};

const Stats = () => {
    return (
        <section
            id="stats"
            className="bg-neutral-900 text-white py-20 relative"
        >
            <div className="absolute inset-0">
                <style>
                    {`
                        @media (min-width: 640px) { /* Tablets and larger */
                            .grid-bg {
                                background-image: radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px);
                                background-size: 30px 30px;
                            }
                        }

                        @media (max-width: 639px) { /* Mobile screens */
                            .grid-bg {
                                background-image: radial-gradient(circle, rgba(255, 255, 255, 0.15) 2px, transparent 2px);
                                background-size: 30px 30px;
                            }
                        }
                    `}
                </style>
                <div className="grid-bg absolute inset-0" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate__animated animate__fadeIn">
                    <h2 className="text-4xl md:text-5xl font-bold font-raleway mb-4">
                        Our Impact
                    </h2>
                    <p className="text-gray-300 font-raleway max-w-2xl mx-auto">
                        Making memorable moments across the globe
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {statsData.map((stat, index) => (
                        <StatBox
                            key={index}
                            target={stat.target}
                            label={stat.label}
                            delay={stat.delay}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
