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
            className="relative md:py-24 py-20 bg-black flex flex-col items-center justify-center overflow-hidden"
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
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-1">
                    Our Promises
                </h2>
                <BottomGradient />
                <p className="text-base font-thin text-white/70">
                    Our commitment to excellence in every detail.
                </p>
            </div>
            <div
                className="absolute w-44 h-44 bg-gradient-to-br from-pink-500 to-pink-300 opacity-30 rounded-full top-44 left-48 blur-3xl  
                    transition-all duration-500 transform group-hover:-translate-x-4 group-hover:-translate-y-8 group-hover:scale-110"
            />
            <div
                className="absolute w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 opacity-30 rounded-full bottom-32 left-48 blur-2xl 
                transition-all duration-500 transform group-hover:-translate-x-8 group-hover:translate-y-4 group-hover:scale-110"
            />
            <div
                className="absolute w-40 h-40 bg-gradient-to-br from-pink-500 to-red-500 opacity-30 rounded-full top-[50%] left-[45%] blur-3xl 
                transition-all duration-500 transform group-hover:-translate-x-8 group-hover:translate-y-4 group-hover:scale-110"
            />
            <div
                className="absolute w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-500 opacity-30 rounded-full bottom-24 right-48 blur-2xl 
                transition-all duration-500 transform group-hover:translate-x-8 group-hover:translate-y-4 group-hover:scale-110"
            />
            <div
                className="absolute w-44 h-24 bg-gradient-to-br from-red-500 to-pink-600 opacity-30 rounded-full top-56 right-44 blur-2xl 
                transition-all duration-500 transform group-hover:translate-x-8 group-hover:-translate-y-4 group-hover:scale-110"
            />

            {/* Floating Compact Elements */}
            <div className="relative select-none w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-8 gap-6 px-6">
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
                        className="relative flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:backdrop-blur shadow-lg border-l border-b border-red-500/30 hover:border-red-500/50 hover:-translate-y-1 transition-all duration-200 cursor-pointer"
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
