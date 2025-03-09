"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

const menuItems = [
    "hero",
    "about",
    "collections",
    "featured",
    "process",
    "testimonials",
    "contact",
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Framer Motion Variants
    const menuVariants = {
        hidden: { opacity: 0, x: 50, filter: "blur(10px)" },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
        }),
        exit: {
            opacity: 0,
            x: 50,
            filter: "blur(10px)",
            transition: { duration: 0.3 },
        },
    };

    return (
        <nav className="fixed w-full bg-neutral-900/80 backdrop-blur-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-white font-raleway text-xl font-bold"
                        >
                            <div className="raleway">Future</div>
                            <div className="raleway">Culture.</div>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            <motion.div
                                initial={false}
                                animate={{ rotate: isOpen ? 90 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-6 h-6 flex flex-col justify-between"
                            >
                                <span className="block w-full h-0.5 bg-white transform transition duration-300"></span>
                                <span className="block w-full h-0.5 bg-white transform transition duration-300"></span>
                                <span className="block w-full h-0.5 bg-white transform transition duration-300"></span>
                            </motion.div>
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item}
                                href={`#${item}`}
                                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile menu with animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="md:hidden"
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -30,
                                filter: "blur(10px)",
                            }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="px-2 pt-2 pb-3 bg-neutral-900/10 backdrop-blur-sm space-y-1"
                        >
                            {menuItems.map((item, i) => (
                                <motion.div
                                    key={item}
                                    custom={i}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={menuVariants}
                                >
                                    <Link
                                        href={`#${item}`}
                                        className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium"
                                    >
                                        {item.charAt(0).toUpperCase() +
                                            item.slice(1)}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
