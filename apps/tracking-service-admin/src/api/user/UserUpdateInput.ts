import { InputJsonValue } from "../../types";
import { RouteUpdateManyWithoutUsersInput } from "./RouteUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  fullName?: string | null;
  routes?: RouteUpdateManyWithoutUsersInput;
};
