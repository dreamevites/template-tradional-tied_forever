import React from "react";
import styles from "./GallerySection.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import SlideShow from "./Slide/Slide";

const GallerySection = () => {
  return (
    <section className={styles.GallerySection}>
      <CustomContainer>
        <SectionHeading
          head={"Our Special Moments"}
          caption={
            "Here is a peek into all the Laughter, Love And Little Moments In Between"
          }
          variant={2}
        />
      </CustomContainer>
      <div className={styles.images}>
        <SlideShow />
      </div>
    </section>
  );
};

export default GallerySection;
