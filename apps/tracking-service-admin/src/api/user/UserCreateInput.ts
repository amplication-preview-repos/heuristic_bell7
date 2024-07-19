import { InputJsonValue } from "../../types";
import { RouteCreateNestedManyWithoutUsersInput } from "./RouteCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  fullName?: string | null;
  routes?: RouteCreateNestedManyWithoutUsersInput;
};
