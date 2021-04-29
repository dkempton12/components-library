import React, { useState } from "react";
import "./Input.scss";

function Input({ label }) {
  const [value, setValue] = useState("");

  const handleInputChange = event => {
    setValue(event.target.value);
    console.log("ON CHANGE");
  };

  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleInputChange} />
    </div>
  );
}

export default Input;
