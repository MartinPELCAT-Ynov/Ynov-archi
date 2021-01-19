import { IBottom } from "../interfaces/IBottom";
import { IClothes, Sizes } from "../interfaces/IClothes";

export class Dress implements IBottom {
  getNumberOfLegs(): number {
    return 1;
  }
  getSize(): Sizes {
    return "M";
  }
}
