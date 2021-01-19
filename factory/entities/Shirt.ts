import { Sizes } from "../interfaces/IClothes";
import { ITop } from "../interfaces/ITop";

export class Shirt implements ITop {
  getSize(): Sizes {
    return "S";
  }
}
