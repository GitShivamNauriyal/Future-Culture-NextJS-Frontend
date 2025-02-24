"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaBoxOpen } from "react-icons/fa";
import { MdFactory } from "react-icons/md";

const modelsData = [
    {
        title: "🤝 Collaboration",
        description:
            "Work with us and get **30% off on order price** + earn **50% of sales** (if commercial). Perfect for influencers & brand collaborations.",
        icon: <FaHandshake className="text-5xl text-neutral-900" />,
        bgColor: "bg-gradient-to-r from-blue-100 to-blue-50",
    },
    {
        title: "🏭 Manufactured by Future Culture",
        description:
            "We handle **everything**—from design to production! Get **15% off on order price** with our full-service manufacturing.",
        icon: <MdFactory className="text-5xl text-neutral-900" />,
        bgColor: "bg-gradient-to-r from-green-100 to-green-50",
    },
    {
        title: "📦 White Labeling",
        description:
            "Order in bulk at **exclusive pricing**. Perfect for companies looking to resell products under their **own brand**.",
        icon: <FaBoxOpen className="text-5xl text-neutral-900" />,
        bgColor: "bg-gradient-to-r from-yellow-100 to-yellow-50",
    },
];

const PricingModels = () => {
    return (
        <section id="pricing-models" className="py-20 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                        Our{" "}
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Business Models
                        </span>
                    </h2>
                    <p className="text-lg text-neutral-700">
                        Flexible pricing and collaboration options to fit your
                        business needs.
                    </p>
                </div>

                {/* Cards Layout */}
                <div className="space-y-8">
                    {modelsData.map((model, index) => (
                        <motion.div
                            key={index}
                            className={`p-8 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center sm:items-start ${model.bgColor}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Icon */}
                            <div className="mb-4 sm:mb-0 sm:mr-6">
                                {model.icon}
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                                    {model.title}
                                </h3>
                                <p className="text-neutral-700">
                                    {model.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingModels;
