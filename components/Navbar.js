"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
    "hero",
    "about",
    "collections",
    "featured",
    "process",
    "testimonials",
    "contact",
];

const menuVariants = {
    hidden: { opacity: 0, y: -20, filter: "blur(5px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        y: -20,
        filter: "blur(5px)",
        transition: { duration: 0.3 },
    },
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                            <motion.div
                                initial={false}
                                animate={{
                                    rotate: isOpen ? 90 : 0,
                                    scale: isOpen ? 1.1 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                                className="w-6 h-6 flex flex-col justify-between"
                            >
                                <span className="block w-full h-0.5 bg-white"></span>
                                <span className="block w-full h-0.5 bg-white"></span>
                                <span className="block w-full h-0.5 bg-white"></span>
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
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className="md:hidden bg-neutral-900/80 backdrop-blur-lg absolute top-16 left-0 w-full px-4 py-4 space-y-2"
                    >
                        {menuItems.map((item, i) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 30 }}
                                transition={{ delay: i * 0.1, duration: 0.3 }}
                            >
                                <Link
                                    href={`#${item}`}
                                    className="block text-gray-300 hover:text-white px-3 py-2 text-lg font-medium transition-colors duration-300"
                                >
                                    {item.charAt(0).toUpperCase() +
                                        item.slice(1)}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
