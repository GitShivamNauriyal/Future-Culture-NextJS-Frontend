"use client";
import React from "react";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";

// Dynamically import Carousel so that it only renders on the client side.
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

const FeaturedSets = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 564 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section id="featured" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-neutral-900 mb-6 animate__animated animate__fadeInUp">
            Featured
            <span className="block mt-2 bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
              Gift Sets
            </span>
          </h2>
        </div>

        <div
          className="featured-carousel relative pt-12 pb-12"
          id="featuredCarousel"
        >
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerclassName="carousel-container"
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item-padding-40-px"
          >
            <div className="px-4">
              <div className="bg-neutral-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="h-64 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-neutral-400 text-5xl font-light">
                    01
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Executive Suite
                </h3>
                <p className="text-neutral-600 mb-4">
                  Premium corporate gift collection
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-neutral-900">
                    $299
                  </span>
                  <button className="px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="px-4">
              <div className="bg-neutral-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="h-64 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-neutral-400 text-5xl font-light">
                    02
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Celebration Box
                </h3>
                <p className="text-neutral-600 mb-4">
                  Perfect for special occasions
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-neutral-900">
                    $199
                  </span>
                  <button className="px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="px-4">
              <div className="bg-neutral-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="h-64 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-neutral-400 text-5xl font-light">
                    03
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Luxury Essentials
                </h3>
                <p className="text-neutral-600 mb-4">
                  Curated luxury gift collection
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-neutral-900">
                    $399
                  </span>
                  <button className="px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSets;
