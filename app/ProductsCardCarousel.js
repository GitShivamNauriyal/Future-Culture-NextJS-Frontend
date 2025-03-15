import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import {
    IconArrowNarrowLeft,
    IconArrowNarrowRight,
    IconX,
} from "@tabler/icons-react";

const categories = {
    fashion: [
        { title: "Denim Collection", image: "/images/denim.jpg" },
        { title: "T-Shirts", image: "/images/tshirts.jpg" },
        { title: "Hoodies and Sweatshirts", image: "/images/hoodies.jpg" },
        { title: "Caps and Accessories", image: "/images/caps.jpg" },
    ],
    collectibles: [
        { title: "Pins and Badges", image: "/images/pins.jpg" },
        { title: "Magnets", image: "/images/magnets.jpg" },
        { title: "Costume Coins", image: "/images/coins.jpg" },
        { title: "Stickers and Patches", image: "/images/stickers.jpg" },
    ],
    tech: [
        { title: "Voice-Activated Speakers", image: "/images/speakers.jpg" },
        { title: "Tech-Boxes", image: "/images/tech_boxes.jpg" },
        { title: "USBs and Power Banks", image: "/images/power_banks.jpg" },
    ],
};

export default function ProductTabsCarousel() {
    const [selectedCard, setSelectedCard] = useState(null);
    const carouselRefs = {
        fashion: useRef(null),
        collectibles: useRef(null),
        tech: useRef(null),
    };

    const scrollLeft = (category) => {
        if (carouselRefs[category].current) {
            carouselRefs[category].current.scrollBy({
                left: -300,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = (category) => {
        if (carouselRefs[category].current) {
            carouselRefs[category].current.scrollBy({
                left: 300,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="w-full py-10">
            <Tabs defaultValue="fashion">
                <TabsList className="flex md:gap-12 gap-4 md:p-5">
                    <TabsTrigger
                        value="collectibles"
                        className="text-base md:text-lg font-semibold"
                    >
                        Collectibles
                    </TabsTrigger>
                    <TabsTrigger
                        value="tech"
                        className="text-base md:text-lg font-semibold"
                    >
                        Tech
                    </TabsTrigger>
                    <TabsTrigger
                        value="fashion"
                        className="text-base md:text-lg font-semibold"
                    >
                        Fashion
                    </TabsTrigger>
                </TabsList>

                {Object.keys(categories).map((category) => (
                    <TabsContent
                        key={category}
                        value={category}
                        className="w-full"
                    >
                        <div className="relative w-full flex flex-col items-center">
                            <div
                                className="flex w-full overflow-x-auto py-6 scroll-smooth scrollbar-hide snap-x"
                                ref={carouselRefs[category]}
                            >
                                <div className="flex flex-row select-none justify-start gap-4 px-8 max-w-7xl mx-auto">
                                    {categories[category].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="carousel-card w-[300px] h-[500px] flex-shrink-0 rounded-3xl bg-gray-100 cursor-pointer relative shadow-md hover:shadow-lg transition-shadow snap-center"
                                            initial={{
                                                opacity: 0,
                                                y: 50,
                                                filter: "blur(10px)",
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                filter: "blur(0px)",
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                ease: "easeOut",
                                                delay: (0.1 * index) % 0.5,
                                            }}
                                            onClick={() =>
                                                setSelectedCard(item)
                                            }
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                objectFit="cover"
                                                className="absolute inset-0 rounded-3xl"
                                            />
                                            <div className="absolute top-0 left-0 w-full h-full p-4 bg-gradient-to-b from-[#000000aa] via-transparent to-transparent text-white rounded-3xl">
                                                <h3 className="text-2xl font-semibold">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <div className="flex justify-center gap-4 mt-6">
                                <button
                                    onClick={() => scrollLeft(category)}
                                    className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center shadow-md hover:bg-gray-300 hover:rotate-12 transition"
                                >
                                    <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
                                </button>
                                <button
                                    onClick={() => scrollRight(category)}
                                    className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center shadow-md hover:bg-gray-300 hover:-rotate-12 transition"
                                >
                                    <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
                                </button>
                            </div>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedCard && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
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
