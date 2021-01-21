import { IAdapter } from "../interfaces/IAdapter";

export class EnvAdapter {
  private lib: IAdapter;
  constructor(lib: IAdapter) {
    this.lib = lib;
  }

  run() {
    this.lib.loadConfig();
  }
}
