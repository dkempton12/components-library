import React from "react";

import Form from "../Form/Form/Form";
import Field from "../Form/Field/Field";
import Input from "../Form/Input/Input";
import Button from "../UI/Button/Button";

function Signup() {
  return (
    <Form>
      <Field>
        <Input label="Name" />
      </Field>

      <Field>
        <Input label="Email" />
      </Field>

      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default Signup;
