import React, { useState } from "react";
import DropdownList from "./DropdownList/DropdownList";

import styles from "./Dropdown.module.scss";

function Dropdown({ data, label }) {
  // dropdown list state
  const [displayList, setDisplayList] = useState(false);

  // handle list display
  const handleListDisplay = () => {
    setDisplayList(true);
  };

  // close list display
  const handleListClose = () => {
    setDisplayList(false);
  };

  // dropdown list UI
  let dropdownList;

  if (displayList) {
    dropdownList = <DropdownList data={data} onItemClick={handleListClose} />;
  } else {
    dropdownList = null;
  }

  return (
    <div className={styles.dropdown}>
      <label>{label}</label>
      <button className={styles.dropdownselector} onClick={handleListDisplay}>
        Select Value
      </button>
      {dropdownList}
    </div>
  );
}

export default Dropdown;
