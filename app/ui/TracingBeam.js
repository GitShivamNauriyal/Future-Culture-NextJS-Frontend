"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

export const TracingBeam = ({ className }) => {
    const ref = useRef(null);
    const contentRef = useRef(null);
    const [svgHeight, setSvgHeight] = useState(null); // Ensure it updates dynamically

    useEffect(() => {
        if (contentRef.current) {
            setSvgHeight(contentRef.current.scrollHeight);
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y1 = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, svgHeight || 0]),
        {
            stiffness: 400,
            damping: 90,
        }
    );

    const y2 = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, svgHeight || 0]),
        {
            stiffness: 400,
            damping: 90,
        }
    );

    return (
        <motion.div ref={ref} className={`relative w-full ${className}`}>
            {svgHeight !== null && (
                <div className="absolute -left-4 md:-left-16 top-3">
                    <motion.div className="ml-[27px] h-4 w-4 rounded-full border border-neutral-300 shadow-sm flex items-center justify-center">
                        <motion.div className="h-2 w-2 rounded-full border border-neutral-400 bg-white" />
                    </motion.div>

                    <svg
                        viewBox={`0 0 20 ${svgHeight}`}
                        width="20"
                        height={svgHeight}
                        className="ml-4 block"
                    >
                        {/* ✅ Make beam **thicker** and more visible */}
                        <motion.path
                            d={`M 1 0V ${svgHeight}`}
                            fill="none"
                            stroke="#9091A0"
                            strokeOpacity="0.16"
                            strokeWidth="2"
                        />
                        <motion.path
                            d={`M 1 0V ${svgHeight}`}
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="4"
                        />
                        <defs>
                            <motion.linearGradient
                                id="gradient"
                                gradientUnits="userSpaceOnUse"
                                x1="0"
                                x2="0"
                                y1={y1}
                                y2={y2}
                            >
                                <stop stopColor="#18CCFC" stopOpacity="0" />
                                <stop stopColor="#18CCFC" />
                                <stop offset="0.325" stopColor="#6344F5" />
                                <stop
                                    offset="1"
                                    stopColor="#AE48FF"
                                    stopOpacity="0"
                                />
                            </motion.linearGradient>
                        </defs>
                    </svg>
                </div>
            )}
            <div ref={contentRef} className="relative z-10">
                {/* Keeps steps above beam */}
            </div>
        </motion.div>
    );
};
