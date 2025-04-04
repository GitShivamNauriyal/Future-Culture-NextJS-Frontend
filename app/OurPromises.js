"use client";
import React from "react";
import { FaShoppingCart, FaTruckMoving } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { TbPrinter, TbRuler2 } from "react-icons/tb";
import { IoColorPalette } from "react-icons/io5";
import { motion } from "framer-motion";
import BottomGradient from "./ui/BottomGradient";

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
            style={{
                backgroundColor: "#0b0b0b",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23a86d6d' fill-opacity='0.2'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
        >
            {/* Background Blurred Gradient Effect */}
            {/* <div className="absolute inset-0 -z-10">
                <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-30 rounded-full -top-10 left-1/4 blur-[140px]" />
                <div className="absolute w-[350px] h-[350px] bg-orange-500 opacity-30 rounded-full bottom-10 right-1/4 blur-[140px]" />
            </div> */}

            {/* Section Heading */}
            <div className="relative text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Our Promises
                </h2>
                <BottomGradient />
                <p className="text-lg text-white/70">
                    Our commitment to excellence in every detail.
                </p>
            </div>

            {/* Floating Compact Elements */}
            <div className="relative select-none w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
                {promisesData.map((promise, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            filter: "blur(10px)",
                        }}
                        whileInView={{
                            opacity: 1,
                            filter: "blur(0px)",
                        }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm shadow-lg border-l border-b border-red-500/30 hover:border-red-500/50 transition-all duration-500 cursor-pointer"
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
