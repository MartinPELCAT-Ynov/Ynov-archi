import { IEnvLoader } from "../interfaces/IEnvLoader";

export class EnvVariableLib {
  public start(): void {
    require("env-variable")();
  }
}
