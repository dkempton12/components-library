import React from "react";

import Form from "../Form/Form/Form";
import Field from "../Form/Field/Field";
import Input from "../Form/Input/Input";

function Signup() {
  return (
    <Form>
      <Field>
        <Input label="Name" />
      </Field>

      <Field>
        <Input label="Email" />
      </Field>
    </Form>
  );
}

export default Signup;
