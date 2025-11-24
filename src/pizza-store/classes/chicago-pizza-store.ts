import { PizzaTypesEnum } from "../enums/pizza-types.enum";
import { ChicagoStyleCheesePizza } from "./chicago-style-cheese-pizza";
import { ChicagoStyleClamPizza } from "./chicago-style-clam-pizza";
import { ChicagoStylePepperoniPizza } from "./chicago-style-pepperoni-pizza";
import { ChicagoStyleVeggiePizza } from "./chicago-style-veggie-pizza";
import { Pizza } from "./pizza";
import { PizzaStore } from "./pizza-store";

export class ChicagoPizzaStore extends PizzaStore {
  public createPizza(type: PizzaTypesEnum): Pizza {
    switch (type) {
      case PizzaTypesEnum.CHICAGO_STYLE_CHEESE:
        return new ChicagoStyleCheesePizza();
      case PizzaTypesEnum.CHICAGO_STYLE_CLAM:
        return new ChicagoStyleClamPizza();
      case PizzaTypesEnum.CHICAGO_STYLE_PEPPERONI:
        return new ChicagoStylePepperoniPizza();
      case PizzaTypesEnum.CHICAGO_STYLE_VEGGIE:
        return new ChicagoStyleVeggiePizza();
      default:
        throw new Error("Unknown Pizza");
    }
  }
}
