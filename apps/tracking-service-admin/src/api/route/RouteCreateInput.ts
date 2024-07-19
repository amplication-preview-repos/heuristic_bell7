import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WaypointCreateNestedManyWithoutRoutesInput } from "./WaypointCreateNestedManyWithoutRoutesInput";

export type RouteCreateInput = {
  startedAt?: Date | null;
  endedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
  waypoints?: WaypointCreateNestedManyWithoutRoutesInput;
};
