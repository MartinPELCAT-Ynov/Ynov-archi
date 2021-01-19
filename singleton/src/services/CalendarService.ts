import { Database } from "../utils/Database";

export default class CalendarService {
  public async getCurentDatabaseDate() {
    try {
      const client = Database.getClient();

      client.connect();

      const { rows } = await client.query("SELECT now()");
      client.end();
      return rows[0].now;
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
}
