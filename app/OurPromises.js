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

const OurPromises = () => {
    return (
        <section
            id="our-promises"
            className="relative py-24 bg-black flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background Blurred Gradient Effect */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-30 rounded-full -top-10 left-1/4 blur-[140px]" />
                <div className="absolute w-[350px] h-[350px] bg-orange-500 opacity-30 rounded-full bottom-10 right-1/4 blur-[140px]" />
            </div>

            {/* Section Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Our Promises
                </h2>
                <p className="text-lg text-white/70">
                    Our commitment to excellence in every detail.
                </p>
            </div>

            {/* Floating Compact Elements */}
            <div className="relative w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
                {promisesData.map((promise, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            scale: 0.95,
                            filter: "blur(10px)",
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                        }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-lg shadow-lg"
                    >
                        {/* Glowing Icon Orb */}
                        <div className="min-w-12 aspect-square flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md shadow-md">
                            <promise.Icon className="text-white text-2xl" />
                        </div>

                        {/* Compact Floating Text */}
                        <div className="text-white">
                            <h3 className="text-lg font-semibold">
                                {promise.title}
                            </h3>
                            {promise.subtitle && (
                                <span className="text-sm opacity-80">
                                    {promise.subtitle}
                                </span>
                            )}
                            <p className="text-white/70 text-sm">
                                {promise.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default OurPromises;
