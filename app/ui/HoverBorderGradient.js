"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export function HoverBorderGradient({
    children,
    containerClassName,
    className,
    as: Tag = "button",
    duration = 1,
    clockwise = true,
    ...props
}) {
    const [isClient, setIsClient] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [direction, setDirection] = useState("TOP");

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    // Adjusted colors with 50% more brightness
    const movingMap = {
        TOP: "radial-gradient(30% 70% at 50% 0%, rgba(255, 160, 64, 1) 0%, rgba(255, 160, 64, 0) 100%)", // Slightly Brighter Orange
        LEFT: "radial-gradient(25% 60% at 0% 50%, rgba(255, 160, 64, 1) 0%, rgba(255, 160, 64, 0) 100%)",
        BOTTOM: "radial-gradient(30% 70% at 50% 100%, rgba(255, 160, 64, 1) 0%, rgba(255, 160, 64, 0) 100%)",
        RIGHT: "radial-gradient(25% 60% at 100% 50%, rgba(255, 160, 64, 1) 0%, rgba(255, 160, 64, 0) 100%)",
    };

    const highlight =
        "radial-gradient(80% 200% at 50% 50%, rgba(255, 80, 80, 1) 0%, rgba(255, 80, 80, 0) 100%)"; // Slightly Brighter Red

    return (
        <Tag
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={cn(
                "relative flex rounded-full border-4 content-center bg-black/10 hover:bg-black/5 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
                containerClassName
            )}
            {...props}
        >
            <div
                className={cn(
                    "w-auto text-black z-10 bg-white px-5 py-2.5 rounded-[inherit] text-base font-medium",
                    className
                )}
            >
                {children}
            </div>

            {/* Animated Border */}
            <motion.div
                className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
                style={{
                    filter: "blur(5px)", // Moderate blur for a soft glow
                    position: "absolute",
                    width: "101%",
                    height: "101%",
                }}
                initial={{ background: movingMap[direction] }}
                animate={{
                    background: hovered
                        ? [movingMap[direction], highlight] // Hover Effect
                        : [
                              movingMap[direction],
                              highlight,
                              movingMap[direction],
                          ], // Idle animation
                }}
                transition={{
                    ease: "linear",
                    duration: hovered ? duration : duration * 2, // Faster animation on hover
                    repeat: hovered ? 0 : Infinity, // Idle animation loops infinitely
                    repeatType: "mirror", // Smooth transition back and forth
                }}
            />

            <div className="bg-white absolute z-1 flex-none inset-[2px] rounded-[100px]" />
        </Tag>
    );
}
