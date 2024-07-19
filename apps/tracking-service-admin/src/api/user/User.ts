import { JsonValue } from "type-fest";
import { Route } from "../route/Route";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  fullName: string | null;
  routes?: Array<Route>;
};
