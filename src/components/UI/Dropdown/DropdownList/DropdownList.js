import React from "react";
import DropdownItem from "../DropdownItem/DropdownItem";

function DropdownList({ data }) {
  return (
    <div>
      {data.map(item => (
        <DropdownItem key={item.id} />
      ))}
    </div>
  );
}
export default DropdownList;
