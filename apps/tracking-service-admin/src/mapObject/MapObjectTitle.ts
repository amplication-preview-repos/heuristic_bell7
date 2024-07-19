import { MapObject as TMapObject } from "../api/mapObject/MapObject";

export const MAPOBJECT_TITLE_FIELD = "name";

export const MapObjectTitle = (record: TMapObject): string => {
  return record.name?.toString() || String(record.id);
};
