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
import MarqueeSection from "./Marquee";

const page = () => {
    const marqueeContent = {
        announcement1:
            "🚀 Big Sale this weekend! Get your best ever Gifting Experience at The Best Price",
        announcement2: "🎉 New features launched!",
        announcement3: "📢 Subscribe to our newsletter!",
        announcement4: "💡 Tips and tricks for better gifting!",
        announcement5: "🌟 Join our community for exclusive offers!",
        announcement6: "🎨 Custom designs available now!",
        announcement7: "📦 Fast shipping on all orders!",
    };
    return (
        <div className="mt-16">
            <MarqueeSection contentObj={marqueeContent} />
            <Hero />
            <Convert />
            <Collections />
            <ProductsCardsCarousel /> {/*brought up temporarily*/}
            {/* <FeaturedSets />  */}
            {/* skipping this temporarily till we get the review from the client */}
            <HowItWorks />
            <OurPromises />
            <PricingModels />
            <Testimonials />
            <InstaUpdates />
            <Stats />
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
