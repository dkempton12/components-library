import React from "react";
import DropdownList from "./DropdownList/DropdownList";
import dropdownData from "../DropdownData";

function Dropdown() {
  return <DropdownList data={dropdownData} />;
}

export default Dropdown;
