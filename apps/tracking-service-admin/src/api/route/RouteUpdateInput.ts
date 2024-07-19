import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WaypointUpdateManyWithoutRoutesInput } from "./WaypointUpdateManyWithoutRoutesInput";

export type RouteUpdateInput = {
  startedAt?: Date | null;
  endedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
  waypoints?: WaypointUpdateManyWithoutRoutesInput;
};
