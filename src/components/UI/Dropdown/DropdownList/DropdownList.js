import React from "react";
import DropdownItem from "../DropdownItem/DropdownItem";

function DropdownList({ data }) {
  return (
    <div>
      {data.map(item => (
        <DropdownItem key={item.id} name={item.name} value={item.value} />
      ))}
    </div>
  );
}
export default DropdownList;
