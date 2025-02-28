"use client";

import React, {
    useEffect,
    useRef,
    useState,
    createContext,
    useContext,
} from "react";
import Image from "next/image"; // Fixed Image Import
import { motion, AnimatePresence } from "framer-motion";
import {
    IconArrowNarrowLeft,
    IconArrowNarrowRight,
    IconX,
} from "@tabler/icons-react";
import { useOutsideClick } from "@/app/hooks/use-outside-click";

export const CarouselContext = createContext({
    onCardClose: () => {},
    currentIndex: 0,
});

const items = [
    { title: "Tshirts", image: "/images/tshirts.jpg" },
    { title: "Hoodies/Sweatshirt/Sweater", image: "/images/tshirts.jpg" },
    { title: "Jackets", image: "/images/tshirts.jpg" },
    { title: "Embroidery Patches", image: "/images/tshirts.jpg" },
    { title: "Laptop Stickers", image: "/images/tshirts.jpg" },
    { title: "Lapel Pins", image: "/images/tshirts.jpg" },
    { title: "Fridge Magnets", image: "/images/tshirts.jpg" }, // Fixed incorrect path
    { title: "Crossbody Bags", image: "/images/tshirts.jpg" },
    {
        title: "Hamper Boxes with Customised Wrapping Paper + Ribbon",
        image: "/images/tshirts.jpg",
    },
    { title: "Tech Boxes", image: "/images/tshirts.jpg" },
    {
        title: "Collectibles (Coins, Bracelet, Pendants, etc.)",
        image: "/images/tshirts.jpg",
    },
    {
        title: "Glasses, Mugs and Other Drinkware",
        image: "/images/tshirts.jpg",
    },
    { title: "Coasters", image: "/images/tshirts.jpg" },
    { title: "Tote Bags", image: "/images/tshirts.jpg" },
    { title: "3D Printed Bobbleheads", image: "/images/tshirts.jpg" },
    { title: "Candles", image: "/images/tshirts.jpg" },
    {
        title: "Customised Edibles like Chocolate, Candies",
        image: "/images/tshirts.jpg",
    },
    {
        title: "Other Items like Scarf, Wristband, Sunglasses and More",
        image: "/images/tshirts.jpg",
    },
];

function CardModal({ item, onClose }) {
    const modalRef = useRef(null);
    useOutsideClick(modalRef, onClose);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    ref={modalRef}
                    className="relative bg-white rounded-lg p-6 w-11/12 max-w-lg shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                >
                    <button
                        className="absolute top-2 right-2 p-1 text-gray-700 hover:text-red-500"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        <IconX className="h-6 w-6" />
                    </button>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default function ProductsCardsCarousel() {
    const carouselRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        checkScrollability();
    }, [selectedItem]); // Added dependency to update state properly

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
            setTimeout(checkScrollability, 200);
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
            setTimeout(checkScrollability, 200);
        }
    };

    return (
        <CarouselContext.Provider
            value={{ onCardClose: () => setSelectedItem(null) }}
        >
            <div className="relative w-full py-10 flex flex-col items-center">
                <h2 className="text-5xl font-bold text-center mb-8 mt-4">
                    Items We Provide
                </h2>

                <div
                    className="flex w-full overflow-x-auto py-6 scroll-smooth scrollbar-hide"
                    ref={carouselRef}
                    onScroll={checkScrollability}
                >
                    <div className="flex flex-row justify-start gap-4 px-8 max-w-7xl mx-auto">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1 * index,
                                }}
                                className="w-[300px] min-w-[250px] h-[500px] flex-shrink-0 rounded-3xl bg-gray-900 cursor-pointer relative shadow-md hover:shadow-lg transition-shadow"
                                onClick={() => setSelectedItem(item)}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-0 rounded-3xl"
                                />
                                <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-t from-neutral-800 to-transparent bg-opacity-60 text-white">
                                    <h3 className="text-lg font-semibold">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-4 mt-4">
                    <button
                        className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center shadow-md hover:bg-gray-300 hover:rotate-12 transition"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                    >
                        <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
                    </button>
                    <button
                        className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center shadow-md hover:bg-gray-300 hover:-rotate-12 transition duration-200"
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                    >
                        <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
                    </button>
                </div>

                {selectedItem && (
                    <CardModal
                        item={selectedItem}
                        onClose={() => setSelectedItem(null)}
                    />
                )}
            </div>
        </CarouselContext.Provider>
    );
}
