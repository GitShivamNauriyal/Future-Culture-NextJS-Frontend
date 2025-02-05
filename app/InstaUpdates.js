"use client";
import React, { useEffect } from "react";

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

    const elements = document.querySelectorAll("#instagram .animate__animated");
    elements.forEach((element) => {
      observer.observe(element);
    });

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
          <div className="relative group animate__animated animate__fadeIn">
            <div className="aspect-square bg-neutral-200 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-raleway text-gray-500">Post 1</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <p className="font-raleway text-sm">
                    Luxury Gift Box Collection
                  </p>
                  <div className="flex items-center justify-center mt-2 space-x-4">
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 18l-1.45-1.32C3.53 12.24 0 9.24 0 5.5 0 2.42 2.42 0 5.5 0 7.24 0 8.91.81 10 2.09 11.09.81 12.76 0 14.5 0 17.58 0 20 2.42 20 5.5c0 3.74-3.53 6.74-8.55 11.18L10 18z" />
                      </svg>
                      <span>245</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative group animate__animated animate__fadeIn"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="aspect-square bg-neutral-200 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-raleway text-gray-500">Post 2</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <p className="font-raleway text-sm">
                    Corporate Event Highlights
                  </p>
                  <div className="flex items-center justify-center mt-2 space-x-4">
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 18l-1.45-1.32C3.53 12.24 0 9.24 0 5.5 0 2.42 2.42 0 5.5 0 7.24 0 8.91.81 10 2.09 11.09.81 12.76 0 14.5 0 17.58 0 20 2.42 20 5.5c0 3.74-3.53 6.74-8.55 11.18L10 18z" />
                      </svg>
                      <span>189</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative group animate__animated animate__fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="aspect-square bg-neutral-200 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-raleway text-gray-500">Post 3</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <p className="font-raleway text-sm">Behind the Scenes</p>
                  <div className="flex items-center justify-center mt-2 space-x-4">
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 18l-1.45-1.32C3.53 12.24 0 9.24 0 5.5 0 2.42 2.42 0 5.5 0 7.24 0 8.91.81 10 2.09 11.09.81 12.76 0 14.5 0 17.58 0 20 2.42 20 5.5c0 3.74-3.53 6.74-8.55 11.18L10 18z" />
                      </svg>
                      <span>312</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative group animate__animated animate__fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="aspect-square bg-neutral-200 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-raleway text-gray-500">Post 4</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <p className="font-raleway text-sm">New Collection Preview</p>
                  <div className="flex items-center justify-center mt-2 space-x-4">
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 18l-1.45-1.32C3.53 12.24 0 9.24 0 5.5 0 2.42 2.42 0 5.5 0 7.24 0 8.91.81 10 2.09 11.09.81 12.76 0 14.5 0 17.58 0 20 2.42 20 5.5c0 3.74-3.53 6.74-8.55 11.18L10 18z" />
                      </svg>
                      <span>276</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
