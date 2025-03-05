"use client";
import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";

export const Meteors = ({ number, className }) => {
    const [meteorStyles, setMeteorStyles] = useState([]);

    useEffect(() => {
        const generatedMeteors = new Array(number || 20).fill(true).map(() => ({
            left: Math.random() * 800 - 400 + "px",
            top: Math.random() * 400 - 200 + "px", // Ensures a random top position
            animationDelay: Math.random() * 2 + "s",
            animationDuration: Math.random() * 3 + 2 + "s", // Between 2s and 5s
        }));

        setMeteorStyles(generatedMeteors);
    }, [number]);

    return (
        <>
            {meteorStyles.map((style, idx) => (
                <span
                    key={"meteor" + idx}
                    className={cn(
                        "absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] meteor-animation",
                        "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
                        className
                    )}
                    style={{
                        left: style.left,
                        top: style.top,
                        animationDelay: style.animationDelay,
                        animationDuration: style.animationDuration,
                    }}
                ></span>
            ))}
        </>
    );
};
