import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import React from "react";
import styles from "./EventsSection.module.scss";
import { Col } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { GeoAlt, GeoAltFill } from "react-bootstrap-icons";
import FONTS from "@/styles/fonts";

const Event = ({ event, index }) => {
  return (
    <div data-aos="fade-left">
      <div className={styles.Event}>
        <p className={`${FONTS.font3} ${styles.eName}`}>
          <span>{event.emoji}</span>
          &nbsp;
          {event.name}
        </p>
        <b className={styles.date}>
          {event.date} - {event.time}
        </b>
        <p className={styles.loc}>{event.location}</p>
        <div>
          <CustomButton variant={2}>
            <GeoAltFill /> Direction
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

const EventsSection = () => {
  const EVENTS = [
    {
      name: "The Haldi Cermony",
      emoji: "💖",
      date: "2025.07.24",
      time: "1 PM - 5PM",
      location: "The Grand Park, Gandhipuram, Coimbatore",
    },
    {
      name: "Mehendi",
      emoji: "💫",
      date: "2025.07.24",
      time: "1 PM - 5PM",
      location: "The Grand Park, Gandhipuram, Coimbatore",
    },
    {
      name: "The Wedding Cermony",
      emoji: "💕",
      date: "2025.07.24",
      time: "1 PM - 5PM",
      location: "The Grand Park, Gandhipuram, Coimbatore",
    },
    {
      name: "Reception",
      emoji: "💚",
      date: "2025.07.24",
      time: "1 PM - 5PM",
      location: "The Grand Park, Gandhipuram, Coimbatore",
    },
  ];

  return (
    <section className={styles.EventsSection}>
      <CustomContainer>
        <SectionHeading
          head={"Our Wedding Itenarary"}
          caption={"Here is everything you need to know to join with us 💖"}
        />
        <br />
        <div className={styles.warp}>
          {EVENTS.map((event, index) => {
            return <Event key={event.name} event={event} index={index} />;
          })}
        </div>
      </CustomContainer>
    </section>
  );
};

export default EventsSection;
