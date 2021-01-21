import { IEnvLoader } from "../interfaces/IEnvLoader";
import { EnvVariableLib } from "./EnvVariableLib";

export class EnvVariableAdapter implements IEnvLoader {
  private lib: EnvVariableLib;

  constructor() {
    this.lib = new EnvVariableLib();
  }

  loadConfig(): void {
    this.lib.start();
  }
}
