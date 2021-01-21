import { IAdapter } from "../interfaces/IAdapter";
import { DotEnvLib } from "./DotEnvLib";

export class DotEnvAdapter implements IAdapter {
  private lib: DotEnvLib;

  constructor() {
    this.lib = new DotEnvLib();
  }

  loadConfig(): void {
    this.lib.config();
  }
}
