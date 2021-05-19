import React from "react";

import styles from "./DropdownItem.module.scss";

function DropdownItem({ name, value }) {
  return <option className={styles.dropdownitem}>{name}</option>;
}

export default DropdownItem;
