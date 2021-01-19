import { Client, ClientConfig, Pool } from "pg";

const clientConfig: ClientConfig = {
  user: "postgres",
  host: "localhost",
  database: "archi",
  password: "postgres",
  port: 5432,
};

export class Database {
  private constructor() {}

  private static client: Client;
  private static pool: Pool;

  public static getClient(): Client {
    if (!Database.client) {
      console.log("Instance Database");
      Database.client = new Client(clientConfig);
    }
    return Database.client;
  }

  public static getPool(): Pool {
    if (!Database.pool) {
      console.log("Instance Database");
      Database.pool = new Pool(clientConfig);
    }
    return Database.pool;
  }
}
