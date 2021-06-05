import React from "react";
import DropdownItem from "../DropdownItem/DropdownItem";

import styles from "./DropdownList.module.scss";

function DropdownList({ data, onItemClick }) {
  return (
    <ul className={styles.dropdownlist}>
      {data.map(item => (
        <DropdownItem
          key={item.id}
          name={item.name}
          value={item.value}
          id={item.id}
          itemClicked={onItemClick}
        />
      ))}
    </ul>
  );
}
export default DropdownList;
