import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import {
    IconArrowNarrowLeft,
    IconArrowNarrowRight,
    IconX,
} from "@tabler/icons-react";
import BottomGradient from "./ui/BottomGradient";

// const items = [
//     { title: "Tshirts", image: "/images/tshirts.jpg" },
//     { title: "Hoodies", image: "/images/hoodies.jpg" },
//     { title: "Jackets", image: "/images/jackets.jpg" },
//     { title: "Embroidery Patches", image: "/images/patches.jpg" },
//     { title: "Laptop Stickers", image: "/images/laptop_stickers.jpg" },
//     { title: "Lapel Pins", image: "/images/lapel_pins.jpg" },
//     { title: "Fridge Magnets", image: "/images/fridge_magnets.jpg" },
//     { title: "Crossbody Bags", image: "/images/crossbody_bags.jpg" },
//     { title: "Hamper Boxes", image: "/images/hamper_boxes.jpg" },
//     { title: "Tech Boxes", image: "/images/tech_boxes.jpg" },
//     { title: "Collectibles", image: "/images/collectibles.jpg" },
//     { title: "Drinkware", image: "/images/drink_ware.jpg" },
//     { title: "Coasters", image: "/images/coasters.jpg" },
//     { title: "Tote Bags", image: "/images/tote_bags.jpg" },
//     { title: "3D Printed Bobbleheads", image: "/images/bobbleheads.jpg" },
//     { title: "Candles", image: "/images/candles.jpg" },
//     { title: "Customised Edibles", image: "/images/edibles.jpg" },
//     {
//         title: "Other Items like Scarf, Wristband, Sunglasses and More",
//         image: "/images/scarfs.jpg",
//     },
// ];

const categories = {
    fashion: [
        { title: "Denim Collection", image: "/images/jackets.jpg" },
        { title: "T-Shirts", image: "/images/tshirts.jpg" },
        { title: "Hoodies and Sweatshirts", image: "/images/hoodies.jpg" },
        { title: "Caps and Accessories", image: "/images/crossbody_bags.jpg" },
        { title: "Bandanas", image: "/images/bandanas.jpg" },
        { title: "Joggers", image: "/images/joggers.jpg" },
        { title: "Cord Sets", image: "/images/cord_sets.jpg" },
        { title: "Scarf", image: "/images/scarf.jpg" },
        { title: "Wristband", image: "/images/wristband.jpg" },
        { title: "Sunglasses", image: "/images/sunglasses.jpg" },
        { title: "Rings", image: "/images/rings.jpg" },
        { title: "Jewelry", image: "/images/jewelry.jpg" },
        {
            title: "Rugs, Mats, Deskpads",
            image: "/images/rugs_mats_deskpads.jpg",
        },
    ],
    collectibles: [
        { title: "Labels and Badges", image: "/images/lapel_pins.jpg" },
        { title: "Magnets", image: "/images/fridge_magnets.jpg" },
        { title: "Costume Coins", image: "/images/costume_coins.jpg" },
        { title: "Stickers and Patches", image: "/images/laptop_stickers.jpg" },
        {
            title: "Embroidery Patches",
            image: "/images/embroidery_patches.jpg",
        },
        { title: "Stickers", image: "/images/stickers.jpg" },
        {
            title: "Customised Wrapping Paper + Ribbon",
            image: "/images/wrapping_paper_ribbon.jpg",
        },
        { title: "Bracelets", image: "/images/bracelets.jpg" },
        {
            title: "Keychains and Pendants",
            image: "/images/keychains_pendants.jpg",
        },
        { title: "Enamel Stuff", image: "/images/enamel_stuff.jpg" },
        { title: "Silicon Objects", image: "/images/silicon_objects.jpg" },
        { title: "Metal Items", image: "/images/metal_items.jpg" },
        { title: "Sippers and Shakers", image: "/images/sippers_shakers.jpg" },
        { title: "Scrolls", image: "/images/scrolls.jpg" },
        { title: "Decorative Stuff", image: "/images/decorative_stuff.jpg" },
        { title: "Stationery", image: "/images/stationery.jpg" },
        {
            title: "Glasses, Mugs and Other Drinkware",
            image: "/images/drinkware.jpg",
        },
        { title: "Coasters", image: "/images/coasters.jpg" },
        { title: "Tote Bags", image: "/images/tote_bags.jpg" },
        { title: "3D Printed Bobbleheads", image: "/images/bobbleheads.jpg" },
        { title: "Candles", image: "/images/candles.jpg" },
        {
            title: "Customised Edibles (Chocolate, Candies)",
            image: "/images/edibles.jpg",
        },
        { title: "Can Sleeves", image: "/images/can_sleeves.jpg" },
    ],
    tech: [
        { title: "Interactive Kits", image: "/images/interactive_kits.jpg" },
        { title: "Tech-Boxes", image: "/images/tech_boxes.jpg" },
        { title: "Light and Sound", image: "/images/light_and_sound.jpg" },
        { title: "Merch Hampers", image: "/images/merch_hampers.jpg" },
        { title: "Gift Packs", image: "/images/gift_packs.jpg" },
        { title: "Fun Caddies", image: "/images/fun_caddies.jpg" },
        { title: "Acrylic Pods", image: "/images/acrylic_pods.jpg" },
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
        <div
            id="collections"
            className="w-full py-10 flex flex-col justify-center align-middle"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-0 md:mb-2 mt-2 bg-gradient-to-b from-neutral-900 to-neutral-500 bg-clip-text text-transparent">
                Collection for You
            </h2>
            <p className="mb-8 mx-auto font-normal bg-gradient-to-r from-red-500 via-pink-500 to-orange-600 bg-clip-text text-transparent">
                Discover the Items we provide
            </p>
            <Tabs defaultValue="fashion">
                <TabsList className="flex md:gap-12 gap-4 md:p-6 p-2 bg-neutral-100">
                    <TabsTrigger
                        value="fashion"
                        className="text-base md:text-lg font-semibold "
                    >
                        Fashion
                    </TabsTrigger>
                    <TabsTrigger
                        value="tech"
                        className="text-base md:text-lg font-semibold "
                    >
                        Tech
                    </TabsTrigger>
                    <TabsTrigger
                        value="collectibles"
                        className="text-base md:text-lg font-semibold "
                    >
                        Collectibles
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
