import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { WaypointTitle } from "../waypoint/WaypointTitle";

export const RouteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="started_at" source="startedAt" />
        <DateTimeInput label="ended_at" source="endedAt" />
        <ReferenceInput source="user.id" reference="User" label="user_">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="waypoints"
          reference="Waypoint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WaypointTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
