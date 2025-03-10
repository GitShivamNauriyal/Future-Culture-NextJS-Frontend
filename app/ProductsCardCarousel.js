import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
    IconArrowNarrowLeft,
    IconArrowNarrowRight,
    IconX,
} from "@tabler/icons-react";

const items = [
    { title: "Tshirts", image: "/images/tshirts.jpg" },
    { title: "Hoodies", image: "/images/hoodies.jpg" },
    { title: "Jackets", image: "/images/jackets.jpg" },
    { title: "Embroidery Patches", image: "/images/patches.jpg" },
    { title: "Laptop Stickers", image: "/images/laptop_stickers.jpg" },
    { title: "Lapel Pins", image: "/images/lapel_pins.jpg" },
    { title: "Fridge Magnets", image: "/images/fridge_magnets.jpg" },
    { title: "Crossbody Bags", image: "/images/crossbody_bags.jpg" },
    { title: "Hamper Boxes", image: "/images/hamper_boxes.jpg" },
    { title: "Tech Boxes", image: "/images/tech_boxes.jpg" },
    { title: "Collectibles", image: "/images/collectibles.jpg" },
    { title: "Drinkware", image: "/images/drink_ware.jpg" },
    { title: "Coasters", image: "/images/coasters.jpg" },
    { title: "Tote Bags", image: "/images/tote_bags.jpg" },
    { title: "3D Printed Bobbleheads", image: "/images/bobbleheads.jpg" },
    { title: "Candles", image: "/images/candles.jpg" },
    { title: "Customised Edibles", image: "/images/edibles.jpg" },
    {
        title: "Other Items like Scarf, Wristband, Sunglasses and More",
        image: "/images/scarfs.jpg",
    },
];

export default function ProductsCardsCarousel() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [showGrid, setShowGrid] = useState(false);
    const carouselRef = useRef(null);
    const [visibleCards, setVisibleCards] = useState(new Set());

    useEffect(() => {
        if (!carouselRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleCards((prev) =>
                            new Set(prev).add(entry.target.dataset.index)
                        );
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const cardElements =
            carouselRef.current.querySelectorAll(".carousel-card");
        cardElements.forEach((card, index) => {
            card.dataset.index = index;
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <div className="relative w-full py-10 flex flex-col items-center">
            <h2 className="text-5xl font-bold text-center mb-1 mt-10 bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
                Collectibles
            </h2>
            <p className="mb-6">Tentative List of Items we provide</p>

            {/* Carousel */}
            <div className="relative w-full flex flex-col items-center">
                <div
                    className="flex w-full overflow-x-auto py-6 scroll-smooth scrollbar-hide overflow-y-clip snap-x snap-mandatory"
                    ref={carouselRef}
                >
                    <div className="flex flex-row select-none justify-start gap-4 px-8 max-w-7xl mx-auto">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                className="carousel-card w-[300px] min-w-[250px] h-[500px] flex-shrink-0 rounded-3xl bg-gray-100 cursor-pointer relative shadow-md hover:shadow-lg transition-shadow snap-center"
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                    filter: "blur(10px)",
                                }}
                                animate={
                                    visibleCards.has(index.toString())
                                        ? {
                                              opacity: 1,
                                              y: 0,
                                              filter: "blur(0px)",
                                          }
                                        : {
                                              opacity: 0,
                                              y: 50,
                                              filter: "blur(10px)",
                                          }
                                }
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: 0.1 * index,
                                }}
                                onClick={() => setSelectedCard(item)}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    objectFit="cover"
                                    className="absolute inset-0 rounded-3xl"
                                />
                                <div className="absolute top-0 left-0 w-full h-full p-4 bg-gradient-to-b from-[#00000077] via-transparent to-transparent text-white rounded-3xl">
                                    <h3 className="text-2xl font-semibold font-mono">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-6">
                    <button
                        onClick={scrollLeft}
                        className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center shadow-md hover:bg-gray-300 hover:rotate-12 transition sm:flex"
                    >
                        <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
                    </button>
                    <button
                        onClick={() => setShowGrid(true)}
                        className="h-12 px-4 rounded-full bg-gray-100 flex items-center justify-center shadow-md hover:bg-gray-300 transition sm:hidden"
                    >
                        View All
                    </button>
                    <button
                        onClick={scrollRight}
                        className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center shadow-md hover:bg-gray-300 hover:-rotate-12 transition  sm:flex"
                    >
                        <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
                    </button>
                </div>
            </div>

            {/* Grid Modal */}
            <AnimatePresence>
                {showGrid && (
                    <motion.div
                        className="fixed z-40 inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4"
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        transition={{ duration: 0.4 }}
                        onClick={() => setShowGrid(false)}
                    >
                        <motion.div
                            className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto relative"
                            initial={{ opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                        >
                            <button
                                className="absolute z-50 top-3 right-3 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition"
                                onClick={() => setShowGrid(false)}
                            >
                                <IconX className="h-5 w-5 text-gray-600" />
                            </button>

                            <div className="grid grid-cols-2 gap-4 sm:hidden">
                                {items.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="cursor-pointer flex flex-col items-center"
                                        onClick={() => setSelectedCard(item)}
                                        initial={{
                                            y: 20,
                                            opacity: 0,
                                            filter: "blur(10px)",
                                        }}
                                        whileInView={{
                                            y: 0,
                                            opacity: 1,
                                            filter: "blur(0px)",
                                        }}
                                        transition={{
                                            delay: (index * 0.1) % 0.2,
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={100} // Adjust width as needed
                                            height={150} // Height should be 1.5x width for 2:3 ratio
                                            className="rounded-md w-full h-auto aspect-[2/3] object-cover"
                                        />

                                        <p className="text-center font-medium mt-2 text-sm">
                                            {item.title}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {selectedCard && (
                    <motion.div
                        className="z-50 fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedCard(null)}
                    >
                        <motion.div
                            className="bg-white rounded-lg p-6 max-w-md mx-auto max-h-[80vh] overflow-y-auto relative"
                            initial={{
                                y: 30,
                                opacity: 0,
                                filter: "blur(20px)",
                            }}
                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                            exit={{ y: 30, opacity: 0, filter: "blur(20px)" }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-3 right-3 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition"
                                onClick={() => setSelectedCard(null)}
                            >
                                <IconX className="h-5 w-5 text-gray-600" />
                            </button>
                            <h2 className="text-2xl font-bold text-center">
                                {selectedCard.title}
                            </h2>
                            <Image
                                src={selectedCard.image}
                                alt={selectedCard.title}
                                width={400}
                                height={300}
                                className="rounded-md mt-4"
                            />
                            <p className="mt-2 text-center">
                                More details about {selectedCard.title}...
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
