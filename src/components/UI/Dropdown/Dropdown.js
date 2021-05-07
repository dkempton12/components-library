import React from "react";
import DropdownList from "./DropdownList/DropdownList";

import classes from "./Dropdown.module.scss";

function Dropdown({ data, label }) {
  return (
    <div className={classes.Dropdown}>
      <label>{label}</label>
      <DropdownList data={data} />
    </div>
  );
}

export default Dropdown;
