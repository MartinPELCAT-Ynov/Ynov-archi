import { Client, ClientConfig } from "pg";

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

  public static getClient(): Client {
    if (!Database.client) {
      Database.client = new Client(clientConfig);
    }
    return Database.client;
  }
}
