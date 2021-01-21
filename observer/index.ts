import { PhoneObserver } from "./src/observers/PhoneObserver";
import { ProductSubject } from "./src/subjects/ProductSubject";

const subject = new ProductSubject();
const newPhoneObserver = new PhoneObserver();

subject.attach(newPhoneObserver);

//Trigger message when stock <= 10 , start : 100

subject.buyProduct(20); // 80
subject.buyProduct(26); // 54
subject.buyProduct(25); // 29
subject.buyProduct(10); // 19
subject.buyProduct(10); // 9
