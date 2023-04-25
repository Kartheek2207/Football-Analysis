import React, { useState } from "react";
import "./Carousel.css";
import { repimages } from "../Helpers/CarouselData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carousel2() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <h1 className="heading">{repimages[currImg].title}</h1>
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${repimages[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </div>
        <div className="center"></div>
        <div
          className="right"
          onClick={() => {
            currImg < repimages.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel2;
