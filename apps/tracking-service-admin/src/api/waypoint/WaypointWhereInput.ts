import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type WaypointWhereInput = {
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
  route?: RouteWhereUniqueInput;
};
