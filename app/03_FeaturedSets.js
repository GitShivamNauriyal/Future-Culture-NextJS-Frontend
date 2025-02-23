"use client";
import React from "react";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";

// Dynamically import Carousel for client-side rendering
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1024, min: 564 }, items: 2 },
    mobile: { breakpoint: { max: 564, min: 0 }, items: 1 },
};

const categoriesData = [
    {
        title: "Fashion - Wear the Future",
        description:
            "Timeless and trendy essentials, designed for everyday confidence.",
        items: [
            "Denim Collection - Jackets, jeans, and more, built to last.",
            "T-Shirts - Everyday staples with a statement.",
            "Hoodies & Sweatshirts - Street-ready comfort and style.",
            "Caps & Accessories - Because details make the difference.",
        ],
        image: "https://via.placeholder.com/500x300/CCCCCC/000000?text=Fashion", // Grey placeholder
    },
    {
        title: "Collectibles - Limited Drops, Lasting Impacts",
        description: "Exclusive items that celebrate culture and creativity.",
        items: [
            "Pins & Badges - Small and powerful.",
            "Magnets - Keep the culture close.",
            "Custom Coins - Unique keepsakes for any occasion.",
            "Stickers & Patches - Express yourself everywhere.",
        ],
        image: "https://via.placeholder.com/500x300/CCCCCC/000000?text=Collectibles", // Grey placeholder
    },
    {
        title: "Tech - Where Innovation Meets Creativity",
        description:
            "Smart accessories that bring convenience to your lifestyle.",
        items: [
            "Voice-Activated Speakers - Smart sound for any space.",
            "Tech-Boxes - Custom-built for your brand with light & sound.",
            "USBs & Power Banks - Stay charged, stay connected.",
        ],
        image: "https://via.placeholder.com/500x300/CCCCCC/000000?text=Tech", // Grey placeholder
    },
];

const CategoryCard = ({ title, description, items, image }) => (
    <div className="px-4 h-full">
        <div className="bg-neutral-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div
                className="h-64 w-full rounded-lg bg-cover bg-neutral-200 bg-center mb-6"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <h3 className="text-3xl font-bold text-neutral-900 mb-2">
                {title.split(" - ")[0]}
            </h3>
            <p className="text-neutral-600 mb-4">{description}</p>
            <ul className="text-neutral-700 mb-4 list-disc pl-5">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="mt-auto">
                <button className="px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors duration-300 ">
                    Explore More
                </button>
            </div>
        </div>
    </div>
);

const FeaturedSets = () => {
    return (
        <section id="featured" className="py-20 bg-white relative">
            {/* Main content container with higher z-index */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-8">
                    <h2 className="text-5xl md:text-6xl font-raleway font-bold text-neutral-900 mb-4">
                        Featured
                        <span className="block mt-2 bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent pb-3">
                            Categories
                        </span>
                    </h2>
                </div>

                <Carousel
                    swipeable
                    draggable
                    showDots
                    responsive={responsive}
                    infinite
                    autoPlay={false}
                    keyBoardControl
                    customTransition="all .5s"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {categoriesData.map((category, index) => (
                        <CategoryCard key={index} {...category} />
                    ))}
                </Carousel>
            </div>

            {/* Background Visual Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-white/5 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-white/5 rounded-full filter blur-3xl"></div>
            </div>
        </section>
    );
};

export default FeaturedSets;
