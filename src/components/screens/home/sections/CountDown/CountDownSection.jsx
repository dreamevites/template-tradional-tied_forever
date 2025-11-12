import React, { useEffect, useState } from "react";
import styles from "./CountDownSection.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

import CircleProgress from "./progress/progress";
import { useAppContext } from "@/context/AppContext";
import { Flower3, Trash } from "react-bootstrap-icons";

const CountDown = ({ count, idx }) => {
  return (
    <div
      className={styles.CountDownBox}
      data-aos={idx % 2 ? "fade-left" : "fade-right"}
    >
      <CircleProgress progress={count.progress}>
        <p>{count.title}</p>
        <b>{count.value}</b>
      </CircleProgress>
    </div>
  );
};

const CountDownSection = () => {
  const [counts, setCounts] = useState([
    { title: "Days", value: 0 },
    { title: "Hours", value: 0 },
    { title: "Minutes", value: 0 },
    { title: "Seconds", value: 0 },
  ]);

  const calculateCountDown = (startDate, endDate) => {
    const start = new Date().getTime();
    const end = new Date(endDate).getTime();

    const totalDiff = end - start; // total time window

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = end - now;

      if (diff <= 0) {
        clearInterval(interval);
        setCounts([
          { title: "Days", value: 0, progress: 100 },
          { title: "Hours", value: 0, progress: 100 },
          { title: "Minutes", value: 0, progress: 100 },
          { title: "Seconds", value: 0, progress: 100 },
        ]);
        return;
      }

      // Remaining units
      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      // Total units for progress
      const totalDays = Math.floor(totalDiff / (1000 * 60 * 60 * 24));
      const totalHours = 24;
      const totalMinutes = 60;
      const totalSeconds = 60;

      // Progress per unit
      const daysProgress = ((totalDays - days) / totalDays) * 100 + 1;
      const hoursProgress = ((24 - hours) / totalHours) * 100;
      const minutesProgress = ((60 - minutes) / totalMinutes) * 100;
      const secondsProgress = ((60 - seconds) / totalSeconds) * 100;

      setCounts([
        { title: "Days", value: days, progress: Math.round(daysProgress) },
        { title: "Hours", value: hours, progress: Math.round(hoursProgress) },
        {
          title: "Minutes",
          value: minutes,
          progress: Math.round(minutesProgress),
        },
        {
          title: "Seconds",
          value: seconds,
          progress: Math.round(secondsProgress),
        },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  };

  const { PREVIEW_DATA } = useAppContext();

  useEffect(() => {
    const today = new Date();
    const eventDate = new Date(PREVIEW_DATA.eventDate);

    calculateCountDown(today, eventDate);
  }, []);

  return (
    <section className={styles.CountDownSection}>
      <CustomContainer>
        <div className={styles.cont}>
          <div>
            <Flower3 />
            <h2>Our Forever Starts In...</h2>
          </div>
          <div className={styles.countDownWrap}>
            {counts.map((count, idx) => {
              return <CountDown key={count.title} count={count} idx={idx} />;
            })}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default CountDownSection;
