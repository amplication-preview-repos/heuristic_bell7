import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type WaypointCreateInput = {
  latitude?: number | null;
  longitude?: number | null;
  route?: RouteWhereUniqueInput | null;
};
