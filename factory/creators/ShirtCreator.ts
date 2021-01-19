import { Shirt } from "../entities/Shirt";
import { IClothes } from "../interfaces/IClothes";
import { AbstractCreator } from "./AbstractCreator";

export class ShirtCreator extends AbstractCreator {
  public createClothes(): IClothes {
    return new Shirt();
  }
}
