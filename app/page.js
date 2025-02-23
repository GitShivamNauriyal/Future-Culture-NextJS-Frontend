"use client";
import React from "react";
import Hero from "./Hero";
import Convert from "./01_Convert";
import Collections from "./02_Collections";
import FeaturedSets from "./FeaturedSets";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import Stats from "./Stats";
import InstaUpdates from "./InstaUpdates";
import Blogs from "./Blogs";
import Contactus from "./Contactus";

const page = () => {
    return (
        <div>
            <Hero />
            <Convert />
            <Collections />
            <FeaturedSets />
            <HowItWorks />
            <Testimonials />
            <Stats />
            <InstaUpdates />
            <Blogs />
            <Contactus />
            {/* <h1 className="mb-24">
              repo linkLL:
              https://github.com/GitShivamNauriyal/Future-Culture-NextJS-Frontend
            </h1>  */}
        </div>
    );
};

export default page;
