import React from "react";

import styles from "./DropdownItem.module.scss";

function DropdownItem({ name, itemValue, abbrev, itemChanged, itemClicked }) {
  return (
    <li
      className={styles.dropdownitem}
      onChange={itemChanged}
      onClick={itemClicked}
      abbrev={abbrev}
      value={itemValue}
    >
      {name}
    </li>
  );
}

export default DropdownItem;
