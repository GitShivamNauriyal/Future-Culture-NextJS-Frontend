"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaBoxOpen } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import { ChevronDown } from "lucide-react"; // Down arrow icon
import BottomGradient from "./ui/BottomGradient";

const modelsData = [
    {
        title: "Collaboration",
        description: (
            <>
                Work with us and get <strong>30% off on order price</strong> +
                earn <strong>50% of sales</strong> (if commercial). Perfect for
                influencers & brand collaborations.
            </>
        ),
        icon: <FaHandshake className="text-5xl opacity-70" />,
        image: "/images/tshirts.jpg",
    },
    {
        title: "Manufactured by Future Culture",
        description: (
            <>
                We handle <strong>everything</strong>—from design to production!
                Get <strong>15% off on order price</strong> with our
                full-service manufacturing.
            </>
        ),
        icon: <MdFactory className="text-5xl opacity-70" />,
        image: "/images/hoodies.jpg",
    },
    {
        title: "White Labeling",
        description: (
            <>
                Order in bulk at <strong>exclusive pricing</strong>. Perfect for
                companies looking to resell products under their own brand.
            </>
        ),
        icon: <FaBoxOpen className="text-5xl opacity-70" />,
        image: "/images/jackets.jpg",
    },
];

const PricingModels = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleAccordionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section
            id="pricing-models"
            className="relative py-16 md:pb-20 md:pt-16 bg-neutral-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-6 md:mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-700 mb-2">
                        Our{" "}
                        <motion.span
                            className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            style={{ willChange: "opacity, transform" }}
                        >
                            Business Models
                            <BottomGradient />
                        </motion.span>
                    </h2>
                    <p className="text-lg text-neutral-700">
                        Flexible pricing and collaboration options to fit your
                        business needs.
                    </p>
                </div>

                {/* Image & Accordion */}
                <div className="flex flex-col md:flex-row items-start gap-0 md:gap-8">
                    {/* Static Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center items-center relative md:h-72 h-64">
                        <motion.img
                            src={
                                modelsData[activeIndex]?.image ||
                                modelsData[0].image
                            }
                            alt={
                                modelsData[activeIndex]?.title ||
                                modelsData[0].title
                            }
                            className="rounded-lg shadow-lg max-h-72 aspect-video w-auto max-w-full object-cover"
                            initial={{ opacity: 0.5, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            style={{ willChange: "opacity, transform" }}
                        />
                    </div>

                    {/* Accordion Section (With Animation) */}
                    <div className="w-full md:w-1/2">
                        {modelsData.map((model, index) => (
                            <div
                                key={index}
                                className="border-b border-neutral-200"
                            >
                                <button
                                    className="w-full text-left py-4 px-2 flex items-center justify-between gap-4 focus:outline-none"
                                    onClick={() => handleAccordionClick(index)}
                                    aria-expanded={activeIndex === index}
                                >
                                    <div className="flex items-center gap-4">
                                        {model.icon}
                                        <h3 className="text-xl font-semibold text-neutral-800">
                                            {model.title}
                                        </h3>
                                    </div>
                                    <motion.div
                                        animate={{
                                            rotate:
                                                activeIndex === index ? 180 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        style={{ willChange: "transform" }}
                                    >
                                        <ChevronDown className="w-5 h-5 text-neutral-600" />
                                    </motion.div>
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height:
                                            activeIndex === index ? "auto" : 0,
                                        opacity: activeIndex === index ? 1 : 0,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="overflow-hidden"
                                    style={{ willChange: "height, opacity" }}
                                >
                                    <div className="px-6 py-2 text-neutral-600">
                                        {model.description}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingModels;
