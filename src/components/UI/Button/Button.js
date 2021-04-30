import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

function Button({ children, buttonType, bg_color, text_color, clicked }) {
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

// will add more color options
const themeColors = ["black", "white"];
Button.propTypes = {
  bg_color: PropTypes.oneOf(themeColors),
  text_color: PropTypes.oneOf(themeColors),
};

Button.defaultProps = {
  bg_color: "black",
  text_color: "white",
};

export default Button;
