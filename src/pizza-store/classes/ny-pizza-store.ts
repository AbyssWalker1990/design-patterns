import { PizzaTypesEnum } from "../enums/pizza-types.enum";
import { NYStyleCheesePizza } from "./ny-style-cheese-pizza";
import { NYStyleClamPizza } from "./ny-style-clam-pizza";
import { NYStylePepperoniPizza } from "./ny-style-pepperoni-pizza";
import { NYStyleVeggiePizza } from "./ny-style-veggie-pizza";
import { Pizza } from "./pizza";
import { PizzaStore } from "./pizza-store";

export class NYPizzaStore extends PizzaStore {
  public createPizza(type: PizzaTypesEnum): Pizza {
    switch (type) {
      case PizzaTypesEnum.NY_STYLE_CHEESE:
        return new NYStyleCheesePizza();
      case PizzaTypesEnum.NY_STYLE_CLAM:
        return new NYStyleClamPizza();
      case PizzaTypesEnum.NY_STYLE_PEPPERONI:
        return new NYStylePepperoniPizza();
      case PizzaTypesEnum.NY_STYLE_VEGGIE:
        return new NYStyleVeggiePizza();
      default:
        throw new Error("Unknown Pizza");
    }
  }
}
