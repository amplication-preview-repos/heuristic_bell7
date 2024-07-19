import { SortOrder } from "../../util/SortOrder";

export type RouteOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startedAt?: SortOrder;
  endedAt?: SortOrder;
  userId?: SortOrder;
};
