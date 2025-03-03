"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { useState } from "react";
import { CanvasRevealEffect } from "./card-reveal-effect";
import { cn } from "../lib/utils";

export const CardSpotlight = ({
    children,
    radius = 0,
    colors = [
        [59, 130, 246],
        [139, 92, 246],
    ],
    color = "#262626",
    dotSize = 3,
    animationSpeed = 3,
    className,
    delay = 0,
    ...props
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    return (
        <motion.div
            className={cn(
                "group/spotlight relative border border-neutral-800 bg-black dark:border-neutral-800 rounded-3xl overflow-hidden",
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            viewport={{ once: true }}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
                style={{
                    backgroundColor: color,
                    maskImage: useMotionTemplate`
                        radial-gradient(
                          ${radius}px circle at ${mouseX}px ${mouseY}px,
                          white 15%,
                          rgba(255, 255, 255, 0.5) 50%,
                          transparent 100%
                        )
                    `,
                }}
            />

            {isHovering && (
                <CanvasRevealEffect
                    animationSpeed={animationSpeed}
                    containerClassName="bg-transparent absolute inset-0 pointer-events-none rounded-3xl"
                    colors={colors}
                    dotSize={dotSize}
                />
            )}

            {/* Content */}
            <div className="relative z-0 pointer-events-auto">{children}</div>
        </motion.div>
    );
};
