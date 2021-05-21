import React from "react";

import styles from "./DropdownItem.module.scss";

function DropdownItem({ name, value, itemClicked }) {
  return (
    <option className={styles.dropdownitem} onClick={itemClicked}>
      {name}
    </option>
  );
}

export default DropdownItem;
