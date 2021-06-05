import React from "react";

import styles from "./DropdownItem.module.scss";

function DropdownItem({ name, value, itemClicked }) {
  return (
    <li className={styles.dropdownitem} onClick={itemClicked}>
      {name}
    </li>
  );
}

export default DropdownItem;
