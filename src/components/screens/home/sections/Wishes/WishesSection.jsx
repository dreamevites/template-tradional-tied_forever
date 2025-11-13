import React from "react";
import styles from "./WishesSection.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { Image } from "react-bootstrap";

const Wish = ({ wish }) => {
  return (
    <div className={styles.Wish}>
      <p className={FONTS.font2}>
        <i>&quot;{wish.text}&quot;</i>
      </p>
      <small>-{wish.name}</small>
    </div>
  );
};

const WishesSection = () => {
  const wishes = [
    {
      text: "Wishing you both a lifetime of love, laughter, and endless happiness. May your journey together be filled with beautiful memories and everlasting joy. 💍❤️",
      name: "Neha",
    },
    {
      text: "Congratulations, lovebirds! 🎉 May your life together be as sweet as your wedding cake and as exciting as your first dance. Here’s to forever and always! 🥂",
      name: "Raja",
    },
    {
      text: "Two hearts, one love, infinite happiness. 💞 May your love story continue to be as magical as today and grow stronger with every sunrise. ☀️",
      name: "Yogesh",
    },
  ];

  return (
    <section className={styles.QuoteSection}>
      <CustomContainer>
        <div className={styles.cont}>
          <h1 className={FONTS.font3}>
            Blessings, Wishes <span>&</span> Everything Beautiful
          </h1>
          <Image src="/assets/divider.png" alt="divider" width={200} />
        </div>
        <div>
          <Slide autoplay={false} indicators>
            {wishes.map((wish) => {
              return <Wish key={wish.name} wish={wish} />;
            })}
          </Slide>
        </div>
      </CustomContainer>
    </section>
  );
};

export default WishesSection;
