import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MapObjectWhereInput = {
  id?: StringFilter;
  typeField?: "Option1";
  latitude?: FloatNullableFilter;
  name?: StringNullableFilter;
  longitude?: FloatNullableFilter;
  radius?: FloatNullableFilter;
};
