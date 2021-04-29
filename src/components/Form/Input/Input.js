import React, { useState } from "react";
import Field from "../Field/Field";
import "./Input.scss";

function Input({ label }) {
  const [value, setValue] = useState("");

  const handleInputChange = event => {
    setValue(event.target.value);
    console.log("ON CHANGE");
  };

  return (
    <Field>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleInputChange} />
    </Field>
  );
}

export default Input;
