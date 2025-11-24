import { PizzaTypesEnum } from "../enums/pizza-types.enum";
import { CaliforniaStyleCheesePizza } from "./california-style-cheese-pizza";
import { CaliforniaStyleClamPizza } from "./california-style-clam-pizza";
import { CaliforniaStylePepperoniPizza } from "./california-style-pepperoni-pizza";
import { CaliforniaStyleVeggiePizza } from "./california-style-veggie-pizza";
import { Pizza } from "./pizza";
import { PizzaStore } from "./pizza-store";

export class CaliforniaPizzaStore extends PizzaStore {
  public createPizza(type: PizzaTypesEnum): Pizza {
    switch (type) {
      case PizzaTypesEnum.CALIFORNIA_STYLE_CHEESE:
        return new CaliforniaStyleCheesePizza();
      case PizzaTypesEnum.CALIFORNIA_STYLE_CLAM:
        return new CaliforniaStyleClamPizza();
      case PizzaTypesEnum.CALIFORNIA_STYLE_PEPPERONI:
        return new CaliforniaStylePepperoniPizza();
      case PizzaTypesEnum.CALIFORNIA_STYLE_VEGGIE:
        return new CaliforniaStyleVeggiePizza();
      default:
        throw new Error("Unknown Pizza");
    }
  }
}
