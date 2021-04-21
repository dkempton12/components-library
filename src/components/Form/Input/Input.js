import React, { useState } from "react";

function Input() {
  const [value, setValue] = useState("");

  const handleInputChange = event => {
    setValue(event.target.value);
    console.log("ON CHANGE");
  };
  return (
    <div className="field">
      <input type="text" value={value} onChange={handleInputChange} />
    </div>
  );
}

export default Input;
