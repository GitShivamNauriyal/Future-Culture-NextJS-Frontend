"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    dropdown = false,
    children,
}) => {
    return (
        <div
            onMouseEnter={() => dropdown && setActive(item)}
            className="relative"
        >
            <motion.p
                transition={{ duration: 0.3 }}
                className="cursor-pointer opacity-90 text-white"
            >
                {item}
            </motion.p>

            {/* Show dropdown only if specified */}
            {dropdown && active === item && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                        <motion.div
                            transition={transition}
                            layoutId="active"
                            className="bg-black backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl"
                        >
                            <motion.div layout className="w-max h-full p-4">
                                {children}
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({ setActive, children }) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)}
            className="relative rounded-full bg-black backdrop-blur-lg shadow-input flex justify-center space-x-4 px-8 py-6"
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({ title, description, href, src }) => {
    return (
        <Link href={href} className="flex space-x-2">
            <Image
                src={src}
                width={140}
                height={70}
                alt={title}
                className="shrink-0 rounded-md shadow-2xl"
            />
            <div>
                <h4 className="text-xl font-bold mb-1 text-white">{title}</h4>
                <p className=" text-sm max-w-[10rem] text-neutral-300">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, ...rest }) => {
    return (
        <Link
            {...rest}
            className="text-neutral-700 dark:text-neutral-200 hover:text-black"
        >
            {children}
        </Link>
    );
};
