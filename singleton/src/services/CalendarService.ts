import { Database } from "../utils/Database";

export default class CalendarService {
  public async getCurentDatabaseDate() {
    const client = Database.getClient();
    try {
      const { rows } = await client.query("SELECT now()");
      return rows[0].now;
    } catch (error) {
      console.log(error);
    }
  }
}
