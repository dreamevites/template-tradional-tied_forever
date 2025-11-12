import React from "react";
import { Container } from "react-bootstrap";
import styles from "./custom_container.module.scss";
const CustomContainer = ({ children }) => {
  return <Container className={styles.CustomContainer}>{children}</Container>;
};

export default CustomContainer;
