import React, { useState } from "react";
import DropdownList from "./DropdownList/DropdownList";

import styles from "./Dropdown.module.scss";

function Dropdown({ data, label }) {
  // dropdown item onchange value
  const [dropdownValue, setDropdownValue] = useState();

  // dropdown list display state
  const [displayList, setDisplayList] = useState(false);

  // handle change
  const handleDropdownChange = event => {
    setDropdownValue(event.target.value);
  };

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
    dropdownList = (
      <DropdownList
        data={data}
        onItemChange={handleDropdownChange}
        onItemClick={handleListClose}
      />
    );
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
