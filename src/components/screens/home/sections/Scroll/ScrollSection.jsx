import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./ScrollSection.module.scss";
import FONTS from "@/styles/fonts";
import { useAppContext } from "@/context/AppContext";

export default function ScrollSection() {
  const ref = useRef(null);

  const { PREVIEW_DATA } = useAppContext();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // trigger from bottom to top of viewport
  });

  // Move the content horizontally as you scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={ref} className={styles.ScrollSection}>
      <motion.div
        style={{
          x,
          whiteSpace: "nowrap",
        }}
      >
        {Array(5)
          .fill(`#${PREVIEW_DATA.brideName}Weds${PREVIEW_DATA.groomName}`)
          .map((text, i) => (
            <span
              key={i}
              style={{ marginRight: "2rem" }}
              className={FONTS.font3}
            >
              {text}
            </span>
          ))}
      </motion.div>
    </section>
  );
}
