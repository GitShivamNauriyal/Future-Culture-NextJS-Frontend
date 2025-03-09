"use client";
import React from "react";
import { FaHandshake, FaBoxOpen } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import { delay, motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import BottomGradient from "./ui/BottomGradient";
import BlobAnimation from "./ui/BlobAnimation";

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
            className="px-5 md:px-8 py-8 md:py-12 z-10 rounded-[50px] bg-[#eeeeee88] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col sm:items-start  backdrop-blur-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer select-none"
            initial={{ filter: "blur(10px)" }}
            whileInView={{ filter: "blur(0px)" }}
            // whileHover={{ scale: 1.02 }}
            onHoverStart={() => iconControls.start({ y: -10 })}
            onHoverEnd={() => iconControls.start({ y: 0 })}
            transition={{
                duration: 0.4,
                // scale: {
                //     duration: 0.3,
                //     delay: 0,
                // },
            }}
        >
            <BlobAnimation />
            <div className="flex items-center space-x-4">
                <motion.div
                    className="text-5xl text-neutral-900"
                    animate={iconControls}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.6,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                >
                    {icon}
                </motion.div>
                <h3 className="text-2xl font-semibold text-neutral-800 ml-6">
                    {title}
                </h3>
            </div>

            {/* Description always below title */}
            <p className="text-neutral-600 leading-relaxed mt-2 ">
                {description}
            </p>
        </motion.div>
    );
};

const PricingModels = () => {
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
                            <BottomGradient />
                        </motion.span>
                    </h2>
                    <p className="text-lg text-neutral-700">
                        Flexible pricing and collaboration options to fit your
                        business needs.
                    </p>
                </div>

                {/* Cards Layout */}
                <div className="relative space-y-4">
                    <div className="z-0 absolute left-1/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-50 via-neutral-900 to-neutral-50 hidden md:block"></div>
                    <div className="z-0 absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-50 via-neutral-900 to-neutral-50 hidden md:block"></div>
                    <div className="z-0 absolute left-3/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-50 via-neutral-900 to-neutral-50 hidden md:block"></div>

                    {/* <BlobAnimation h="16" w="16" left="5px" top="100px" />
                    <BlobAnimation
                        h="16"
                        w="16"
                        right="0px"
                        bottom="50px"
                        fromColor="orange-400"
                        toColor="orange-400"
                        blur="md"
                    /> */}
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
