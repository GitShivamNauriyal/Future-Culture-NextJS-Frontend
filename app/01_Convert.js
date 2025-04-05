import React from "react";
import { useState } from "react";
import { FlipWords } from "./ui/FlipWords";
import { AnimatePresence, motion } from "framer-motion";
import { Meteors } from "./ui/Meteors";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

const Convert = () => {
    const [blur, setBlur] = useState(0);
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <motion.h2
                            className="text-3xl md:text-5xl font-raleway font-bold text-neutral-900 mb-4"
                            initial={{
                                opacity: 0,
                                y: 20,
                                filter: "blur(10px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                            }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {/* Discover Our Story */}
                            Crafting Memorable
                            <span className="block mt-0 mb:mt-2 bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                                Gift Experiences
                            </span>
                        </motion.h2>

                        <div className="space-y-6">
                            <div className="space-y-1">
                                <motion.p
                                    className="text-neutral-700 "
                                    initial={{
                                        opacity: 0,
                                        filter: "blur(10px)",
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        filter: "blur(0px)",
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    We're a team with a mix of design,
                                    marketing, and tech backgrounds, blending
                                    creativity with future-forward thinking.
                                </motion.p>
                                <motion.p
                                    className="text-neutral-700 "
                                    initial={{
                                        opacity: 0,
                                        filter: "blur(10px)",
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        filter: "blur(0px)",
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    Our Vision? Tech should be seamless, not
                                    just something you plug in. It should
                                    enhance life, shape experiences, and elevate
                                    your brand.
                                </motion.p>
                                <motion.p
                                    className="text-neutral-700 "
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                        filter: "blur(10px)",
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        filter: "blur(0px)",
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    Join us on the ride toward Future
                                    Culture—where style, tech, and impact
                                    collide to create something that's not just
                                    cool, but next-level.
                                </motion.p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 ">
                                <motion.div
                                    className="relative overflow-hidden cursor-pointer py-4 px-4 sm:py-8 sm:px-4 bg-gradient-to-tl from-white to-neutral-100 rounded-3xl shadow-[12px_12px_16px_#43434322,-12px_-12px_60px_#dedede11] "
                                    initial={{
                                        opacity: 0,
                                        y: 2,
                                        scale: 1.02,
                                        filter: "blur(10px)",
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        filter: "blur(0px)",
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.4,
                                    }}
                                >
                                    <div className="absolute inset-0 pointer-events-none">
                                        <Meteors
                                            number={20}
                                            className="opacity-40"
                                        />
                                    </div>
                                    <h3 className="font-bold text-xl text-neutral-700 mb-2">
                                        Curated Selection
                                    </h3>
                                    <p className="text-sm text-neutral-600">
                                        Handpicked items that meet our quality
                                        standards
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="relative overflow-hidden cursor-pointer py-4 px-4 sm:py-8 sm:px-4 bg-gradient-to-tl from-white to-neutral-100 rounded-3xl shadow-[12px_12px_16px_#43434322,-12px_-12px_60px_#dedede11]"
                                    initial={{
                                        opacity: 0,
                                        y: 2,
                                        scale: 1.02,
                                        filter: "blur(10px)",
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        filter: "blur(0px)",
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.5,
                                    }}
                                >
                                    <div className="absolute inset-0 pointer-events-none">
                                        <Meteors
                                            number={20}
                                            className="opacity-40"
                                        />
                                    </div>
                                    <h3 className="font-bold text-xl text-neutral-700 mb-2">
                                        Custom Design
                                    </h3>
                                    <p className="text-sm text-neutral-600">
                                        Personalized gifting solutions for every
                                        occasion
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        <motion.div
                            className="mt-6"
                            initial={{
                                opacity: 0,
                                y: 20,
                                scale: 1.1,
                                filter: "blur(10px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                filter: "blur(0px)",
                            }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            <motion.div
                                className="text-lg raleway inline text-slate-100 font-light transition"
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                            >
                                <HoverBorderGradient>
                                    Discover Our Story
                                </HoverBorderGradient>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="order-1 md:order-2 relative">
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-300 relative overflow-hidden ">
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center bg-cover bg-center bg-[url(/images/hero/hero.jpg)]"
                                initial={{ filter: "blur(5px" }}
                                whileInView={{ filter: "blur(0px)" }}
                                transition={{ duration: 0.4 }}
                                viewport={{ once: "true" }}
                            >
                                <div className="w-3/4 h-3/4 rounded-full blur-3xl absolute animate-pulse"></div>
                                <div className="text-4xl font-bold text-neutral-100">
                                    <div className="flex-shrink-0">
                                        <motion.div
                                            className="font-raleway text-5xl font-bold"
                                            initial={{
                                                opacity: 0,
                                                y: 20,
                                                filter: "blur(10px)",
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                filter: "blur(0px)",
                                            }}
                                        >
                                            <div className="raleway mb-1 md:mb-2">
                                                Future
                                            </div>
                                            <div className="raleway mb-1 md:mb-2">
                                                Culture.
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-full blur-3xl opacity-10 animate-float"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Convert;
