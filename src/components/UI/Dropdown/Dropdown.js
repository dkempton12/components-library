import React from "react";
import DropdownList from "./DropdownList/DropdownList";

import styles from "./Dropdown.module.scss";

function Dropdown({ data, label }) {
  return (
    <div className={styles.Dropdown}>
      <label>{label}</label>
      <DropdownList data={data} />
    </div>
  );
}

export default Dropdown;
