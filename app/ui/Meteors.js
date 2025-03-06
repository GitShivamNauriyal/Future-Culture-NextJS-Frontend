"use client";
import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";

export const Meteors = ({ number = 20, className }) => {
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        const generateMeteors = new Array(number).fill(null).map(() => ({
            left: `${Math.floor(Math.random() * window.innerWidth)}px`, // Spread across the width
            top: `0px`, // Always start from the top
            animationDelay: `${(Math.random() * 1).toFixed(2)}s`, // Random delay
            animationDuration: `${(Math.random() * 5 + 2).toFixed(2)}s`, // Duration: 2s - 7s
        }));
        setMeteors(generateMeteors);
    }, [number]);

    return (
        <>
            {meteors.map((meteor, idx) => (
                <span
                    key={`meteor-${idx}`}
                    className={cn(
                        "absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] animate-meteor-effect",
                        "before:content-[''] before:absolute before:top-1/2 before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
                        className
                    )}
                    style={{
                        top: meteor.top,
                        left: meteor.left,
                        animationDelay: meteor.animationDelay,
                        animationDuration: meteor.animationDuration,
                    }}
                ></span>
            ))}
        </>
    );
};
