import React from "react";

import styles from "./DropdownItem.module.scss";

function DropdownItem({ name, value }) {
  return (
    <div className={styles.dropdownitem}>
      <button>{name}</button>
    </div>
  );
}

export default DropdownItem;
