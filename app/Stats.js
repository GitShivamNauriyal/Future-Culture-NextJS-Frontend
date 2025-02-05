"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const statsData = [
  {
    target: 10000,
    label: "Happy Customers",
    delay: 0,
  },
  {
    target: 500,
    label: "Corporate Partners",
    delay: 0.2,
  },
  {
    target: 50,
    label: "Gift Collections",
    delay: 0.4,
  },
  {
    target: 25000,
    label: "Gifts Delivered",
    delay: 0.6,
  },
];

const StatBox = ({ target, label, delay }) => {
  // useInView will trigger once the element is at least 10% visible
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="bg-neutral-800 p-8 rounded-lg text-center transform hover:-translate-y-1 transition-transform duration-300 animate__animated animate__fadeInUp"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="counter font-raleway text-4xl font-bold mb-2">
        {inView ? <CountUp end={target} duration={2} separator="," /> : "0"}
      </div>
      <div className="h-1 w-10 bg-white mx-auto mb-4"></div>
      <p className="font-raleway text-gray-300">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="bg-neutral-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl font-bold font-raleway mb-4">Our Impact</h2>
          <p className="text-gray-300 font-raleway max-w-2xl mx-auto">
            Making memorable moments across the globe
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <StatBox
              key={index}
              target={stat.target}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
