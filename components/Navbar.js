"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, MenuItem } from "../app/ui/navbar-menu";

const menuItems = [
    "hero",
    "about",
    "collections",
    "featured",
    "process",
    "testimonials",
    "contact",
];

const collectionItems = [
    { title: "Tech", href: "/collections/tech" },
    { title: "Fashion", href: "/collections/fashion" },
    { title: "Collectables", href: "/collections/collectables" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-white font-raleway text-xl font-bold"
                        >
                            <div className="raleway translate-y-1">Future</div>
                            <div className="raleway -translate-y-1">
                                Culture.
                            </div>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {menuItems.map((item) =>
                            item === "collections" ? (
                                <div
                                    key={item}
                                    className="relative group cursor-pointer"
                                    onMouseEnter={() => setDropdownOpen(true)}
                                    onMouseLeave={() => setDropdownOpen(false)}
                                >
                                    <span className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">
                                        Collections
                                    </span>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {isDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: "easeOut",
                                                }}
                                                className="absolute left-0 mt-2 w-48 bg-black/80 backdrop-blur-md shadow-sm shadow-neutral-700 rounded-md overflow-hidden z-50"
                                            >
                                                {collectionItems.map(
                                                    (subItem) => (
                                                        <Link
                                                            key={subItem.title}
                                                            href={subItem.href}
                                                            className="block px-4 py-2 text-sm text-gray-200 hover:bg-neutral-700 transition"
                                                        >
                                                            {subItem.title}
                                                        </Link>
                                                    )
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    key={item}
                                    href={`#${item}`}
                                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300"
                                >
                                    {item.charAt(0).toUpperCase() +
                                        item.slice(1)}
                                </Link>
                            )
                        )}
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
                </div>
            </div>

            {/* Mobile menu with animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black/80 backdrop-blur-md absolute top-16 left-0 w-full px-4 py-4 space-y-2"
                    >
                        {menuItems.map((item, i) =>
                            item === "collections" ? (
                                <div key={item} className="space-y-1">
                                    <span className="block text-white font-medium px-3 py-2 text-lg">
                                        Collections
                                    </span>
                                    {collectionItems.map((subItem) => (
                                        <Link
                                            key={subItem.title}
                                            href={subItem.href}
                                            className="block text-gray-300 hover:text-white px-5 py-2 text-sm transition-colors duration-300"
                                        >
                                            {subItem.title}
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{
                                        delay: i * 0.1,
                                        duration: 0.3,
                                    }}
                                >
                                    <Link
                                        href={`#${item}`}
                                        className="block text-gray-300 hover:text-white px-3 py-2 text-lg font-medium transition-colors duration-300"
                                    >
                                        {item.charAt(0).toUpperCase() +
                                            item.slice(1)}
                                    </Link>
                                </motion.div>
                            )
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
