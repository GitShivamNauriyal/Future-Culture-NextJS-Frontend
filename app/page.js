"use client";
import React from "react";
import Hero from "./00_Hero";
import Convert from "./01_Convert";
import Collections from "./02_Collections";
import FeaturedSets from "./03_FeaturedSets";
import HowItWorks from "./04_HowItWorks";
import Testimonials from "./Testimonials";
import Stats from "./Stats";
import InstaUpdates from "./InstaUpdates";
import Blogs from "./Blogs";
import Contactus from "./Contactus";
import OurPromises from "./OurPromises";
import PricingModels from "./PricingModels";
import ProductsCardsCarousel from "./ProductsCardCarousel";

const page = () => {
    return (
        <div>
            <Hero />
            <Convert />
            <Collections />
            <FeaturedSets />
            <HowItWorks />
            <ProductsCardsCarousel />
            <OurPromises />
            <Testimonials />
            <PricingModels />
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
