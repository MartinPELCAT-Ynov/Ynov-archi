import { Database } from "../utils/Database";

export default class CalendarService {
  public async getCurentDatabaseDate() {
    const client = Database.getClient();
    try {
      client.connect();

      const { rows } = await client.query("SELECT now()");
      return rows[0].now;
    } catch (error) {
      console.log(error);
    } finally {
      client.end();
    }
  }
}
