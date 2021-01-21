import { LoggerDecorator } from "./src/decorator/LoggerDecorator";
import { HtmlLogger } from "./src/loggers/HtmlLogger";
import { UpperCaseLogger } from "./src/loggers/UpperCaseLogger";

const htmlLogger = new HtmlLogger();
const upperLogger = new UpperCaseLogger();
const loggerDecorators = new LoggerDecorator(upperLogger);

htmlLogger.log("Test");
htmlLogger.log("HTML Blue");

upperLogger.log("upper 1");
upperLogger.log("upper 4");

loggerDecorators.log("Logger 1");
loggerDecorators.log("Logger 2");
