export type MapObject = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeField?: "Option1" | null;
  latitude: number | null;
  name: string | null;
  longitude: number | null;
  radius: number | null;
};
