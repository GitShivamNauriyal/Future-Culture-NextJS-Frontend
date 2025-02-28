"use client";
import React from "react";
import { FaShoppingCart, FaTruckMoving } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { TbPrinter, TbRuler2 } from "react-icons/tb";
import { IoColorPalette } from "react-icons/io5";

const promisesData = [
    {
        title: "No MOQ",
        subtitle: "(Minimum Order Quantity)",
        description:
            "Order any quantity—no bulk commitments required, perfect for small businesses and personal gifts.",
        Icon: FaShoppingCart,
    },
    {
        title: "Quality Guarantee",
        description:
            "We ensure premium materials and top-notch printing. If you're not satisfied, we offer replacements or refunds.",
        Icon: MdVerified,
    },
    {
        title: "Best Printing Technology",
        description:
            "Enjoy vibrant, long-lasting prints using cutting-edge DTG, Sublimation, and UV printing techniques.",
        Icon: TbPrinter,
    },
    {
        title: "Latest Trends",
        description:
            "Our collections are always updated with fresh styles and designs, keeping you ahead in fashion.",
        Icon: IoColorPalette,
    },
    {
        title: "Accurate Fits",
        description:
            "Our sizing is true-to-fit based on standard charts, reducing returns and ensuring perfect fits.",
        Icon: TbRuler2,
    },
    {
        title: "On-Time Delivery Commitment",
        description:
            "We guarantee fast, reliable shipping so you receive your orders exactly when you need them.",
        Icon: FaTruckMoving,
    },
];

const PromiseCard = ({ title, subtitle, description, Icon }) => {
    return (
        <div className="cursor-crosshair bg-white shadow-md rounded-xl p-6 flex flex-col hover:shadow-[4px_4px_16px_rgba(0,0,0,0.1)] hover:rounded-2xl transition-all duration-300 group">
            {/* Fixed Bouncing Icon on Hover */}
            <div className="mb-4 text-4xl text-neutral-900 transition-transform duration-300 group-hover:-translate-y-1 ">
                <Icon />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">
                {title}{" "}
                {subtitle && (
                    <span className="text-base font-normal">{subtitle}</span>
                )}
            </h3>
            <p className="text-neutral-600 flex-grow">{description}</p>
        </div>
    );
};

const OurPromises = () => {
    return (
        <section
            id="our-promises"
            className="py-20 bg-neutral-100 inset-shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                        Our Promises
                    </h2>
                    <p className="text-lg text-neutral-700">
                        Our commitment to excellence in every detail.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {promisesData.map((promise, index) => (
                        <PromiseCard key={index} {...promise} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPromises;
