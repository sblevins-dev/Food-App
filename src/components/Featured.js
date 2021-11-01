import React from "react";
import foggyMountains from "../images/foggyMountains.jpeg";
import lake from "../images/bgImg.jpg";

const Featured = () => {
  return (
    <div className="featured">
      <figure className="featured-item1">
        <img className="featured-img" src={foggyMountains} alt="" />
      </figure>
      <figure className="featured-item2">
        <img className="featured-img" src={lake} alt="" />
        <img className="featured-img" src={lake} alt="" />
      </figure>
      <figure className="featured-item3">
        <img className="featured-img" src={lake} alt="" />
      </figure>
    </div>
  );
};

export default Featured;
