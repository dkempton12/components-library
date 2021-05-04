import React from "react";
import dropdownData from "../DropdownData";

function DropdownList() {
  return (
    <div>
      {dropdownData.map(item => (
        <DropdownItem key={item.id} />
      ))}
    </div>
  );
}
export default DropdownList;
