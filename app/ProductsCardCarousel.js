"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

const items = [
    { title: "Tshirts", image: "/images/tshirts.jpg" },
    { title: "Hoodies", image: "/images/hoodies.jpg" },
    { title: "Jackets", image: "/images/jackets.jpg" },
    { title: "Embroidery Patches", image: "/images/patches.jpg" },
    { title: "Laptop Stickers", image: "/images/laptop_stickers.jpg" },
    { title: "Lapel Pins", image: "/images/lapel_pins.jpg" },
    { title: "Fridge Magnets", image: "/images/fridge_magnets.jpg" },
    { title: "Crossbody Bags", image: "/images/crossbody_bags.jpg" },
    { title: "Hamper Boxes", image: "/images/hapmer_boxes.jpg" },
    { title: "Tech Boxes", image: "/images/tech_boxes.jpg" },
    { title: "Collectibles", image: "/images/collectables.jpg" },
    { title: "Drinkware", image: "/images/drink_ware.jpg" },
    { title: "Coasters", image: "/images/coasters.jpg" },
    { title: "Tote Bags", image: "/images/toat_bags.jpg" },
    { title: "3D Printed Bobbleheads", image: "/images/bobbleheads.jpg" },
    { title: "Candles", image: "/images/candles.jpg" },
    { title: "Customised Edibles", image: "/images/edibles.jpg" },
    {
        title: "Other Items like Scarf, Wristband, Sunglasses and More",
        image: "/images/scarfs.jpg",
    },
];

export default function ProductsCardsCarousel() {
    const carouselRef = useRef(null);
    const [visibleCards, setVisibleCards] = useState(new Set());

    useEffect(() => {
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

        const cardElements = document.querySelectorAll(".carousel-card");
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
            <p className="mb-12">Tentative List of Items we provide</p>

            <div className="relative w-full flex flex-col items-center">
                {/* Carousel */}
                <div
                    className="flex w-full overflow-x-auto py-6 scroll-smooth scrollbar-hide"
                    ref={carouselRef}
                >
                    <div className="flex flex-row select-none justify-start gap-4 px-8 max-w-7xl mx-auto">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                className="carousel-card w-[300px] min-w-[250px] h-[500px] flex-shrink-0 rounded-3xl bg-gray-100 cursor-pointer relative shadow-md hover:shadow-lg transition-shadow"
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
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    objectFit="cover"
                                    className="absolute inset-0 rounded-3xl"
                                />
                                <div className="absolute top-0 left-0 w-full h-full p-4 bg-gradient-to-b from-[#00000077] via-transparent to-transparent bg-opacity-0 text-white rounded-3xl">
                                    <h3 className="text-2xl font-semibold font-mono">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-4 mt-6">
                    <button
                        onClick={scrollLeft}
                        className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center shadow-md hover:bg-gray-300 hover:rotate-12 transition"
                    >
                        <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
                    </button>

                    <button
                        onClick={scrollRight}
                        className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center shadow-md hover:bg-gray-300 hover:-rotate-12 transition"
                    >
                        <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
                    </button>
                </div>
            </div>
        </div>
    );
}
