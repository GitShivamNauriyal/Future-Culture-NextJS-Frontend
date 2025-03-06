"use client";
import React from "react";
import { FaHandshake, FaBoxOpen } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

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
        icon: <FaHandshake className="text-5xl text-neutral-900" />,
        bgColor: "bg-gradient-to-r from-blue-100 to-blue-50",
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
        icon: <MdFactory className="text-5xl text-neutral-900" />,
        bgColor: "bg-gradient-to-r from-green-100 to-green-50",
    },
    {
        title: "White Labeling",
        description: (
            <>
                Order in bulk at <strong>exclusive pricing</strong>. Perfect for
                companies looking to resell products under their{" "}
                <strong>own brand</strong>.
            </>
        ),
        icon: <FaBoxOpen className="text-5xl text-neutral-900" />,
        bgColor: "bg-gradient-to-r from-yellow-100 to-yellow-50",
    },
];

const PricingCard = ({ title, description, icon, bgColor }) => {
    const iconControls = useAnimation();

    return (
        <motion.div
            className="px-8 py-12 z-10 rounded-xl shadow-lg flex flex-col sm:flex-row items-center sm:items-start bg-white transition-all duration-300 hover:shadow-xl cursor-pointer select-none border border-neutral-200"
            initial={{ filter: "blur(10px)" }}
            whileInView={{ filter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            whileHover={{
                scale: 1.02, // Card scales up
            }}
            onHoverStart={() => iconControls.start({ y: -10 })} // Move icon up
            onHoverEnd={() => iconControls.start({ y: 0 })} // Reset icon position
        >
            {/* Icon with external animation control */}
            <motion.div className="mb-6 sm:mb-0 sm:mr-6" animate={iconControls}>
                {icon}
            </motion.div>

            {/* Content */}
            <div className="cursor-pointer select-none">
                <h3 className="text-2xl font-semibold text-neutral-800 mb-2">
                    {title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

const PricingModels = () => {
    return (
        <section id="pricing-models" className="py-20 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-700 mb-4">
                        Our{" "}
                        <motion.span
                            className="bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent"
                            initial={{
                                y: 50,
                                filter: "blur(10px)",
                            }}
                            whileInView={{
                                y: 0,
                                filter: "blur(0px)",
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            Business Models
                        </motion.span>
                    </h2>
                    <p className="text-lg text-neutral-700">
                        Flexible pricing and collaboration options to fit your
                        business needs.
                    </p>
                </div>

                {/* Cards Layout */}
                <div className="relative space-y-8">
                    <div className="z-0 absolute left-1/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-50 via-neutral-900 to-neutral-50 hidden md:block"></div>
                    <div className="z-0 absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-50 via-neutral-900 to-neutral-50 hidden md:block"></div>
                    <div className="z-0 absolute left-3/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-50 via-neutral-900 to-neutral-50 hidden md:block"></div>

                    <div className="relative flex flex-col space-y-8">
                        {modelsData.map((model, index) => (
                            <PricingCard key={index} {...model} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingModels;
