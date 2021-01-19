import CalendarService from "./services/CalendarService";

(async () => {
  const calService = new CalendarService();
  const date = await calService.getCurentDatabaseDate();

  console.log(date);

  const calService2 = new CalendarService();
  const date2 = await calService2.getCurentDatabaseDate();

  console.log(date2);
})();
