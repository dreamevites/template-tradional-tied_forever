import React from "react";
import styles from "./section_heading.module.scss";
import FONTS from "@/styles/fonts";
import { Image } from "react-bootstrap";

const SectionHeading = ({ head, caption, variant = 1 }) => {
  return (
    <div className={`${styles.SectionHeading} ${styles[`v${variant}`]}`}>
      <h2 className={FONTS.font1} data-aos="fade-down">
        {head}
      </h2>

      <p className={FONTS.font2} data-aos="zoom-out">
        {caption}
      </p>
      <br />
      <div data-aos="zoom-in">
        <Image src="/assets/divider.png" alt="divider" width={200} />
      </div>
    </div>
  );
};

export default SectionHeading;
