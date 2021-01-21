import chalk from "chalk";
import { ILogger } from "../interface/ILogger";

export class UpperCaseLogger implements ILogger {
  constructor() {}
  log(string: string): void {
    console.log(chalk.green(string.toUpperCase()));
  }
}
