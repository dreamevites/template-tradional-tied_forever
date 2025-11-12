import React from "react";
import styles from "./HeroSection.module.scss";
import { useAppContext } from "@/context/AppContext";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { formatWeddingDate } from "@/constants/constants";

const HeroSection = () => {
  const { PREVIEW_DATA } = useAppContext();

  return (
    <section
      className={styles.HeroSection}
      style={{
        backgroundImage: `url(${PREVIEW_DATA.imageSrc})`,
      }}
    >
      <CustomContainer>
        <div className={styles.cont}>
          {/* <p>&quot;We&apos;re Getting Married!!&quot;</p> */}
          <h1 className={FONTS.font3}>
            {PREVIEW_DATA.groomName} <span>&</span> {PREVIEW_DATA.brideName}
          </h1>
          <CustomButton>
            {formatWeddingDate(PREVIEW_DATA.eventDate).weddingDate}
          </CustomButton>
        </div>
      </CustomContainer>
    </section>
  );
};

export default HeroSection;
