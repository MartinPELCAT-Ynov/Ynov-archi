import { EnvVariableLib } from "./EnvVariableLib";

export class EnvVariableAdapter {
  private lib: EnvVariableLib;

  constructor() {
    this.lib = new EnvVariableLib();
  }

  loadConfig(): void {
    this.lib.start();
  }
}
