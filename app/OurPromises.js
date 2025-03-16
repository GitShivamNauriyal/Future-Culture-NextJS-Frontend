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
            className="relative py-20 bg-black flex flex-col items-center justify-center overflow-hidden"
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

            {/* Floating Background Blurs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-96 h-96 bg-blue-500 opacity-20 rounded-full top-16 left-16 blur-[120px]" />
                <div className="absolute w-72 h-72 bg-orange-500 opacity-25 rounded-full bottom-16 right-16 blur-[120px]" />
            </div>

            {/* Promises Grid - No Boxes, Just Floating Text */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl px-6">
                {promisesData.map((promise, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.15,
                        }}
                        className="flex items-center gap-4 group"
                    >
                        {/* Floating Icon */}
                        <div className="text-5xl text-white/90 transition-transform duration-300 group-hover:scale-110">
                            <promise.Icon />
                        </div>

                        {/* Text Content */}
                        <div className="text-white">
                            <h3 className="text-xl font-bold mb-1">
                                {promise.title}{" "}
                                {promise.subtitle && (
                                    <span className="text-base font-normal opacity-80">
                                        {promise.subtitle}
                                    </span>
                                )}
                            </h3>
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
