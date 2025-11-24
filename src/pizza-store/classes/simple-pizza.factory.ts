import { PizzaTypesEnum } from "../enums/pizza-types.enum";
import { CheesePizza } from "./cheese-pizza";
import { GreekPizza } from "./greek-pizza";
import { PepperoniPizza } from "./pepperoni-pizza";

export class SimplePizzaFactory {
  public createPizza(type: PizzaTypesEnum) {
    console.log("Type: ", type);
    switch (type) {
      case PizzaTypesEnum.GREEK:
        return new GreekPizza();
      case PizzaTypesEnum.PEPPERONI:
        console.log("IN CASE!!!!!!!!!!!!!!!!!!!!!!!!");
        return new PepperoniPizza();
      case PizzaTypesEnum.CHEESE:
        return new CheesePizza();
      default:
        throw new Error("Unknown Pizza");
    }
  }
}
