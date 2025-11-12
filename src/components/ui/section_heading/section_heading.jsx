import React from "react";
import styles from "./section_heading.module.scss";
import FONTS from "@/styles/fonts";

const SectionHeading = ({ head, caption }) => {
  return (
    <div className={styles.SectionHeading}>
      <h2 className={FONTS.font1} data-aos="fade-up">
        {head}
      </h2>
      <p className={FONTS.font2} data-aos="fade-down">
        {caption}
      </p>
    </div>
  );
};

export default SectionHeading;
