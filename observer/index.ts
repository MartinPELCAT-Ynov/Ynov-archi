import { PhoneObserver } from "./src/observers/PhoneObserver";
import { ProductSubject } from "./src/subjects/ProductSubject";

// Notification
const subject = new ProductSubject();
const newPhoneObserver = new PhoneObserver();

subject.attach(newPhoneObserver);

//Trigger message when stock <= 10 , start : 100

subject.buyProduct(20); // 80
subject.buyProduct(26); // 54
subject.buyProduct(25); // 29
subject.buyProduct(10); // 19
subject.buyProduct(10); // 9

// Pas de notification
const subject2 = new ProductSubject();
const newPhoneObserver2 = new PhoneObserver();

subject.attach(newPhoneObserver2);

//Trigger message when stock <= 10 , start : 100

subject2.buyProduct(20); // 80
subject2.buyProduct(26); // 54
subject2.buyProduct(25); // 29
subject2.buyProduct(10); // 19
subject2.detach(newPhoneObserver2);
subject2.buyProduct(10); // 9
