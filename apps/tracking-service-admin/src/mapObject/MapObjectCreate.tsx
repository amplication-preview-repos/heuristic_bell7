import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const MapObjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="latitude" source="latitude" />
        <TextInput label="name" source="name" />
        <NumberInput label="longitude" source="longitude" />
        <NumberInput label="radius" source="radius" />
      </SimpleForm>
    </Create>
  );
};
