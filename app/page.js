import React from "react";
import Hero from "./Hero";
import Convert from "./Convert";
import Collections from "./Collections";
import FeaturedSets from "./FeaturedSets";

const page = () => {
  return (
    <div>
      <Hero />
      <Convert />
      <Collections />
      <FeaturedSets />
      <h1 className="mb-24">thiw is home </h1>
      <h1 className="mb-24">thiw is home </h1>
      <h1 className="mb-24">thiw is home </h1>
    </div>
  );
};

export default page;
