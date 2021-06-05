import React from "react";

import styles from "./DropdownItem.module.scss";

function DropdownItem({ name, value, itemChanged, itemClicked }) {
  return (
    <li
      className={styles.dropdownitem}
      onChange={itemChanged}
      onClick={itemClicked}
    >
      {name}
    </li>
  );
}

export default DropdownItem;
