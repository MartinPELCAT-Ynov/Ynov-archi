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
      console.log("Instance Database");
      Database.client = new Client(clientConfig);
      Database.client.connect();
    }
    return Database.client;
  }
}
