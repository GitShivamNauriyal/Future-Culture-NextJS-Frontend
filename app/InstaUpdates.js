"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const posts = [
    {
        imageName: "/images/Insta_Updates/new_collection.jpg",
        title: "New Collection Preview",
        likes: 276,
    },
    {
        imageName: "/images/Insta_Updates/Luxurious_Gift.jpg",
        title: "Luxury Gift Box Collection",
        likes: 245,
    },
    {
        imageName: "/images/Insta_Updates/corporate_event.jpg",
        title: "Corporate Event Highlights",
        likes: 189,
    },
    {
        imageName: "/images/Insta_Updates/behind_the_scene.jpg",
        title: "Behind the Scenes",
        likes: 343,
    },
];

const InstaPost = ({ imageName, title, likes, delay }) => {
    return (
        <motion.div
            className="relative group animate__animated animate__fadeIn"
            style={{ animationDelay: `${delay}s` }}
            initial={{
                filter: "blur(10px)",
                scale: 0.98,
            }}
            whileInView={{
                filter: "blur(0px)",
                scale: 1,
            }}
            transition={{ duration: 0.4, delay }}
        >
            <div className="aspect-square bg-neutral-200 rounded-xl overflow-hidden">
                <Image
                    width={500}
                    height={500}
                    src={imageName}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center rounded-xl">
                    <div className="opacity-0 group-hover:opacity-100 text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <p className="font-raleway text-sm">{title}</p>
                        <div className="flex items-center justify-center mt-2 space-x-4">
                            <span className="flex items-center">
                                <svg
                                    className="w-4 h-4 mr-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 18l-1.45-1.32C3.53 12.24 0 9.24 0 5.5 0 2.42 2.42 0 5.5 0 7.24 0 8.91.81 10 2.09 11.09.81 12.76 0 14.5 0 17.58 0 20 2.42 20 5.5c0 3.74-3.53 6.74-8.55 11.18L10 18z" />
                                </svg>
                                <span>{likes}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const InstaUpdates = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate__fadeIn");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const elements = document.querySelectorAll(
            "#instagram .animate__animated"
        );
        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="instagram" className="bg-neutral-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate__animated animate__fadeIn">
                    <h2 className="text-3xl font-bold font-raleway mb-4">
                        Follow Our Journey
                    </h2>
                    <p className="text-gray-600 font-raleway max-w-2xl mx-auto">
                        @futureculture_demo_2099
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {posts.map((post, index) => (
                        <InstaPost
                            key={post.imageName}
                            imageName={post.imageName}
                            title={post.title}
                            likes={post.likes}
                            delay={index * 0.1} // Adds staggered animation delay
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://instagram.com/futureculture2099"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-raleway text-black hover:text-gray-600 transition-colors"
                    >
                        Follow Us on Instagram
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InstaUpdates;
