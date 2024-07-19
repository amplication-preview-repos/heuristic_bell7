import { SortOrder } from "../../util/SortOrder";

export type MapObjectOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
  latitude?: SortOrder;
  name?: SortOrder;
  longitude?: SortOrder;
  radius?: SortOrder;
};
