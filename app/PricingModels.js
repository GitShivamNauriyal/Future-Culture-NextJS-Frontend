"use client";
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaBoxOpen } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
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
    const [loadedImages, setLoadedImages] = useState(new Set([0])); // Store loaded images

    // Prevent unnecessary re-renders
    const handleAccordionClick = useCallback(
        (index) => {
            if (!loadedImages.has(index)) {
                setLoadedImages((prev) => new Set(prev).add(index));
            }
            setActiveIndex(index);
        },
        [loadedImages]
    );

    return (
        <section
            id="pricing-models"
            className="relative py-16 md:py-20 bg-neutral-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-6 md:mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-700 mb-4">
                        Our{" "}
                        <motion.span
                            className="bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent"
                            initial={{ y: 50, filter: "blur(10px)" }}
                            whileInView={{ y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
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

                {/* Image & Accordion (Fixed Placement) */}
                <div className="flex flex-col md:flex-row items-start gap-0 md:gap-8">
                    {/* Image Section - Now Before Accordion (Normal Placement) */}
                    {/* Image Section - Now Centered */}
                    <div className="w-full md:w-1/2 flex justify-center items-center relative h-72">
                        {modelsData.map(
                            (model, index) =>
                                loadedImages.has(index) && ( // Render only clicked images
                                    <motion.img
                                        key={index}
                                        src={model.image}
                                        alt={model.title}
                                        className={`rounded-lg shadow-lg max-h-72 aspect-video w-auto max-w-full object-cover absolute transition-opacity duration-500 ${
                                            activeIndex === index
                                                ? "opacity-100 scale-105"
                                                : "opacity-0 scale-95"
                                        }`}
                                    />
                                )
                        )}
                    </div>

                    {/* Accordion Section */}
                    <div className="w-full md:w-1/2">
                        <Accordion type="single" collapsible>
                            {modelsData.map((model, index) => (
                                <AccordionItem key={index} value={model.title}>
                                    <AccordionTrigger
                                        onClick={() =>
                                            handleAccordionClick(index)
                                        }
                                    >
                                        <div className="flex items-center gap-4">
                                            {model.icon}
                                            <h3 className="text-xl font-semibold text-neutral-800">
                                                {model.title}
                                            </h3>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {activeIndex === index && (
                                            <motion.p
                                                className="text-neutral-600"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {model.description}
                                            </motion.p>
                                        )}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingModels;
