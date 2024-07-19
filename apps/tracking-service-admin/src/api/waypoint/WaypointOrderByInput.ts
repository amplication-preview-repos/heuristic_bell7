import { SortOrder } from "../../util/SortOrder";

export type WaypointOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  routeId?: SortOrder;
};
