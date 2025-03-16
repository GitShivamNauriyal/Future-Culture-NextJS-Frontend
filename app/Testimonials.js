"use client";
import React from "react";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";
import { AnimatedTestimonials } from "./ui/AnimatedTestmonials";
import { motion } from "framer-motion";

// Dynamically import the carousel so that it runs only on the client.
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

// Data structure containing your testimonials.
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
        rating: 8,
    },
    // Add as many testimonial objects as needed...
];

const Testimonials = () => {
    return (
        <motion.section
            id="testimonials"
            className="py-16 md:py-20 bg-neutral-900"
            initial={{ filter: "blur(10px)" }}
            whileInView={{ filter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
        >
            <div className="absolute inset-0 bg-dot-white/10 pointer-events-none"></div>

            <div className="text-center mb-8 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-raleway font-bold text-neutral-100 mb-6 animate__animated animate__fadeInUp">
                    Client
                    <span className="block mt-2 bg-gradient-to-r from-neutral-50 to-neutral-200 bg-clip-text text-transparent">
                        Testimonials
                    </span>
                </h2>
            </div>
            <AnimatedTestimonials testimonials={testimonialsData} />
        </motion.section>
    );
};

export default Testimonials;
