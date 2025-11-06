export type CelestialType = "nebula" | "star" | "planet";

export interface CelestialObject {
  id: string;
  type: CelestialType;
  name: string;
  timestamp: number;
}

export interface CelestialTypeData {
  type: CelestialType;
  title: string;
  description: string;
  image: string;
  glowClass: string;
}
