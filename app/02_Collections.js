import React from "react";

const collectionsData = [
    {
        id: 1,
        title: "Luxury Collection",
        description: "Premium gifts for those who appreciate the finer things",
        number: "01",
        explore: " Exclusive Drops",
    },
    {
        id: 2,
        title: "Corporate Gifting",
        description: "Professional gifts to strengthen business relationships",
        number: "02",
        explore: " Statement Pieces",
    },
    {
        id: 3,
        title: "Personal Touch",
        description: "Customizable gifts for personal celebrations",
        number: "03",
        explore: " Future-Ready Designs",
    },
];

const CollectionCard = ({ title, description, number, explore }) => {
    return (
        <div
            className={`bg-neutral-800 rounded-xl p-6 flex flex-col transition-all duration-300 hover:scale-105`}
        >
            <div className="h-48 bg-gradient-to-br from-neutral-700 to-neutral-600 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-4xl text-white/20">{number}</span>
            </div>
            <h3 className="text-xl font-bold text-white ">{title}</h3>
            <p className="text-gray-400 flex-grow">{description}</p>
            <div className="mt-auto">
                <button className="text-white mt-2 hover:text-gray-300 transition-colors duration-300 flex items-center">
                    Explore Our
                    {explore}
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
                    <div className="text-3xl md:text-5xl font-raleway font-bold text-white mb-6 ">
                        Our Curated
                        <span className="block mt-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                            Collections
                        </span>
                    </div>
                    <p className="text-gray-400 max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
                        Explore our thoughtfully curated gift collections,
                        designed to make every moment special
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collectionsData.map((collection, index) => (
                        <CollectionCard
                            key={collection.id}
                            title={collection.title}
                            description={collection.description}
                            number={collection.number}
                            explore={collection.explore}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center animate__animated animate__fadeInUp animate__delay-3s">
                    <button className="px-8 py-3 bg-white text-neutral-900 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                        View All Collections
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Collections;
