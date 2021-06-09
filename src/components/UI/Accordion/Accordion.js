import React, { useState } from "react";
import classes from "./Accordion.module.css";

function Accordion({ children, title }) {
  const [displayAccordion, setDisplayAccordion] = useState(false);

  const accordionToggleHandler = () => {
    setDisplayAccordion(true);
  };

  const accordionToggleUI = displayAccordion ? (
    <div className={classes.accordioncontent}>{children}</div>
  ) : (
    ""
  );

  return (
    <div className={classes.accordion} onClick={accordionToggleHandler}>
      <div className={classes.accordiontitle}>
        <h4>{title}</h4>
      </div>
      {accordionToggleUI}
    </div>
  );
}

export default Accordion;
