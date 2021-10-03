import {Geometry} from "./geometry.model";
import {Properties} from "./properties.model";

export class Feature {
  type :string;
  geometry: Geometry;
  properties: Properties;
}
