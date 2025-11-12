import React from "react";
import styles from "./PreWeddingSection.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";
import { CaretRight, CaretRightFill } from "react-bootstrap-icons";

const PreWeddingSection = () => {
  return (
    <section className={styles.PreWeddingSection}>
      <CustomContainer>
        <h2>The Prewedding Saga</h2>

        <div
          style={{
            backgroundImage: `url(/images/hero1.jpg)`,
          }}
          className={styles.img}
        >
          <div className={styles.box}>
            <div className={styles.playBtn}>
              <CaretRightFill />
            </div>
            <h3>Our Love Story</h3>
            <small>Lorem ipsum dolor sit amet.</small>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default PreWeddingSection;
