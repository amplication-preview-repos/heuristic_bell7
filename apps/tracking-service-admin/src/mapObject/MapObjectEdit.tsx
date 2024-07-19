import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const MapObjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
