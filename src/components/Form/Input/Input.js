import React, { useState } from "react";

function Input({ label }) {
  const [value, setValue] = useState("");

  const handleInputChange = event => {
    setValue(event.target.value);
    console.log("ON CHANGE");
  };

  return (
    <div className="field">
      <label>{label}</label>
      <input type="text" value={value} onChange={handleInputChange} />
    </div>
  );
}

export default Input;
