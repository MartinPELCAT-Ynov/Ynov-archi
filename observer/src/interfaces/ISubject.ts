import { IObserver } from "./IObserver";
import { IProduct } from "./IProduct";

export interface ISubject extends IProduct {
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
  notify(): void;
}
