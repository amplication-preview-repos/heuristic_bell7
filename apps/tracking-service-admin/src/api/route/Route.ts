import { User } from "../user/User";
import { Waypoint } from "../waypoint/Waypoint";

export type Route = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startedAt: Date | null;
  endedAt: Date | null;
  user?: User | null;
  waypoints?: Array<Waypoint>;
};
