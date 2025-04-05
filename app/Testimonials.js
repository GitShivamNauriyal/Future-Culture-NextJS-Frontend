"use client";
import React from "react";
import { AnimatedTestimonials } from "./ui/AnimatedTestmonials";

const testimonialsData = [
    {
        initials: "JD",
        src: "/images/tshirts.jpg",
        name: "John Doe",
        position: "CEO, Tech Corp",
        message:
            "The attention to detail and personalization options exceeded our expectations. Perfect for corporate gifting!",
        rating: 5,
    },
    {
        initials: "JS",
        src: "/images/hoodies.jpg",
        name: "Jane Smith",
        position: "Event Planner",
        message:
            "Future Culture has become our go-to for client appreciation gifts. The quality and presentation are always impeccable.",
        rating: 5,
    },
    {
        initials: "RB",
        src: "/images/jackets.jpg",
        name: "Robert Brown",
        position: "Marketing Director",
        message:
            "Outstanding service and unique gift selections. Our clients were delighted with the personalized touch.",
        rating: 4,
    },
];

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="relative py-16 md:py-20 bg-neutral-900"
        >
            <div className="absolute inset-0 bg-dot-white/10 pointer-events-none"></div>
            <div className="text-center mb-8 md:mb-16">
                <h2 className="text-[2.5rem] md:text-5xl font-raleway font-bold text-neutral-100 mb-6">
                    Client
                    <span className="md:translate-y-0 -translate-y-4 md:inline-flex block md:ml-2 ml-0 md:mt-2 bg-gradient-to-r from-neutral-50 to-neutral-200 bg-clip-text text-transparent">
                        Testimonials
                    </span>
                </h2>
            </div>
            <AnimatedTestimonials testimonials={testimonialsData} />
        </section>
    );
};

export default Testimonials;
