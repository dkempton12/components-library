import React, { useState } from "react";
import DropdownList from "./DropdownList/DropdownList";

import styles from "./Dropdown.module.scss";
import dropdownData from "./dropdownData";

function Dropdown({ data, label }) {
  // dropdown list state
  const [displayList, setDisplayList] = useState(false);

  // handle list display
  const handleListDisplay = () => {
    setDisplayList(true);
  };

  // dropdown list UI
  let dropdownList;
  if (displayList) {
    dropdownList = <DropdownList data={data} />;
  } else {
    dropdownList = null;
  }

  return (
    <div className={styles.dropdown}>
      <label>{label}</label>
      <div className={styles.dropdownselector} onClick={handleListDisplay}>
        Select Value
      </div>
      {dropdownList}
    </div>
  );
}

export default Dropdown;
