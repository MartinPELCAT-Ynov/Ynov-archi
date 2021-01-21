import { ILogger } from "../interface/ILogger";

export class LoggerDecorator implements ILogger {
  private logger: ILogger;

  constructor(logger: ILogger) {
    this.logger = logger;
  }

  log(string: string): void {
    this.logger.log(`${new Date().toLocaleTimeString()} ${string}`);
  }
}
