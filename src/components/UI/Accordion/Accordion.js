import React, { useState } from "react";
import classes from "./Accordion.module.scss";

function Accordion({ children, title }) {
  const [displayAccordion, setDisplayAccordion] = useState(false);

  const accordionToggleHandler = () => {
    setDisplayAccordion(!displayAccordion);
  };

  const accordionToggleUI = displayAccordion ? (
    <div className={classes.accordioncontent}>{children}</div>
  ) : (
    <p>This is an accordion</p>
  );

  return (
    <div className={classes.accordion} onClick={accordionToggleHandler}>
      {accordionToggleUI}
    </div>
  );
}

export default Accordion;
