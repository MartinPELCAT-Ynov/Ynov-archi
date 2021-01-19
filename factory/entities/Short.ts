import { IBottom } from "../interfaces/IBottom";
import { Sizes } from "../interfaces/IClothes";

export class Short implements IBottom {
  getNumberOfLegs(): number {
    return 2;
  }
  getSize(): Sizes {
    return "L";
  }
}
