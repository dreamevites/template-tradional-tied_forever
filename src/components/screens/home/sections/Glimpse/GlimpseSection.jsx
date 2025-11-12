import React from "react";
import styles from "./GlimpseSection.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import { useAppContext } from "@/context/AppContext";
import { Col, Row } from "react-bootstrap";
import FONTS from "@/styles/fonts";
const GlimpseSection = () => {
  const { PREVIEW_DATA } = useAppContext();

  const couple = [
    {
      name: PREVIEW_DATA.brideName,
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, quos dolorum maiores fuga exercitationem expedita, modi consequuntur error alias ipsam nobis repellat natus quia sed nulla ab doloremque odit in itaque qui repudiandae recusandae? Inventore et fuga tempore alias, aliquid, cumque delectus animi ullam voluptatum iste, minima odit beatae iusto?",
      image: "url(/images/bride.jpg)",
      title: "The Bride 👸",
    },
    {
      name: PREVIEW_DATA.groomName,
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, quos dolorum maiores fuga exercitationem expedita, modi consequuntur error alias ipsam nobis repellat natus quia sed nulla ab doloremque odit in itaque qui repudiandae recusandae? Inventore et fuga tempore alias, aliquid, cumque delectus animi ullam voluptatum iste, minima odit beatae iusto?",
      image: "url(/images/groom.jpg)",
      title: "The Groom 🤴",
    },
  ];

  return (
    <section className={styles.GlimpseSection}>
      <CustomContainer>
        <SectionHeading
          head={"Glimpse Of Our Us"}
          caption={"💕How it all began 💫 and the magic in between 💕"}
        />
        <br />
        <br />
        <div className={styles.cont}>
          <Row>
            {couple.map((pre, idx) => {
              return (
                <Col key={pre.name} xs={12} md={6}>
                  <div className={styles.Box}>
                    <div
                      className={styles.img}
                      style={{
                        backgroundImage: pre.image,
                      }}
                      data-aos={idx % 2 ? "fade-left" : "fade-right"}
                    />

                    <div data-aos={idx % 2 ? "fade-right" : "fade-left"}>
                      <b className={FONTS.font3}>{pre.name}</b>
                      <small>{pre.title}</small>
                      <p className={FONTS.font2}>{pre.about}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </CustomContainer>
    </section>
  );
};

export default GlimpseSection;
