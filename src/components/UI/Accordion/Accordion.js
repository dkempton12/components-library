import React from "react";
import classes from "./Accordion.module.css";

function Accordion({ children, title }) {
  return (
    <div className={classes.accordion}>
      <div className={classes.accordiontitle}>
        <h4>{title}</h4>
      </div>
      <div className={classes.accordioncontent}>{children}</div>
    </div>
  );
}

export default Accordion;
