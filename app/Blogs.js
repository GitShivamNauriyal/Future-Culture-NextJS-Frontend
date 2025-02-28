"use client";
import React, { useEffect } from "react";

const Blogs = () => {
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
            { threshold: 0.1 }
        );

        const animatedElements = document.querySelectorAll(
            "#blog .animate__animated"
        );
        animatedElements.forEach((element) => observer.observe(element));

        return () => {
            observer.disconnect();
        };
    }, []);

    const blogPosts = [
        {
            image: "corporate_gifting.jpg",
            date: "December 15, 2024",
            title: "The Art of Corporate Gifting",
            excerpt:
                "Discover how thoughtful corporate gifting can strengthen business relationships and create lasting impressions.",
            delay: "0s",
        },
        {
            image: "sustainable_gifting.jpg",
            date: "December 10, 2024",
            title: "Sustainable Gifting Guide",
            excerpt:
                "Explore our eco-friendly gift options and learn how to make environmentally conscious gifting choices.",
            delay: "0.2s",
        },
        {
            image: "personalization_gifting.jpg",
            date: "December 5, 2024",
            title: "Personalization Trends",
            excerpt:
                "Learn about the latest trends in personalized gifting and how to make your presents more meaningful.",
            delay: "0.4s",
        },
    ];

    return (
        <section id="blog" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate__animated animate__fadeIn">
                    <h2 className="text-3xl font-bold font-raleway mb-4">
                        Latest From Our Blog
                    </h2>
                    <p className="text-gray-600 font-raleway max-w-2xl mx-auto">
                        Insights and ideas for thoughtful gifting
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <article
                            key={index}
                            className="bg-neutral-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 animate__animated"
                            style={{ animationDelay: post.delay }}
                        >
                            <div className="h-48 bg-neutral-200 overflow-hidden">
                                <img
                                    src={`/images/blogs/${post.image}`}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 font-raleway mb-2">
                                    {post.date}
                                </div>
                                <h3 className="font-raleway font-bold text-xl mb-3 hover:text-gray-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 font-raleway mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-black hover:text-gray-600 font-raleway transition-colors"
                                >
                                    Read More
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
                        </article>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#"
                        className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors font-raleway"
                    >
                        View All Posts
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
