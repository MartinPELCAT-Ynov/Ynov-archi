import { Dress } from "../entities/Dress";
import { Short } from "../entities/Short";
import { IClothes } from "../interfaces/IClothes";
import { AbstractCreator } from "./AbstractCreator";

export class ShortCreator extends AbstractCreator {
  public createClothes(): IClothes {
    return new Short();
  }
}
