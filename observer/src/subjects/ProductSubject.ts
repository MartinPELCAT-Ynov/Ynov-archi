import { IObserver } from "../interfaces/IObserver";
import { ISubject } from "../interfaces/ISubject";

export class ProductSubject implements ISubject {
  getName(): string {
    throw new Error("Method not implemented.");
  }
  private observers: IObserver[] = [];

  private stock: number = 100;

  attach(observer: IObserver): void {
    !this.observers.includes(observer) && this.observers.push(observer);
  }

  detach(observer: IObserver): void {
    const index = this.observers.indexOf(observer);
    index > -1 && this.observers.splice(index, 1);
  }

  notify(): void {
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }

  getStock(): number {
    return this.stock;
  }

  buyProduct(unitNumber: number): void {
    if (this.stock - unitNumber >= 0) {
      this.stock -= unitNumber;
      this.notify();
    }
  }
}
