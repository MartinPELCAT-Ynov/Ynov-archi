import { Dress } from "../entities/Dress";
import { IClothes } from "../interfaces/IClothes";
import { AbstractCreator } from "./AbstractCreator";

export class DressCreator extends AbstractCreator {
  public createClothes(): IClothes {
    return new Dress();
  }
}
