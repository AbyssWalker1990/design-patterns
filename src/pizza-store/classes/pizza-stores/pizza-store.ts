import { PizzaTypesEnum } from "../../enums/pizza-types.enum";
import { Pizza } from "../pizzas/pizza";

export abstract class PizzaStore {
  protected pizza?: Pizza;

  public orderPizza(type: PizzaTypesEnum): Pizza {
    const pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  abstract createPizza(type: PizzaTypesEnum): Pizza;
}
