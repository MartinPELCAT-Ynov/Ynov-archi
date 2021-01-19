import CalendarService from "./services/CalendarService";

(async () => {
  const calService = new CalendarService();
  const date = await calService.getCurentDatabaseDate();

  console.log(date);
})();
