import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type WaypointUpdateInput = {
  latitude?: number | null;
  longitude?: number | null;
  route?: RouteWhereUniqueInput | null;
};
