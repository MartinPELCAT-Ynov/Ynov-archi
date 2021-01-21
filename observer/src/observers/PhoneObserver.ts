import chalk from "chalk";
import { IObserver } from "../interfaces/IObserver";
import { ISubject } from "../interfaces/ISubject";

export class PhoneObserver implements IObserver {
  update(subject: ISubject): void {
    if (subject.getStock() <= 10) {
      console.log(
        chalk.red(`/!\\ Attention stock faible : ${subject.getStock()}`)
      );
    }
  }
}
