import { ChocolateBoiler } from "./classes/chocolate-boiler";

const chocolateBoiler = ChocolateBoiler.getInstance();
chocolateBoiler.fill();
chocolateBoiler.boil();
chocolateBoiler.drain();

const status = chocolateBoiler.getStatus();
console.log(
  `Chocolate Boiler Status - Empty: ${status.isEmpty}, Boiled: ${status.isBoiled}`
);
