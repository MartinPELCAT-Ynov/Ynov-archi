import { IAdapter } from "../interfaces/IAdapter";

export class EnvVariableLib {
  public start(): void {
    require("env-variable")();
  }
}
