import { IEnvLoader } from "../interfaces/IEnvLoader";

export class EnvAdapter {
  private lib: IEnvLoader;
  constructor(lib: IEnvLoader) {
    this.lib = lib;
  }

  run() {
    this.lib.loadConfig();
  }
}
