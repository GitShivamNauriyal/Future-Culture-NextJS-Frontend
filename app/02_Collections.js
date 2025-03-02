import React from "react";
import Image from "next/image";

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
        <div className="bg-neutral-800 rounded-xl p-6 flex flex-col transition-all duration-300 hover:scale-105">
            <div className="h-48 w-full relative rounded-lg overflow-hidden mb-6">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <h3 className="text-xl font-bold text-white ">{title}</h3>
            <p className="text-gray-400 flex-grow">{description}</p>
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
        </div>
    );
};

const Collections = () => {
    return (
        <section id="collections" className="py-20 bg-neutral-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="text-3xl md:text-5xl font-raleway font-bold text-white mb-6">
                        Our Curated
                        <span className="block mt-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                            Collections
                        </span>
                    </div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore our thoughtfully curated gift collections,
                        designed to make every moment special
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collectionsData.map((collection) => (
                        <CollectionCard
                            key={collection.id}
                            title={collection.title}
                            description={collection.description}
                            number={collection.number}
                            explore={collection.explore}
                            image={collection.image}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-3 bg-white text-neutral-900 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                        View All Collections
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Collections;
