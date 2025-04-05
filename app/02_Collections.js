import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const collectionsData = [
    {
        id: 1,
        title: "Luxury Collection",
        description: "Premium gifts for those who appreciate the finer things",
        number: "01",
        explore: " Exclusive Drops",
        image: "/images/collections/luxury_gifting.jpg",
    },
    {
        id: 2,
        title: "Corporate Gifting",
        description: "Professional gifts to strengthen business relationships",
        number: "02",
        explore: " Statement Pieces",
        image: "/images/collections/corporate_gifting.jpg",
    },
    {
        id: 3,
        title: "Personal Touch",
        description: "Customizable gifts for personal celebrations",
        number: "03",
        explore: " Future-Ready Designs",
        image: "/images/collections/personal_touch.jpg",
    },
];

const CollectionCard = ({ title, description, number, explore, image }) => {
    return (
        <motion.div
            className="bg-neutral-700/30 backdrop-blur-md rounded-xl p-6 flex flex-col transition-all duration-300 hover:scale-[1.03] cursor-pointer w-full h-full"
            initial={{ filter: "blur(10px)" }}
            whileInView={{ filter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
        >
            {/* Image Container */}
            <div className="h-48 w-full relative rounded-lg overflow-hidden mb-6">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>

            {/* Text Content */}
            <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-gray-400 break-words whitespace-normal">
                    {description}
                </p>
            </div>

            {/* Button Section */}
            <div className="mt-auto">
                <button className="text-white mt-2 hover:text-gray-300 transition-colors duration-300 flex items-center">
                    Explore Our {explore}
                    <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        ></path>
                    </svg>
                </button>
            </div>
        </motion.div>
    );
};

const Collections = () => {
    return (
        <section id="collections" className="py-20 bg-neutral-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative group">
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute w-52 h-52 bg-gradient-to-br from-pink-500 to-pink-300 opacity-20 rounded-full top-32 -left-8 blur-3xl  
                    transition-all duration-500 transform group-hover:-translate-x-4 group-hover:-translate-y-8 group-hover:scale-110"
                    />
                    <div
                        className="absolute w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 opacity-30 rounded-full bottom-16 left-6 blur-2xl 
                transition-all duration-500 transform group-hover:-translate-x-8 group-hover:translate-y-4 group-hover:scale-110"
                    />
                    <div
                        className="absolute w-40 h-40 bg-gradient-to-br from-pink-500 to-red-500 opacity-50 rounded-full top-[55%] left-[50%] blur-3xl 
                transition-all duration-500 transform group-hover:-translate-x-8 group-hover:translate-y-4 group-hover:scale-110"
                    />
                    <div
                        className="absolute w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-500 opacity-50 rounded-full bottom-10 right-6 blur-2xl 
                transition-all duration-500 transform group-hover:translate-x-8 group-hover:translate-y-4 group-hover:scale-110"
                    />
                    <div
                        className="absolute w-44 h-24 bg-gradient-to-br from-red-500 to-pink-900 opacity-50 rounded-full top-40 right-6 blur-2xl 
                transition-all duration-500 transform group-hover:translate-x-8 group-hover:-translate-y-4 group-hover:scale-110"
                    />
                </div>
                <motion.div
                    className="text-center mb-8 sm:mb-16"
                    initial={{ filter: "blur(10px", y: 5 }}
                    whileInView={{ filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="text-4xl md:text-5xl font-raleway font-bold text-white mb-4 sm:mb-6">
                        Our Curated Collections
                        {/* <span className="block mt-0 sm:mt-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"> */}
                        {/* </span> */}
                    </div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore our thoughtfully curated gift collections,
                        designed to make every moment special
                    </p>
                </motion.div>

                <div className="md:grid md:grid-cols-1 lg:grid-cols-3 md:gap-8 gap-4 flex md:overflow-visible overflow-y-visible overflow-x-scroll whitespace-nowrap snap-x snap-mandatory scroll-smooth md:px-6 px-2">
                    {collectionsData.map((collection) => (
                        <div
                            key={collection.id}
                            className="snap-center flex-shrink-0 m-0 md:w-[100%] w-[85%]"
                        >
                            <CollectionCard
                                title={collection.title}
                                description={collection.description}
                                number={collection.number}
                                explore={collection.explore}
                                image={collection.image}
                            />
                        </div>
                    ))}
                </div>

                {/* <motion.div
                    className="mt-10 sm:mt-16 text-center"
                    initial={{ filter: "blur(10px" }}
                    whileInView={{ filter: "blur(0px)" }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <button className="px-8 py-3 bg-white text-neutral-900 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                        View All Collections
                    </button>
                </motion.div> */}
            </div>
        </section>
    );
};

export default Collections;
