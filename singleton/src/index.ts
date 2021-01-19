import { Database } from "./services/Database";

const client = Database.getClient();

client.connect();

client.query("SELECT now()").then(console.log).catch(console.error);
