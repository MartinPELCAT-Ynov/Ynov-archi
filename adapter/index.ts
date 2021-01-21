import { DotEnvAdapter } from "./src/adapters/DotEnvAdapter";
import { EnvAdapter } from "./src/adapters/EnvAdapter";

const envLib = new EnvAdapter(new DotEnvAdapter());

envLib.run();
