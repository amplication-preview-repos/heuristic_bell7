import { Route } from "../route/Route";

export type Waypoint = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  latitude: number | null;
  longitude: number | null;
  route?: Route | null;
};
