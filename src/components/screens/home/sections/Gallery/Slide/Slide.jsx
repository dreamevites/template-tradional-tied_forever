import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Slide.module.scss";

const images = [
  "/images/bride.jpg",
  "/images/groom.jpg",
  "/images/bride.jpg",
  "/images/groom.jpg",
  "/images/bride.jpg",
  "/images/groom.jpg",
  "/images/bride.jpg",
  "/images/groom.jpg",
  "/images/bride.jpg",
  "/images/groom.jpg",
  "/images/bride.jpg",
  "/images/groom.jpg",
  "/images/bride.jpg",
  "/images/groom.jpg",
];

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
];

const SlideShow = () => {
  const slidesToShow = 2;

  return (
    <div className={styles.SlideShow}>
      <Slide
        slidesToScroll={2}
        infinite
        duration={1500}
        transitionDuration={250}
        slidesToShow={slidesToShow}
        indicators={true}
        autoplay
        arrows
        responsive={responsiveSettings}
        pauseOnHover
      >
        {images.map((src, index) => {
          return (
            <div key={index} className={`${styles.img}`}>
              <Image src={src} alt="slide" fluid />
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default SlideShow;
