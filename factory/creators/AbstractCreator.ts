import { IClothes } from "../interfaces/IClothes";

export abstract class AbstractCreator {
  public abstract createClothes(): IClothes;

  public getSize(): string {
    const clothes = this.createClothes();
    return `Actual size of this is : '${clothes.getSize()}'`;
  }
}
