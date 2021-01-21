import { IEnvLoader } from "../interfaces/IEnvLoader";
import { DotEnvLib } from "./DotEnvLib";

export class DotEnvAdapter implements IEnvLoader {
  private lib: DotEnvLib;

  constructor() {
    this.lib = new DotEnvLib();
  }

  loadConfig(): void {
    this.lib.config();
  }
}
