import React from "react";

import styles from "./DropdownItem.module.scss";

function DropdownItem({ name, value }) {
  return (
    <div className={styles.dropdownitem}>
      <option>{name}</option>
    </div>
  );
}

export default DropdownItem;
