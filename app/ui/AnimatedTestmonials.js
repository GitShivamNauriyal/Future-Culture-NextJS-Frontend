"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
    const [client, setClient] = useState(false);
    const [active, setActive] = useState(0);
    const [randomRotations, setRandomRotations] = useState([]);

    useEffect(() => {
        setClient(true);
        setRandomRotations(
            testimonials.map(() => Math.floor(Math.random() * 21) - 10)
        );
    }, [testimonials]);

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(() => {
                setActive((prev) => (prev + 1) % testimonials.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay, testimonials?.length]);

    if (!client || !testimonials || testimonials.length === 0) return null;

    const handleNext = () =>
        setActive((prev) => (prev + 1) % testimonials.length);
    const handlePrev = () =>
        setActive(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );

    const handleClick = (event) => {
        if (event.button === 0) {
            // Left click
            handleNext();
        } else if (event.button === 2) {
            // Right click
            handlePrev();
            event.preventDefault(); // Prevent context menu
        }
    };

    const isActive = (index) => index === active;

    return (
        <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 pb-6 md:pb-20 pt-2 text-white">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                {/* Image Section */}
                <div>
                    <div className="relative h-80 w-full">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.src}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: randomRotations[index],
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index)
                                            ? 0
                                            : randomRotations[index],
                                        zIndex: isActive(index)
                                            ? 999
                                            : testimonials.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: randomRotations[index],
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom"
                                >
                                    <Image
                                        src={testimonial.src}
                                        alt={testimonial.name}
                                        width={500}
                                        height={500}
                                        draggable={false}
                                        className="h-full w-full rounded-3xl object-cover object-center"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Text Section */}
                <div className="flex justify-between flex-col py-4">
                    <motion.div
                        key={active}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <h3 className="text-2xl font-bold">
                            {testimonials[active]?.name}
                        </h3>
                        <p className="text-sm text-gray-300">
                            {testimonials[active]?.position}
                        </p>
                        <motion.p className="text-lg text-gray-300 mt-4">
                            {testimonials[active]?.message
                                ?.split(" ")
                                .map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{
                                            filter: "blur(10px)",
                                            opacity: 0,
                                            y: 5,
                                        }}
                                        animate={{
                                            filter: "blur(0px)",
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            ease: "easeInOut",
                                            delay: 0.02 * index,
                                        }}
                                        className="inline-block"
                                    >
                                        {word}&nbsp;
                                    </motion.span>
                                ))}
                        </motion.p>
                        <motion.div className="flex text-yellow-400 mt-4">
                            {Array(testimonials[active]?.rating || 0)
                                .fill(0)
                                .map((_, idx) => (
                                    <svg
                                        key={idx}
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                        </motion.div>
                    </motion.div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 pt-6 md:pt-12">
                        <button
                            onClick={handlePrev}
                            className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center group/button"
                        >
                            <IconArrowLeft className="h-5 w-5 text-white group-hover/button:rotate-12 transition-transform duration-300" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center group/button"
                        >
                            <IconArrowRight className="h-5 w-5 text-white group-hover/button:-rotate-12 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
