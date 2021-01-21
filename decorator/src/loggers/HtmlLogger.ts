import chalk from "chalk";
import { ILogger } from "../interface/ILogger";

export class HtmlLogger implements ILogger {
  constructor() {}
  log(string: string): void {
    console.log(chalk.blue(`HTML - ${string}`));
  }
}
