import React from "react";
import Input from "../Input/Input";

function Form({ label }) {
  return (
    <form className="form">
      <Input label={label} />
    </form>
  );
}

export default Form;
