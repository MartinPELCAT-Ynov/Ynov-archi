// import { DotEnvAdapter } from "./src/adapters/DotEnvAdapter";
import { EnvAdapter } from "./src/adapters/EnvAdapter";
import { EnvVariableAdapter } from "./src/adapters/EnvVariableAdapter";

const envLib = new EnvAdapter(new EnvVariableAdapter());

envLib.run();
