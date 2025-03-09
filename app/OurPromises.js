"use client";
import React from "react";
import { FaShoppingCart, FaTruckMoving } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { TbPrinter, TbRuler2 } from "react-icons/tb";
import { IoColorPalette } from "react-icons/io5";
import { motion } from "framer-motion";

const promisesData = [
    {
        title: "No MOQ",
        subtitle: "(Minimum Order Quantity)",
        description:
            "Order any quantity—no bulk commitments required, perfect for small businesses and personal gifts.",
        Icon: FaShoppingCart,
    },
    {
        title: "Quality Guarantee",
        description:
            "We ensure premium materials and top-notch printing. If you're not satisfied, we offer replacements or refunds.",
        Icon: MdVerified,
    },
    {
        title: "Best Printing Technology",
        description:
            "Enjoy vibrant, long-lasting prints using cutting-edge DTG, Sublimation, and UV printing techniques.",
        Icon: TbPrinter,
    },
    {
        title: "Latest Trends",
        description:
            "Our collections are always updated with fresh styles and designs, keeping you ahead in fashion.",
        Icon: IoColorPalette,
    },
    {
        title: "Accurate Fits",
        description:
            "Our sizing is true-to-fit based on standard charts, reducing returns and ensuring perfect fits.",
        Icon: TbRuler2,
    },
    {
        title: "On-Time Delivery Commitment",
        description:
            "We guarantee fast, reliable shipping so you receive your orders exactly when you need them.",
        Icon: FaTruckMoving,
    },
];

const PromiseCard = ({ title, subtitle, description, Icon, delay }) => {
    return (
        <motion.div
            className="relative backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg rounded-3xl p-6 flex flex-col hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.4, delay }}
        >
            {/* Floating Background Shapes - Now using Group Hover */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 opacity-20 rounded-full -top-8 -left-8 blur-2xl 
                    transition-all duration-500 transform group-hover:-translate-x-4 group-hover:-translate-y-8 group-hover:scale-110"
                />
                <div
                    className="absolute w-24 h-24 bg-gradient-to-br from-yellow-400 to-pink-500 opacity-30 rounded-full bottom-6 right-6 blur-2xl 
                    transition-all duration-500 transform group-hover:translate-x-8 group-hover:translate-y-4 group-hover:scale-110"
                />
            </div>

            {/* Icon */}
            <div className="mb-4 text-4xl text-white transition-transform duration-300 group-hover:-translate-y-1 z-10">
                <Icon />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-2 z-10">
                {title}{" "}
                {subtitle && (
                    <span className="text-base font-normal opacity-80">
                        {subtitle}
                    </span>
                )}
            </h3>

            {/* Description */}
            <p className="text-white/80 flex-grow z-10">{description}</p>
        </motion.div>
    );
};

const OurPromises = () => {
    return (
        <section
            id="our-promises"
            className="relative py-20 bg-black flex flex-col items-center justify-center"
        >
            {/* Section Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Our Promises
                </h2>
                <p className="text-lg text-white/70">
                    Our commitment to excellence in every detail.
                </p>
            </div>

            {/* Glassmorphic Cards Grid */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl px-6">
                {promisesData.map((promise, index) => (
                    <PromiseCard key={index} delay={index * 0.2} {...promise} />
                ))}
            </div>

            {/* Floating Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-64 h-64 bg-purple-600 opacity-20 rounded-full top-10 left-10 blur-3xl transition-all duration-500" />
                <div className="absolute w-40 h-40 bg-blue-500 opacity-25 rounded-full bottom-10 right-10 blur-3xl transition-all duration-500" />
            </div>
        </section>
    );
};

export default OurPromises;
