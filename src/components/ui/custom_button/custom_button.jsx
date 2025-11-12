import React from "react";
import styles from "./custom_button.module.scss";

const CustomButton = ({ children, disabled, type, variant = 1 }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.CustomButton} ${styles[`v${variant}`]}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
