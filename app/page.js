import React from "react";
import Hero from "./Hero";
import Convert from "./Convert";
import Collections from "./Collections";
import FeaturedSets from "./FeaturedSets";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";

const page = () => {
  return (
    <div>
      <Hero />
      <Convert />
      <Collections />
      <FeaturedSets />
      <HowItWorks />
      <Testimonials />
      <h1 className="mb-24">thiw is home </h1>
      <h1 className="mb-24">thiw is home </h1>
      <h1 className="mb-24">thiw is home </h1>
    </div>
  );
};

export default page;
