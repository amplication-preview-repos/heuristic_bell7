import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WaypointListRelationFilter } from "../waypoint/WaypointListRelationFilter";

export type RouteWhereInput = {
  id?: StringFilter;
  startedAt?: DateTimeNullableFilter;
  endedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  waypoints?: WaypointListRelationFilter;
};
