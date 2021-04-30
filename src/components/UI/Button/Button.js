import React from "react";
import styles from "./Button.module.scss";

function Button({ children, buttonType, clicked }) {
  return (
    <button
      type={buttonType || "button"}
      className={styles.button}
      onClick={clicked}
    >
      {children}
    </button>
  );
}

export default Button;
