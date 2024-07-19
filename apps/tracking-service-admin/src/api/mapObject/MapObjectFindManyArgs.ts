import { MapObjectWhereInput } from "./MapObjectWhereInput";
import { MapObjectOrderByInput } from "./MapObjectOrderByInput";

export type MapObjectFindManyArgs = {
  where?: MapObjectWhereInput;
  orderBy?: Array<MapObjectOrderByInput>;
  skip?: number;
  take?: number;
};
