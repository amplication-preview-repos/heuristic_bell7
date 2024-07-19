import { Waypoint as TWaypoint } from "../api/waypoint/Waypoint";

export const WAYPOINT_TITLE_FIELD = "id";

export const WaypointTitle = (record: TWaypoint): string => {
  return record.id?.toString() || String(record.id);
};
