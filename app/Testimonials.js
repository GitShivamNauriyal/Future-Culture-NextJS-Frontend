"use client";
import React from "react";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";

// Dynamically import the carousel so that it runs only on the client.
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

// Data structure containing your testimonials.
const testimonialsData = [
  {
    initials: "JD",
    name: "John Doe",
    position: "CEO, Tech Corp",
    message:
      "The attention to detail and personalization options exceeded our expectations. Perfect for corporate gifting!",
    rating: 5,
  },
  {
    initials: "JS",
    name: "Jane Smith",
    position: "Event Planner",
    message:
      "Future Culture has become our go-to for client appreciation gifts. The quality and presentation are always impeccable.",
    rating: 5,
  },
  {
    initials: "RB",
    name: "Robert Brown",
    position: "Marketing Director",
    message:
      "Outstanding service and unique gift selections. Our clients were delighted with the personalized touch.",
    rating: 8,
  },
  // Add as many testimonial objects as needed...
];

// Responsive settings for react-multi-carousel.
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-neutral-900 mb-6 animate__animated animate__fadeInUp">
            Client
            <span className="block mt-2 bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
        </div>

        <div className="testimonial-slider relative" id="testimonialSlider">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={false} // renders only on client
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {testimonialsData.map((testimonial, index) => (
              // Remove the fixed width classes here
              <div key={index} className="px-4">
                <div className="bg-neutral-50 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-neutral-700 to-neutral-900 rounded-full flex items-center justify-center text-white">
                      {testimonial.initials}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-neutral-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-neutral-600">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                  <p className="text-neutral-700 mb-4">{testimonial.message}</p>
                  <div className="flex text-yellow-400">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, idx) => (
                        <svg
                          key={idx}
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
