import React from "react";
import DropdownItem from "../DropdownItem/DropdownItem";

import styles from "./DropdownList.module.scss";

function DropdownList({ data }) {
  return (
    <div className={styles.dropdownlist}>
      {data.map(item => (
        <DropdownItem key={item.id} name={item.name} value={item.value} />
      ))}
    </div>
  );
}
export default DropdownList;
