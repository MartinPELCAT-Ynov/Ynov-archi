import { PhoneObserver } from "./src/observers/PhoneObserver";
import { NewProductSubject } from "./src/subjects/NewProductSubject";

const subject = new NewProductSubject();
const newPhoneObserver = new PhoneObserver();

subject.attach(newPhoneObserver);

subject.buyProduct(20);
subject.buyProduct(26);
subject.buyProduct(25);
subject.buyProduct(10);
subject.buyProduct(10);
