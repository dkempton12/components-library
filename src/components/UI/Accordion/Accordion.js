import React, { useState } from "react";
import styled from "styled-components";

const AccordionHeading = styled.h3`
  cursor: pointer;
`;

function Accordion({ children, accordionHeading }) {
  const [displayAccordion, setDisplayAccordion] = useState(false);

  const accordionToggleHandler = () => {
    setDisplayAccordion(!displayAccordion);
  };

  const accordionContent = displayAccordion ? <div>{children}</div> : null;

  return (
    <>
      <AccordionHeading onClick={accordionToggleHandler}>
        {accordionHeading}
      </AccordionHeading>

      <div>{accordionContent}</div>
    </>
  );
}

export default Accordion;
