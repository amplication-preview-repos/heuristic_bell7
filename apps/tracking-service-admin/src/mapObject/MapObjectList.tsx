import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MapObjectList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MapObjects"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="type" source="typeField" />
        <TextField label="latitude" source="latitude" />
        <TextField label="name" source="name" />
        <TextField label="longitude" source="longitude" />
        <TextField label="radius" source="radius" />
      </Datagrid>
    </List>
  );
};
