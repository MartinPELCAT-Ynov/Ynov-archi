export interface IProduct {
  getStock(): number;
  buyProduct(unitNumber: number): void;
}
